<template>
  <div class="custom-card py-0 px-0">
    <div class="card-header">
      <h2 class="mb-3 fw-bold">🎉 Votre offre personnalisée</h2>
      <p class="text-muted">
        Voici une proposition basée sur vos choix et vos besoins.
      </p>
    </div>
    <div class="card-body">
      <div class="mb-4">
        <h4 class="fw-bold text-primary">Résumé de vos besoins :</h4>
        <ul>
          <li><strong>Soins courants :</strong> {{ formData.step1.soins }}</li>
          <li><strong>Optique :</strong> {{ formData.step1.optique }}</li>
          <li><strong>Dentaire :</strong> {{ formData.step1.dentaire }}</li>
          <li><strong>Hospitalisation :</strong> {{ formData.step1.hospitalisation }}</li>
        </ul>
      </div>

      <div class="mb-4">
        <h4 class="fw-bold text-primary">Proposition :</h4>
        <p>
          <strong>Hospitalisation :</strong> {{ offer.hospitalisation }}
        </p>
        <p>
          <strong>Soins courants :</strong> {{ offer.soinsCourants }}
        </p>
      </div>

      <button
        class="btn btn-primary rounded-pill px-4"
        :disabled="isSubmitting"
        @click="submitOffer"
      >
        <span v-if="isSubmitting">Envoi en cours...</span>
        <span v-else>Finaliser l'offre</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useFormStore } from "@/stores/useFormStore";
import { ref } from "vue";


  const formStore = useFormStore();
  const isSubmitting = ref(false);

  // Sample mappings (this would ideally come from parsed PDF data)
  const rates = {
    hospitalisation: {
      Minimum: "100%",
      Moyen: "200%",
      Fort: "300%",
      Avancé: "Frais réels",
    },
    soins: {
      Minimum: "100%",
      Moyen: "140%",
      Fort: "200%",
      Avancé: "Frais réels",
    },
  };

  const offer = {
    hospitalisation: rates.hospitalisation[formStore.formData.step1.hospitalisation],
    soinsCourants: rates.soins[formStore.formData.step1.soins],
  };

  const submitOffer = async () => {
    isSubmitting.value = true;
    try {
      await formStore.submitForm();
      alert("Offre soumise avec succès !");
    } catch (error) {
      alert("Une erreur est survenue lors de la soumission.");
    } finally {
      isSubmitting.value = false;
    }
  };

</script>

<style scoped>
/* Add relevant styles for Step 5 */
</style>
