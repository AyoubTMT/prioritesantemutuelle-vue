<script setup>
  import { ref, onMounted } from "vue";

  const clearLocalStorage = () => {
    localStorage.clear();
    console.log("LocalStorage cleared, starting a new devis.");
  };

  onMounted(() => {
    // Check if Tailwind CSS is already loaded
    if (!document.getElementById('tailwind-cdn')) {
      const script = document.createElement('script');
      script.id = 'tailwind-cdn';
      script.src = 'https://cdn.tailwindcss.com';
      document.head.appendChild(script);
    }
  });
</script>

<style scoped>
  @import "../assets/home.css"; 
  
.mention-container{
  z-index: 99999;
  position: relative;
}
.mention-div {
  padding: 1.5rem !important;
  border-radius: 0.5rem;
}
.container.relative {
  padding-bottom: 0px;
}
</style>

<template>

  <div class="h-full bg-white">
    <div class="frame-root">
      <div class="frame-content"></div>
      <div class="frame-content">
        <div class="[font-family:var(--font-family-body)]">
          <div>
            <header class="relative z-50 bg-[var(--light-background-color)] code-section" id="sa5x5n">
              <nav class="container mx-auto px-4 py-10 sm:px-12 xl:px-32">
                <div class="flex items-center justify-between">
                  <div class="text-xl font-bold">
                    <a href="/"
                      class="primary-color-text text-xl text-[var(--primary-color)] [font-family:var(--font-family-heading)] lg:text-3xl">
                      <span class="">Santé Pro </span><span class="text-dark">Audio</span>
                    </a>
                  </div>
                  <div
                    class="flex flex-col mt-4 lg:flex-row items-center space-y-4 lg:mt-0 lg:space-y-0 lg:space-x-4 text-sm lg:text-base">
                    
                    <router-link to="/devis" class="navbar-link">
                      <a href="/devis"
                      class="primary-color-bg rounded bg-[var(--primary-button-bg-color)] px-[var(--button-padding-x)] py-[var(--button-padding-y)] text-[var(--primary-button-text-color)] hover:bg-[var(--primary-button-hover-bg-color)] hover:text-[var(--primary-button-hover-text-color)]">Devis
                      en 2 minutes</a>
                    </router-link>
                  </div>
                </div>
              </nav>
            </header>
          </div>
          <div>
            <section class="relative bg-[var(--light-background-color)] code-section" id="som1gjg">
              <div
                class="absolute -left-56 top-0 h-[350px] w-[350px] rounded-full border-[50px] border-[var(--medium-background-color)]">
              </div>
              <div class="absolute bottom-0 top-0 hidden h-full w-full overflow-hidden lg:block">
                <div
                  class="absolute -right-50 bottom-12 h-[350px] w-[350px] rounded-full border-[50px] border-[var(--medium-background-color)]">
                </div>
              </div>
              <div class="container relative mx-auto px-4 sm:px-10 lg:pb-28 xl:px-28">
                <div class="relative flex flex-col items-center lg:flex-row">
                  <div class="mt-10 w-full lg:mt-20 lg:w-[55%] lg:pr-12">
                    <h1 class="mb-6 text-center text-3xl font-bold lg:text-left xl:text-4xl 2xl:text-5xl">
                      <div class="[font-family:var(--font-family-heading)] text-center">Mentions Légales</div>
                    </h1>
                  </div>
                </div>
              </div>
          <div class="container mx-auto py-10 px-5 max-w-4xl mention-container">
            <div class="bg-white shadow-lg rounded-lg p-6 mention-div">
              <section class="mb-6">
                <h2 class="text-xl font-semibold mb-2">Informations générales</h2>
                <p>
                  <strong>Santeproaudio.fr</strong> est une marque de Gls Lassurances, une société intermédiaire en assurance (courtier) régie par le Code des Assurances.
                </p>
                <p>
                  Le site Internet accessible à l’adresse 
                  <a href="http://www.Santeproaudio.fr" class="text-blue-600 hover:underline">www.Santeproaudio.fr</a>
                  est conçu et édité par la société Gls Lassurances.
                </p>
              </section>

              <section class="mb-6">
                <h2 class="text-xl font-semibold mb-2">Gls Lassurances</h2>
                <p>
                  Société à responsabilité limité (SARL) au capital de 8000 €, dotée d’une assurance responsabilité civile professionnelle et d’une garantie financière.
                </p>
                <p>
                  Immatriculée au Registre du Commerce et des Sociétés de Paris sous le numéro 
                  <strong>483 666 137 00037</strong>.
                </p>
                <p>
                  Son siège social est situé au 
                  <strong>45, rue de Boulainvilliers 75016 Paris</strong>.
                </p>
                <p>
                  Placée sous l'autorité de l’ACPR 
                  (<strong>Autorité de contrôle prudentiel et de résolution</strong>), 4 place de Budapest, 75436 Paris Cedex 09.
                </p>
              </section>

              <section class="mb-6">
                <h2 class="text-xl font-semibold mb-2">Nous contacter</h2>
                <ul class="list-disc pl-5">
                  <li><strong>Par téléphone :</strong><a href="tel:+33146592228" class="text-decoration-none">+33 1 46 59 22 28</a></li>
                  <li>
                    <strong>Par e-mail :</strong> 
                    <a href="mailto:contact@lassurances.fr" class="text-blue-600 hover:underline">contact@lassurances.fr</a>
                  </li>
                  <li><strong>Par courrier :</strong> 45, rue de Boulainvilliers, 75016 Paris</li>
                </ul>
              </section>

              <section class="mb-6">
                <h2 class="text-xl font-semibold mb-2">Informations légales</h2>
                <ul class="list-disc pl-5">
                  <li><strong>Code APE :</strong> 6622Z (Activités des agents et courtiers d’assurances)</li>
                  <li><strong>SIRET :</strong> 483 666 137 000 37 RCS PARIS</li>
                  <li><strong>Numéro TVA :</strong> FR61483666137</li>
                  <li>
                    <strong>Numéro Orias :</strong> 07005515 – 
                    <a href="https://www.orias.fr" class="text-blue-600 hover:underline">www.orias.fr</a>
                  </li>
                </ul>
              </section>

              <section class="mb-6">
                <h2 class="text-xl font-semibold mb-2">Hébergement</h2>
                <p>Le site est hébergé par <strong>IONOS 1&1 Internet SARL</strong> :</p>
                <p>7, place de la Gare, BP 70109, 57200 Sarreguemines Cedex</p>
                <p><strong>Téléphone :</strong> 0970 808 911</p>
                <p>
                  <strong>E-mail :</strong> 
                  <a href="mailto:info@ionos.fr" class="text-blue-600 hover:underline">info@ionos.fr</a>
                </p>
              </section>

              <section>
                <h2 class="text-xl font-semibold mb-2">Réclamation</h2>
                <p>Vous pouvez adresser vos réclamations :</p>
                <ul class="list-disc pl-5">
                  <li>
                    <strong>Par courriel :</strong> 
                    <a href="mailto:reclamations@lassurances.fr" class="text-blue-600 hover:underline">reclamations@lassurances.fr</a>
                  </li>
                  <li><strong>Par courrier :</strong> Services Réclamations Lassurances, 45, rue de Boulainvilliers, 75016 Paris</li>
                </ul>
                <p>Si vous n'êtes pas satisfait(e), vous pouvez saisir le <strong>Médiateur de l'Assurance</strong> :</p>
                <ul class="list-disc pl-5">
                  <li>
                    <strong>En ligne :</strong> 
                    <a href="https://www.mediation-assurance.org" class="text-blue-600 hover:underline">www.mediation-assurance.org</a>
                  </li>
                  <li><strong>Par courrier :</strong> La Médiation de l’Assurance, TSA 50 110 – 75441 Paris Cedex 09</li>
                </ul>
              </section>
            </div>
          </div>
            </section>
          </div>
          <div>
            <footer class="relative overflow-hidden bg-[var(--light-background-color)] py-12 code-section" id="s86nq6s9">
              <div class="container relative mx-auto px-4 pb-0 sm:px-8 xl:px-28">
                <div
                  class="absolute -left-80 -top-14 h-[350px] w-[350px] rounded-full border-[50px] border-[var(--medium-background-color)]">
                </div>
                <div
                  class="absolute -right-40 bottom-0 h-[350px] w-[350px] rounded-full border-[50px] border-[var(--medium-background-color)]">
                </div>
                <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden"></div>
                <div class="relative z-10 grid grid-cols-1 gap-x-2 sm:grid-cols-2 md:grid-cols-4">
                  <div class="mb-6 flex flex-col space-y-3">
                    <a href="/"
                      class="mb-6 text-lg font-bold text-[var(--primary-color)] [font-family:var(--font-family-heading)] lg:text-2xl">
                      <span class="">Santé&nbsp;</span><span class="text-gray-800">Pro Audio</span>
                    </a>
                    <div class="text-gray-700 2xl:pr-[30%]">une assurance santé dédiée aux audioprothésiste</div>
                  </div>
                  <div class="mb-6 flex flex-col space-y-3">
                    <div class="mb-6 text-xl font-semibold">Nos Services</div>
                    <div class="flex flex-col space-y-3 text-[var(--dark-text-color)]">
                      <div class="">Assurance Santé Personnalisée</div>
                      <div class="">Conseil en Protection Sociale</div>
                      <div class="">Gestion des Sinistres</div>
                      <div class="">Assistance Médicale</div>
                      <div class="">Indemnisation Rapide</div>
                      <div class="">Prévention des Risques</div>
                    </div>
                  </div>
                  <div class="mb-6 flex flex-col space-y-3">
                    <div class="mb-6 text-xl font-semibold">Conditions</div>
                    <div class="flex flex-col space-y-3 text-[var(--dark-text-color)]">
                      <div class=""><router-link to="/mentions-legales">Mentions Légales</router-link></div>
                    </div>
                  </div>
                  <div class="mb-6 flex flex-col space-y-3 text-[var(--dark-text-color)]">
                    <div class="mb-6 text-xl font-semibold">Contactez-nous</div>
                    <div class="flex flex-row">
                      <div class="flex h-8 w-8 items-center justify-center rounded-full p-2">
                        <i class="primary-color-text fa-regular fa-phone text-lg text-[var(--primary-color)]"
                          aria-hidden="true"></i>
                      </div>
                      <div class="flex items-center text-sm"><a href="tel:+33146592228" class="text-decoration-none">+33 1 46 59 22 28</a></div>
                    </div>
                    <div class="flex flex-row">
                      <div class="flex h-8 w-8 items-center justify-center rounded-full p-2">
                        <i class="primary-color-text fa-regular fa-envelope text-lg text-[var(--primary-color)]"
                          aria-hidden="true"></i>
                      </div>
                      <div class="flex items-center text-sm"><a href="mailto:contact@santeproaudio.fr" class="text-decoration-none">contact@santeproaudio.fr</a></div>
                    </div>
                    <div class="flex flex-row">
                      <div class="flex h-8 w-8 items-center justify-center rounded-full p-2">
                        <i class="primary-color-text fa-regular fa-location-dot text-lg text-[var(--primary-color)]"
                          aria-hidden="true"></i>
                      </div>
                      <div class="flex items-center text-sm">45, rue de Boulainvilliers, 75016 Paris, France</div>
                    </div>
                  </div>
                </div>
                <p class="relative z-10 mt-20 text-center text-base text-[var(--gray-text-color)]">© Santé Pro Audio 2025</p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
