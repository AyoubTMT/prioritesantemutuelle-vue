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
        <form @submit.prevent="submitStep">
          <!-- Section: Soins courants -->
          <div class="mb-4">
            <label for="soins_generaux_sante" class="form-label fw-bold">Soins courants :<em class="text-danger">*</em>
              <i class="ms-1 fa fa-info-circle" title="médecine générale, pharmacie, examens, radios, etc."></i>
            </label>
            <div class="btn-group-custom">
              <button
                type="button"
                class="btn-custom"
                :class="{ active: selected.soins === 'Minimum' }"
                @click="selected.soins = 'Minimum'"
              >
                Minimum<br>♥
              </button>
              <button
                type="button"
                class="btn-custom"
                :class="{ active: selected.soins === 'Moyen' }"
                @click="selected.soins = 'Moyen'"
              >
                Moyen<br>♥♥
              </button>
              <button
                type="button"
                class="btn-custom"
                :class="{ active: selected.soins === 'Fort' }"
                @click="selected.soins = 'Fort'"
              >
                Fort<br>♥♥♥
              </button>
              <button
                type="button"
                class="btn-custom"
                :class="{ active: selected.soins === 'Avancé' }"
                @click="selected.soins = 'Avancé'"
              >
                Avancé<br>♥♥♥♥
              </button>
            </div>
              <div v-if="$v.soins.$error" class="text-danger text-center">
                  Veuillez sélectionner une option.
              </div>
          </div>
          <!-- Section: Optique -->
          <div class="mb-4">
            <label class="form-label fw-bold">Optique :<em class="text-danger">*</em>
              <i class="ms-1 fa fa-info-circle" title="lentilles, lunettes, chirurgie réfractive, etc."></i></label>
            <div class="btn-group-custom">
              <button
                type="button"
                class="btn-custom"
                :class="{ active: selected.optique === 'Minimum' }"
                @click="selected.optique = 'Minimum'"
              >
                Minimum<br>♥
              </button>
              <button
                type="button"
                class="btn-custom"
                :class="{ active: selected.optique === 'Moyen' }"
                @click="selected.optique = 'Moyen'"
              >
                Moyen<br>♥♥
              </button>
              <button
                type="button"
                class="btn-custom"
                :class="{ active: selected.optique === 'Fort' }"
                @click="selected.optique = 'Fort'"
              >
                Fort<br>♥♥♥
              </button>
              <button
                type="button"
                class="btn-custom"
                :class="{ active: selected.optique === 'Avancé' }"
                @click="selected.optique = 'Avancé'"
              >
                Avancé<br>♥♥♥♥
              </button>
            </div>
              <div v-if="$v.optique.$error" class="text-danger text-center">
                  Veuillez sélectionner une option.
              </div>
          </div>

          <!-- Section: Dentaire -->
          <div class="mb-4">
            <label class="form-label fw-bold">Dentaire :<em class="text-danger">*</em>
              <i class="ms-1 fa fa-info-circle" title="dentiste, prothèses, soins, etc."></i></label>
            <div class="btn-group-custom">
              <button
                type="button"
                class="btn-custom"
                :class="{ active: selected.dentaire === 'Minimum' }"
                @click="selected.dentaire = 'Minimum'"
              >
                Minimum<br>♥
              </button>
              <button
                type="button"
                class="btn-custom"
                :class="{ active: selected.dentaire === 'Moyen' }"
                @click="selected.dentaire = 'Moyen'"
              >
                Moyen<br>♥♥
              </button>
              <button
                type="button"
                class="btn-custom"
                :class="{ active: selected.dentaire === 'Fort' }"
                @click="selected.dentaire = 'Fort'"
              >
                Fort<br>♥♥♥
              </button>
              <button
                type="button"
                class="btn-custom"
                :class="{ active: selected.dentaire === 'Avancé' }"
                @click="selected.dentaire = 'Avancé'"
              >
                Avancé<br>♥♥♥♥
              </button>
            </div>
              <div v-if="$v.dentaire.$error" class="text-danger text-center">
                  Veuillez sélectionner une option.
              </div>
          </div>

          <!-- Section: Hospitalisation -->
          <div class="mb-4">
            <label class="form-label fw-bold">Hospitalisation :<em class="text-danger">*</em>
              <i class="ms-1 fa fa-info-circle" title="frais de séjour, frais de transport, chirurgie, etc."></i></label>
            <div class="btn-group-custom">
              <button
                type="button"
                class="btn-custom"
                :class="{ active: selected.hospitalisation === 'Minimum' }"
                @click="selected.hospitalisation = 'Minimum'"
              >
                Minimum<br>♥
              </button>
              <button
                type="button"
                class="btn-custom"
                :class="{ active: selected.hospitalisation === 'Moyen' }"
                @click="selected.hospitalisation = 'Moyen'"
              >
                Moyen<br>♥♥
              </button>
              <button
                type="button"
                class="btn-custom"
                :class="{ active: selected.hospitalisation === 'Fort' }"
                @click="selected.hospitalisation = 'Fort'"
              >
                Fort<br>♥♥♥
              </button>
              <button
                type="button"
                class="btn-custom"
                :class="{ active: selected.hospitalisation === 'Avancé' }"
                @click="selected.hospitalisation = 'Avancé'"
              >
                Avancé<br>♥♥♥♥
              </button>
            </div>
              <div v-if="$v.hospitalisation.$error" class="text-danger text-center">
                  Veuillez sélectionner une option.
              </div>
          </div>

          <!-- Section: AIDES AUDITIVES -->
          <div class="mb-4">
            <label class="form-label fw-bold">AIDES AUDITIVES :<em class="text-danger">*</em>
              <i class="ms-1 fa fa-info-circle" title="équipement"></i></label>
            <div class="btn-group-custom">
              <button
                type="button"
                class="btn-custom"
                :class="{ active: selected.aides_auditives === 'Minimum' }"
                @click="selected.aides_auditives = 'Minimum'"
              >
                Minimum<br>♥
              </button>
              <button
                type="button"
                class="btn-custom"
                :class="{ active: selected.aides_auditives === 'Moyen' }"
                @click="selected.aides_auditives = 'Moyen'"
              >
                Moyen<br>♥♥
              </button>
              <button
                type="button"
                class="btn-custom"
                :class="{ active: selected.aides_auditives === 'Fort' }"
                @click="selected.aides_auditives = 'Fort'"
              >
                Fort<br>♥♥♥
              </button>
              <button
                type="button"
                class="btn-custom"
                :class="{ active: selected.aides_auditives === 'Avancé' }"
                @click="selected.aides_auditives = 'Avancé'"
              >
                Avancé<br>♥♥♥♥
              </button>
            </div>
              <div v-if="$v.aides_auditives.$error" class="text-danger text-center">
                  Veuillez sélectionner une option.
              </div>
          </div>

          <!-- Section: Médecines douces -->
          <div class="mb-4">
            <label class="form-label fw-bold">Médecines douces :<em class="text-danger">*</em>
              <i class="ms-1 fa fa-info-circle" title="ostéopathe, chiropracteur, acupuncteur …"></i></label>
            <div class="btn-group-custom">
              <button
                type="button"
                class="btn-custom"
                :class="{ active: selected.medecines_douces === 'Minimum' }"
                @click="selected.medecines_douces = 'Minimum'"
              >
                Minimum<br>♥
              </button>
              <button
                type="button"
                class="btn-custom"
                :class="{ active: selected.medecines_douces === 'Moyen' }"
                @click="selected.medecines_douces = 'Moyen'"
              >
                Moyen<br>♥♥
              </button>
              <button
                type="button"
                class="btn-custom"
                :class="{ active: selected.medecines_douces === 'Fort' }"
                @click="selected.medecines_douces = 'Fort'"
              >
                Fort<br>♥♥♥
              </button>
              <button
                type="button"
                class="btn-custom"
                :class="{ active: selected.medecines_douces === 'Avancé' }"
                @click="selected.medecines_douces = 'Avancé'"
              >
                Avancé<br>♥♥♥♥
              </button>
            </div>
              <div v-if="$v.medecines_douces.$error" class="text-danger text-center">
                  Veuillez sélectionner une option.
              </div>
          </div>

          <!-- Navigation Buttons -->
          <div class="d-flex justify-content-between">
            <button type="button" class="btn btn-outline-secondary rounded-pill px-4"  @click="prevStep">
              <i class="bi bi-arrow-left"></i> Précédent
            </button>
            <button type="submit" class="btn btn-primary rounded-pill px-4">
              Suivant <i class="bi bi-arrow-right"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
