<template>
  <div class="custom-card py-0 px-0">
    <!-- Card Header -->
    <div class="card-header text-center">
      <div class="mb-3">
        <span class="badge bg-light text-primary px-3 py-2 rounded-pill fw-semibold">
          <i class="bi bi-shield-check me-2"></i>ESPACE SÉCURISÉ
        </span>
      </div>
      <h2 class="step-title">
        <i class="bi bi-search"></i> Vérifiez vos <span>choix et ajustez</span> 🚀
      </h2>
      <div class="step-indicator d-flex justify-content-center gap-1">
        <span class="step-bar"></span>
        <span class="step-bar"></span>
        <span class="step-bar active"></span>
        <span class="step-bar"></span>
      </div>
    </div>
    <div class="card-body">
      <form @submit.prevent="submitStep">
        <!-- Family Status -->
        <div class="mb-4">
          <label class="form-label fw-semibold d-block">Situation familiale : <span class="text-danger">*</span></label>
          <div class="row justify-content-center gap-3">
            <div class="col-auto">
              <button
                v-for="status in familyStatuses"
                :key="status"
                type="button"
                :class="['btn rounded-pill px-4 m-1', formData.familyStatus === status ? 'btn-primary' : 'btn-outline-secondary']"
                @click="formData.familyStatus = status"
              >
                {{ status }}
              </button>
            </div>
          </div>
          <small v-if="$v.familyStatus.$error" class="text-danger">Veuillez sélectionner votre situation familiale.</small>
        </div>

        <!-- Spouse Insurance -->
        <div class="mb-4">
          <label class="form-label fw-semibold d-block">Voulez-vous assurer votre conjoint ? <span class="text-danger">*</span></label>
          <div class="d-flex justify-content-center gap-3">
            <button
              type="button"
              :class="['btn rounded-pill px-4', formData.insureSpouse ? 'btn-primary' : 'btn-outline-secondary']"
              @click="formData.insureSpouse = true"
            >
              Oui
            </button>
            <button
              type="button"
              :class="['btn rounded-pill px-4', formData.insureSpouse === false ? 'btn-primary' : 'btn-outline-secondary']"
              @click="formData.insureSpouse = false"
            >
              Non
            </button>
          </div>
          <small v-if="$v.insureSpouse.$error" class="text-danger">Veuillez indiquer si vous souhaitez assurer votre conjoint.</small>
        </div>

        <!-- Spouse Birthdate -->
        <div v-if="formData.insureSpouse" class="mb-4">
          <label for="spouse-birthdate" class="form-label fw-semibold">Si oui, date de naissance du conjoint :</label>
          <input
            type="date"
            id="spouse-birthdate"
            class="form-control rounded-pill shadow-sm"
            v-model="formData.spouseBirthdate"
          />
          <small v-if="$v.spouseBirthdate.$error" class="text-danger">Veuillez entrer la date de naissance de votre conjoint.</small>
        </div>

        <!-- Children to Insure -->
        <div class="mb-4">
          <label class="form-label fw-semibold d-block">Nombre d'enfants à assurer : <span class="text-danger">*</span></label>
          <div class="d-flex justify-content-center gap-3">
            <button
              v-for="n in maxChildren"
              :key="n"
              type="button"
              :class="['btn rounded-pill px-4', formData.childrenCount === n ? 'btn-primary' : 'btn-outline-secondary']"
              @click="formData.childrenCount = n"
            >
              {{ n === 0 ? '🚫 (0)' : n }}
            </button>
          </div>
          <small v-if="$v.childrenCount.$error" class="text-danger">Veuillez indiquer le nombre d'enfants à assurer.</small>
        </div>

        <!-- Phone Number -->
        <div class="mb-4">
          <label for="phone" class="form-label fw-semibold">Téléphone <span class="text-danger">*</span></label>
          <input
            type="tel"
            id="phone"
            class="form-control rounded-pill shadow-sm"
            v-model="formData.phone"
            placeholder="Votre numéro de téléphone"
          />
          <small v-if="$v.phone.$error" class="text-danger">Veuillez entrer un numéro de téléphone valide.</small>
        </div>

        <!-- Navigation Buttons -->
        <div class="d-flex justify-content-between">
          <button
            type="button"
            class="btn btn-outline-secondary rounded-pill px-4"
            @click="prevStep"
          >
            <i class="bi bi-arrow-left"></i> Précédent
          </button>
          <button
            type="submit"
            class="btn btn-primary rounded-pill px-4"
          >
            Suivant <i class="bi bi-arrow-right"></i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, numeric } from "@vuelidate/validators";
import { useRouter } from "vue-router";
import { useFormStore } from "@/stores/useFormStore";

const formStore = useFormStore();
const router = useRouter();

// Form Data
const formData = reactive({
  familyStatus: formStore.formData.step3.familyStatus || "",
  insureSpouse: formStore.formData.step3.insureSpouse || null,
  spouseBirthdate: formStore.formData.step3.spouseBirthdate || "",
  childrenCount: formStore.formData.step3.childrenCount || 0,
  phone: formStore.formData.step3.phone || "",
});

// Constants
const familyStatuses = ["Marié(e)", "Célibataire", "Divorcé(e)", "Veuf/ve"];
const maxChildren = [0, 1, 2, 3];

// Validation Rules
const rules = {
  familyStatus: { required },
  insureSpouse: { required },
  spouseBirthdate: {
    required: (value) => !formData.insureSpouse || value !== "",
  },
  childrenCount: { required, numeric },
  phone: { required },
};

const $v = useVuelidate(rules, formData);

// Submit Logic
async function submitStep() {
  $v.value.$touch();
  if (!$v.value.$invalid) {
    formStore.updateStepData("step3", formData);
    formStore.nextStep();
  }
}

// Navigation
function prevStep() {
  formStore.prevStep(router);
}
</script>

<style scoped>
.custom-card {
  border-radius: 15px;
  padding: 2rem;
  overflow: hidden;
}


.card-header {
  background-color: #fff;
  border-bottom: 0px;
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

button:disabled {
  opacity: 0.6;
  pointer-events: none;
}

button.btn-outline-secondary {
  border-color: #dee2e6;
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

</style>
