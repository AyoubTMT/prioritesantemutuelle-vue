import { defineStore } from 'pinia';


import axios from 'axios';

export const useFormStore = defineStore('form', {
  state: () => ({
    currentStep: 1,
    formData: {
      step1: {
        soins: "",
        optique: "",
        dentaire: "",
        hospitalisation: "",
        aides_auditives: "",
        medecines_douces: "",
        renfort: "",
        custom: {
          soins: '',
          optique: '',
          dentaire: '',
          hospitalisation: '',
          aides_auditives: '',
          medecines_douces: '',
          renfort: '',
        }
      },
      step2: {
        birthdate: "",
        gender: "",
        profession: "",
        regime: "",
        complementaire: "",
      },
      step3: {
        familyStatus: "",
        insureSpouse: "",
        spouseBirthdate: "",
        childrenCount: "",
        childrenBirthdates: [],
      },
      step4: {
        lastName: "",
        firstName: "",
        email: "",
        postalCode: "",
        phone: "",
        adress: "",
        gdprConsent: "",
      },
      step5: {
      }

    },
    
    responseData: null,
    responseError: null,
  }),
  getters: {
    getFormData: (state) => state.formData,

  },

  actions: {
    updateStepData(step, data) {
      if (step === 'step1') {
        this.formData.step1 = {
          ...this.formData.step1,
          ...data,
          custom: {
            ...this.formData.step1.custom,
            ...data.custom
          }
        };
      } else {
        this.formData[step] = data;
      }
    },
    nextStep() {
      this.currentStep++;
    },
    updateCurrentStep(step) {
      this.currentStep = step;
    },
    prevStep(router) {
      this.currentStep--;
      if (this.currentStep === 0) {
        this.currentStep = 1;
        router.push('/home');
      }
    },
    async submitForm() {
     
    },
  },
 /*  persist: {
    enabled: false,
    storage: localStorage // or sessionStorage
  }, */
});
