<template>
  <div class="proposition-page">
    <!-- Main Proposition Card -->
    <div class="proposition-card">
      <!-- Header Section -->
      <div class="card-header gradient-header text-center text-white py-4">
        <h2 class="formula-title mb-2">
          Notre conseil: La formule <span class="text-uppercase">{{ formula }}</span>
        </h2>
        <p class="description">
          Découvrez les avantages personnalisés adaptés à vos besoins.
        </p>
      </div>

      <!-- Details Section -->
      <div class="card-body py-3 px-5">
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
              <h4>Soins Courants : <span class="text-muted fw-bold">{{ data.step1.custom.soins }}</span></h4>
              <p class="text-muted text-sm">
                Honoraires paramédicaux: {{ details.soins_courants['Honoraires_paramédicaux'] }}<br />
                Analyses et examens de laboratoire: {{ details.soins_courants['Analyses et examens de laboratoire']}}<br />
                Médicaments: {{ details.soins_courants.Médicaments}}
              </p>
              <button class="btn btn-link p-0 text-sm text-start" @click="showModal('SOINS COURANTS')">
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
              <h4>Hospitalisation : <span class="text-muted fw-bold">{{ data.step1.custom.hospitalisation }}</span></h4>
              <p class="text-muted text-sm">
                Forfait journalier hospitalier : {{ details.hospitalisation.Forfait_journalier_hospitalier }}<br />
                Participation forfaitaire: {{ details.hospitalisation.Participation_forfaitaire }}
              </p>
              <button class="btn btn-link p-0 text-sm text-start" @click="showModal('HOSPITALISATION')">
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
              <h4>Optique : <span class="text-muted fw-bold">{{ data.step1.custom.optique }}</span></h4>
              <p class="text-muted text-sm">
                Monture + 2 verres simples : {{ details.optique['Monture + 2 verres simples'] }}<br />
                Monture + 1 verre simple + 1 verre complexe : {{ details.optique['Monture + 1 verre simple + 1 verre complexe'] }}</p>
              <button class="btn btn-link p-0 text-sm text-start" @click="showModal('OPTIQUE')">
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
              <h4>Aides Auditives : <span class="text-muted fw-bold">{{ data.step1.custom.aides_auditives }}</span></h4>
              <p class="text-muted text-sm">
                Equipements de classe II : {{ details.aides_auditives['Equipements de classe II'] }}</p>
              <button class="btn btn-link p-0 text-sm text-start" @click="showModal('AIDES AUDITIVES')">
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
              <h4>Dentaire : <span class="text-muted fw-bold">{{ data.step1.custom.dentaire }}</span></h4>
              <p class="text-muted text-sm">
                Soins: {{ details.dentaire.Soins }}<br />
                Prothèses: {{ details.dentaire.Prothèses }}
              </p>
              <button class="btn btn-link p-0 text-sm text-start" @click="showModal('DENTAIRE')">
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
              <h4>Médecines Douces : <span class="text-muted fw-bold">{{ data.step1.custom.medecines_douces }}</span></h4>
              <p class="text-muted text-sm">Vaccins prescrits non remboursés par la Sécurité sociale : {{ details.prevention_et_medecines_douces['Vaccins_prescrits_non_remboursés_par_la_Sécurité_sociale'] }}</p>
              <button class="btn btn-link p-0 text-sm text-start" @click="showModal('PREVENTION ET MEDECINES DOUCES')">
                Voir toutes les garanties
              </button>
            </div>
          </div>

          <!-- Renfort (Optional Guarantee) -->
          <div class="detail-item" v-if="data.step1.renfort === 'oui'">
            <div class="icon-container gradient-dark">
              <i class="fas fa-plus-circle fa-2x text-white"></i>
            </div>
            <div>
              <div class="d-flex align-items-center gap-2 mb-2">
                <h4>Renfort</h4>
                <!-- <span class="badge bg-success rounded-pill">
                  <i class="fas fa-check-circle me-1"></i>Activé
                </span> -->
              </div>
              <p class="text-muted text-sm">
                Cette garantie vous permet d'améliorer votre couverture en ajoutant des niveaux supérieurs de remboursement.
              </p>
              <button class="btn btn-link p-0 text-sm text-start" @click="openPdfModal('/COM-SANTE-renfort.pdf')">
                <i class="fas fa-file-pdf text-danger me-1"></i>Voir tous les détails
              </button>
            </div>
          </div>

          <!-- PDF Modal Trigger -->
          <div class="text-center my-4">
            <h5 class="fw-semibold mb-3">Documents :</h5>
            <button class="btn btn-outline-primary rounded-pill px-4 py-2 d-inline-flex align-items-center" @click="openPdfModal('/tableau_de_garantie.pdf')">
              <i class="fas fa-file-pdf fs-5 text-danger me-2"></i> 
              <span>Tableau de garanties</span>
            </button>
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

      <!-- Footer Section -->
      <div class="card-footer text-center py-4 px-5 d-flex justify-content-between flex-column flex-md-row gap-2">
        <button
          type="button"
          class="btn btn-outline-secondary rounded-pill px-4"
          @click="prevStep"
        >
          <i class="bi bi-arrow-left"></i> Précédent
        </button>
        <button class="btn btn-gradient btn-lg px-4" @click="finalizeOffer">
          Mon tarif 🚀
        </button>
      </div>
    </div>

    <!-- PDF Modal -->
    <div v-if="isPdfModalVisible" class="modal-overlay" @click.self="isPdfModalVisible = false">
      <div class="modal-content">
        <div class="modal-header d-flex justify-content-between align-items-center">
          <h5 class="modal-title">Tableau de Garantie</h5>
          <button class="btn-close" @click="isPdfModalVisible = false"></button>
        </div>
        <div class="modal-body">
          <iframe :src="pdfUrl" style="width: 100%; height: 80vh;" frameborder="0"></iframe>
        </div>
        <div class="modal-footer text-center">
          <button class="btn btn-danger rounded-pill px-4" @click="isPdfModalVisible = false">Fermer</button>
        </div>
      </div>
    </div>

    <!-- Details Modal -->
    <div v-if="isModalVisible" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">{{ modalTitle }}</h4>
          <button class="btn-close" @click="closeModal">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <!-- Modal Body -->
        <div class="modal-body">
          <table class="details-table">
            <thead>
              <tr>
                <th>Garantie</th>
                <th>Détails</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(value, key) in modalData" :key="key">
                <template v-if="key === 'description'">
                  <td :colspan="2" class="description">{{ value }}</td>
                </template>
                <template v-else>
                  <td class="garantie">{{ formatKey(key) }}</td>
                  <td class="details">{{ value }}</td>
                </template>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Modal Footer -->
        <div class="modal-footer">
          <button class="btn btn-close-modal" @click="closeModal">
            Fermer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useFormStore } from "@/stores/useFormStore";
