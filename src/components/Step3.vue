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
          <div class="d-flex justify-content-center gap-3">
            <button
              v-for="status in familyStatuses"
              :key="status"
              type="button"
              :class="['btn rounded-pill px-4', formData.familyStatus === status ? 'btn-primary' : 'btn-outline-secondary']"
              @click="formData.familyStatus = status"
            >
              {{ status }}
            </button>
          </div>
          <small v-if="errors.familyStatus" class="text-danger">{{ errors.familyStatus }}</small>
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
          <small v-if="errors.insureSpouse" class="text-danger">{{ errors.insureSpouse }}</small>
        </div>

        <!-- Spouse Birthdate -->
        <div v-if="formData.insureSpouse" class="mb-4">
          <label class="form-label fw-semibold">Si oui, date de naissance du conjoint :</label>
          <input type="date" class="form-control rounded-pill shadow-sm" v-model="formData.spouseBirthdate" />
          <small v-if="errors.spouseBirthdate" class="text-danger">{{ errors.spouseBirthdate }}</small>
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
              @click="setChildrenCount(n)"
            >
              {{ n === 0 ? '🚫 (0)' : n }}
            </button>
          </div>
          <small v-if="errors.childrenCount" class="text-danger">{{ errors.childrenCount }}</small>
        </div>

        <!-- Children's Birthdates -->
        <div v-if="formData.childrenCount > 0" class="mb-4">
          <label class="form-label fw-semibold d-block">Date de naissance des enfants :</label>
          <div v-for="(child, index) in formData.childrenBirthdates" :key="index">
            <input
              type="date"
              class="form-control rounded-pill shadow-sm mt-2"
              v-model="formData.childrenBirthdates[index]"
            />
            <small v-if="errors.childrenBirthdates && errors.childrenBirthdates[index]" class="text-danger">
              {{ errors.childrenBirthdates[index] }}
            </small>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="d-flex justify-content-between">
          <button type="button" class="btn btn-outline-secondary rounded-pill px-4" @click="prevStep">
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
import { reactive, watch } from "vue";
import { useRouter } from "vue-router";
import { useFormStore } from "@/stores/useFormStore";

const formStore = useFormStore();
const router = useRouter();

const formData = reactive({
  familyStatus: formStore.formData.step3.familyStatus || "",
  insureSpouse: formStore.formData.step3.insureSpouse || false,
  spouseBirthdate: formStore.formData.step3.spouseBirthdate || "",
  childrenCount: formStore.formData.step3.childrenCount || 0,
  childrenBirthdates: formStore.formData.step3.childrenBirthdates || [],
});

const errors = reactive({
  familyStatus: "",
  insureSpouse: "",
  spouseBirthdate: "",
  childrenCount: "",
  childrenBirthdates: [],
});

const familyStatuses = ["Marié(e)", "Célibataire", "Divorcé(e)", "Veuf/ve"];
const maxChildren = [0, 1, 2, 3];

function setChildrenCount(count) {
  formData.childrenCount = count;
  formData.childrenBirthdates = Array.from({ length: count }, (_, i) => formData.childrenBirthdates[i] || "");
}

watch(() => formData.childrenCount, (newCount) => {
  formData.childrenBirthdates = Array.from({ length: newCount }, (_, i) => formData.childrenBirthdates[i] || "");
});

function validateForm() {
  let isValid = true;

  // Reset errors
  errors.familyStatus = "";
  errors.insureSpouse = "";
  errors.spouseBirthdate = "";
  errors.childrenCount = "";
  errors.childrenBirthdates = [];

  // Validate Family Status
  if (!formData.familyStatus) {
    errors.familyStatus = "Veuillez sélectionner votre situation familiale.";
    isValid = false;
  }

  // Validate Spouse Insurance
  if (formData.insureSpouse === null || formData.insureSpouse === undefined) {
    errors.insureSpouse = "Veuillez indiquer si vous souhaitez assurer votre conjoint.";
    isValid = false;
  }

  // Validate Spouse Birthdate
  if (formData.insureSpouse && !formData.spouseBirthdate) {
    errors.spouseBirthdate = "Veuillez entrer la date de naissance du conjoint.";
    isValid = false;
  } else if (formData.insureSpouse && !isOlderThan18(formData.spouseBirthdate)) {
    errors.spouseBirthdate = "Le conjoint doit avoir plus de 18 ans.";
    isValid = false;
  }

  // Validate Children Count
  if (formData.childrenCount === null || formData.childrenCount === undefined) {
    errors.childrenCount = "Veuillez indiquer le nombre d'enfants à assurer.";
    isValid = false;
  }

  // Validate Children Birthdates
  if (formData.childrenCount > 0) {
    formData.childrenBirthdates.forEach((birthdate, index) => {
      if (!birthdate) {
        errors.childrenBirthdates[index] = "Veuillez entrer la date de naissance.";
        isValid = false;
      } else if (!isUnder25(birthdate)) {
        errors.childrenBirthdates[index] = "L'enfant doit avoir moins de 25 ans.";
        isValid = false;
      }
    });
  }

  return isValid;
}

function isOlderThan18(value) {
  if (!value) return false;
  const birthDate = new Date(value);
  const today = new Date();
  return today.getFullYear() - birthDate.getFullYear() >= 18;
}

function isUnder25(value) {
  if (!value) return false;
  const birthDate = new Date(value);
  const today = new Date();
  return today.getFullYear() - birthDate.getFullYear() < 25 && today.getFullYear() - birthDate.getFullYear() >= 0;
}

async function submitStep() {
  if (validateForm()) {
    formStore.updateStepData("step3", formData);
    formStore.nextStep();
  }
}

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
