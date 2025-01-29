<template>
  <div class="proposition-page">
    <!-- Main Proposition Card -->
    <div class="proposition-card shadow-lg rounded-lg">
      <!-- Header Section -->
      <div class="card-header gradient-header text-center text-white py-4">
        <h1 class="formula-title mb-2">
          🎉 Votre Formule: <span class="text-uppercase">{{ formula }}</span>
        </h1>
        <p class="description mb-0">
          Découvrez les avantages personnalisés adaptés à vos besoins.
        </p>
      </div>

      <!-- Details Section -->
      <div class="card-body py-3 px-4">
        <h3 class="section-title text-center mb-4">
          Détails de votre Formule
        </h3>

        <!-- Details Grid -->
        <div v-if="details" class="details-grid">
          <!-- Soins Courants -->
          <div class="detail-item">
            <div class="icon-container gradient-primary">
              <i class="fas fa-heartbeat"></i>
            </div>
            <div>
              <h4>Soins Courants</h4>
              <p class="text-muted text-sm">
                Paramedicaux: {{ details.soins.paramedicaux }}<br />
                Consultations: {{ details.soins.consultations }}
              </p>
              <button class="btn btn-link p-0 text-sm text-start" @click="showModal('soins')">
                Voir toutes les garanties
              </button>
            </div>
          </div>

          <!-- Hospitalisation -->
          <div class="detail-item">
            <div class="icon-container gradient-info">
              <i class="fas fa-hospital"></i>
            </div>
            <div>
              <h4>Hospitalisation</h4>
              <p class="text-muted text-sm">
                Forfait journalier hospitalier : {{ details.hospitalisation.Frais_journaliers_hospitalier }}<br />
                Participation forfaitaire: {{ details.hospitalisation.Participation_forfaitaire }}
              </p>
              <button class="btn btn-link p-0 text-sm text-start" @click="showModal('hospitalisation')">
                Voir toutes les garanties
              </button>
            </div>
          </div>

          <!-- Optique -->
          <div class="detail-item">
            <div class="icon-container gradient-warning">
              <i class="fas fa-glasses"></i>
            </div>
            <div>
              <h4>Optique</h4>
              <p class="text-muted text-sm">{{ details.optique.monture_2_verres_simples }}</p>
              <button class="btn btn-link p-0 text-sm text-start" @click="showModal('optique')">
                Voir toutes les garanties
              </button>
            </div>
          </div>

          <!-- Aides Auditives -->
          <div class="detail-item">
            <div class="icon-container gradient-secondary">
              <i class="fas fa-deaf"></i>
            </div>
            <div>
              <h4 >Aides Auditives</h4>
              <p class="text-muted text-sm">{{ details.aides_auditives.equipements_classe_I }}</p>
              <button class="btn btn-link p-0 text-sm text-start" @click="showModal('aides_auditives')">
                Voir toutes les garanties
              </button>
            </div>
          </div>

          <!-- Dentaire -->
          <div class="detail-item">
            <div class="icon-container gradient-success">
              <i class="fas fa-tooth"></i>
            </div>
            <div>
              <h4 >Dentaire</h4>
              <p class="text-muted text-sm">
                Soins: {{ details.dentaire.soins }}<br />
                Prothèses: {{ details.dentaire.protheses }}
              </p>
              <button class="btn btn-link p-0 text-sm text-start" @click="showModal('dentaire')">
                Voir toutes les garanties
              </button>
            </div>
          </div>

          <!-- Médecines Douces -->
          <div class="detail-item">
            <div class="icon-container gradient-danger">
              <i class="fas fa-leaf"></i>
            </div>
            <div>
              <h4 >Médecines Douces</h4>
              <p class="text-muted text-sm">{{ details.medecines_douces.osteopathie }}</p>
              <button class="btn btn-link p-0 text-sm text-start" @click="showModal('medecines_douces')">
                Voir toutes les garanties
              </button>
            </div>
          </div>
        </div>

        <!-- Loading or Error -->
        <div v-else-if="loading" class="text-center my-5">
          <p class="text-primary">Chargement en cours...</p>
        </div>
        <div v-else-if="error" class="alert alert-danger text-center my-5">
          {{ error }}
        </div>
      </div>

      <div class="card-footer text-center py-4 d-flex justify-content-between flex-column flex-md-row gap-2">
        <button
          type="button"
          class="btn btn-outline-secondary rounded-pill px-4"
          @click="prevStep"
        >
          <i class="bi bi-arrow-left"></i> Précédent
          <!-- Call to Action -->
        </button>
        <button class="btn btn-gradient btn-lg px-4" @click="finalizeOffer">
          Envoyer 🚀
        </button>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="isModalVisible" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <h4 class="modal-title text-center mb-4">{{ modalTitle }}</h4>
        <table class="table table-bordered text-sm">
          <thead>
            <tr>
              <th>Garantie</th>
              <th>Détails</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(value, key) in modalData" :key="key">
              <template v-if="key === 'description'">
                  <td :colspan="2" class="text-center">{{ value }}</td>
              </template>
              <template v-else>
                  <td>{{ formatKey(key) }}</td>
                  <td>{{ value }}</td>
              </template>
            </tr>
          </tbody>
        </table>
        <button class="btn btn-danger mt-3" @click="closeModal">Fermer</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useFormStore } from "@/stores/useFormStore";