import axios from "axios";
import { useRouter } from "vue-router";

// Access form store
const formStore = useFormStore();
const data = formStore.getFormData;
const pdfUrl = ref("/tableau_de_garantie.pdf");
const isPdfModalVisible = ref(false);

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

  try {
    const formulaResponse = await axios.post(
      `${API_BASE_URL}/api/suggest-formula`, 
      data.step1
    );
    formula.value = formulaResponse.data.formula;
    details.value = formulaResponse.data.details;

    axios.post(`${API_BASE_URL}/api/send-email`, data)
      .catch(emailError => {
        console.error("Email sending failed:", emailError);
      });

  } catch (err) {
    console.error("Error fetching formula:", err);
    error.value = err.response?.data?.message || "Erreur lors de la récupération";
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
  const formattedCategory = category.replace(/ /g, '_').toLowerCase();
  modalData.value = details.value[formattedCategory] || { description: "Aucune information supplémentaire disponible." };
  isModalVisible.value = true;
}

function closeModal() {
  isModalVisible.value = false;
}

function openPdfModal(url) {
  pdfUrl.value = url;
  isPdfModalVisible.value = true;
}

// Finalize offer logic
async function finalizeOffer() {
  try {
    const formulaResponse = await axios.post(
      `${API_BASE_URL}/api/send-email-client`, 
      data
    );
    router.push('/devis/merci');
  } catch (err) {
    console.error("Error :", err);
  }

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
/* Main Page Layout */
.proposition-page {
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 0px;
}

/* Proposition Card */
.proposition-card {
  width: 100%;
  /* max-width: 900px;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1); */
  animation: fadeInUp 0.5s ease-in-out;
}

.padding-mobile, .container-fluid {
  padding: 0px !important;
}

/* Card Header */
.card-header {
  background: linear-gradient(120deg, #007bff, #00d2ff);
  color: white;
  padding: 20px;
  text-align: center;
}

.formula-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.description {
  font-size: 1rem;
  margin: 0;
}

/* Card Body */
.card-body {
  padding: 30px 40px;
}

.section-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #0056b3;
  text-align: center;
  margin-bottom: 20px;
}

/* Details Grid */
.details-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}

