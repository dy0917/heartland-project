<template>
  <div id="app">
    <form
      action
      method="post"
      id="seniors-finance-below-hero-calculator-form"
      class="seniors-finance-below-hero-calculator"
    >
      <input type="hidden" name="onlineId" />
      <input type="hidden" name="referrer" />
      <input type="hidden" name="eligibleAmount" />

      <div
        class="container-fluid calculator-reverse-mortgage-widget calculator-reverse-mortgage-widget--@Model js-calculator-step-body js-calculator-step-1-body mb-5"
      >
        <div class="hero-calculator-help-wrapper mx-sm-5 my-4">
          <h3 class="calculator-reverse-mortgage-widget__heading--tinted mb-5">
            <a
              href="#"
              id="hero-calculator-scroll-down"
              class="js-goto-calculator"
              alt="Scroll to calculator"
            >Calculate how much you could borrow.</a>
          </h3>
          <div class="row mb-5">
            <div class="col-12">
              <label class="m-0 m-0 float-left">How many borrowers are there?</label>
            </div>
            <div class="col-6 d-flex flex-row justify-content-start mt-1">
              <div class="rad d-flex flex-row align-items-center mr-3">
                <input
                  class="radio"
                  type="radio"
                  id="borrowers1"
                  name="hero_calc_borrowers"
                  value="1"
                  v-on:change="setPlaceholder('Enter your age')"
                  checked
                />
                <label
                  for="borrowers1"
                  class="seniors-finance-hero-calculator-help__radio-label btn btn-seniors-outline btn-seniors-outline--thick"
                >One</label>
              </div>
              <div class="rad d-flex flex-row align-items-center">
                <input
                  class="radio"
                  type="radio"
                  id="borrowers2"
                  name="hero_calc_borrowers"
                  v-on:change="setPlaceholder('Age of youngest borrower ')"
                  value="2"
                />
                <label
                  for="borrowers2"
                  class="seniors-finance-hero-calculator-help__radio-label btn btn-seniors-outline btn-seniors-outline--thick"
                >Two</label>
              </div>
            </div>
          </div>
          <CalculatorForm :placeholderStr="placeholder" />
          <Result />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import CalculatorForm from "./components/CalculatorForm.vue";
import Result from "./components/Result.vue";

export default {
  name: "app",
  components: {
    CalculatorForm,
    Result
  },
  data() {
    return {
      placeholder: "Enter your age"
    };
  },
  methods: {
    setPlaceholder(value) {
      this.placeholder = value;
    }
  }
};
</script>

