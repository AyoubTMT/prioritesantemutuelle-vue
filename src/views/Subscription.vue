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
        <div class="card shadow bg-light rounded-4">
          <div class="row g-0 stepperdiv rounded-4">
            <div class="col-md-4 bg-light p-5 border-end steps rounded-custom-start ">
              
              <ul>
                <li :class="['first  step', { current: formStore.currentStep == 1,stepHover: formStore.currentStep > 1 }]"  @click="updateCurrentStep(1)">
                  <span class="current-info audible"> </span>
                  <div class="title">
                    <span class="step-number">1</span>
                    <span class="step-text">Vos besoins</span>
                  </div>
                </li>
                <li :class="['done step', { current: formStore.currentStep == 2 , stepHover: formStore.currentStep > 2 }]" @click="updateCurrentStep(2)">
                    <div class="title">
                      <span class="step-number">2</span>
                      <span class="step-text">Votre profil</span>
                    </div>
                  </li>
                <li :class="['done step', { current: formStore.currentStep == 3 , stepHover: formStore.currentStep > 3 }]" @click="updateCurrentStep(3)">
                    <div class="title">
                      <span class="step-number">2</span>
                      <span class="step-text">Votre profil</span>
                    </div>
                  </li>
                <li :class="['last step', { current: formStore.currentStep == 4  }]">
                    <div class="title">
                      <span class="step-number">3</span>
                      <span class="step-text">Set
                        Financial
                        Goals</span>
                    </div>              
                </li>
              </ul>
            </div>

            <div class="col-md-8 p-5 bg-white rounded-custom-end">
              <div class="container-fluid">
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

const formStore = useFormStore();
console.log('formStore.currentStep');
console.log(formStore.currentStep);
if (formStore.currentStep > 7) {
    formStore.updateCurrentStep(7)
}

const stepMap = {
    1: 'Vos besoins',
    2: 'Votre profil',
    3: 'Recueil du besoin',
    4: 'Recueil du besoin',
    5: 'Activité',
    6: 'Finalisation',
};
const steps = ref(['Vos besoins', 'Recueil du besoin', 'Activité', 'Finalisation']);

const isActiveStep = (stepIndex) => {
    const activeStep = stepMap[formStore.currentStep];
    return steps.value[stepIndex - 1] == activeStep;
};

const progressPercentage = computed(() => {
    return (formStore.currentStep / 6) * 100;
});

function updateCurrentStep(step) {
    if(step < formStore.currentStep){
        formStore.updateCurrentStep(step);
    }
}
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
h2 {
    font-size: 30px;
    margin: 0px;
}
p.desc {
    margin: 0px;
    margin-bottom: 40px;
    color: #555;
}
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

.step {
    flex: 1;
    text-align: center;
    padding: 10px;
    cursor: pointer;
    /* border-radius: 10px; */
    transition: background-color 0.3s, color 0.3s;
}

.step {
    border-radius: .85rem;
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
    background: white !important;
    /* background: linear-gradient(145deg, #ffffff, #f6d7b8); */
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
/****************************************/
.steps {
    /* float: left;
    width: 310px; */
}
.steps ul:after {
    position: absolute;
    content: '';
    width: 2px;
    height: 185px;
    background: #ebebeb;
    left: 49px;
    top: 50%;
    transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    z-index: 9;
}
.steps ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    position: relative;
    padding-left: 20px;
    padding-top: 20px;
}

.steps ul li {
      position: relative;
      z-index: 99;
}
.steps ul li a {
        text-decoration: none;
        color: #000;
}

.title {
  display: flex;
  display: -webkit-flex;
  align-items: center;
}
.title .step-number {
  width: 40px;
  height: 40px;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #ebebeb;
  color: #999;
  margin-right: 15px;
  border: 5px solid #fff;
  font-weight: bold;
}

.title .step-text {
  font-weight: bold;
  color: #999;
}

.current .title .step-number {
  background: #4966b1;
  color: #fff;
}

.current .title .step-text {
  color: #4966b1;
}
.rounded-custom-start{
  border-radius: 24px 0px 0px 24px !important;
}
.rounded-custom-end{
  border-radius: 0px 24px 24px 0px !important;
}
</style>