</template>
  
<script setup>
    import { useFormStore } from '@/stores/useFormStore';
    import { reactive, watch } from 'vue';
    import useVuelidate from '@vuelidate/core';
    import { required } from '@vuelidate/validators';
    import { useRouter } from 'vue-router';
    const router = useRouter();
    
    const formStore = useFormStore();
    
    const selected = reactive({
        soins: formStore.formData.step1.soins || "",
        optique: formStore.formData.step1.optique || "",
        dentaire: formStore.formData.step1.dentaire || "",
        hospitalisation: formStore.formData.step1.hospitalisation || "",
        aides_auditives: formStore.formData.step1.aides_auditives || "",
        medecines_douces: formStore.formData.step1.medecines_douces || "",
    
    });
    
    const rules = {
        soins: { required },
        optique: { required },
        dentaire: { required },
        hospitalisation: { required },
        aides_auditives: { required },
        medecines_douces: { required },
    };
    
    const $v = useVuelidate(rules, selected);

    watch(selected, (newValues) => {
        Object.assign(selected, newValues);
    });

    async function submitStep() {
        $v.value.$touch();
        if (!$v.value.$invalid) {
            console.log('Form submitted successfully!');
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

  /* Custom Card Design */
  .custom-card {
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
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
  
  /* Custom Button Group */
  .btn-group-custom {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    flex-wrap: wrap; /* Pour les petits écrans */
  }
  
  .btn-custom {
    flex: 1;
    background-color: #f8f9fa;
    border: 1px solid #ced4da;
    color: #495057;
    font-weight: bold;
    padding-top: 3px;
    text-align: center;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border-radius: var(--bs-border-radius-pill) !important;
  }
  
  .btn-custom:hover {
    background-color: #007bff;
    color: white;
    transform: scale(1.05);
  }
  
  .btn-custom.active {
    background-color: #007bff;
    color: white;
    box-shadow: 0 3px 8px rgba(0, 123, 255, 0.3);
  }
  
  /* Typography */
  h4 {
    font-weight: 700;
  }
  
  label {
    font-size: 1rem;
  }
  
  button:focus {
    outline: none;
    box-shadow: none;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .custom-card {
      padding: 1.5rem;
    }
  
    .btn-custom {
      padding: 8px; /* Réduction des marges pour petits écrans */
      font-size: 0.9rem;
    }
  }
  
  @media (max-width: 576px) {
    h4 {
      font-size: 1.2rem; /* Taille réduite pour le titre */
    }
  
    .btn-custom {
      font-size: 0.8rem; /* Taille des boutons réduite */
    }
  }
  </style>