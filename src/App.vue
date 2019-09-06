<template>
  <div id="app">
    <form action="" method="post" id="seniors-finance-below-hero-calculator-form"
        class="seniors-finance-below-hero-calculator">
        <input type="hidden" name="onlineId" />
        <input type="hidden" name="referrer" />
        <input type="hidden" name="eligibleAmount" />

        <div
            class="container-fluid calculator-reverse-mortgage-widget calculator-reverse-mortgage-widget--@Model js-calculator-step-body js-calculator-step-1-body mb-5">

            <div class="hero-calculator-help-wrapper mx-sm-5 my-4">
                <h3 class="calculator-reverse-mortgage-widget__heading--tinted mb-5">
                    <a href="#" id="hero-calculator-scroll-down" class="js-goto-calculator"
                        alt="Scroll to calculator">Calculate how much you could borrow.</a>
                </h3>
                <div class="row mb-5">
                    <div class="col-12">
                        <label class="m-0 m-0 float-left">
                            How many borrowers are there?
                        </label>
                    </div>
                    <div class="col-6 d-flex flex-row justify-content-start mt-1">
                        <div class="rad d-flex flex-row align-items-center mr-3">
                            <input class="radio" type="radio" id="borrowers1" name="hero_calc_borrowers" value="1"
                                checked="">
                            <label for="borrowers1"
                                class="seniors-finance-hero-calculator-help__radio-label btn btn-seniors-outline btn-seniors-outline--thick">One</label>
                        </div>
                        <div class="rad d-flex flex-row align-items-center">
                            <input class="radio" type="radio" id="borrowers2" name="hero_calc_borrowers" value="2">
                            <label for="borrowers2"
                                class="seniors-finance-hero-calculator-help__radio-label btn btn-seniors-outline btn-seniors-outline--thick">Two</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="position-relative text-left">
                            <input type="tel" maxlength="3"
                                class="form-control js-calculator-reverse-mortgage-widget__ageFirst" name="ageFirst"
                                id="heroCalculatorAge" onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                                autocomplete="off">
                            <label id="js-youngest-borrower-age" class="input-label">Enter your age</label>
                            <span id="heroCalculatorAge_error">Minimum age is 60 years</span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="position-relative text-left mt-4">
                            <input type="tel"
                                class="form-control calculator-reverse-mortgage-widget__houseValue js-calculator-reverse-mortgage-widget__houseValue"
                                id="heroCalculatorHouseValue" name="houseValue"
                                onkeypress="return event.charCode >= 48 && event.charCode <= 57" required
                                autocomplete="off" />
                            <label class="input-label">Enter your home value</label>
                            <span id="heroCalculatorHouseValue_error">Minimum property value is $200,000</span>
                        </div>
                    </div>
                </div>
                <div class="row mb-0">
                    <div class="col-12 col-sm-8">
                        <div class="position-relative text-left mt-4 mb-5">
                            <input type="tel" maxlength="4"
                                class="form-control calculator-reverse-mortgage-widget__postCode js-calculator-reverse-mortgage-widget__postCode"
                                id="heroCalculatorPostcode" name="postcode"
                                onkeypress="return event.charCode >= 48 && event.charCode <= 57" required />
                            <label class="input-label">Enter your postcode</label>

                        </div>
                    </div>

                    <div class="mx-auto my-4">
                        <div
                            class="btn btn-lg btn-primary small-calculator-calculate-btn js-hero-calculator-calculate-btn my-0">
                            Calculate
                        </div>
                    </div>
                    <div class="col-12">
                        <span id="heroCalculatorPostcode_error"></span>
                    </div>
                </div>

                <div class="container-fluid px-0 js-calculator-reverse-mortgage-widget__result">
                    <div class="row mb-3">
                        <div class="col-12 pt-sm-2 text-center">
                            You may be able to borrow up to*:
                        </div>
                        <div class="col-12">
                            <p
                                class="text-center what-is-a-reverse-mortgage-hero-calculator__result js-small-calculator-result">
                                $45,000</p>
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
                            <button type="submit" id="js-transfer-to-reverse-mortgage-application"
                                class="btn btn-lg btn-secondary step-1-go-next my-3">Start application</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </form>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
