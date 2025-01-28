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
        <h4 class="text-center mb-4 text-primary"></h4>
        <form @submit.prevent="submitStep" class="needs-validation" novalidate>
          <!-- Section Template -->
          <template v-for="(section, index) in sections" :key="index">
            <div class="card mb-4 shadow-sm">
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
                    v-for="(option, oIndex) in section.options" 
                    :key="oIndex"
                    class="col-6 col-sm-6 col-lg-3"
                  >
                    <input 
                      type="radio" 
                      :name="section.name" 
                      :id="`${section.name}-${option.value}`" 
                      :value="option.value"
                      v-model="selected[section.name]"
                      class="btn-check"
                      autocomplete="off"
                    >
                    <label 
                      :for="`${section.name}-${option.value}`"
                      class="btn btn-outline-primary w-100 d-flex flex-column py-3 option-card"
                      :class="{ 'active': selected[section.name] === option.value }"
                    >
                      <span class="fw-bold mb-1">{{ option.label }}</span>
                      <div class="text-primary">
                        <template v-for="n in option.level" :key="n">
                          <i class="fas fa-heart"></i>
                        </template>
                      </div>
                      <small class="text-muted mt-1">{{ option.subtext }}</small>
                    </label>
                  </div>
                </div>

                <!-- Error Message -->
                <div 
                  v-if="$v[section.name].$error" 
                  class="alert alert-danger mt-3 mb-0 py-2"
                >
                  <i class="fas fa-exclamation-circle me-2"></i>
                  Veuillez sélectionner une option
                </div>
              </div>
            </div>
          </template>

          <!-- Navigation Buttons -->
          <div class="d-flex justify-content-between mt-5">
            <button 
              type="button" 
              class="btn btn-lg btn-outline-secondary rounded-pill px-4"
              @click="prevStep"
            >
              <i class="fas fa-arrow-left me-2"></i>Précédent
            </button>
            <button 
              type="submit" 
              class="btn btn-lg btn-primary rounded-pill px-4"
            >
              Suivant <i class="fas fa-arrow-right ms-2"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
</template>
  
<script setup>
import { useFormStore } from '@/stores/useFormStore';
import { reactive, computed } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { useRouter } from 'vue-router';

const router = useRouter();
const formStore = useFormStore();

// Define sections configuration
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
    title: 'AIDES AUDITIVES',
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

// Reactive state
const selected = reactive({
  ...Object.fromEntries(sections.map(section => [
    section.name, 
    formStore.formData.step1[section.name] || ""
  ]))
});

// Dynamic validation rules
const rules = computed(() => ({
  ...Object.fromEntries(sections.map(section => [
    section.name,
    { required }
  ]))
}));

const $v = useVuelidate(rules, selected);

async function submitStep() {
  const isValid = await $v.value.$validate();
  if (isValid) {
    formStore.updateStepData('step1', selected);
    formStore.nextStep();
  }
}

function prevStep() {
  formStore.prevStep(router);
}
</script>

<style scoped>
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
    /* display: flex;
    align-content: center;
    justify-content: center;
    padding: 1rem 1rem 0rem 1rem;*/
    background-color: #fff;
    border-bottom:0px; 
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
.option-card {
  transition: all 0.2s ease;
  border: 2px solid #dee2e6;
  cursor: pointer;
}

.option-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.btn-check:checked + .option-card {
  border-color: #0d6efd;
  background-color: #f8f9fa;
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
  color: #3e3e3e;
}
</style>