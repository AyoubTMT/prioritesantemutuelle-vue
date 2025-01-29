<template>
  <div class="merci-page">
    <div class="merci-card shadow-lg rounded-lg text-center py-5 px-4">
      <!-- <h1 class="merci-title text-primary mb-4">Merci pour votre confiance !</h1> -->
      <p class="merci-description mb-5">
        Votre formulaire a été soumis avec succès. Vous allez recevoir votre devis en express.
      </p>

      <!-- Contact Information -->
      <div class="contact-info mb-5">
        <h3 class="text-secondary mb-3">Nos coordonnées</h3>
        <ul class="list-unstyled">
          <li class="mb-2">
            <i class="fas fa-phone-alt text-primary me-2"></i> Téléphone : <a href="tel:+33146592228" class="text-decoration-none">+33 1 46 59 22 28</a>
          </li>
          <li class="mb-2">
            <i class="fas fa-envelope text-primary me-2"></i> Email : <a href="mailto:contact@santeproaudio.fr" class="text-decoration-none">contact@santeproaudio.fr</a>
          </li>
        </ul>
      </div>

      <!-- Back to Home Button -->
      <button class="btn btn-primary btn-lg px-5" @click="goToHome">
        Retour à l'accueil
      </button>
    </div>
  </div>
</template>

<script setup>
// Navigation logic
import { useRouter } from "vue-router";
const router = useRouter();

function goToHome() {
  router.push("/home");
}
</script>

<style scoped>
/* Merci Page Styles */
.merci-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f7f9fc, #eaf3fc);
  padding: 20px;
}

.merci-card {
  background: white;
  border-radius: 15px;
  max-width: 600px;
  width: 100%;
  padding: 40px 30px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.merci-title {
  font-size: 2.5rem;
  font-weight: bold;
}

.merci-description {
  font-size: 1.2rem;
  color: #6c757d;
}

.contact-info h3 {
  font-size: 1.5rem;
}

.contact-info ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-info li {
  font-size: 1rem;
}

.contact-info i {
  font-size: 1.2rem;
  vertical-align: middle;
}

.btn-primary {
  background-color: #007bff;
  border: none;
  border-radius: 25px;
  padding: 10px 30px;
  font-size: 1.2rem;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
}

.btn-primary:hover {
  background-color: #0056b3;
}
</style>
