<template>
    <my-header :progress="formStore.currentStep" :step="'subscription'" />
    <section id="formulaire">
        <div class="container">
            <div class="row justify-content-center mb-lg-4 d-block d-md-none progressdiv">
                <div class="col-md-9 col-lg-8 col-xl-6 col-xxl-6">
                    <div class="progress Mobile">
                        <div class="progress-bar progressMobile" role="progressbar"
                            :style="{ width: progressPercentage + '%' }" :aria-valuenow="progressPercentage"
                            aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-md-center justify-content-lg-center m-0 align-items-baseline stepperdiv">
                <div
                    class="d-flex col-md-9 col-lg-9 col-xl-9 col-xxl-9 hideSlides px-0 pb-2 animate__animated animate__fadeIn animate__slow">
                    <div class="stepperCustom">
                       <!--  <div v-for="(step, index) in steps" :key="index"
                            :class="['step', { active: isActiveStep(index + 1) }]">
                            {{ step }}
                        </div> -->
                            <div :class="['step', { active: formStore.currentStep == 1 || formStore.currentStep == 2,stepHover: formStore.currentStep > 2 }]"  @click="updateCurrentStep(2)">Entreprise</div>
                            <div :class="['step', { active: formStore.currentStep == 3 || formStore.currentStep == 4 , stepHover: formStore.currentStep > 4 }]" @click="updateCurrentStep(4)" >Recueil du besoin</div>
                            <div :class="['step', { active: formStore.currentStep == 5 , stepHover: formStore.currentStep > 5}]" @click="updateCurrentStep(5)">Activité</div>
                            <div :class="['step', { active: formStore.currentStep == 6  }]" >Finalisation</div>
                    </div>
                </div>
            </div>

            <div class="row justify-content-md-center justify-content-lg-center m-0 mb-4">

                <div
                    class="col-md-9 col-lg-9 col-xl-9 col-xxl-9 stepper hideSlides px-0 px-md-2 animate__animated animate__fadeIn animate__slow">

                    <div class="prev-btn" @click="prevStep">
                        <img src="/src/assets/icons/back.svg" alt="retour" class="prev-arrow">
                        Retour
                    </div>
                    <div class="container-fluid" style="padding: 40px; padding-top: 0px;">


                        <Step1 v-if="formStore.currentStep === 1" />
                        <Step2 v-if="formStore.currentStep === 2" />
                        <Step3 v-if="formStore.currentStep === 3" />
                        <Step4 v-if="formStore.currentStep === 4" />
                        <Step5 v-if="formStore.currentStep === 5" />
                        <Step6 v-if="formStore.currentStep === 6" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useFormStore } from '../stores/useFormStore';
import Step1 from '../components/Step1.vue';
import Step2 from '../components/Step2.vue';
import Step3 from '../components/Step3.vue';
import Step4 from '../components/Step4.vue';
import Step5 from '../components/Step5.vue';
import Step6 from '../components/Step6.vue';
import MyHeader from '../components/header.vue';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const formStore = useFormStore();

if (formStore.currentStep > 7) {
    formStore.updateCurrentStep(7)
}

const stepMap = {
    1: 'Entreprise',
    2: 'Entreprise',
    3: 'Recueil du besoin',
    4: 'Recueil du besoin',
    5: 'Activité',
    6: 'Finalisation',
};
const steps = ref(['Entreprise', 'Recueil du besoin', 'Activité', 'Finalisation']);

const isActiveStep = (stepIndex) => {
    const activeStep = stepMap[formStore.currentStep];
    return steps.value[stepIndex - 1] == activeStep;
};

const progressPercentage = computed(() => {
    return (formStore.currentStep / 6) * 100;
});

function prevStep() {
    formStore.prevStep(router);
}
function updateCurrentStep(step) {
    if(step < formStore.currentStep){
        formStore.updateCurrentStep(step);
    }
}
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");

.prev-btn {
    padding: 6px 13px;
    font-weight: bold;
    font-size: 15px;
    background: rgb(228, 228, 228);
    display: inline-block;
    border-radius: 7px;
    margin: 16px;
}

.prev-btn:hover {
    background: #b0e2fd;
    cursor: pointer;
}

.prev-arrow {
    width: 14px;
    padding: 0px;
    margin: 4px 8px 4px 0px;
}

.stepperCustom {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 100px;
    margin-bottom: 20px;
    width: 100%;
    animation: fadeIn .5s;
    background: white !important;
    border: 1px solid #e5e5e5;
    border-radius: .85rem;
    animation-name: fadeInLeft;
    animation-duration: .5s;
    box-shadow: 0 .25rem 1.875rem rgb(42 53 79 / 17%);
}

.step {
    flex: 1;
    text-align: center;
    padding: 10px;
    cursor: pointer;
    /* border-radius: 10px; */
    transition: background-color 0.3s, color 0.3s;
}

.step:nth-child(1) {
    border-radius: .85rem 0px 0px .85rem;
}

.step:last-child {
    border-radius: 0px .85rem .85rem 0px;
}

/* .step:not(:last-child) {
  margin-right: 5px;
} */

.step.active {
    background-color: #000091;
    color: #fff;
    font-weight: bold;
    height: 100%;
    align-content: center;
}

.stepHover:hover {
    background-color: #b0e2fd;
}

.stepper {
    animation: fadeIn .5s;
    /* background: white !important; */
    background: linear-gradient(145deg, #ffffff, #f6d7b8);
    border: 1px solid #e5e5e5;
    border-radius: .85rem;
    animation-name: fadeInLeft;
    animation-duration: .5s;
    box-shadow: 0 .25rem 1.875rem rgb(42 53 79 / 17%);
}

@media (max-width: 768px) {
    .stepperdiv {
        display: none !important;
    }
    .container-fluid{
        padding: 15px !important;
    }
    .container{
        padding-left: 0px;
        padding-right: 0px;
    }
    #formulaire{
        padding: 5px 0px;
    }
}
</style>