import { storeToRefs } from "pinia";
import axios from "axios";
import { useRouter } from "vue-router";

// Access form store
const formStore = useFormStore();
const data = formStore.getFormData;

// Reactive state variables
const router = useRouter();
const formula = ref(null);
const details = ref(null);
const loading = ref(false);
const error = ref(null);
// Modal state variables
const isModalVisible = ref(false);
const modalTitle = ref("");
const modalData = ref({});
const API_BASE_URL = import.meta.env.VITE_BASE_URL || "http://back.santeproaudio.fr";

// Fetch formula from the API
async function fetchFormula() {
  loading.value = true;
  error.value = null;
  console.log(JSON.stringify(data.step1));
  try {
    const response = await axios.post(`${API_BASE_URL}/api/suggest-formula`, data.step1, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    formula.value = response.data.formula;
    details.value = response.data.details;
  } catch (err) {
    console.error("Error finalizing offer:", err);
    error.value =
      err.response?.data.message ||
      "Une erreur est survenue lors de la récupération de la formule.";
  } finally {
    loading.value = false;
  }
}

function formatKey(key) {
  return key.replace(/_/g, ' ');
}

// Modal logic
function showModal(category) {
  modalTitle.value = `Toutes les garanties pour ${category}`;
  modalData.value = details.value[category];
  isModalVisible.value = true;
}

function closeModal() {
  isModalVisible.value = false;
}

// Finalize offer logic
function finalizeOffer() {
  // alert("Votre offre a été finalisée avec succès ! 🎉");
  router.push('/devis/merci');
}

// Fetch formula when the component is mounted
onMounted(() => {
  fetchFormula();
});
// Navigation
function prevStep() {
  formStore.prevStep(router);
}
</script>


<style scoped>
.proposition-page {
  display: flex;
  justify-content: center;
  align-items: start;
  /* min-height: 100vh; */
}

.proposition-card {
  width: 100%;
  max-width: 900px;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  animation: fadeInUp 0.5s ease-in-out;
}

.card-header {
  background: linear-gradient(90deg, #007bff, #0056b3);
  color: white;
}

.gradient-header {
  background: linear-gradient(120deg, #007bff, #00d2ff);
}

.formula-title {
  font-size: 2rem;
  font-weight: bold;
}

.description {
  font-size: 1rem;
  margin-top: 10px;
}

.card-body {
  padding: 30px 40px;
}

.section-title {
  font-size: 1rem;
  font-weight: bold;
  color: #0056b3;
}

.details-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
}

.detail-item {
  display: flex;
  gap: 15px;
  align-items: flex-start;
  background: #f9f9f9;
  border-radius: 15px;
  padding: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

@media (max-width: 1023px) {
  .details-grid {
    grid-template-columns: 1fr;
  }
}

.detail-item:hover {
  transform: translateY(-5px);
}

.icon-container {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: white;
}

.gradient-primary {
  background: linear-gradient(135deg, #007bff, #0056b3);
}

.gradient-info {
  background: linear-gradient(135deg, #17a2b8, #117a8b);
}

.gradient-warning {
  background: linear-gradient(135deg, #ffc107, #e0a800);
}

.gradient-secondary {
  background: linear-gradient(135deg, #6c757d, #495057);
}

.gradient-success {
  background: linear-gradient(135deg, #28a745, #1e7e34);
}

.gradient-danger {
  background: linear-gradient(135deg, #dc3545, #c82333);
}

.btn-gradient {
  background: linear-gradient(135deg, #007bff, #00d2ff);
  color: white;
  border: none;
  border-radius: 25px;
  padding: 10px 30px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-gradient:hover {
  background: linear-gradient(135deg, #0056b3, #009edb);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  overflow-y: auto;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  width: 90%;
  max-height: 90vh; /* Ensure modal doesn't exceed screen height */
  overflow-y: auto; /* Enable scrolling for modal content */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.modal-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 15px;
  text-align: center;
}

.table {
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}
.btn-close-modal {
  display: block;
  margin: 0 auto;
  background: #dc3545;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
h4 {
  font-weight: bold;
}
.padding-mobile{
  padding-right: 4px !important;
  padding-left: 4px !important;
}
</style>