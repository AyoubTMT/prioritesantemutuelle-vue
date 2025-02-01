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
            <label for="last-name" class="form-label fw-semibold d-flex align-items-center">Nom :<span class="text-danger">*</span></label>
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
            <label for="first-name" class="form-label fw-semibold d-flex align-items-center">Prénom :<span class="text-danger">*</span></label>
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
            <label for="email" class="form-label fw-semibold d-flex align-items-center">E-mail :<span class="text-danger">*</span></label>
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
            <label for="telephone" class="form-label fw-semibold d-flex align-items-center">Téléphone :<span class="text-danger">*</span></label>
            <input
              type="tel"
              id="telephone"
              class="form-control rounded-pill shadow-sm"
              v-model="formData.telephone"
              placeholder="Votre numéro de téléphone"
            />
            <small v-if="$v.telephone.$error" class="text-danger">Veuillez entrer un numéro de téléphone valide.</small>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-md-12 col-12">
            <label for="adresse" class="form-label fw-semibold d-flex align-items-center">Adresse :<span class="text-danger">*</span></label>
            <input
              type="text"
              id="adresse"
              class="form-control rounded-pill shadow-sm"
              v-model="formData.adresse"
              placeholder="Votre adresse"
            />
            <small v-if="$v.adresse.$error" class="text-danger">Veuillez entrer votre adresse.</small>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-md-6">
            <label for="postal-code" class="form-label fw-semibold d-flex align-items-center">Code postal :<span class="text-danger">*</span></label>
            <input
              type="text"
              id="postal-code"
              class="form-control rounded-pill shadow-sm"
              v-model="formData.postalCode"
              placeholder="Votre code postal"
            />
            <small v-if="$v.postalCode.$error" class="text-danger">Veuillez entrer un code postal valide.</small>
          </div>
          <div class="col-md-6">
            <label for="ville" class="form-label fw-semibold d-flex align-items-center">Ville :<span class="text-danger">*</span></label>
            <input
              type="text"
              id="ville"
              class="form-control rounded-pill shadow-sm"
              v-model="formData.ville"
              placeholder="Votre ville"
            />
            <small v-if="$v.ville.$error" class="text-danger">Veuillez entrer votre ville.</small>
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
              :class="{ 'is-invalid': $v.gdprConsent.$error }"
            />
            <label for="gdprConsent" class="form-check-label text-muted">
              En validant ma demande, j'accepte de transmettre mes informations afin de recevoir gratuitement un devis ou d’être contacté par téléphone ou par email par un professionnel. Mes données sont protégées par la réglementation européenne RGPD.
            </label>
          </div>
          <small v-if="$v.gdprConsent.$error" class="text-danger">
            Vous devez accepter les conditions pour continuer.
          </small>
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
import { VueSpinner } from 'vue3-spinners';

const formStore = useFormStore();
const router = useRouter();
const loader = ref(false);
const data = formStore.getFormData;

// Form Data
const formData = reactive({
  lastName: formStore.formData.step4.lastName || "",
  firstName: formStore.formData.step4.firstName || "",
  email: formStore.formData.step4.email || "",
  telephone: formStore.formData.step4.telephone || "",
  postalCode: formStore.formData.step4.postalCode || "",
  adresse: formStore.formData.step4.adresse || "",
  ville: formStore.formData.step4.ville || "",
  gdprConsent: formStore.formData.step4.gdprConsent || false, // Default to false
});

// Custom Validation for French Phone Number
const frenchPhoneNumber = (value) => {
  const regex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
  return regex.test(value);
};

// Validation Rules
const rules = {
  lastName: { required },
  firstName: { required },
  email: { required, email },
  telephone: { required, frenchPhoneNumber },
  postalCode: { required, minLength: minLength(5) },
  adresse: { required },
  ville: { required },
  gdprConsent: {
    required,
    checked: (value) => value === true, // Ensure the checkbox is checked
  },
};

const $v = useVuelidate(rules, formData);

// Submit Logic
async function submitStep() {
  $v.value.$touch(); // Trigger validation
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
.form-check-input {
  width: 1.25em;
  height: 1.25em;
  margin-top: 0.15em;
  border: 2px solid #0d6efd;
  border-radius: 0.25em;
  cursor: pointer;
  transition: all 0.2s ease;
}

.form-check-input:checked {
  background-color: #0d6efd;
  border-color: #0d6efd;
}

.form-check-input:focus {
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.form-check-label {
  margin-left: 0.5em;
  font-size: 1rem;
  color: #2c3e50;
  cursor: pointer;
  transition: color 0.2s ease;
}

.form-check-label:hover {
  color: #0d6efd;
}

/* Optional: Add a custom checkmark */
.form-check-input:checked::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: 0.5em;
  height: 0.8em;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: translate(-50%, -50%) rotate(45deg);
}
/* GDPR Consent Section */
.form-check {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.form-check-input {
  width: 1.25em;
  height: 1.25em;
  margin-top: 0.25em;
  border: 2px solid #007bff;
  border-radius: 0.25em;
  cursor: pointer;
  transition: all 0.2s ease;
}

.form-check-input:checked {
  background-color: #007bff;
  border-color: #007bff;
}

.form-check-input:focus {
  box-shadow: 0 0 0 0.25rem rgba(0, 123, 255, 0.25);
}

.form-check-label {
  font-size: 0.95rem;
  color: #333;
  cursor: pointer;
  transition: color 0.2s ease;
}

.form-check-label a {
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
}

.form-check-label a:hover {
  text-decoration: underline;
}

/* Error Message */
.text-danger {
  display: flex;
  align-items: center;
  margin-top: 5px;
  font-size: 0.875rem;
}

.text-danger i {
  font-size: 1rem;
  margin-right: 5px;
}
</style>
