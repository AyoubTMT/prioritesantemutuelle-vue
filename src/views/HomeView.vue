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

<style >
  @import "../assets/home.css"; 
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
                      <span class="">Santé Pro Audio</span>
                    </a>
                  </div>
                  <!-- <div class="flex lg:hidden">
                    <button id="mobile-menu-button" data-collapse-toggle="navigation-menu" type="button"
                      class="text-gray-800" aria-controls="navigation-menu" aria-expanded="false"
                      aria-label="Navigation Menu">
                      <i class="fa-regular fa-bars feather feather-menu" data-fontawesome-icon="fa-bars"
                        data-landingsite-gallery-type="icon" aria-hidden="true"></i>
                    </button>
                  </div> -->
                  <!-- <div id="navigation-menu"
                    class="hidden absolute left-0 top-full w-screen bg-white pb-4 lg:static lg:flex flex-1 lg:items-center lg:justify-between lg:bg-transparent lg:pb-0">
                    <ul
                      class="flex flex-col lg:px-6 lg:flex-row flex-1 lg:justify-center lg:items-center lg:space-y-0 lg:space-x-8 d-none">
                      <li class="flex items-center p-2 border-t border-gray-200 lg:border-t-transparent lg:p-0">
                        <a href="/notre-mission" class="text-gray-800">Notre mission</a>
                      </li>
                      <li class="flex items-center p-2 border-t border-gray-200 lg:border-t-transparent lg:p-0">
                        <a href="/devis" class="text-gray-800">Nos services</a>
                      </li>
                      <li class="flex items-center p-2 border-t border-gray-200 lg:border-t-transparent lg:p-0">
                        <div class="group relative">
                          <button
                            class="text-gray-800 flex w-full cursor-pointer flex-row items-center gap-1 underline-offset-8 lg:justify-center">
                            <span class="">Pour les professionnels de santé</span>
                            <i class="fa-regular fa-chevron-down ml-1 transition-['rotate'] lg:group-hover:rotate-[180deg]"
                              aria-hidden="true"></i>
                          </button>
                          <div
                            class="left-0 top-full z-50 hidden w-full text-black lg:absolute lg:w-[260px] lg:pt-2 lg:group-hover:block">
                            <div class="mt-2 bg-white p-1.5 lg:rounded-lg lg:border lg:border-gray-200 lg:shadow-sm">
                              <a class="block cursor-pointer border-b border-solid px-3 py-1.5 hover:bg-[#1900410a] lg:py-3 lg:font-medium"
                                href="/professionnels-de-sante">Professionnels de santé</a>
                              <a class="block cursor-pointer border-b border-solid px-3 py-1.5 hover:bg-[#1900410a] lg:py-3 lg:font-medium"
                                href="/temoignages">Témoignages</a>
                              <a class="block cursor-pointer px-3 py-1.5 hover:bg-[#1900410a] lg:py-3 lg:font-medium"
                                href="/ressources">Ressources</a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="flex items-center p-2 border-t border-gray-200 lg:border-t-transparent lg:p-0">
                        <div class="group relative">
                          <button
                            class="text-gray-800 flex w-full cursor-pointer flex-row items-center gap-1 underline-offset-8 lg:justify-center">
                            <span class="">Infos pratiques</span>
                            <i class="fa-regular fa-chevron-down ml-1 transition-['rotate'] lg:group-hover:rotate-[180deg]"
                              aria-hidden="true"></i>
                          </button>
                          <div
                            class="left-0 top-full z-50 hidden w-full text-black lg:absolute lg:w-[260px] lg:pt-2 lg:group-hover:block">
                            <div class="mt-2 bg-white p-1.5 lg:rounded-lg lg:border lg:border-gray-200 lg:shadow-sm">
                              <a class="block cursor-pointer border-b border-solid px-3 py-1.5 hover:bg-[#1900410a] lg:py-3 lg:font-medium"
                                href="/faq">FAQ</a>
                              <a class="block cursor-pointer border-b border-solid px-3 py-1.5 hover:bg-[#1900410a] lg:py-3 lg:font-medium"
                                href="/blog">Blog</a>
                              <a class="block cursor-pointer px-3 py-1.5 hover:bg-[#1900410a] lg:py-3 lg:font-medium"
                                href="/partenaires">Partenaires</a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div> -->
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
                      <div class="[font-family:var(--font-family-heading)]">Assurance Santé Spécialement pour les Médecins</div>
                      <div class="text-[var(--primary-color)] [font-family:var(--font-family-heading)]">Protection exclusive pour les professionnels de santé</div>
                      <div class="[font-family:var(--font-family-heading)] 2xl:text-base"><br></div>
                    </h1>
                    <p class="mb-6 text-center text-[var(--gray-text-color)] sm:text-sm lg:text-left">Santé Pro Audio
                       propose une assurance santé conçue exclusivement pour les médecins. Profitez d'avantages uniques et d'une couverture personnalisée répondant aux besoins spécifiques de votre profession. Votre santé est notre priorité.</p>
                    <div class="mb-10 text-center lg:text-left">
                      <a href="/devis"
                        class="items-center rounded bg-[var(--primary-button-bg-color)] px-4 py-2 font-semibold text-[var(--primary-button-text-color)] hover:bg-[var(--primary-button-hover-bg-color)] hover:text-[var(--primary-button-hover-text-color)]">
                        <span class="">Découvrez Nos Offres</span>
                      </a>
                    </div>
                  </div>
                  <div class="relative mt-10 hidden w-full overflow-visible lg:block lg:w-[45%] lg:p-4">
                    <div
                      class="absolute bottom-0 left-0 h-0 w-0 border-[80px] border-transparent border-b-[var(--primary-color)] border-l-[var(--primary-color)]">
                    </div>
                    <!-- leave data-seo-image attribute on this div -->
                    <div
                      class="absolute -right-8 top-14 h-[130px] w-[170px] bg-[radial-gradient(#cacccc_3px,transparent_3px)] [background-size:14px_14px]">
                    </div>
                    <img
                      src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/3013a0ee-70fb-4fac-9adb-5ff33cbe6f00/publicContain"
                      alt="Hero" class="relative mt-6 aspect-square w-full rounded-2xl object-cover lg:mt-0"
                      data-landingsite-gallery-type="image" data-seo-image=""
                      data-media="{&quot;id&quot;:&quot;2153813386&quot;,&quot;src&quot;:&quot;iStock&quot;,&quot;type&quot;:&quot;image&quot;}">
                  </div>
                </div>
              </div>
            </section>
            <section class="bg-[#ffffff] py-16 code-section" id="sz6rb8">
              <div class="container mx-auto px-4 sm:px-10 xl:px-28">
                <h2
                  class="mb-6 text-center text-2xl font-bold [font-family:var(--font-family-heading)] xl:text-3xl 2xl:text-4xl">
                  Solutions d'Assurance Santé Spécialement Conçues pour les Médecins, Infirmiers et Sages-Femmes</h2>
                <h3 class="mx-auto mb-10 w-3/4 text-center font-thin text-[var(--gray-text-color)]"><br></h3>
                <div class="flex flex-row">
                  <div class="hidden w-[28%] xl:block">
                    <img
                      src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/81bb9cbf-95e6-4ee4-5391-fbfd35873600/public"
                      alt="Professionnels de santé" class="relative mt-8 h-full rounded-xl object-cover lg:mt-0"
                      data-landingsite-gallery-type="image"
                      data-media="{&quot;id&quot;:&quot;2050883733&quot;,&quot;src&quot;:&quot;iStock&quot;,&quot;type&quot;:&quot;image&quot;}">
                  </div>
                  <div class="grid w-full grid-cols-2 gap-y-10 md:grid-cols-3 xl:w-[72%]">
                    <div
                      class="flex-1 px-6 text-center md:max-w-xs transform transition duration-300 hover:scale-105 hover:shadow-lg">
                      <div
                        class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-100 text-3xl text-blue-500">
                        <i class="fa-duotone fa-user-md" aria-hidden="true"></i>
                      </div>
                      <h4 class="mb-3 text-xl font-semibold">Assurance pour Médecins</h4>
                      <p class="text-[var(--gray-text-color)]">Protégez votre parcours médical avec des solutions spécialement conçues pour les médecins.</p>
                    </div>
                    <div
                      class="flex-1 px-6 text-center md:max-w-xs transform transition duration-300 hover:scale-105 hover:shadow-lg">
                      <div
                        class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-3xl text-teal-500">
                        <i class="fa-duotone fa-user-nurse" aria-hidden="true"></i>
                      </div>
                      <h4 class="mb-2 text-xl font-semibold">Services pour Infirmiers</h4>
                      <p class="break-words text-[var(--gray-text-color)]">Sécurisez vos ambitions professionnelles avec notre large gamme de protections pour infirmiers.</p>
                    </div>
                    <div
                      class="flex-1 px-6 text-center md:max-w-xs transform transition duration-300 hover:scale-105 hover:shadow-lg">
                      <div
                        class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 text-3xl text-yellow-500">
                        <i class="fa-duotone fa-baby" aria-hidden="true"></i>
                      </div>
                      <h4 class="mb-3 text-xl font-semibold">Protection pour Sages-Femmes</h4>
                      <p class="text-[var(--gray-text-color)]">Optez pour une assurance qui soutient votre vocation à accompagner les futures mamans.</p>
                    </div>
                    <div
                      class="flex-1 px-6 text-center md:max-w-xs transform transition duration-300 hover:scale-105 hover:shadow-lg">
                      <div
                        class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-stone-100 text-3xl text-stone-500">
                        <i class="fa-duotone fa-user-shield" aria-hidden="true"></i>
                      </div>
                      <h4 class="mb-2 text-xl font-semibold">Sérénité et Confiance</h4>
                      <p class="text-[var(--gray-text-color)]">Profitez d'une assurance qui vous apporte la tranquillité
                        d'esprit et la confiance nécessaire pour vous consacrer à vos patients.</p>
                    </div>
                    <div
                      class="flex-1 px-6 text-center md:max-w-xs transform transition duration-300 hover:scale-105 hover:shadow-lg">
                      <div
                        class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-violet-100 text-3xl text-violet-500">
                        <i class="fa-duotone fa-calendar-check" aria-hidden="true"></i>
                      </div>
                      <h4 class="mb-2 text-xl font-semibold">Gestion Administrative Simplifiée</h4>
                      <p class="text-[var(--gray-text-color)]">Facilitez votre quotidien administratif pour vous concentrer sur l'essentiel : vos patients.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="code-section" id="sa2hck6">
              <div class="container mx-auto px-4 pb-20 sm:px-12 lg:pt-32 xl:px-32">
                <div>
                  <div
                    class="relative flex flex-1 items-center justify-center rounded-3xl bg-[var(--primary-color)] md:h-[500px]">
                    <div class="flex h-full w-full flex-row">
                      <div
                        class="relative flex w-full flex-col overflow-hidden rounded-3xl py-20 pl-10 pr-10 text-[var(--light-text-color)] md:w-1/2 lg:pl-32">
                        <div
                          class="absolute -left-16 -top-16 h-[280px] w-[280px] rounded-full border-[45px] border-[var(--medium-background-color)]">
                        </div>
                        <div class="relative z-10 text-center md:text-left">
                          <div class="mb-3 text-xs">Optimisez votre parcours professionnel avec une couverture santé
                            dédiée</div>
                          <div
                            class="mb-3 font-bold [font-family:var(--font-family-heading)] lg:text-3xl 2xl:text-3xl xl:text-xl md:text-lg text-xl">
                            Assurance santé sur mesure pour les Médecins, Infirmiers et Sages-Femmes</div>
                          <div class="mb-10 text-sm md:text-xs">Concentrez-vous sur vos patients pendant que nous prenons
                            soin de votre sécurité et de votre bien-être. Adhérez dès aujourd'hui pour bénéficier d'une
                            protection adaptée à vos besoins professionnels.</div>
                          <a href="/devis"
                            class="primary-color-text items-center rounded bg-[var(--secondary-button-bg-color)] px-7 py-[var(--button-padding-y)] text-xs font-semibold text-[var(--secondary-button-text-color)] hover:bg-[var(--secondary-button-hover-bg-color)] hover:text-[var(--secondary-button-hover-text-color)]">
                            <span class="">Découvrir Nos Offres</span>
                          </a>
                        </div>
                      </div>
                      <div class="relative hidden md:block md:w-1/2">
                        <div class="absolute bottom-0 lg:h-[105%] xl:left-12 xl:h-[120%]">
                          <div
                            class="absolute right-0 top-48 h-[135px] w-[140px] bg-[radial-gradient(#cccacc,transparent_3px)] [background-size:15px_15px] 2xl:-right-8 2xl:w-[180px]">
                          </div>
                          <img class="relative z-20 h-full"
                            src="https://landingsite-static-web-images.s3.us-east-2.amazonaws.com/man_with_ipad.png"
                            alt="Health Professional" data-landingsite-gallery-type="health-professional">
                        </div>
                        <div class="absolute h-full w-full overflow-hidden rounded-3xl">
                          <div
                            class="absolute -bottom-14 -right-14 h-[280px] w-[280px] rounded-full border-[45px] border-[var(--medium-background-color)]">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="relative code-section" id="szvf8kb">
              <div
                class="absolute bottom-0 top-0 h-full w-full overflow-hidden bg-[var(--light-background-color)] md:h-[600px]">
                <div
                  class="absolute -left-32 -top-32 h-[350px] w-[350px] rounded-full border-[50px] border-[var(--medium-background-color)]">
                </div>
                <div
                  class="absolute -right-50 bottom-0 h-[350px] w-[350px] rounded-full border-[50px] border-[var(--medium-background-color)]">
                </div>
              </div>
              <div class="mx-auto px-4 pb-24 lg:container sm:px-8 xl:px-24">
                <div class="relative">
                  <div class="pt-20">
                    <div class="mb-2 text-center text-xs text-[var(--primary-color)] lg:text-left">Nos Réalisations</div>
                    <h1
                      class="mb-6 text-center text-2xl font-bold [font-family:var(--font-family-heading)] lg:text-left lg:text-3xl xl:text-4xl">
                      Solutions d'Assurance Santé pour les Professionnels de la Santé
                    </h1>
                    <p class="mb-6 text-center text-base font-thin text-[var(--gray-text-color)] lg:text-left">
                      Découvrez comment Santé Pro Audio a transformé la couverture santé de médecins, infirmiers et sages-femmes. Nos projets sont conçus pour vous protéger et soutenir votre pratique
                      professionnelle.
                    </p>
                  </div>
                </div>
                <div class="relative grid grid-cols-1 gap-6 md:grid-cols-3">
                  <div
                    class="flex flex-col rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                    <div class="relative aspect-square h-[350px] overflow-hidden rounded-t-2xl">
                      <img class="h-full w-full object-cover"
                        src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/af91dc63-48a4-4b94-6bc0-e93ddb395e00/public"
                        alt="Hero" data-landingsite-gallery-type="image"
                        data-media="{&quot;id&quot;:&quot;2153280402&quot;,&quot;src&quot;:&quot;iStock&quot;,&quot;type&quot;:&quot;image&quot;}">
                    </div>
                    <div class="rounded-b-2xl bg-[#ffffff] p-4">
                      <div class="text-xl font-bold">Couverture Santé Personnalisée</div>
                      <div class="text-base font-thin text-[var(--gray-text-color)]">Assurance sur mesure pour les
                        professionnels de la santé</div>
                    </div>
                  </div>
                  <div
                    class="flex flex-col rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                    <div class="relative aspect-square h-[350px] overflow-hidden rounded-t-2xl">
                      <img class="h-full w-full object-cover"
                        src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/2ad3525c-aad0-486a-466b-51803e67fa00/publicContain"
                        alt="Hero" data-landingsite-gallery-type="image"
                        data-media="{&quot;id&quot;:&quot;2158667975&quot;,&quot;src&quot;:&quot;iStock&quot;,&quot;type&quot;:&quot;image&quot;}">
                    </div>
                    <div class="rounded-b-2xl bg-[#ffffff] p-4">
                      <div class="text-xl font-bold">Soutien Financier Optimal</div>
                      <div class="text-base font-thin text-[var(--gray-text-color)]">Sécurisez votre avenir professionnel
                        avec notre aide</div>
                    </div>
                  </div>
                  <div
                    class="flex flex-col rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                    <div class="relative aspect-square h-[350px] overflow-hidden rounded-t-2xl">
                      <img class="h-full w-full object-cover"
                        src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/e0abfe14-1f5a-48fd-fdfb-afad98d54300/publicContain"
                        alt="Hero" data-landingsite-gallery-type="image"
                        data-media="{&quot;id&quot;:&quot;2153805399&quot;,&quot;src&quot;:&quot;iStock&quot;,&quot;type&quot;:&quot;image&quot;}">
                    </div>
                    <div class="rounded-b-2xl bg-[#ffffff] p-4">
                      <div class="text-xl font-bold">Prévention et Bien-être</div>
                      <div class="text-base font-thin text-[var(--gray-text-color)]">Des solutions pour préserver votre
                        santé physique et mentale</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="relative bg-[#ffffff] code-section" id="s5qjejt">
              <div class="container relative z-10 mx-auto px-4 pb-8 pt-12 sm:px-10 lg:pb-16 xl:px-24">
                <h2
                  class="mb-4 text-center text-2xl font-bold [font-family:var(--font-family-heading)] xl:text-3xl 2xl:text-4xl">
                  Ce Que Disent Nos Clients</h2>
                <h3 class="mx-auto mb-12 w-3/4 text-center font-thin text-[var(--gray-text-color)] text-sm">Votre
                  couverture santé, conçue par des professionnels pour des professionnels.</h3>
                <div class="relative w-full">
                  <div class="absolute h-full w-full -rotate-3 transform rounded-3xl bg-[var(--medium-background-color)]">
                  </div>
                  <div class="relative z-10 w-full rounded-3xl bg-[#ffffff] py-16 shadow-[0_0_25px_rgba(0,0,0,0.1)]">
                    <div class="absolute -top-8 left-8"><i
                        class="fa-solid fa-quote-left text-6xl text-[var(--medium-background-color)]"
                        aria-hidden="true"></i></div>
                    <div class="absolute -bottom-8 right-8"><i
                        class="fa-solid fa-quote-right text-6xl text-[var(--medium-background-color)]"
                        aria-hidden="true"></i></div>
                    <div class="flex flex-col items-center justify-end sm:flex-row">
                      <div class="w-[40%] sm:w-[20%]">
                        <div class="relative mx-auto aspect-square max-h-[250px]">
                          <div
                            class="absolute left-4 top-4 h-full w-full rounded-br-2xl border-2 border-[var(--dark-border-color)]">
                          </div>
                          <div
                            class="absolute bottom-4 right-4 h-full w-full rounded-tl-2xl border-2 border-[var(--dark-border-color)]">
                          </div>
                          <img
                            src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/c9171c36-a5e9-47fb-b946-560e28d11f00/public"
                            alt="Professionnel de santé" class="relative mt-4 h-full rounded-2xl object-cover lg:mt-0"
                            data-landingsite-gallery-type="image" data-testimonial-image="" data-dont-replace=""
                            data-media="{&quot;id&quot;:&quot;2156062809&quot;,&quot;src&quot;:&quot;iStock&quot;,&quot;type&quot;:&quot;image&quot;}">
                        </div>
                      </div>
                      <div class="sm:w-[60%]">
                        <div class="relative flex h-full flex-col justify-center p-8">
                          <div class="mb-2 text-2xl font-bold">Satisfaction Exceptionnelle</div>
                          <div class="mb-2 text-sm">"Grâce à Santé Pro Audio, j'ai enfin une couverture santé qui répond
                            parfaitement à mes besoins en tant que médecin. Leur service est réactif et humain, je me sens
                            soutenue dans ma pratique." </div>
                          <div class="mb-2 text-sm font-bold">- Dr. Élise Moreau</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="relative bg-[#ffffff] code-section" id="sgk6lzo">
              <div class="container mx-auto px-4 sm:px-12 lg:pb-12 xl:px-32">
                <div class="flex flex-col items-center lg:flex-row">
                  <div class="mt-8 w-full lg:mt-16 lg:w-[55%] lg:pr-10">
                    <h1
                      class="mb-6 text-center text-3xl font-bold [font-family:var(--font-family-heading)] lg:text-left xl:text-4xl 2xl:text-5xl">
                      <div class="">Assurance Santé Exclusivement pour les Professionnels de la Santé</div>
                    </h1>
                    <p class="mb-6 text-center text-[var(--gray-text-color)] lg:text-left text-sm">Santé Pro Audio se
                      consacre à fournir des solutions d'assurance santé sur mesure, spécifiquement pour les médecins,
                      infirmiers et sages-femmes. Avec notre couverture, vous êtes assuré d'obtenir une
                      protection qui répond parfaitement à vos exigences professionnelles.</p>
                    <div class="mb-6 pl-8 text-center text-[var(--gray-text-color)] lg:text-left text-sm">
                      <ul class="">
                        <li class="mb-3 flex flex-row"><i class="fa fa-check mr-3 mt-[4px] text-green-500"
                            aria-hidden="true"></i><span class="">Protection Spécialisée - Profitez d'une couverture
                            conçue pour les défis uniques auxquels font face les professionnels de santé.</span></li>
                        <li class="mb-3 flex flex-row"><i class="fa fa-check mr-3 mt-[4px] text-green-500"
                            aria-hidden="true"></i><span class="">Assistance Personnalisée - Notre équipe est à votre
                            écoute pour répondre à toutes vos questions à tout moment.</span></li>
                        <li class="mb-3 flex flex-row"><i class="fa fa-check mr-3 mt-[4px] text-green-500"
                            aria-hidden="true"></i><span class="">Transparence Totale - Aucun coût caché, juste une
                            communication claire et honnête tout au long de votre parcours avec nous.</span></li>
                      </ul>
                    </div>
                    <p class="mb-8 text-center text-[var(--gray-text-color)] lg:text-left text-sm">Nous sommes une équipe
                      passionnée qui comprend les besoins spécifiques de votre pratique. Laissez-nous vous accompagner
                      dans la protection de votre santé afin que vous puissiez vous concentrer sur ce qui compte vraiment
                      : vos patients.</p>
                    <div class="mb-10 text-center lg:text-left"><a href="/devis"
                        class="items-center rounded-[var(--button-rounded-radius)] bg-[var(--primary-color)] px-[var(--button-padding-x)] py-[var(--button-padding-y)] font-semibold text-[var(--primary-button-text-color)] hover:bg-[var(--primary-button-hover-bg-color)] hover:bg-[var(--primary-button-hover-text-color)]"><span>Découvrez
                          Nos Solutions</span></a></div>
                  </div>
                  <div class="relative mt-8 hidden w-full overflow-visible lg:block lg:w-[45%] lg:p-4">
                    <div
                      class="absolute bottom-0 left-0 h-0 w-0 border-[60px] border-transparent border-b-[var(--primary-color)] border-l-[var(--primary-color)]">
                    </div>
                    <div
                      class="absolute -right-7 top-12 h-[130px] w-[170px] bg-[radial-gradient(#cbcacc_3px,transparent_3px)] [background-size:14px_14px]">
                    </div><img
                      src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/670a4887-54b6-4002-c91d-9bc6ad5f7500/public"
                      alt="Hero" class="relative mt-6 aspect-square w-full rounded-2xl object-cover lg:mt-0"
                      data-landingsite-gallery-type="image"
                      data-media="{&quot;id&quot;:&quot;2157055065&quot;,&quot;src&quot;:&quot;iStock&quot;,&quot;type&quot;:&quot;image&quot;}">
                    <div class="absolute bottom-0 right-0 z-10 aspect-square w-[40%] rounded-2xl bg-[#ffffff] p-4"><img
                        src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/0d78a917-0305-4497-1341-1d5178ea4300/publicContain"
                        alt="Hero" class="relative mt-6 h-full object-cover lg:mt-0" data-landingsite-gallery-type="image"
                        data-media="{&quot;id&quot;:&quot;2160715528&quot;,&quot;src&quot;:&quot;iStock&quot;,&quot;type&quot;:&quot;image&quot;}">
                    </div>
                  </div>
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
                    <div class="text-gray-700 2xl:pr-[30%]">une assurance santé dédiée aux médecins, infirmiers et
                      sages-femmes</div>
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
                  <div class="mb-6 flex flex-col space-y-3 text-[var(--dark-text-color)]">
                    <div class="mb-6 text-xl font-semibold">Contactez-nous</div>
                    <div class="flex flex-row">
                      <div class="flex h-8 w-8 items-center justify-center rounded-full p-2">
                        <i class="primary-color-text fa-regular fa-phone text-lg text-[var(--primary-color)]"
                          aria-hidden="true"></i>
                      </div>
                      <div class="flex items-center text-sm">(33) 666-6666</div>
                    </div>
                    <div class="flex flex-row">
                      <div class="flex h-8 w-8 items-center justify-center rounded-full p-2">
                        <i class="primary-color-text fa-regular fa-envelope text-lg text-[var(--primary-color)]"
                          aria-hidden="true"></i>
                      </div>
                      <div class="flex items-center text-sm">info@santeproaudio.com</div>
                    </div>
                    <div class="flex flex-row">
                      <div class="flex h-8 w-8 items-center justify-center rounded-full p-2">
                        <i class="primary-color-text fa-regular fa-location-dot text-lg text-[var(--primary-color)]"
                          aria-hidden="true"></i>
                      </div>
                      <div class="flex items-center text-sm">Paris, France</div>
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
