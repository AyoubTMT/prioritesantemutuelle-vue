<template>
    <header class="container-fluid head">
        <div id="header-bar" class="container">
            <div class="row align-items-center">
                <div class="col-10 col-md-2 col-lg-2 col-xl-3 d-flex align-items-center ps-4">
                    <router-link to="/">
                        <div class="text-xl font-bold">
                            <a href="/" class="mb-6 text-lg font-bold text-primary text-xl">
                                <img :src="logo" width="100" height="35" alt="Santé Pro" class="img-fluid">
                            </a>
                        </div>
                    </router-link>
                </div>
                <div class="col-md-8 col-lg-8 col-xl-6 d-none d-md-block">
                    <div class="row justify-content-center mb-0 d-none d-md-block align-items-center">
                        <div class="col-12">
                            <div class="progress Mobile">
                                <div class="progress-bar progressMobile" role="progressbar"
                                    :style="{ width: progressPercentage }" aria-valuenow="12"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-2 col-md-2 col-lg-2 col-xl-3 text-end p-0">
                    <div class="questionLink d-flex justify-content-end align-items-center text-decoration-none">
                        <div class="assistanteImg online" @click="openModal">
                            <p class="d-none d-md-none d-lg-none d-xl-block">Besoin d'aide ?</p>
                            <img :src="assistanceImage" width="40" height="40" alt="Assistante" class="img-fluid">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row d-none d-md-block d-lg-block">
                <div class="headerSepar"></div>
            </div>
        </div>
    </header>

    <div class="modal fade" id="aide" tabindex="-1" aria-labelledby="aideLabel" ref="modalRef">
        <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content">
                <div class="contact">
                    <img :src="assistanceImage" class="assistanceImg img-fluid">
                    <h3>Besoin d'aide ?</h3>
                    <p class="text-center">
                        Vous pouvez contacter nos conseillers pour obtenir votre devis personnalisé.
                    </p>
                    <div class="divider"></div>
                    <div class="text-center">
                        <div class="social-buttons">
                            <a href="https://wa.me/33767779822" target="_blank" class="social-button">
                                <i class="fa fa-whatsapp" style="font-size:36px;color:green"></i>
                            </a>
                            <a href="tel:0972880101" class="social-button">
                                <i class="fa fa-phone" style="font-size:36px"></i>
                            </a>
                            <a href="mailto:devis@decennale-express.fr" class="social-button">
                                <i class="fa fa-envelope" style="font-size:36px"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useFormStore } from '../stores/useFormStore';
import { useRouter } from 'vue-router';
import { ref, onMounted, computed } from 'vue';

import logoImage from '../assets/media/logo.png';
import logoMedicale from '../assets/media/logoMedicale.png';
import logoDentaire from '../assets/media/logoDentaire.png';
import assistanceImage from '../assets/media/assistance.png';

const router = useRouter();
const formStore = useFormStore();
const modalRef = ref(null);

const props = defineProps(["step"]);

// Dynamic logo based on domain
const logo = computed(() => {
    const domainLogos = {
        "santeproaudio.fr": logoImage,
        "santepromedicale.fr": logoMedicale,
        "santeprodentaire.fr": logoDentaire
    };
    return domainLogos[window.location.hostname] || logoDentaire;
});

// Compute progress percentage
const progressPercentage = computed(() => `${(formStore.currentStep * 100) / 5}%`);

// Handle Bootstrap Modal
const openModal = () => {
    if (modalRef.value) {
        const modal = new bootstrap.Modal(modalRef.value);
        modal.show();
    }
};

// Handle Previous Step Navigation
const prevStep = () => {
    formStore.prevStep(router);
    const stepRoutes = {
        "tarification": "/devis",
        "options": "/devis/tarifs",
        "informations": "/devis/options",
        "document": "/devis/paiement",
        "paiement": "/devis/informations"
    };
    if (props.step in stepRoutes) {
        router.push(stepRoutes[props.step]);
    }
};

</script>

<style>
.img-fluid {
    max-width: 100%;
    height: auto;
}

@media (min-width: 960px) {
    .assistanceImg {
        width: 100%;
    }
}

.assistanceImg {
    width: 100%;
    margin-bottom: 20px;
    box-shadow: 0px 9px 50px 0px #0000001f;
}

.social-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 45px;
}

.container-fluid.head {
    padding: 20px 10px 0px 0px !important;
}

@media (max-width: 575px) {
    .container-fluid.head {
        padding: 10px 10px 0px 0px !important;
    }
}
</style>
