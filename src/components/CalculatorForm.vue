<template>
  <div>
    <div class="row">
      <div class="col-12">
        <div class="position-relative text-left">
          <input
            type="tel"
            maxlength="3"
            class="form-control js-calculator-reverse-mortgage-widget__ageFirst"
            v-model="formData.age.value"
            @keypress="onTouch($event,formData.age)"
            @blur="ageFocus(formData.age)"
            autocomplete="off"
          />
          <label
            id="js-youngest-borrower-age"
            class="input-label"
            v-bind:class="{ active: formData.age.touched}"
          >Enter your age</label>
          <span>{{this.formData.age.errorMessage}}</span>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="position-relative text-left mt-4">
          <input
            type="tel"
            class="form-control calculator-reverse-mortgage-widget__houseValue js-calculator-reverse-mortgage-widget__houseValue"
            id="heroCalculatorHouseValue"
            name="houseValue"
            onkeypress="return event.charCode >= 48 && event.charCode <= 57"
            required
            autocomplete="off"
          />
          <label class="input-label">Enter your home value</label>
          <span id="heroCalculatorHouseValue_error">Minimum property value is $200,000</span>
        </div>
      </div>
    </div>
    <div class="row mb-0">
      <div class="col-12 col-sm-8">
        <div class="position-relative text-left mt-4 mb-5">
          <input
            type="tel"
            maxlength="4"
            class="form-control calculator-reverse-mortgage-widget__postCode js-calculator-reverse-mortgage-widget__postCode"
            id="heroCalculatorPostcode"
            name="postcode"
            onkeypress="return event.charCode >= 48 && event.charCode <= 57"
            required
          />
          <label class="input-label">Enter your postcode</label>
        </div>
      </div>

      <div class="mx-auto my-4">
        <div
          class="btn btn-lg btn-primary small-calculator-calculate-btn js-hero-calculator-calculate-btn my-0"
        >Calculate</div>
      </div>
      <div class="col-12">
        <span id="heroCalculatorPostcode_error"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator-form",
  data() {
    return {
      formData: {
        age: {
          value: undefined,
          touched: false,
          hasError:false,
          errorMessage:"Minimum age is 60 years",
        }
      }
    };
  },
  computed: {
    ageValue() {
      return this.formData.age.value;
    }
  },
  watch: {
    ageValue(value) {
    //    const intValue=parseInt(value);
    //    console.log(intValue, intValue<60);
    //     this.formData.age.errorMessage="Minimum age is 60 years";
    //     this.formData.age.hasError=false;
    //     if(intValue<60||intValue>120){
    //         this.formData.age.hasError=true;
    //     }
    //     if(intValue>120){
    //         this.formData.age.errorMessage="Are you intending to beat the world record? :P";
    //     }

    }
  },

  methods: {
    onTouch(e, input) {
      input.touched = true;
      if (e.charCode >= 48 && e.charCode <= 57) {
        return true;
      }
      e.preventDefault();
    },
    ageFocus(input) {
      if (!input.value) {
        input.value = 0;
        input.touched = true;
      }
    }
  }
};
</script>