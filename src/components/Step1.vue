<template>
  <div class="custom-card py-0 px-0">
    <div class="card-header text-center">
      <div class="mb-3">
        <span class="badge bg-light text-primary px-3 py-2 rounded-pill fw-semibold">
          <i class="bi bi-shield-check me-2"></i>ESPACE SÉCURISÉ
        </span>
      </div>
      <h2 class="step-title">
        <i class="bi bi-lightbulb"></i> Définissez vos <span>besoins personnalisés</span> 💙
      </h2>
      <div class="step-indicator d-flex justify-content-center gap-1">
        <span class="step-bar active"></span>
        <span class="step-bar"></span>
        <span class="step-bar"></span>
        <span class="step-bar"></span>
      </div>
    </div>
    <div class="card-body">
      <h4 class="text-center text-primary"></h4>
      <form @submit.prevent="submitStep">
        <!-- Dynamic Sections -->
        <div v-for="section in sections" :key="section.name" class="card">
          <div class="card-body">
            <!-- Section Header -->
            <div class="d-flex align-items-center mb-3">
              <h5 class="card-title mb-0 me-2">
                {{ section.title }}:
                <sup class="text-danger">*</sup>
              </h5>
              <i
                class="fas fa-info-circle text-muted"
                data-bs-toggle="tooltip"
                :title="section.tooltip"
              ></i>
            </div>

            <!-- Options Grid -->
            <div class="row g-3">
              <div
                v-for="option in section.options"
                :key="option.value"
                class="col-6 col-md-3"
              >
                <input
                  type="radio"
                  :id="`${section.name}-${option.value}`"
                  :value="option.value"
                  v-model="selected[section.name]"
                  class="btn-check"
                  :disabled="!isOptionAllowed(section.name, option.value)"
                />
                <label
                  :for="`${section.name}-${option.value}`"
                  class="btn btn-outline-primary w-100 d-flex flex-column py-2 btn-option"
                  :class="{
                    active: selected[section.name] === option.value,
                    'disabled-option': !isOptionAllowed(section.name, option.value),
                  }"
                >
                  <span class="">{{ option.label }}</span>
                  <div class="text-primary">
                    <i v-for="n in option.level" :key="n" class="fas fa-heart"></i>
                  </div>
                  <small class="">{{ option.subtext }}</small>
                </label>
              </div>
            </div>

            <!-- Validation Error -->
            <div v-if="$v[section.name].$error" class="alert alert-danger mt-3 mb-0 py-2">
              Veuillez sélectionner une option valide.
            </div>
          </div>
        </div>

        <!-- Renfort Section -->
        <div class="card mb-4">
          <div class="card-body">
            <div class="d-flex align-items-center gap-3 mb-3">
              <label class="form-label mb-0">
                Je choisis le renfort :<em class="text-danger">*</em>
              </label>
              <a href="#" @click.prevent="showPdfModal" class="text-decoration-none">
                <i class="fas fa-file-pdf fs-5 text-danger"></i>
              </a>
            </div>

            <!-- Renfort Options -->
            <div class="radio-group">
              <div class="radio-option">
                <input
                  type="radio"
                  id="renfort-oui"
                  value="oui"
                  v-model="selected.renfort"
                  class="radio-input"
                />
                <label for="renfort-oui" class="radio-label">
                  <span class="radio-text">Oui</span>
                </label>
              </div>

              <div class="radio-option">
                <input
                  type="radio"
                  id="renfort-non"
                  value="non"
                  v-model="selected.renfort"
                  class="radio-input"
                />
                <label for="renfort-non" class="radio-label">
                  <span class="radio-text">Non</span>
                </label>
              </div>
            </div>

            <!-- Validation Error -->
            <div v-if="$v.renfort.$error" class="text-danger mt-2">
              Veuillez sélectionner une option.
            </div>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="d-flex justify-content-between mt-5">
          <button
            type="button"
            class="btn btn-lg btn-outline-secondary rounded-pill px-4"
            @click="prevStep"
          >
            <i class="fas fa-arrow-left me-2"></i>Précédent
          </button>
          <button type="submit" class="btn btn-lg btn-primary rounded-pill px-4">
            Suivant <i class="fas fa-arrow-right ms-2"></i>
          </button>
        </div>
      </form>
    </div>
  </div>

  <!-- PDF Modal -->
  <div class="modal fade" id="pdfModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Document de renfort</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <iframe :src="pdfUrl" style="width: 100%; height: 80vh" frameborder="0"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFormStore } from '@/stores/useFormStore';
import { reactive, computed, ref, watch, onMounted } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { useRouter } from 'vue-router';
import { Modal } from 'bootstrap';

const router = useRouter();
const formStore = useFormStore();

// PDF Configuration
const pdfUrl = ref('/COM-SANTE-renfort.pdf');
let pdfModal = null;

