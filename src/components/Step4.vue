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
        <i class="bi bi-check-circle-fill"></i> Finalisez et <span>voir mon offre exclusive</span> 🎉
      </h2>
      <div class="step-indicator d-flex justify-content-center gap-1">
        <span class="step-bar"></span>
        <span class="step-bar"></span>
        <span class="step-bar"></span>
        <span class="step-bar active"></span>
      </div>
    </div>

    <!-- Card Body -->
    <div class="card-body">
      <form @submit.prevent="submitStep">
        <!-- Form Inputs -->
        <div class="row mb-4">
          <div class="col-md-6">
            <label for="last-name" class="form-label fw-semibold">Nom :</label>
            <input
              type="text"
              id="last-name"
              class="form-control rounded-pill shadow-sm"
              v-model="formData.lastName"
              placeholder="Votre nom"
            />
            <small v-if="$v.lastName.$error" class="text-danger">Veuillez entrer votre nom.</small>
          </div>
          <div class="col-md-6">
            <label for="first-name" class="form-label fw-semibold">Prénom :</label>
            <input
              type="text"
              id="first-name"
              class="form-control rounded-pill shadow-sm"
              v-model="formData.firstName"
              placeholder="Votre prénom"
            />
            <small v-if="$v.firstName.$error" class="text-danger">Veuillez entrer votre prénom.</small>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-md-6">
            <label for="email" class="form-label fw-semibold">E-mail :</label>
            <input
              type="email"
              id="email"
              class="form-control rounded-pill shadow-sm"
              v-model="formData.email"
              placeholder="Votre e-mail"
            />
            <small v-if="$v.email.$error" class="text-danger">Veuillez entrer un e-mail valide.</small>
          </div>
          <div class="col-md-6">
            <label for="postal-code" class="form-label fw-semibold">Code postal :</label>
            <input
              type="text"
              id="postal-code"
              class="form-control rounded-pill shadow-sm"
              v-model="formData.postalCode"
              placeholder="Votre code postal"
            />
            <small v-if="$v.postalCode.$error" class="text-danger">Veuillez entrer un code postal valide.</small>
          </div>
        </div>

        <!-- GDPR Consent -->
        <div class="mb-4">
          <div class="form-check">
            <input
              type="checkbox"
              id="gdprConsent"
              class="form-check-input rounded-circle"
              v-model="formData.gdprConsent"
            />
            <label for="gdprConsent" class="form-check-label text-muted">
              En validant ma demande, j'accepte de transmettre mes informations afin de recevoir gratuitement un devis ou d’être contacté par téléphone ou par email par un professionnel. Mes données sont protégées par la réglementation européenne RGPD.
            </label>
          </div>
          <small v-if="$v.gdprConsent.$error" class="text-danger">Veuillez accepter les conditions.</small>
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
          <button v-if="loader" type="button" class="btn btn-primary rounded-pill px-4">
                    <vue-spinner size="30" color="white" />
                </button>
          <button v-else 
            type="submit"
            class="btn btn-primary rounded-pill px-4 ms-4"
          >
          Voir mon offre exclusive <i class="bi bi-arrow-right"></i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { useRouter } from "vue-router";
import { useFormStore } from "@/stores/useFormStore";
import {VueSpinner} from 'vue3-spinners';
import axios from 'axios';

const formStore = useFormStore();
const router = useRouter();
const loader= ref(false);
const data = formStore.getFormData;

// Form Data
const formData = reactive({
  lastName: formStore.formData.step4.lastName || "",
  firstName: formStore.formData.step4.firstName || "",
  email: formStore.formData.step4.email || "",
  postalCode: formStore.formData.step4.postalCode || "",
  gdprConsent: formStore.formData.step4.gdprConsent || "",
});

// Validation Rules
const rules = {
  lastName: { required },
  firstName: { required },
  email: { required, email },
  postalCode: { required, minLength: minLength(5) },
  gdprConsent: { required },
};

const $v = useVuelidate(rules, formData);

// Submit Logic
async function submitStep() {
  $v.value.$touch();
  if (!$v.value.$invalid) {
    formStore.updateStepData("step4", formData);
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

#gdprConsent{
  padding: 0px;
}
.text-muted {
  text-align: justify;
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
