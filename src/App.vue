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

          <div class="container-fluid px-0 js-calculator-reverse-mortgage-widget__result">
            <div class="row mb-3">
              <div class="col-12 pt-sm-2 text-center">You may be able to borrow up to*:</div>
              <div class="col-12">
                <p
                  class="text-center what-is-a-reverse-mortgage-hero-calculator__result js-small-calculator-result"
                >$45,000</p>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-12">
                <p class="fine-print fine-print--smaller text-center">
                  *This calculation does not constitute an approval but provides an indicator of how much
                  you could possibly borrow. Applications for a Reverse Mortgage are subject to our normal
                  lending criteria, which includes a valuation. Full terms and conditions will be included
                  in any loan offer.
                </p>
              </div>
            </div>
            <div class="row mb-0">
              <div class="col-12 text-center">
                <button
                  type="submit"
                  id="js-transfer-to-reverse-mortgage-application"
                  class="btn btn-lg btn-secondary step-1-go-next my-3"
                >Start application</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import CalculatorForm from "./components/CalculatorForm.vue";

export default {
  name: "app",
  components: {
    CalculatorForm
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