@media (max-width: 1023px) {
  .details-grid {
    grid-template-columns: 1fr;
  }
}

/* Detail Item */
.detail-item {
  display: flex;
  gap: 15px;
  align-items: flex-start;
  background: #f9f9f9;
  border-radius: 15px;
  padding: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, border-color 0.3s ease;
  border-left: 4px solid transparent;
}

.detail-item:hover {
  border-left-color: #0d6efd;
  transform: translateY(-5px);
}

/* Icon Container */
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

.gradient-dark {
  background: linear-gradient(135deg, #000000, #000000);
}

/* Buttons */
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

.btn-outline-primary {
  border: 2px solid #0d6efd;
  transition: all 0.3s ease;
}

.btn-outline-primary:hover {
  background: #0d6efd;
  color: white;
}

.btn-link {
  position: relative;
  padding-left: 1.5rem;
  color: #0d6efd;
  text-decoration: none;
}

.btn-link:hover::before {
  transform: translateX(3px);
}

/* Badge */
.badge.bg-success {
  font-size: 0.9rem;
  padding: 0.35em 0.75em;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Modal Overlay */
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
}

/* Modal Content */
.modal-content {
  background: white;
  border-radius: 12px;
  max-width: 800px;
  width: 90%;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

/* Modal Header */
.modal-header {
  padding: 20px;
  background: linear-gradient(135deg, #007bff, #00d2ff);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
}

.btn-close {
  background: none;
  border: none;
  color: white;
  font-size: 1.25rem;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.btn-close:hover {
  opacity: 0.8;
}

/* Modal Body */
.modal-body {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

.details-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.details-table th,
.details-table td {
  padding: 12px;
  text-align: left;
}

.details-table th {
  background: #f8f9fa;
  font-weight: 600;
  color: #333;
  border-bottom: 2px solid #dee2e6;
}

.details-table td {
  border-bottom: 1px solid #eee;
}

.details-table tr:last-child td {
  border-bottom: none;
}

.garantie {
  font-weight: 500;
  color: #007bff;
}

.details {
  color: #555;
}

/* Modal Footer */
.modal-footer {
  padding: 15px;
  background: #f8f9fa;
  border-top: 1px solid #eee;
  text-align: center;
}

.btn-close-modal {
  background: #dc3545;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-close-modal:hover {
  background: #c82333;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Animations */
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

/* Responsive Adjustments */
@media (max-width: 768px) {
  .modal-content {
    width: 95%;
    max-height: 80vh;
  }

  .modal-title {
    font-size: 1.25rem;
  }

  .details-table th,
  .details-table td {
    padding: 10px;
  }

  .description {
    padding: 15px;
  }
}
</style>