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
            <header class="relative z-50 code-section" id="sv6oagl">
              <nav class="container mx-auto py-10">
                <div class="flex items-center justify-between relative">
                  <div class="pl-6 text-xl font-bold">
                    <a href="/"
                      class="text-xl text-[var(--primary-color)] [font-family:var(--font-family-heading)] sm:text-3xl">
                      <span>
                        <img src='../assets/media/logo.png' width="300" height="75" alt="" class="img-fluid" />
                      </span>
                    </a>
                  </div>
                  <button id="mobile-menu-button" data-collapse-toggle="navigation-menu" type="button"
                    class="pr-6 text-[var(--dark-text-color)] lg:hidden" aria-controls="navigation-menu"
                    aria-expanded="false" aria-label="Navigation Menu">
                    <i class="fa-regular fa-bars feather feather-menu" aria-hidden="true"></i>
                  </button>
                  <div id="navigation-menu"
                    class="hidden absolute left-0 top-full mt-4 w-full bg-white pb-4 lg:static lg:mt-0 lg:flex flex-1 lg:items-center lg:justify-between lg:pb-0">
                    <ul
                      class="flex flex-col lg:px-6 lg:flex-row flex-1 lg:justify-center lg:items-center lg:space-y-0 lg:space-x-8">
                      <li class="flex items-center p-2 border-t border-gray-200 md:border-t-transparent md:p-0">
                        <div class="group relative">
                          <button class="text-[var(--dark-text-color)] flex items-center">
                            <!-- <span>À Propos</span> -->
                          </button>
                        </div>
                      </li>
                      <li class="flex items-center p-2 border-t border-gray-200 md:border-t-transparent md:p-0">
                        <div class="group relative">
                          <!--<button class="text-[var(--dark-text-color)] flex items-center">
                             <span>Nos Offres</span> 
                            <i class="fa-regular fa-chevron-down ml-1 transition-['rotate'] lg:group-hover:rotate-[180deg]"
                              aria-hidden="true"></i>
                          </button>-->
                          <div
                            class="left-0 top-full z-50 hidden w-full text-black lg:absolute lg:w-[260px] lg:pt-2 lg:group-hover:block">
                            <div class="mt-2 bg-white p-1.5 lg:rounded-lg lg:border lg:border-gray-200 lg:shadow-sm">
                              <a class="block cursor-pointer border-b border-solid px-3 py-1.5 hover:bg-[#1900410a] lg:py-3 lg:font-medium"
                                href="/services">Services</a>
                              <a class="block cursor-pointer px-3 py-1.5 hover:bg-[#1900410a] lg:py-3 lg:font-medium"
                                href="/pourquoi-nous-choisir">Pourquoi Nous Choisir</a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="flex items-center p-2 border-t border-gray-200 md:border-t-transparent md:p-0">
                        <div class="group relative">
                          <!-- <button class="text-[var(--dark-text-color)] flex items-center">
                            <span>Ressources</span> 
                            <i class="fa-regular fa-chevron-down ml-1 transition-['rotate'] lg:group-hover:rotate-[180deg]"
                              aria-hidden="true"></i>
                          </button>-->
                          <div
                            class="left-0 top-full z-50 hidden w-full text-black lg:absolute lg:w-[260px] lg:pt-2 lg:group-hover:block">
                            <div class="mt-2 bg-white p-1.5 lg:rounded-lg lg:border lg:border-gray-200 lg:shadow-sm">
                              <a class="block cursor-pointer border-b border-solid px-3 py-1.5 hover:bg-[#1900410a] lg:py-3 lg:font-medium"
                                href="/ressources">Ressources</a>
                              <a class="block cursor-pointer px-3 py-1.5 hover:bg-[#1900410a] lg:py-3 lg:font-medium"
                                href="/blog">Blog</a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="flex items-center p-2 border-t border-gray-200 md:border-t-transparent md:p-0">
                        <div class="group relative">
                          <button class="text-[var(--dark-text-color)] flex items-center">
                            <!-- <span>Équipe</span> -->
                          </button>
                        </div>
                      </li>
                      <li class="flex items-center p-2 border-t border-gray-200 md:border-t-transparent md:p-0">
                        <div class="group relative">
                          <button class="text-[var(--dark-text-color)] flex items-center">
                            <!-- <span>Contact</span> -->
                          </button>
                        </div>
                      </li>
                    </ul>
                    <div
                      class="flex mt-4 flex-col lg:flex-row items-center space-y-4 lg:mt-0 lg:space-y-0 lg:space-x-4 text-sm lg:text-base">
                      <!-- <a href="/signin" class="px-4 py-2 text-[var(--dark-text-color)]">Se Connecter</a> -->
                      <a href="/register"
                        class="rounded bg-[var(--primary-button-bg-color)] px-4 py-2 text-[var(--primary-button-text-color)] hover:bg-[var(--primary-button-hover-bg-color)]">Devis</a>
                    </div>
                  </div>
                </div>
              </nav>
            </header>
          </div>
          <div>
            <section class="relative flex h-[700px] w-full px-6 pt-48 text-center md:px-12 lg:px-24 xl:px-52 code-section"
              id="slwvfhd">
              <!-- leave data-seo-image attribute on this div -->
              <div
                class="absolute inset-0 h-full w-full bg-cover bg-center object-cover brightness-75 bg-[url(&quot;https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/c1402c52-2603-470a-ed21-f346363e0500/public&quot;)]"
                 data-seo-image=""
                data-media="{&quot;id&quot;:&quot;1473162531&quot;,&quot;src&quot;:&quot;iStock&quot;,&quot;type&quot;:&quot;image&quot;}">
              </div>
              <div class="z-10 h-full w-full max-w-3xl md:w-3/4 md:pr-12 lg:w-1/2">
                <div class="text-center md:text-left">
                  <h1
                    class="mb-4 text-3xl font-semibold text-[var(--light-text-color)] [font-family:var(--font-family-heading)] sm:text-4xl md:pr-36 md:text-4xl">
                    Assurez Votre Avenir : La Couverture Ultime pour Professionnels de Santé !</h1>
                  <p class="mb-8 text-lg text-[var(--light-text-color)]">PRIORITÉ SANTÉ MUTUELLE comprend les défis uniques auxquels vous
                    êtes confrontés dans votre pratique. Nos solutions d'assurance santé spécialisées sont conçues pour
                    vos besoins assurant une couverture complète pour les médecins, audioprothésistes, dentistes, et
                    infirmiers.</p>
                  <div class=""><a href="/services"
                      class="inline-block rounded bg-[var(--primary-button-bg-color)] px-[var(--button-padding-x)] py-[var(--button-padding-y)] text-sm font-semibold text-[var(--primary-button-text-color)] hover:bg-[var(--primary-button-hover-bg-color)]"><span>Explorez
                        Nos Offres</span></a></div>
                </div>
              </div>
            </section>
            <section class="code-section" id="sshgut">
              <div class="container mx-auto px-6 pt-12 md:mt-2 md:pt-12">
                <div class="flex flex-col items-stretch lg:flex-row">
                  <div class="relative lg:w-1/2 xl:w-1/3">
                    <div
                      class="absolute -left-24 -top-12 h-full w-full rounded-bl-[115px] rounded-br-[0px] rounded-tl-[0px] rounded-tr-[47px] bg-[var(--light-background-color)]">
                    </div><img
                      class="bl-3xl relative z-10 mx-auto h-full rounded-bl-[40px] rounded-br-[76px] rounded-tl-[104px] rounded-tr-[45px] object-cover lg:h-1/2 xl:h-full"
                      src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/70f73bbf-3a6a-4e9e-23b7-45dbf9ea4900/publicContain"
                      alt="Hero" 
                      data-media="{&quot;id&quot;:&quot;998313080&quot;,&quot;src&quot;:&quot;iStock&quot;,&quot;type&quot;:&quot;image&quot;}">
                  </div>
                  <div class="pt-8 lg:w-1/2 lg:pl-20 lg:pr-12 lg:pt-0 xl:w-2/3">
                    <h2
                      class="mb-4 text-center text-3xl font-bold [font-family:var(--font-family-heading)] md:text-left md:text-5xl md:leading-[64px]">
                      Élevez votre pratique</h2>
                    <p class="mb-6 text-center text-xl text-[var(--dark-text-color)] md:text-left">Profitez d'une solution
                      d'assurance santé spécialement conçue pour les professionnels de santé. PRIORITÉ SANTÉ MUTUELLE comprend les
                      exigences de votre profession qu'il s'agisse de médecins, d'audioprothésistes, de dentistes ou
                      d'infirmiers. Nos plans d'assurance sur mesure non seulement protègent votre santé mais répondent
                      aux besoins uniques de votre domaine, vous permettant de vous concentrer sur la fourniture de soins
                      exceptionnels à vos patients.</p>
                    <p class="mb-6 text-center text-xl text-[var(--dark-text-color)] md:text-left">Nos options de
                      couverture complètes vous offrent la tranquillité d'esprit, garantissant votre protection contre les
                      imprévus de santé. Avec PRIORITÉ SANTÉ MUTUELLE, vous bénéficiez d'un service personnalisé qui comprend les
                      subtilités du paysage de la santé et qui priorise vos besoins spécifiques.</p>
                    <ul class="mb-12 list-disc pl-6 text-xl">
                      <li class="mb-3">Couvertures personnalisées qui correspondent à votre pratique</li>
                      <li class="mb-3">Matériaux de haute qualité pour une protection durable</li>
                      <li class="mb-3">Agencements réfléchis pour une fonctionnalité optimale</li>
                      <li class="">Service personnalisé pour vous accompagner tout au long du processus</li>
                    </ul>
                    <div class="flex justify-center md:block"><a href="/services"
                        class="mb-12 inline-block rounded bg-[var(--primary-button-bg-color)] px-[var(--button-padding-x)] py-[var(--button-padding-y)] text-lg font-medium text-[var(--primary-button-text-color)] hover:bg-[var(--primary-button-hover-bg-color)] hover:text-[var(--primary-button-hover-text-color)]">Découvrez
                        nos offres uniques</a></div>
                  </div>
                </div>
              </div>
            </section>
            <section class="relative bg-[#ffffff] code-section" id="slvizh">
              <div class="container mx-auto px-4 sm:px-12 lg:pb-12 xl:px-32">
                <div class="flex flex-col items-center lg:flex-row">
                  <div class="mt-12 w-full lg:mt-24 lg:w-[55%] lg:pr-14">
                    <h1
                      class="mb-8 text-center text-4xl font-bold [font-family:var(--font-family-heading)] lg:text-left xl:text-5xl 2xl:text-6xl">
                      <div class="">Assurez votre avenir professionnel avec PRIORITÉ SANTÉ MUTUELLE</div>
                    </h1>
                    <p class="mb-8 text-center text-[var(--gray-text-color)] lg:text-left">Avec notre expertise en
                      assurance santé, nous nous engageons à offrir des solutions sur mesure qui respectent les standards
                      de votre profession.</p>
                    <div class="mb-8 pl-8 text-center text-[var(--gray-text-color)] lg:text-left">
                      <ul>
                        <li class="mb-4 flex flex-row"><i class="fa fa-check mr-4 mt-1 text-green-500"
                            aria-hidden="true"></i><span>Allègement des démarches - Nos agents vous assistent tout au long
                            des processus pour un maximum de confort.</span></li>
                        <li class="mb-4 flex flex-row"><i class="fa fa-check mr-4 mt-1 text-green-500"
                            aria-hidden="true"></i><span>Disponibilité 24/7 - Notre équipe est à votre service à tout
                            moment pour répondre à vos questions et ajustements.</span></li>
                        <li class="mb-4 flex flex-row"><i class="fa fa-check mr-4 mt-1 text-green-500"
                            aria-hidden="true"></i><span>Transparence Totale - Aucune surprise, nous vous tenons informé
                            de chaque étape de votre couverture.</span></li>
                      </ul>
                    </div>
                    <p class="mb-12 text-center text-[var(--gray-text-color)] lg:text-left">Notre équipe expérimentée se
                      dédie à créer des solutions d'assurance qui vous permettent de vous concentrer sur ce qui compte le
                      plus : vos patients.</p>
                    <div class="mb-12 text-center lg:text-left"><a href="/contact"
                        class="items-center rounded-[var(--button-rounded-radius)] bg-[var(--primary-color)] px-[var(--button-padding-x)] py-[var(--button-padding-y)] font-semibold text-[var(--primary-button-text-color)] hover:bg-[var(--primary-button-hover-bg-color)] hover:bg-[var(--primary-button-hover-text-color])"><span>Contactez-nous
                          pour en savoir plus</span></a></div>
                  </div>
                  <div class="relative mt-12 hidden w-full overflow-visible lg:block lg:w-[45%] lg:p-6">
                    <div
                      class="absolute bottom-0 left-0 h-0 w-0 border-[100px] border-transparent border-b-[var(--primary-color)] border-l-[var(--primary-color)]">
                    </div>
                    <div
                      class="absolute -right-9 top-16 h-[145px] w-[190px] bg-[radial-gradient(#cbcacc_3px,transparent_3px)] [background-size:16px_16px]">
                    </div><img
                      src="https://media.gettyimages.com/id/2032240867/photo/caregiver-helping-woman-with-disability-in-park-for-support-trust-and-care-in-retirement.jpg?b=1&amp;s=612x612&amp;w=0&amp;k=20&amp;c=wmayhoboPSVDSs_bUKq1mP_aOtNakG6MwFEY7-Aihg4="
                      alt="Hero" class="relative mt-8 aspect-square w-full rounded-2xl object-cover lg:mt-0"
                      
                      data-media="{&quot;id&quot;:&quot;2032240867&quot;,&quot;src&quot;:&quot;iStock&quot;,&quot;type&quot;:&quot;image&quot;}">
                    <div class="absolute bottom-0 right-0 z-10 aspect-square w-[45%] rounded-2xl bg-[#ffffff] p-6"><img
                        src="https://media.gettyimages.com/id/2159172849/photo/elderly-woman-with-her-caregiver-at-nursing-home.jpg?b=1&amp;s=612x612&amp;w=0&amp;k=20&amp;c=VuyGp3h9-9m6RuKYqYZt-TqEzrJFVrUBC2VsCYmWVMA="
                        alt="Hero" class="relative mt-8 h-full object-cover lg:mt-0" 
                        data-media="{&quot;id&quot;:&quot;2159172849&quot;,&quot;src&quot;:&quot;iStock&quot;,&quot;type&quot;:&quot;image&quot;}">
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="code-section" id="sgdufh0j">
              <div class="bg-[#ffffff]">
                <div class="container relative z-10 mx-auto py-12 lg:py-40 xl:px-12 2xl:px-36">
                  <div class="flex flex-col-reverse lg:flex-row lg:space-x-12">
                    <div class="flex-1 text-[var(--dark-text-color)]">
                      <div
                        class="mb-6 text-balance text-center text-5xl font-semibold [font-family:var(--font-family-heading)] lg:text-left">
                        Solutions d’Assurance Santé Pour les Professionnels</div>
                      <div class="text-center text-xl font-light lg:text-left">
                        Avec PRIORITÉ SANTÉ MUTUELLE, redéfinissez votre expérience d'assurance santé. Notre engagement envers l'innovation et l'adaptabilité vous assure une couverture qui non seulement protège votre bien-être, mais soutient également votre succès professionnel. 
                        <br><br>
                        Découvrez des options sur mesure conçues pour libérer votre potentiel, avec une équipe dédiée prête à répondre à chaque besoin, et à illuminer votre avenir dans le secteur médical.
                      </div>
                    </div>
                    <div class="mb-12 flex-1"><img class="max-h-64 w-full object-cover lg:max-h-none dont-replace" alt=""
                        src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/900b5dbb-d42a-4706-efa9-6eea771ea300/publicContain"
                        
                        data-media="{&quot;id&quot;:&quot;1667819272&quot;,&quot;src&quot;:&quot;iStock&quot;,&quot;type&quot;:&quot;image&quot;}"
                        oncontextmenu="return false;"></div>
                  </div>
                </div>
              </div>
            </section>
            <section class="bg-[#ffffff] py-20 code-section" id="snpkgqs">
              <div class="container mx-auto px-4 sm:px-12 xl:px-32">
                <h2
                  class="mb-8 text-center text-3xl font-bold [font-family:var(--font-family-heading)] xl:text-4xl 2xl:text-5xl">
                  Solutions d'Assurance Santé Modernes et Fiables</h2>
                <h3 class="mx-auto mb-12 w-3/4 text-center font-thin text-[var(--gray-text-color)]">Profitez de ces
                  services exceptionnels.</h3>
                <div class="flex flex-row">
                  <div class="hidden w-[30%] xl:block"><img
                      src="https://media.gettyimages.com/id/2154850841/photo/medical-industry-stock-market-graph-chart.jpg?b=1&amp;s=612x612&amp;w=0&amp;k=20&amp;c=KUXLKREDjNftvRzhNlCrYGGIwRpFrp_TYcDrJlFWUPU="
                      alt="Hero" class="relative mt-8 h-full rounded-2xl object-cover lg:mt-0"
                      
                      data-media="{&quot;id&quot;:&quot;2154850841&quot;,&quot;src&quot;:&quot;iStock&quot;,&quot;type&quot;:&quot;image&quot;}">
                  </div>
                  <div class="grid w-full grid-cols-2 gap-y-12 md:grid-cols-3 xl:w-[70%]">
                    <div class="flex-1 px-8 text-center md:max-w-xs">
                      <div
                        class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-100 text-4xl text-blue-500">
                        <i class="fa-duotone fa-user-shield" aria-hidden="true"></i>
                      </div>
                      <h4 class="mb-4 text-2xl font-semibold">Assurance Personnalisée</h4>
                      <p class="text-[var(--gray-text-color)]">Profitez de plans d'assurance sur mesure qui répondent aux
                        besoins spécifiques des professionnels de la santé.</p>
                    </div>
                    <div class="flex-1 px-8 text-center md:max-w-xs">
                      <div
                        class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-orange-100 text-4xl text-orange-500">
                        <i class="fa-duotone fa-clock" aria-hidden="true"></i>
                      </div>
                      <h4 class="mb-4 text-2xl font-semibold">Support Client Réactif</h4>
                      <p class="text-[var(--gray-text-color)]">Bénéficiez d'une assistance 24/7 pour toutes vos questions
                        et préoccupations liées à votre couverture.</p>
                    </div>
                    <div class="flex-1 px-8 text-center md:max-w-xs">
                      <div
                        class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-rose-100 text-4xl text-rose-500">
                        <i class="fa-duotone fa-user-md" aria-hidden="true"></i>
                      </div>
                      <h4 class="mb-2 text-2xl font-semibold">Expertise Sectorielle</h4>
                      <p class="text-[var(--gray-text-color)]">Notre équipe comprend les défis uniques que vous rencontrez
                        et est prête à vous offrir des solutions adaptées.</p>
                    </div>
                    <div class="flex-1 px-8 text-center md:max-w-xs">
                      <div
                        class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-teal-100 text-4xl text-teal-500">
                        <i class="fa-duotone fa-thumbs-up" aria-hidden="true"></i>
                      </div>
                      <h4 class="mb-2 text-2xl font-semibold">Plans Flexibles</h4>
                      <p class="break-words text-[var(--gray-text-color)]">Adaptez votre couverture avec des options qui
                        s'ajustent à l'évolution de votre pratique.</p>
                    </div>
                    <div class="flex-1 px-8 text-center md:max-w-xs">
                      <div
                        class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-stone-100 text-4xl text-stone-500">
                        <i class="fa-duotone fa-file-invoice" aria-hidden="true"></i>
                      </div>
                      <h4 class="mb-2 text-2xl font-semibold">Gestion Administrative Simplifiée</h4>
                      <p class="text-[var(--gray-text-color)]">Laissez-nous gérer les détails pendant que vous vous
                        concentrez sur le soin de vos patients.</p>
                    </div>
                    <div class="flex-1 px-8 text-center md:max-w-xs">
                      <div
                        class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-violet-100 text-4xl text-violet-500">
                        <i class="fa-duotone fa-heart" aria-hidden="true"></i>
                      </div>
                      <h4 class="mb-2 text-2xl font-semibold">Sérénité et Confiance</h4>
                      <p class="text-[var(--gray-text-color)]">Concentrez-vous sur vos patients avec l'assurance que nous
                        nous occupons de votre couverture.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="code-section" id="s966hlo">
              <div class="container mx-auto px-6 md:pt-24">
                <div class="mb-12 text-3xl font-semibold [font-family:var(--font-family-heading)] md:text-5xl">Découvrez Nos Qualités</div>
                <div class="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-24 xl:grid-cols-4">
                  <div class="flex flex-col"><img class="h-64 rounded-lg object-cover"
                      src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/b2d04d9e-a6a4-41b1-4994-c86dda4eff00/publicContain"
                      alt="Gallery" 
                      data-media="{&quot;id&quot;:&quot;1218508931&quot;,&quot;src&quot;:&quot;iStock&quot;,&quot;type&quot;:&quot;image&quot;}">
                    <div>
                      <div class="mt-4 font-semibold text-[var(--primary-color)]">Assurance Santé Sur Mesure</div>
                      <div class="mt-4 text-[var(--gray-text-color)]">Découvrez nos offres d'assurance santé adaptées
                        spécialement aux professionnels de la santé, permettant de se concentrer pleinement sur le soin
                        des patients.</div>
                    </div>
                  </div>
                  <div class="flex flex-col"><img class="h-64 rounded-lg object-cover"
                      src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/bbc1bdea-66df-4121-cc28-3f92bd881d00/public"
                      alt="Gallery" 
                      data-media="{&quot;id&quot;:&quot;1205548238&quot;,&quot;src&quot;:&quot;iStock&quot;,&quot;type&quot;:&quot;image&quot;}">
                    <div>
                      <div class="mt-4 font-semibold text-[var(--primary-color)]">Protection Personnalisée</div>
                      <div class="mt-4 text-[var(--gray-text-color)]">Nos plans offrent une couverture essentielle et un
                        filet de sécurité pour les médecins, audioprothésistes, dentistes, et infirmiers. Explorez nos
                        options.</div>
                    </div>
                  </div>
                  <div class="flex flex-col"><img class="h-64 rounded-lg object-cover"
                      src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/7162ddf3-32f0-41e7-eda7-0b4c492ce000/public"
                      alt="Gallery" 
                      data-media="{&quot;id&quot;:&quot;1208672944&quot;,&quot;src&quot;:&quot;iStock&quot;,&quot;type&quot;:&quot;image&quot;}">
                    <div>
                      <div class="mt-4 font-semibold text-[var(--primary-color)]">Expertise Dédiée</div>
                      <div class="mt-4 text-[var(--gray-text-color)]">Notre équipe comprend les enjeux du paysage de la
                        santé et est engagée à offrir des services personnalisés pour votre expertise professionnelle.
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col"><img class="h-64 rounded-lg object-cover"
                      src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/a69e0ce9-c245-49ec-6b77-fb4083305500/public"
                      alt="Gallery" 
                      data-media="{&quot;id&quot;:&quot;1224193626&quot;,&quot;src&quot;:&quot;iStock&quot;,&quot;type&quot;:&quot;image&quot;}">
                    <div>
                      <div class="mt-4 font-semibold text-[var(--primary-color)]">Plans Exclusifs</div>
                      <div class="mt-4 text-[var(--gray-text-color)]">Explorez nos plans exclusifs qui renforcent votre
                        excellence professionnelle tout en garantissant votre santé. Rejoignez vos pairs aujourd'hui !
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col"><img class="h-64 rounded-lg object-cover"
                      src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/37d498bf-a5cf-49ae-ec7c-bc4e02efda00/public"
                      alt="Gallery" 
                      data-media="{&quot;id&quot;:&quot;1442450490&quot;,&quot;src&quot;:&quot;iStock&quot;,&quot;type&quot;:&quot;image&quot;}">
                    <div>
                      <div class="mt-4 font-semibold text-[var(--primary-color)]">Sérénité Assurée</div>
                      <div class="mt-4 text-[var(--gray-text-color)]">Protégez votre avenir avec PRIORITÉ SANTÉ MUTUELLE, où la
                        tranquillité d'esprit est notre engagement. Concentrez-vous sur ce qui compte vraiment : vos
                        patients.</div>
                    </div>
                  </div>
                  <div class="flex flex-col"><img class="h-64 rounded-lg object-cover"
                      src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/fef69848-1268-4cee-e341-2dab46c2fc00/public"
                      alt="Gallery" 
                      data-media="{&quot;id&quot;:&quot;1189303727&quot;,&quot;src&quot;:&quot;iStock&quot;,&quot;type&quot;:&quot;image&quot;}">
                    <div>
                      <div class="mt-4 font-semibold text-[var(--primary-color)]">Confiance et Professionnalisme</div>
                      <div class="mt-4 text-[var(--gray-text-color)]">Nous sommes là pour bâtir une relation de confiance,
                        offrant des assurances qui répondent aux besoins spécifiques des professionnels de la santé.</div>
                    </div>
                  </div>
                  <div class="flex flex-col"><img class="h-64 rounded-lg object-cover"
                      src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/d7dff460-e23d-4a4e-4e19-d9c3ba27af00/public"
                      alt="Gallery" 
                      data-media="{&quot;id&quot;:&quot;2153280397&quot;,&quot;src&quot;:&quot;iStock&quot;,&quot;type&quot;:&quot;image&quot;}">
                    <div>
                      <div class="mt-4 font-semibold text-[var(--primary-color)]">Ressources Utiles</div>
                      <div class="mt-4 text-[var(--gray-text-color)]">Accédez à des ressources essentielles sur
                        l'assurance santé, conçues pour les professionnels comme vous. Informez-vous pour mieux protéger
                        votre avenir.</div>
                    </div>
                  </div>
                  <div class="flex flex-col"><img class="h-64 rounded-lg object-cover"
                      src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/fe5ec4f6-4d5e-4e80-c61c-fd53d7a61300/public"
                      alt="Gallery" 
                      data-media="{&quot;id&quot;:&quot;2032240867&quot;,&quot;src&quot;:&quot;iStock&quot;,&quot;type&quot;:&quot;image&quot;}">
                    <div>
                      <div class="mt-4 font-semibold text-[var(--primary-color)]">Engagement Societal</div>
                      <div class="mt-4 text-[var(--gray-text-color)]">Participez à notre mission d’amélioration continue
                        dans le secteur médical tout en bénéficiant de solutions d'assurance fiables.</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="bg-gradient-to-b from-[var(--light-background-color)] code-section" id="ssek20p">
              <div class="container mx-auto mt-8 px-6 pb-12 pt-8 md:mt-20 md:pb-24 md:pt-20">
                <div class="mb-3 text-center text-3xl font-semibold [font-family:var(--font-family-heading)] md:text-5xl">
                  Nos Clients Satisfaits</div>
                <div class="mb-12 text-center text-sm text-gray-500">Découvrez les témoignages des professionnels de la
                  santé que nous avons transformés</div>
                <div class="flex flex-col items-center justify-center space-y-12 lg:flex-row lg:space-x-20 lg:space-y-0">
                  <div
                    class="max-w-[34rem] relative flex flex-row rounded-2xl bg-[#ffffff] p-6 shadow-[0_0_25px_0_rgba(0,0,0,0.1)] lg:w-96">
                    <div class="absolute -top-6 right-5"><i
                        class="fa-solid fa-quote-right text-6xl text-[var(--primary-color)]" aria-hidden="true"></i></div>
                    <div class="absolute -bottom-6 left-5"><i
                        class="fa-solid fa-quote-left text-6xl text-[var(--primary-color)]" aria-hidden="true"></i></div>
                    <div class="h-full w-[70px]"><img class="h-[70px] w-[70px] rounded-full object-cover"
                        src="https://media.gettyimages.com/id/2156062809/photo/headshot-closeup-portrait-middle-eastern-israel-businesswoman-business-lady-standing-isolated.jpg?b=1&amp;s=612x612&amp;w=0&amp;k=20&amp;c=mPEqaET5s98W_40DmBTRbYY5z0F-_1YkqdC4TCHJeig="
                        alt="Client"  data-testimonial-image="" data-dont-replace=""
                        data-media="{&quot;id&quot;:&quot;2156062809&quot;,&quot;src&quot;:&quot;iStock&quot;,&quot;type&quot;:&quot;image&quot;}">
                    </div>
                    <div class="flex-1 p-6 pt-0">
                      <div class="text-sm">Dr. Émilie Dubois</div>
                      <div class="mb-4"><i class="fa-solid fa-star fa-xs text-yellow-500" aria-hidden="true"></i><i
                          class="fa-solid fa-star fa-xs text-yellow-500" aria-hidden="true"></i><i
                          class="fa-solid fa-star fa-xs text-yellow-500" aria-hidden="true"></i><i
                          class="fa-solid fa-star fa-xs text-yellow-500" aria-hidden="true"></i><i
                          class="fa-solid fa-star fa-xs text-yellow-500" aria-hidden="true"></i></div>
                      <div class="text-[var(--dark-text-color)]">Avec PRIORITÉ SANTÉ MUTUELLE, j'ai trouvé une assurance santé adaptée
                        aux défis uniques de notre profession. Leur service est exceptionnel!</div>
                    </div>
                  </div>
                  <div
                    class="max-w-[34rem] relative flex flex-row rounded-2xl bg-[#ffffff] p-6 shadow-[0_0_25px_0_rgba(0,0,0,0.1)] lg:w-96">
                    <div class="absolute -top-6 right-5"><i
                        class="fa-solid fa-quote-right text-6xl text-[var(--primary-color)]" aria-hidden="true"></i></div>
                    <div class="absolute -bottom-6 left-5"><i
                        class="fa-solid fa-quote-left text-6xl text-[var(--primary-color)]" aria-hidden="true"></i></div>
                    <div class="h-full w-[70px]"><img class="h-[70px] w-[70px] rounded-full object-cover"
                        src="https://media.gettyimages.com/id/1309489745/photo/portrait-of-young-happy-indian-business-man-executive-looking-at-camera-eastern-male.jpg?b=1&amp;s=612x612&amp;w=0&amp;k=20&amp;c=K1pIuZ-758hZpczvQSLjxvyqeOwy5t5EklPn_ykBHfo="
                        alt="Client"  data-testimonial-image="" data-dont-replace=""
                        data-media="{&quot;id&quot;:&quot;1309489745&quot;,&quot;src&quot;:&quot;iStock&quot;,&quot;type&quot;:&quot;image&quot;}">
                    </div>
                    <div class="flex-1 p-6 pt-0">
                      <div class="text-sm">Infirmier Pierre Lefebvre</div>
                      <div class="mb-4"><i class="fa-solid fa-star fa-xs text-yellow-500" aria-hidden="true"></i><i
                          class="fa-solid fa-star fa-xs text-yellow-500" aria-hidden="true"></i><i
                          class="fa-solid fa-star fa-xs text-yellow-500" aria-hidden="true"></i><i
                          class="fa-solid fa-star fa-xs text-yellow-500" aria-hidden="true"></i><i
                          class="fa-solid fa-star fa-xs text-yellow-500" aria-hidden="true"></i></div>
                      <div class="text-[var(--dark-text-color)]">L'équipe de PRIORITÉ SANTÉ MUTUELLE a compris mes besoins en matière
                        d'assurance santé et a dépassé mes attentes avec leur professionnalisme.</div>
                    </div>
                  </div>
                  <div
                    class="max-w-[34rem] relative flex flex-row rounded-2xl bg-[#ffffff] p-6 shadow-[0_0_25px_0_rgba(0,0,0,0.1)] lg:w-96">
                    <div class="absolute -top-6 right-5"><i
                        class="fa-solid fa-quote-right text-6xl text-[var(--primary-color)]" aria-hidden="true"></i></div>
                    <div class="absolute -bottom-6 left-5"><i
                        class="fa-solid fa-quote-left text-6xl text-[var(--primary-color)]" aria-hidden="true"></i></div>
                    <div class="h-full w-[70px]"><img class="h-[70px] w-[70px] rounded-full object-cover"
                        src="https://media.gettyimages.com/id/1450340623/photo/portrait-of-successful-mature-boss-senior-businessman-in-glasses-asian-looking-at-camera-and.jpg?b=1&amp;s=612x612&amp;w=0&amp;k=20&amp;c=_3BHqzEwN7yDJ5o41g1ofHVbEp1NYbcqisUY_Sd1eyA="
                        alt="Client"  data-testimonial-image="" data-dont-replace=""
                        data-media="{&quot;id&quot;:&quot;1450340623&quot;,&quot;src&quot;:&quot;iStock&quot;,&quot;type&quot;:&quot;image&quot;}">
                    </div>
                    <div class="flex-1 p-6 pt-0">
                      <div class="text-sm">Dr. Clara Martin</div>
                      <div class="mb-4"><i class="fa-solid fa-star fa-xs text-yellow-500" aria-hidden="true"></i><i
                          class="fa-solid fa-star fa-xs text-yellow-500" aria-hidden="true"></i><i
                          class="fa-solid fa-star fa-xs text-yellow-500" aria-hidden="true"></i><i
                          class="fa-solid fa-star fa-xs text-yellow-500" aria-hidden="true"></i><i
                          class="fa-solid fa-star fa-xs text-yellow-500" aria-hidden="true"></i></div>
                      <div class="text-[var(--dark-text-color)]">PRIORITÉ SANTÉ MUTUELLE m'a permis de me concentrer sur mes patients en
                        m'assurant que ma couverture santé est à la hauteur de mes attentes. Une expérience luxueuse!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="code-section" id="saefdrs">
              <div class="mx-auto px-4 py-20 lg:container sm:px-12 xl:px-32">
                <div class="relative z-10 rounded-3xl bg-[#ffffff] p-6 shadow-[0_0_25px_rgba(0,0,0,0.1)]">
                  <div class="flex flex-col lg:flex-row lg:space-x-8">
                    <div class="rounded-3xl bg-[var(--primary-color)] p-8 pt-12 text-[var(--light-text-color)]">
                      <div class="mb-4 uppercase">Entrer en contact</div>
                      <div class="mb-6 text-4xl font-semibold [font-family:var(--font-family-heading)]">Nous Serions
                        Heureux de Vous Aider</div>
                      <div class="hidden py-4 lg:block">
                        <div class="mb-6 flex flex-row space-x-4">
                          <div
                            class="flex h-16 w-16 items-center justify-center rounded-full border border-[#ffffff] p-6"><i
                              class="fa-duotone fa-location-dot text-3xl" aria-hidden="true"></i></div>
                          <div class="flex flex-col">
                            <div class="text-2xl font-semibold">Notre Bureau</div>
                            <div>Paris, France</div>
                          </div>
                        </div>
                        <div class="mb-6 flex flex-row space-x-4">
                          <div
                            class="flex h-16 w-16 items-center justify-center rounded-full border border-[#ffffff] p-6"><i
                              class="fa-duotone fa-envelope text-3xl" aria-hidden="true"></i></div>
                          <div class="flex flex-col">
                            <div class="text-2xl font-semibold">Email de Contact</div>
                            <div>contact@prioritesantemutuelle.com</div>
                          </div>
                        </div>
                        <div class="flex flex-row space-x-4">
                          <div
                            class="flex h-16 w-16 items-center justify-center rounded-full border border-[#ffffff] p-6"><i
                              class="fa-duotone fa-phone text-3xl" aria-hidden="true"></i></div>
                          <div class="flex flex-col">
                            <div class="text-2xl font-semibold">Numéro de Téléphone</div>
                            <div>(720) 555-6789</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full p-6">
                      <form >
                        <div class="flex flex-col space-y-4 md:space-y-12">
                          <div class="flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0">
                            <div class="w-full">
                              <div><label for="first-name"
                                  class="font-medium text-[var(--dark-text-color)]">Prénom</label></div>
                              <div><input name="first-name" type="text"
                                  class="w-full border border-[#ffffff] border-b-[var(--light-border-color)] p-2"></div>
                            </div>
                            <div class="w-full">
                              <div><label for="last-name" class="font-medium text-[var(--dark-text-color)]">Nom</label>
                              </div>
                              <div><input name="last-name" type="text"
                                  class="w-full border border-[#ffffff] border-b-[var(--light-border-color)] p-2"></div>
                            </div>
                          </div>
                          <div class="flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0">
                            <div class="w-full">
                              <div><label for="email" class="font-medium text-[var(--dark-text-color)]">Votre
                                  Email</label></div>
                              <div><input type="email" name="email"
                                  class="w-full border border-[#ffffff] border-b-[var(--light-border-color)] p-2"></div>
                            </div>
                            <div class="w-full">
                              <div><label for="phone" class="font-medium text-[var(--dark-text-color)]">Votre
                                  Téléphone</label></div>
                              <div><input type="phone" name="phone"
                                  class="w-full border border-[#ffffff] border-b-[var(--light-border-color)] p-2"></div>
                            </div>
                          </div>
                          <div class="w-full">
                            <div><label for="message" class="font-medium text-[var(--dark-text-color)]">Votre
                                Message</label></div>
                            <div><textarea name="message" rows="4"
                                class="w-full border border-[#ffffff] border-b-[var(--light-border-color)] p-2"></textarea>
                            </div>
                          </div>
                          <div><button type="submit"
                              class="items-center rounded-[var(--button-rounded-radius)] bg-[var(--primary-button-bg-color)] px-[var(--button-padding-x)] py-[var(--button-padding-y)] text-sm font-semibold uppercase text-[var(--primary-button-text-color)] hover:bg-[var(--primary-button-hover-bg-color)] hover:text-[var(--primary-button-hover-text-color)]">Envoyer
                              Votre Demande</button></div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div>
            <footer class="mt-8 bg-[var(--light-background-color)] code-section" id="s3bc9hw">
              <div class="container mx-auto px-4 text-center">
                <div class="flex items-center justify-center pt-12 text-left text-xl font-bold md:justify-start lg:pt-20">
                  <a href="/" class="text-xl [font-family:var(--font-family-heading)]">
                    <span>
                    <img src='../assets/media/logo.png' width="300" height="75" alt="" class="img-fluid" />
                    </span>
                  </a>
                </div>
                <div class="grid grid-cols-1 pt-4 md:grid-cols-3 lg:grid-cols-4 lg:space-x-24">
                  <div class="mb-8">
                    <p class="text-center text-xs md:text-left">Assurance santé dédiée aux professionnels de la santé.
                      Transformez votre pratique avec nos plans adaptés, et faites confiance à notre savoir-faire pour vos
                      besoins en santé.</p>
                    <div class="my-8 flex flex-row justify-center md:justify-start"><a href="/" class="mx-2"
                        aria-label="Visitez notre Facebook"><i class="fa-brands fa-facebook-f"
                          aria-hidden="true"></i></a><a href="/" class="mx-2" aria-label="Visitez notre Twitter"><i
                          class="fa-brands fa-x-twitter" aria-hidden="true"></i></a><a href="/" class="mx-2"
                        aria-label="Visitez notre LinkedIn"><i class="fa-brands fa-linkedin-in"
                          aria-hidden="true"></i></a></div>
                  </div>
                  <div class="mb-8 space-y-3">
                    <div class="flex items-center justify-center space-x-2 text-sm"><a href="/">Mentions Légales et
                        Politique de Confidentialité</a></div>
                    <div class="flex items-center justify-center space-x-2 text-sm"><a href="/a-propos">À Propos</a></div>
                    <div class="flex items-center justify-center space-x-2 text-sm"><a href="/contact">Contact</a></div>
                  </div>
                  <div class="mb-8 space-y-3">
                    <div class="flex items-center justify-center space-x-2 text-sm">
                      <p>test, Paris, France, 80203</p>
                    </div>
                    <div class="flex items-center justify-center space-x-2 text-sm">
                      <p>(33) 555-4321</p>
                    </div>
                    <div class="flex items-center justify-center space-x-2 text-sm">
                      <p>contact@prioritesantemutuelle.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <p class="py-12 text-center text-sm">© 2025 PRIORITÉ SANTÉ MUTUELLE, Tous droits réservés</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