// Helper Functions
const getLevel = (value) => {
  if (!value) return 0;
  const level = parseInt(value.replace(/\D/g, ''), 10);
  return isNaN(level) ? 0 : level;
};

// Get allowed levels based on the base level (first selected option)
const getAllowedLevels = (baseLevel) => {
  if (baseLevel === 1) return [1, 2]; // Minimum: Allow Minimum and Moyen
  if (baseLevel === 2) return [1, 2, 3]; // Moyen: Allow Minimum, Moyen, and Fort
  if (baseLevel === 3) return [2, 3, 4]; // Fort: Allow Moyen, Fort, and Avancé
  if (baseLevel === 4) return [2, 3, 4]; // Avancé: Allow Moyen, Fort, and Avancé
  return [1, 2, 3, 4]; // Default: Allow all levels
};

// Sections Configuration
const sections = reactive([
  {
    title: 'Soins courants',
    name: 'soins',
    tooltip: 'médecine générale, pharmacie, examens, radios, etc.',
    options: [
      { value: 'S1', label: 'Minimum', level: 1, subtext: 'Couverture basique' },
      { value: 'S2', label: 'Moyen', level: 2, subtext: 'Protection standard' },
      { value: 'S3', label: 'Fort', level: 3, subtext: 'Couverture étendue' },
      { value: 'S4', label: 'Avancé', level: 4, subtext: 'Protection maximale' }
    ]
  },
  {
    title: 'Optique',
    name: 'optique',
    tooltip: 'lentilles, lunettes, chirurgie réfractive, etc.',
    options: [
      { value: 'O1', label: 'Minimum', level: 1, subtext: 'Couverture basique' },
      { value: 'O2', label: 'Moyen', level: 2, subtext: 'Protection standard' },
      { value: 'O3', label: 'Fort', level: 3, subtext: 'Couverture étendue' },
      { value: 'O4', label: 'Avancé', level: 4, subtext: 'Protection maximale' }
    ]
  },
  {
    title: 'Dentaire',
    name: 'dentaire',
    tooltip: 'dentiste, prothèses, soins, etc.',
    options: [
      { value: 'D1', label: 'Minimum', level: 1, subtext: 'Couverture basique' },
      { value: 'D2', label: 'Moyen', level: 2, subtext: 'Protection standard' },
      { value: 'D3', label: 'Fort', level: 3, subtext: 'Couverture étendue' },
      { value: 'D4', label: 'Avancé', level: 4, subtext: 'Protection maximale' }
    ]
  },
  {
    title: 'Hospitalisation',
    name: 'hospitalisation',
    tooltip: 'frais de séjour, frais de transport, chirurgie, etc.',
    options: [
      { value: 'H1', label: 'Minimum', level: 1, subtext: 'Couverture basique' },
      { value: 'H2', label: 'Moyen', level: 2, subtext: 'Protection standard' },
      { value: 'H3', label: 'Fort', level: 3, subtext: 'Couverture étendue' },
      { value: 'H4', label: 'Avancé', level: 4, subtext: 'Protection maximale' }
    ]
  },
  {
    title: 'Aides Auditives',
    name: 'aides_auditives',
    tooltip: 'équipement',
    options: [
      { value: 'A1', label: 'Minimum', level: 1, subtext: 'Couverture basique' },
      { value: 'A2', label: 'Moyen', level: 2, subtext: 'Protection standard' },
      { value: 'A3', label: 'Fort', level: 3, subtext: 'Couverture étendue' },
      { value: 'A4', label: 'Avancé', level: 4, subtext: 'Protection maximale' }
    ]
  },
  {
    title: 'Médecines douces',
    name: 'medecines_douces',
    tooltip: 'ostéopathe, chiropracteur, acupuncteur …',
    options: [
      { value: 'G1', label: 'Minimum', level: 1, subtext: 'Couverture basique' },
      { value: 'G2', label: 'Moyen', level: 2, subtext: 'Protection standard' },
      { value: 'G3', label: 'Fort', level: 3, subtext: 'Couverture étendue' },
      { value: 'G4', label: 'Avancé', level: 4, subtext: 'Protection maximale' }
    ]
  }
]);

// Reactive State
const selected = reactive({
  ...Object.fromEntries(sections.map((section) => [section.name, formStore.formData.step1[section.name] || ''])),
  renfort: formStore.formData.step1.renfort || '',
});

// Base Level Computation (first selected option)
const baseLevel = computed(() => {
  let level = 0;
  for (const section of sections) {
    const selectedLevel = getLevel(selected[section.name]);
    if (selectedLevel > 0) {
      level = selectedLevel;
      break; // Use the first selected level as the base
    }
  }
  return level;
});

// Check if an option is allowed
function isOptionAllowed(_sectionName, optionValue) {
  const allowedLevels = getAllowedLevels(baseLevel.value);
  const optionLevel = getLevel(optionValue);
  return allowedLevels.includes(optionLevel);
}

