<template>
  <div class="custom-card py-0 px-0">
    <div class="card-header">
      <h2 class="mb-3 fw-bold">Votre profil</h2>
      <p class="text-muted">
        Merci de choisir les options correspondant à votre profil.
      </p>
    </div>
    <div class="card-body">
      <form @submit.prevent="submitStep">
        <!-- Date of Birth -->
        <div class="mb-4">
          <label for="dob" class="form-label fw-semibold">Date de naissance :</label>
          <input
            type="date"
            id="dob"
            class="form-control rounded-pill shadow-sm"
            v-model="formData.birthdate"
          />
          <small v-if="$v.birthdate.$error" class="text-danger">
            Date de naissance requise.
          </small>
        </div>

        <!-- Gender Selection -->
        <div class="mb-4">
          <label class="form-label fw-semibold d-block">Genre :</label>
          <div class="d-flex justify-content-center gap-3">
            <button
              type="button"
              :class="[
                'btn rounded-pill px-4 d-flex align-items-center gap-2',
                formData.gender === 'Monsieur' ? 'btn-primary' : 'btn-outline-secondary'
              ]"
              @click="selectGender('Monsieur')"
              :aria-pressed="formData.gender === 'Monsieur'"
            >
              <i class="fa fa-male"></i> Monsieur
            </button>
            <button
              type="button"
              :class="[
                'btn rounded-pill px-4 d-flex align-items-center gap-2',
                formData.gender === 'Madame' ? 'btn-primary' : 'btn-outline-secondary'
              ]"
              @click="selectGender('Madame')"
              :aria-pressed="formData.gender === 'Madame'"
            >
              <i class="fa fa-female"></i> Madame
            </button>
          </div>
          <small v-if="$v.gender.$error" class="text-danger">
            Veuillez sélectionner un genre.
          </small>
        </div>

        <!-- Profession -->
        <div class="mb-4">
          <label for="profession" class="form-label fw-semibold">Spécialité médicale :</label>
          <select
            id="profession"
            v-model="formData.profession"
            class="form-select rounded-pill shadow-sm"
            @blur="$v.profession.$touch()"
          >
            <option selected disabled value="">Choisissez une spécialité médicale</option>
            <option>Médecin généraliste</option>
            <option>Chirurgien</option>
            <option>Cardiologue</option>
            <option>Dermatologue</option>
            <option>Gynécologue</option>
            <option>Pédiatre</option>
            <option>Psychiatre</option>
            <option>Radiologue</option>
            <option>Ophtalmologue</option>
            <option>Pharmacien</option>
            <option>Orthopédiste</option>
            <option>Neurologue</option>
            <option>Oncologue</option>
            <option>Urologue</option>
            <option>ORL (Oto-Rhino-Laryngologiste)</option>
            <option>Dentiste</option>
            <option>Rhumatologue</option>
            <option>Endocrinologue</option>
            <option>Néphrologue</option>
            <option>Anesthésiste</option>
            <option>Gastro-entérologue</option>
            <option>Hématologue</option>
          </select>
          <small v-if="$v.profession.$error" class="text-danger">
            Veuillez sélectionner une spécialité médicale.
          </small>
        </div>

        <!-- Social Regime -->
        <div class="mb-4">
          <label for="social-regime" class="form-label fw-semibold">Régime social médical :</label>
          <select
            id="social-regime"
            v-model="formData.regime"
            class="form-select rounded-pill shadow-sm"
            @blur="$v.regime.$touch()"
          >
            <option selected disabled value="">Choisissez votre régime social</option>
            <option>CPAM (Caisse Primaire d'Assurance Maladie)</option>
            <option>RSI (Régime Social des Indépendants)</option>
            <option>CARMF (Caisse Autonome de Retraite des Médecins de France)</option>
            <option>CNAVPL (Caisse Nationale d’Assurance Vieillesse des Professions Libérales)</option>
            <option>URSSAF (Union de Recouvrement des Cotisations de Sécurité Sociale et d’Allocations Familiales)</option>
            <option>MSA (Mutualité Sociale Agricole)</option>
            <option>Autre</option>
          </select>
          <small v-if="$v.regime.$error" class="text-danger">
            Veuillez sélectionner un régime social.
          </small>
        </div>


        <!-- Health Insurance -->
        <div class="mb-4">
          <label for="health-insurance" class="form-label fw-semibold">Avez-vous un complémentaire santé ?</label>
          <select
            id="health-insurance"
            v-model="formData.complementaire"
            class="form-select rounded-pill shadow-sm"
            @blur="$v.complementaire.$touch()"
          >
            <option selected disabled value="">Choisissez une option</option>
            <option>Oui</option>
            <option>Non</option>
          </select>
          <small v-if="$v.complementaire.$error" class="text-danger">
            Veuillez indiquer si vous avez un complémentaire santé.
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
import { useRouter } from "vue-router";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { useFormStore } from "@/stores/useFormStore";

const formStore = useFormStore();
const router = useRouter();

function selectGender(selectedGender) {
  formData.gender = selectedGender;
}

const formData = reactive({
  birthdate: formStore.formData.step2.birthdate || "",
  gender: formStore.formData.step2.gender || "",
  profession: formStore.formData.step2.profession || "",
  regime: formStore.formData.step2.regime || "",
  complementaire: formStore.formData.step2.complementaire || "",
});

const rules = {
  birthdate: { required },
  gender: { required },
  profession: { required },
  regime: { required },
  complementaire: { required },
};

const $v = useVuelidate(rules, formData);

async function submitStep() {
  $v.value.$touch();
  if (!$v.value.$invalid) {
    formStore.updateStepData("step2", formData);
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

button:disabled {
  opacity: 0.6;
  pointer-events: none;
}
</style>
