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

<style>
@import "../assets/home.css";
</style>

<template>

  <div class="h-full bg-white">
    <div class="frame-root">
    <div class="frame-content"></div>
    <div class="frame-content">
      <div class="[font-family:var(--font-family-body)]">
        <div>
          <header class="relative z-50 bg-[var(--light-background-color)] code-section" id="srgg50r">
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
                </div>
                <div id="navigation-menu"
                  class="hidden absolute left-0 top-full w-screen bg-white pb-4 lg:static lg:flex flex-1 lg:items-center lg:justify-between lg:bg-transparent lg:pb-0">
                  <ul
                    class="flex flex-col lg:px-6 lg:flex-row flex-1 lg:justify-center lg:items-center lg:space-y-0 lg:space-x-8">
                    <li class="flex items-center p-2 border-t border-gray-200 lg:border-t-transparent lg:p-0">
                      <a href="/a-propos" class="text-gray-800">À propos</a>
                    </li>
                    <li class="flex items-center p-2 border-t border-gray-200 lg:border-t-transparent lg:p-0">
                      <div class="group relative">
                        <button class="flex items-center text-gray-800 lg:justify-center">
                          <span class="">Services</span>
                          <i class="fa-regular fa-chevron-down ml-1 transition-[rotate] lg:group-hover:rotate-[180deg]"
                            aria-hidden="true"></i>
                        </button>
                        <div
                          class="left-0 top-full z-50 hidden w-full text-black lg:absolute lg:w-[260px] lg:pt-2 lg:group-hover:block">
                          <div class="mt-2 bg-white p-1.5 lg:rounded-lg lg:border lg:border-gray-200 lg:shadow-sm">
                            <a class="block cursor-pointer border-b border-solid px-3 py-1.5 hover:bg-[#1900410a] lg:py-3 lg:font-medium"
                              href="/services">Services</a>
                            <a class="block cursor-pointer px-3 py-1.5 hover:bg-[#1900410a] lg:py-3 lg:font-medium"
                              href="/assurance-audioprothesistes">Assurance pour Audioprothésistes</a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="flex items-center p-2 border-t border-gray-200 lg:border-t-transparent lg:p-0">
                      <a href="/ressources" class="text-gray-800">Ressources</a>
                    </li>
                    <li class="flex items-center p-2 border-t border-gray-200 lg:border-t-transparent lg:p-0">
                      <a href="/faq" class="text-gray-800">FAQ</a>
                    </li>
                  </ul>
                </div> -->
                <div
                  class="flex flex-col mt-4 lg:flex-row items-center space-y-4 lg:mt-0 lg:space-y-0 lg:space-x-4 text-sm lg:text-base">
                  <a href="/devis"
                    class="primary-color-bg rounded bg-[var(--primary-button-bg-color)] px-[var(--button-padding-x)] py-[var(--button-padding-y)] text-[var(--primary-button-text-color)] hover:bg-[var(--primary-button-hover-bg-color)] hover:text-[var(--primary-button-hover-text-color)]">Devis
                    en 2 minutes</a>
                </div>
              </div>
            </nav>
          </header>
        </div>
        <div>
          <section class="relative bg-[var(--light-background-color)] code-section" id="sbjfo3n">
            <div
              class="absolute -left-56 top-0 h-[400px] w-[400px] rounded-full border-[60px] border-[var(--medium-background-color)]">
            </div>
            <div class="absolute bottom-0 top-0 hidden h-full w-full overflow-hidden lg:block">
              <div
                class="absolute -right-60 bottom-14 h-[400px] w-[400px] rounded-full border-[60px] border-[var(--medium-background-color)]">
              </div>
            </div>
            <div class="container relative mx-auto px-4 sm:px-12 lg:pb-32 xl:px-32">
              <div class="relative flex flex-col items-center lg:flex-row">
                <div class="mt-12 w-full lg:mt-24 lg:w-[55%] lg:pr-14">
                  <h1 class="mb-6 text-center text-3xl font-bold lg:text-left xl:text-4xl 2xl:text-5xl">
                    <div class="[font-family:var(--font-family-heading)] 2xl:text-4xl">Assurance santé <br>​Spéciale
                      Audioprothésistes</div>
                    <div class="text-[var(--primary-color)] [font-family:var(--font-family-heading)] 2xl:text-3xl">
                      Sécurisez Votre Pratique</div>
                  </h1>
                  <p class="mb-6 text-center text-sm text-[var(--gray-text-color)] lg:text-left">Santé Pro Audio propose
                    des solutions d'assurance conçues exclusivement pour les audioprothésistes. Notre couverture sur
                    mesure vous offre la tranquillité d'esprit nécessaire pour vous concentrer sur vos patients, tout en
                    sachant que votre pratique est protégée contre les imprévus.</p>
                  <div class="mb-12 text-center lg:text-left"><a href="/devis"
                      class="items-center rounded bg-[var(--primary-button-bg-color)] px-5 py-3 font-semibold text-[var(--primary-button-text-color)] hover:bg-[var(--primary-button-hover-bg-color)] hover:text-[var(--primary-button-hover-text-color)]"><span
                        class="">Découvrez Nos Offres</span></a></div>
                </div>
                <div class="relative mt-12 hidden w-full overflow-visible lg:block lg:w-[45%] lg:p-6">
                  <div
                    class="absolute bottom-0 left-0 h-0 w-0 border-[100px] border-transparent border-b-[var(--primary-color)] border-l-[var(--primary-color)]">
                  </div>
                  <!-- leave data-seo-image attribute on this div -->
                  <div
                    class="absolute -right-9 top-16 h-[120px] w-[160px] bg-[radial-gradient(#cacccc_3px,transparent_3px)] [background-size:14px_14px]">
                  </div><img
                    src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/7f9bf9e0-075c-4329-2faf-0fc45176ad00/public"
                    alt="Hero" class="relative mt-8 aspect-[4/3] w-full rounded-2xl object-cover lg:mt-0"
                    data-landingsite-gallery-type="image" data-seo-image=""
                    data-media="{&quot;id&quot;:&quot;1325611798&quot;,&quot;src&quot;:&quot;iStock&quot;,&quot;type&quot;:&quot;image&quot;}">
                </div>
              </div>
            </div>
          </section>
          <section class="py-4 md:py-8 code-section" id="s2ybhw">
            <div class="container mx-auto px-4 py-8 sm:py-16 md:px-6 xl:px-12 2xl:px-36">
              <div class="flex flex-col space-y-6 md:space-y-8">
                <h3
                  class="text-center text-sm font-medium uppercase tracking-widest text-[var(--primary-color)] md:text-left">
                  Découvrez Santé Pro Audio</h3>
                <div class="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-8">
                  <div
                    class="flex-1 text-balance text-2xl sm:text-3xl font-semibold [font-family:var(--font-family-heading)] text-center md:text-left 2xl:text-2xl">
                    Solutions d'Assurance Spécialisées pour les Audioprothésistes</div>
                  <div class="flex-1 text-center text-base sm:text-lg md:text-left 2xl:text-base">Avec un engagement
                    inébranlable envers le soutien des professionnels de la santé, Santé Pro Audio propose des solutions
                    d'assurance adaptées aux besoins uniques de chaque audioprothésiste.</div>
                </div>
                <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  <div
                    class="flex flex-1 flex-col border-[var(--light-border-color)] transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02]">
                    <img class="h-36 object-cover lg:max-h-none dont-replace" alt=""
                      src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/6a8dd3fb-19ab-415f-7772-1838d8156d00/public"
                      data-landingsite-gallery-type="image"
                      data-media="{&quot;id&quot;:&quot;iumvwnj&quot;,&quot;src&quot;:&quot;upload&quot;,&quot;type&quot;:&quot;image&quot;}"
                      oncontextmenu="return false;">
                    <div class="py-3 text-center text-xl font-semibold 2xl:text-base">Couverture Personnalisée</div>
                    <div class="px-6 pb-3 text-center text-sm">Obtenez une couverture sur mesure qui répond parfaitement
                      aux besoins de votre pratique d'audioprothésiste.</div>
                  </div>
                  <div
                    class="flex flex-1 flex-col border-[var(--light-border-color)] transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02]">
                    <img class="h-36 object-cover lg:max-h-none dont-replace" alt=""
                      src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/4f5309bb-e340-4d1a-8d3e-8730ec755e00/publicContain"
                      data-landingsite-gallery-type="image"
                      data-media="{&quot;id&quot;:&quot;iio5irl&quot;,&quot;src&quot;:&quot;upload&quot;,&quot;type&quot;:&quot;image&quot;}"
                      oncontextmenu="return false;">
                    <div class="py-3 text-center text-xl font-semibold">Support Dédié</div>
                    <div class="px-6 pb-3 text-center text-sm 2xl:text-sm">Profitez d'une assistance dédiée 24/7 pour
                      toute question liée à votre assurance professionnelle.</div>
                  </div>
                  <div
                    class="flex flex-1 flex-col border-[var(--light-border-color)] transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02]">
                    <img class="h-36 object-cover lg:max-h-none" alt=""
                      src="https://media.gettyimages.com/id/2080366444/photo/female-audiologist-doing-consultation-for-grey-haired-senior-man-patient-with-hear-problems.jpg?b=1&amp;s=612x612&amp;w=0&amp;k=20&amp;c=80pw8eHBsjcM1cD3ciH1y86Phy5loOXrfZUhhCkil00="
                      data-landingsite-gallery-type="image"
                      data-media="{&quot;id&quot;:&quot;2080366444&quot;,&quot;src&quot;:&quot;iStock&quot;,&quot;type&quot;:&quot;image&quot;}">
                    <div class="py-3 text-center text-xl font-semibold 2xl:text-base">Optimisation Locale</div>
                    <div class="px-6 pb-3 text-center text-sm">Renforcez votre visibilité et votre protection au sein
                      des communautés où vous exercez.</div>
                  </div>
                  <div
                    class="flex flex-1 flex-col border-[var(--light-border-color)] transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02]">
                    <img class="h-36 object-cover lg:max-h-none dont-replace" alt=""
                      src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/0b38327c-a10b-4740-9327-94adfb776300/public"
                      data-landingsite-gallery-type="image"
                      data-media="{&quot;id&quot;:&quot;ivf063l&quot;,&quot;src&quot;:&quot;upload&quot;,&quot;type&quot;:&quot;image&quot;}"
                      oncontextmenu="return false;">
                    <div class="py-3 text-center text-xl font-semibold 2xl:text-base">Transactions Simplifiées</div>
                    <div class="px-6 pb-3 text-center text-sm">Facilitez vos transactions avec des solutions de paiement
                      efficaces et adaptées à votre pratique.</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="code-section" id="s3901x">
            <div class="container mx-auto px-4 pb-16 sm:px-8 lg:pt-24 xl:px-24">
              <div class="">
                <div
                  class="relative flex flex-1 items-center justify-center rounded-3xl bg-[var(--primary-color)] md:h-[450px]">
                  <div class="flex h-full w-full flex-row">
                    <div
                      class="relative flex w-full flex-col overflow-hidden rounded-3xl py-24 pl-12 pr-12 text-[var(--light-text-color)] md:w-1/2 lg:pl-36">
                      <div
                        class="absolute -left-16 -top-16 h-[300px] w-[300px] rounded-full border-[50px] border-[var(--medium-background-color)]">
                      </div>
                      <div class="relative z-10 text-center md:text-left">
                        <div class="mb-3 text-xs 2xl:text-sm">Optimisez votre assurance professionnelle</div>
                        <div
                          class="mb-3 text-2xl font-bold [font-family:var(--font-family-heading)] lg:text-3xl xl:text-4xl 2xl:text-3xl">
                          Protection Spécialisée pour Audioprothésistes</div>
                        <div class="mb-8 text-sm 2xl:text-base">Concentrez-vous sur le bien-être de vos patients, tandis
                          que nous veillons à la sécurité de votre pratique avec des solutions d'assurance sur mesure.
                        </div>
                        <a href="/devis"
                          class="primary-color-text items-center rounded bg-[var(--secondary-button-bg-color)] px-8 py-[var(--button-padding-y)] text-sm font-semibold text-[var(--secondary-button-text-color)] hover:bg-[var(--secondary-button-hover-bg-color)] hover:text-[var(--secondary-button-hover-text-color)]">
                          <span class="">Découvrez Nos offres</span>
                        </a>
                      </div>
                    </div>
                    <div class="relative hidden md:block md:w-1/2">
                      <div class="absolute bottom-0 lg:h-[100%] xl:left-12 xl:h-[110%]">
                        <div
                          class="absolute right-0 top-48 h-[145px] w-[150px] bg-[radial-gradient(#cccacc,transparent_3px)] [background-size:16px_16px] 2xl:-right-9 2xl:w-[190px]">
                        </div>
                        <img class="relative z-20 h-full 2xl:text-sm"
                          src="https://landingsite-static-web-images.s3.us-east-2.amazonaws.com/business_woman.png"
                          alt="Business Owner" data-landingsite-gallery-type="person">
                      </div>
                      <div class="absolute h-full w-full overflow-hidden rounded-3xl">
                        <div
                          class="absolute -bottom-16 -right-16 h-[300px] w-[300px] rounded-full border-[50px] border-[var(--medium-background-color)]">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="relative code-section" id="sh59lbt">
            <div
              class="absolute bottom-0 top-0 h-full w-full overflow-hidden bg-[var(--light-background-color)] md:h-[700px]">
              <div
                class="absolute -left-40 -top-40 h-[400px] w-[400px] rounded-full border-[60px] border-[var(--medium-background-color)]">
              </div>
              <div
                class="absolute -right-60 bottom-0 h-[400px] w-[400px] rounded-full border-[60px] border-[var(--medium-background-color)]">
              </div>
            </div>
            <div class="mx-auto px-4 pb-32 lg:container sm:px-12 xl:px-32" id="services">
              <div class="relative">
                <div class="pt-24">
                  <div class="mb-2 text-center text-[10px] text-[var(--primary-color)] lg:text-left">Nos Réalisations
                  </div>
                  <h1
                    class="mb-4 text-center text-xl font-bold [font-family:var(--font-family-heading)] lg:text-left lg:text-2xl xl:text-3xl">
                    Assurance Spécialisée pour les Audioprothésistes</h1>
                  <p class="mb-4 text-center text-sm font-thin text-[var(--gray-text-color)] lg:text-left">Découvrez nos
                    solutions d'assurance sur mesure, conçues pour vous permettre de vous concentrer sur votre pratique
                    tout en garantissant la sécurité de vos patients.</p>
                </div>
              </div>
              <div class="relative grid grid-cols-1 gap-6 pt-8 md:grid-cols-3">
                <div class="flex flex-col rounded-3xl shadow-lg">
                  <div class="relative aspect-square h-[200px] overflow-hidden rounded-t-3xl"><img
                      class="h-full w-full object-cover dont-replace"
                      src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/6b8d3436-5a05-4eb8-4d74-5c7c597e7000/public"
                      alt="Consultation Audioprothésiste" data-landingsite-gallery-type="image"
                      data-media="{&quot;id&quot;:&quot;ics7rgp&quot;,&quot;src&quot;:&quot;upload&quot;,&quot;type&quot;:&quot;image&quot;}"
                      oncontextmenu="return false;"></div>
                  <div class="rounded-b-3xl bg-[#ffffff] p-4">
                    <div class="text-xl font-bold 2xl:text-lg">Assurance Personnalisée</div>
                    <div class="text-lg font-thin text-[var(--gray-text-color)] 2xl:text-base">Couverture adaptée pour
                      les audioprothésistes, vous permettant de travailler en toute tranquillité.<br>​<br></div>
                  </div>
                </div>
                <div class="flex flex-col rounded-3xl shadow-lg">
                  <div class="relative aspect-square h-[200px] overflow-hidden rounded-t-3xl"><img
                      class="h-full w-full object-cover dont-replace"
                      src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/d66f0dc4-769d-4fd7-c00e-3a0e2e5bb400/public"
                      alt="Technologie Audioprothésiste" data-landingsite-gallery-type="image"
                      data-media="{&quot;id&quot;:&quot;1279371001&quot;,&quot;src&quot;:&quot;iStock&quot;,&quot;type&quot;:&quot;image&quot;}"
                      oncontextmenu="return false;"></div>
                  <div class="rounded-b-3xl bg-[#ffffff] p-4">
                    <div class="text-xl font-bold 2xl:text-lg">Assistance Technique 24/7</div>
                    <div class="text-lg font-thin text-[var(--gray-text-color)] 2xl:text-base">Accès à un support
                      technique constant pour toute question liée à votre couverture.<br>​<br></div>
                  </div>
                </div>
                <div class="flex flex-col rounded-3xl shadow-lg">
                  <div class="relative aspect-square h-[200px] overflow-hidden rounded-t-3xl"><img
                      class="h-full w-full object-cover dont-replace"
                      src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/7c71d124-69d9-46aa-fa3a-a8c469850500/publicContain"
                      alt="Soins Audiologiques" data-landingsite-gallery-type="image"
                      data-media="{&quot;id&quot;:&quot;i9qteew&quot;,&quot;src&quot;:&quot;upload&quot;,&quot;type&quot;:&quot;image&quot;}"
                      oncontextmenu="return false;"></div>
                  <div class="rounded-b-3xl bg-[#ffffff] p-4">
                    <div class="text-xl font-bold 2xl:text-lg">Couverture Locale Optimale</div>
                    <div class="text-lg font-thin text-[var(--gray-text-color)] 2xl:text-base">Bénéficiez d'une
                      protection renforcée dans les communautés où vous exercez.<br>​</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="relative bg-[#ffffff] code-section" id="sg9qrtq">
            <div class="container mx-auto px-4 sm:px-12 lg:pb-12 xl:px-32">
              <div class="flex flex-col items-center lg:flex-row">
                <div class="mt-12 w-full lg:mt-24 lg:w-[55%] lg:pr-14">
                  <h1
                    class="mb-6 text-center text-3xl font-bold [font-family:var(--font-family-heading)] lg:text-left xl:text-4xl 2xl:text-5xl">
                    <div class="2xl:text-3xl">Assurance Spécialisée pour les Audioprothésistes</div>
                  </h1>
                  <p class="mb-6 text-center text-sm text-[var(--gray-text-color)] lg:text-left 2xl:text-sm">Santé Pro
                    Audio offre une couverture d'assurance adaptée aux professionnels de la santé, spécifiquement conçue
                    pour les audioprothésistes, afin de garantir votre tranquillité d'esprit pendant que vous vous
                    concentrez sur vos patients.</p>
                  <div class="mb-8 pl-8 text-center text-[var(--gray-text-color)] lg:text-left">
                    <ul class="">
                      <li class="mb-4 flex flex-row"><i class="fa fa-check mr-4 mt-1 text-green-500"
                          aria-hidden="true"></i><span class="2xl:text-sm">Protection sur Mesure - Bénéficiez d'une
                          couverture qui répond précisément aux défis uniques de votre pratique
                          d'audioprothésiste.</span></li>
                      <li class="mb-4 flex flex-row"><i class="fa fa-check mr-4 mt-1 text-green-500"
                          aria-hidden="true"></i><span class="2xl:text-sm">Soutien Disponible 24/7 - Notre équipe est à
                          votre écoute en permanence pour toute question ou besoin d'assistance concernant votre
                          assurance.</span></li>
                      <li class="mb-4 flex flex-row"><i class="fa fa-check mr-4 mt-1 text-green-500"
                          aria-hidden="true"></i><span class="2xl:text-sm">Transparence Totale - Pas de coûts cachés,
                          juste une communication claire tout au long de votre parcours avec nous.</span></li>
                    </ul>
                  </div>
                  <p class="mb-12 text-center text-[var(--gray-text-color)] lg:text-left 2xl:text-sm">Nous sommes
                    dévoués à vous fournir des solutions qui non seulement assurent votre pratique, mais favorisent
                    aussi la croissance de votre activité au service de vos patients.</p>
                  <div class="mb-12 text-center lg:text-left"><a href="/devis"
                      class="items-center rounded-[var(--button-rounded-radius)] bg-[var(--primary-color)] px-[var(--button-padding-x)] py-[var(--button-padding-y)] font-semibold text-[var(--primary-button-text-color)] hover:bg-[var(--primary-button-hover-bg-color)] hover:bg-[var(--primary-button-hover-text-color)]"><span
                        class="">Découvrez Nos Offres</span></a></div>
                </div>
                <div class="relative mt-12 hidden w-full overflow-visible lg:block lg:w-[45%] lg:p-6">
                  <div
                    class="absolute bottom-0 left-0 h-0 w-0 border-[100px] border-transparent border-b-[var(--primary-color)] border-l-[var(--primary-color)]">
                  </div>
                  <div
                    class="absolute -right-9 top-16 h-[145px] w-[190px] bg-[radial-gradient(#cbcacc_3px,transparent_3px)] [background-size:16px_16px]">
                  </div><img
                    src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/48a51aea-c9d5-4348-09d6-8e03b15c9f00/public"
                    alt="Hero" class="relative mt-8 aspect-square w-full rounded-2xl object-cover lg:mt-0"
                    data-landingsite-gallery-type="image"
                    data-media="{&quot;id&quot;:&quot;1126790906&quot;,&quot;src&quot;:&quot;iStock&quot;,&quot;type&quot;:&quot;image&quot;}">
                  <div class="absolute bottom-0 right-0 z-10 aspect-square w-[45%] rounded-2xl bg-[#ffffff] p-6"><img
                      src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/b860bd41-fec6-471f-895f-8d84ab4dea00/public"
                      alt="Hero" class="relative mt-8 h-full object-cover lg:mt-0 dont-replace"
                      data-landingsite-gallery-type="image"
                      data-media="{&quot;id&quot;:&quot;io4286&quot;,&quot;src&quot;:&quot;upload&quot;,&quot;type&quot;:&quot;image&quot;}"
                      oncontextmenu="return false;"></div>
                </div>
              </div>
            </div>
          </section>
          <section class="code-section" id="siks67r">
            <div class="mx-auto px-3 py-16 lg:container sm:px-8 xl:px-24">
              <div class="rounded-2xl bg-[#ffffff] p-4 shadow-[0_0_20px_rgba(0,0,0,0.1)]">
                <div class="flex flex-col lg:flex-row lg:space-x-6">
                  <div class="rounded-2xl bg-[var(--primary-color)] p-6 pt-8 text-[var(--light-text-color)]">
                    <div class="mb-3 text-sm uppercase">Contactez-Nous</div>
                    <div class="mb-4 text-2xl font-semibold [font-family:var(--font-family-heading)]"><i
                        class="fas fa-comment-dots" aria-hidden="true"></i> Partagez Votre Vision avec Nous</div>
                    <div class="hidden py-4 lg:block">
                      <div class="mb-6 flex flex-row space-x-4">
                        <div
                          class="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--dark-background-color)] p-4">
                          <i class="fa-duotone fa-location-dot text-xl" aria-hidden="true"></i></div>
                        <div class="flex flex-col">
                          <div class="text-lg font-semibold">Notre Siège</div>
                          <div class="">45, rue de Boulainvilliers, 75016 Paris</div>
                        </div>
                      </div>
                      <div class="mb-6 flex flex-row space-x-4">
                        <div
                          class="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--dark-background-color)] p-4">
                          <i class="fa-duotone fa-envelope text-xl" aria-hidden="true"></i></div>
                        <div class="flex flex-col">
                          <div class="text-lg font-semibold">Nous Contacter par Email</div>
                          <div class="">contact@santeproaudio.fr</div>
                        </div>
                      </div>
                      <div class="flex flex-row space-x-4">
                        <div
                          class="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--dark-background-color)] p-4">
                          <i class="fa-duotone fa-phone text-xl" aria-hidden="true"></i></div>
                        <div class="flex flex-col">
                          <div class="text-lg font-semibold">Contactez-Nous par Téléphone</div>
                          <div class="">+33 1 46 59 22 28</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-full p-6" id="contact">
                    <form >
                      <div class="flex flex-col space-y-4 md:space-y-12">
                        <div class="flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0">
                          <div class="w-full">
                            <div class=""><label for="first-name"
                                class="font-medium text-[var(--dark-text-color)]">Prénom</label></div>
                            <div><input name="first-name" type="text"
                                class="w-full border border-[#ffffff] border-b-[var(--gray-text-color)] p-2"
                                required=""></div>
                          </div>
                          <div class="w-full">
                            <div class=""><label for="last-name"
                                class="font-medium text-[var(--dark-text-color)]">Nom</label></div>
                            <div><input name="last-name" type="text"
                                class="w-full border border-[#ffffff] border-b-[var(--gray-text-color)] p-2"
                                required=""></div>
                          </div>
                        </div>
                        <div class="flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0">
                          <div class="w-full">
                            <div class=""><label for="email"
                                class="font-medium text-[var(--dark-text-color)]">Email</label></div>
                            <div><input type="email" name="email"
                                class="w-full border border-[#ffffff] border-b-[var(--gray-text-color)] p-2"
                                required=""></div>
                          </div>
                          <div class="w-full">
                            <div class=""><label for="phone" class="font-medium text-[var(--dark-text-color)]">Numéro de
                                Téléphone</label></div>
                            <div><input type="tel" name="phone"
                                class="w-full border border-[#ffffff] border-b-[var(--gray-text-color)] p-2"
                                required=""></div>
                          </div>
                        </div>
                        <div class="w-full">
                          <div class=""><label for="message"
                              class="font-medium text-[var(--dark-text-color)]">Message</label></div>
                          <div class=""><textarea name="message" rows="4"
                              class="w-full border border-[#ffffff] border-b-[var(--gray-text-color)] p-2"
                              required=""></textarea></div>
                        </div>
                        <div class=""><button type="submit"
                            class="items-center rounded-[var(--button-rounded-radius)] bg-[var(--primary-color)] px-[var(--button-padding-x)] py-[var(--button-padding-y)] text-sm font-semibold uppercase text-[var(--primary-button-text-color)] hover:bg-[var(--primary-button-hover-bg-color)] hover:text-[var(--primary-button-hover-text-color)]">Soumettre
                            Votre Message</button></div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div>
          <footer class="relative overflow-hidden bg-[var(--light-background-color)] py-16 code-section" id="sx6gvq">
            <div class="container relative mx-auto px-4 pb-0 sm:px-12 xl:px-32">
              <div
                class="absolute -left-80 -top-14 h-[400px] w-[400px] rounded-full border-[60px] border-[var(--medium-background-color)]">
              </div>
              <div
                class="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full border-[60px] border-[var(--medium-background-color)]">
              </div>
              <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden"></div>
              <div class="relative z-10 grid grid-cols-1 gap-x-2 sm:grid-cols-2 md:grid-cols-4">
                <div class="mb-8 flex flex-col space-y-4"><a href="/"
                    class="mb-8 text-xl font-bold text-[var(--primary-color)] [font-family:var(--font-family-heading)] lg:text-3xl"><span
                      class="">Santé </span><span class="text-gray-800">Pro Audio</span></a>
                  <div class="text-gray-700 2xl:pr-[30%]">Une assurance pour les audioprothésistes.</div>
                </div>
                <div class="mb-8 flex flex-col space-y-4 text-[var(--dark-text-color)]">
                  <div class="mb-8 text-2xl font-semibold">Menu</div>
                  <a href="/" class="">Accueil</a>
                  <a href="/#services" class="">Services</a>
                  <a href="/mentions-legales" class="">Mentions Légales</a>
                  <a href="/#faq" class="">FAQ</a>
                  <a href="/#contact" class="">Contact</a>
                </div>
                <div class="mb-8 flex flex-col space-y-4">
                  <div class="mb-8 text-2xl font-semibold">Nos Services</div>
                  <div class="flex flex-col space-y-4 text-[var(--dark-text-color)]">
                    <div class="">Assurance santé personnalisée</div>
                    <div class="">Formules adaptées aux audioprothésistes</div>
                    <div class="">Conseil en Protection Sociale</div>
                    <div class="">Indemnisation Rapide</div>
                    <div class="">Couverture complète et avantages</div>
                  </div>
                </div>
                <div class="mb-8 flex flex-col space-y-4 text-[var(--dark-text-color)]">
                  <div class="mb-8 text-2xl font-semibold">Contactez-nous</div>
                  <div class="flex flex-row">
                    <div class="flex h-10 w-10 items-center justify-center rounded-full p-2"><i
                        class="primary-color-text fa-regular fa-phone text-xl text-[var(--primary-color)]"
                        aria-hidden="true"></i></div>
                    <div class="flex items-center">+33 1 46 59 22 28</div>
                  </div>
                  <div class="flex flex-row">
                    <div class="flex h-10 w-10 items-center justify-center rounded-full p-2"><i
                        class="primary-color-text fa-regular fa-envelope text-xl text-[var(--primary-color)]"
                        aria-hidden="true"></i></div>
                    <div class="flex items-center">contact@santeproaudio.fr</div>
                  </div>
                  <div class="flex flex-row">
                    <div class="flex h-10 w-10 items-center justify-center rounded-full p-2"><i
                        class="primary-color-text fa-regular fa-location-dot text-xl text-[var(--primary-color)]"
                        aria-hidden="true"></i></div>
                    <div class="flex items-center">
                      <div><br></div>
                      <div class="">45, rue de Boulainvilliers, 75016 Paris, France</div>
                    </div>
                  </div>
                </div>
              </div>
              <p class="relative z-10 mt-24 text-center text-lg text-[var(--gray-text-color)]">© Santé Pro Audio 2024
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