onMounted(() => {
  pdfModal = new Modal(document.getElementById('pdfModal'));
});

// Watch for changes to reset invalid selections
watch(selected, (newValues) => {
  const allowedLevels = getAllowedLevels(baseLevel.value);
  sections.forEach((section) => {
    const value = newValues[section.name];
    if (value && !allowedLevels.includes(getLevel(value))) {
      selected[section.name] = ''; // Reset invalid selections
    }
  });
}, { deep: true });

// Validation Rules
const rules = computed(() => ({
  ...Object.fromEntries(
    sections.map((section) => [
      section.name,
      {
        required,
        allowedLevel: (value) => {
          const allowedLevels = getAllowedLevels(baseLevel.value);
          return allowedLevels.includes(getLevel(value));
        },
      },
    ])
  ),
  renfort: { required },
}));

const $v = useVuelidate(rules, selected);


const getStep1CustomData = () => {
  const customData = {};
  sections.forEach((section) => {
    const selectedOption = section.options.find(
      (opt) => opt.value === selected[section.name]
    );
    customData[section.name] = selectedOption?.label || '';
  });
  customData.renfort = selected.renfort ? selected.renfort.charAt(0).toUpperCase() + selected.renfort.slice(1) : '';
  return customData;
};

// Submit Function
async function submitStep() {
  const isValid = await $v.value.$validate();
  if (isValid) {
    const stepData = {
      ...selected,
      custom: getStep1CustomData()
    };
    formStore.updateStepData('step1', stepData);
    formStore.nextStep();
  }
}

// Previous Step Function
function prevStep() {
  formStore.prevStep(router);
}

// PDF Modal Function
function showPdfModal() {
  if (!pdfModal) {
    pdfModal = new Modal(document.getElementById('pdfModal'));
  }
  pdfModal.show();
}
</script>

<style scoped>
.radio-group {
  display: flex;
  gap: 1rem;
}

.radio-option {
  position: relative;
}

.radio-input {
  position: absolute;
  opacity: 0;
}

.radio-label {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 2rem;
  border: 2px solid #dee2e6;
  border-radius: 0.5rem;
  background-color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 120px;
}

.radio-label:hover {
  border-color: #0d6efd;
  background-color: #f8f9fa;
}

.radio-input:checked + .radio-label {
  background-color: #0d6efd;
  border-color: #0d6efd;
  color: white;
}

.btn-outline-primary.active {
  background-color: #0d6efd;
  color: white;
  border-color: #0d6efd;
}
.fa-heart {
  color: #000;
}
.btn-outline-primary:hover .fa-heart {
  color: #0d6efd !important;
  content: "\f004";
  font-weight: 900;
}
.btn-outline-primary.active  .fa-heart::before {
  content: "\f004";
  font-weight: 900;
  color: #0d6efd !important;
}
.btn-outline-primary  {
  border: 2px solid #dee2e6;
  color: #000;
}
/* Disabled Option Style */
.disabled-option {
  opacity: 0.5;
  pointer-events: none;
  background-color: #f8f9fa;
  border-color: #e9ecef;
  color: #6c757d;
}
/* Step Titles Styling */
h2.step-title {
    font-size: 1.75rem;
    font-weight: bold;
    text-align: center;
    color: #007bff; /* Primary blue for trust */
    margin-bottom: 1rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1); /* Subtle text shadow */
  }

  h2.step-title span {
    color: #495057; /* Neutral dark for contrast */
    font-size: 1.5rem;
  }

  h2.step-title i {
    color: #f8c102; /* Accent color for icons */
    margin-right: 8px;
  }

  /* Responsive Adjustments */
  @media (max-width: 768px) {
    h2.step-title {
      font-size: 1.5rem;
    }
    h2.step-title span {
      font-size: 1.25rem;
    }
  }
  
  .card-header {
    background-color: #fff;
    border-bottom: 0;
  }

  .step-indicator .step-bar {
    width: 40px;
    height: 4px;
    background-color: #dee2e6;
    border-radius: 2px;
  }

  .step-indicator .step-bar.active {
    background-color: #007bff;
  }

  .card {
    border: none; /* Remove border */
    box-shadow: none; /* Remove shadow */
  }

  .card-title {
    font-size: 1.1rem;
    color: #2c3e50;
  }

  .alert-danger {
    font-size: 0.9rem;
  }
  #formulaire .btn-check:checked + .btn, #formulaire .btn.active{
    background-color: #b0e2fd !important;
    border-color: #0d6efd !important;
    color: #0d6efd;
    font-weight: bold;
  }

  .fa-file-pdf {
    cursor: pointer;
    transition: transform 0.2s ease;
  }

  .fa-file-pdf:hover {
    transform: scale(1.1);
    color: #dc3545 !important;
  }
</style>