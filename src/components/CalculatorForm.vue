<template>
  <div>
    <div class="row">
      <div class="col-12">
        <div class="position-relative text-left">
          <input
            type="tel"
            maxlength="3"
            class="form-control"
            v-model="formData.age.value"
            @focus="onFocus(formData.age)"
            @keypress="onTouch($event,formData.age)"
            @blur="ageBlur(formData.age)"
            autocomplete="off"
          />
          <label
            class="input-label"
            v-bind:class="{ active: formData.age.touched}"
          >{{placeholderStr}}</label>
          <span
            id="heroCalculatorAge_error"
            v-bind:class="{ 'validation-warning': formData.age.hasError}"
          >{{formData.age.errorMessage}}</span>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="position-relative text-left mt-4">
          <input
            type="tel"
            class="form-control"
            v-model="homeDisplay"
            @keypress="onTouch($event,formData.homeValue)"
            @blur="homeBlur(formData.homeValue)"
            @focus="onFocus(formData.homeValue)"
            required
            autocomplete="off"
          />
          <label
            class="input-label"
            v-bind:class="{ active: formData.homeValue.touched}"
          >Enter your home value</label>
          <span
            id="heroCalculatorHouseValue_error"
            v-bind:class="{ 'validation-warning': formData.homeValue.hasError}"
          >Minimum property value is $200,000</span>
        </div>
      </div>
    </div>
    <div class="row mb-0">
      <div class="col-12 col-sm-8">
        <div class="position-relative text-left mt-4 mb-5">
          <input
            type="tel"
            maxlength="4"
            class="form-control"
            v-model="formData.postCode.value"
            @keypress="onTouch($event,formData.postCode)"
            required
          />
          <label
            class="input-label"
            v-bind:class="{ active: formData.postCode.touched}"
          >Enter your postcode</label>
        </div>
      </div>

      <div class="mx-auto my-4">
        <div
          class="btn btn-lg btn-primary small-calculator-calculate-btn js-hero-calculator-calculate-btn my-0"
          v-on:click="calculate()"
        >{{buttonText}}</div>
      </div>
      <div class="col-12">
        <span id="heroCalculatorPostcode_error"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { strip } from "../util/common";
import { mapGetters } from "vuex";
export default {
  name: "Calculator-form",
  props: {
    placeholderStr: {
      type: String,
      required: true
    }
  },

  watch: {
    getUpdateResetForm() {
      this. buttonText= "Calculate";
      this.formData.age = {
        value: undefined,
        touched: false,
        hasError: false,
        errorMessage: "Minimum age is 60 years",
        previousValue: undefined
      };
      this.formData.homeValue = {
        value: undefined,
        touched: false,
        hasError: false,
        errorMessage: "Minimum property value is $200,000",
        previousValue: undefined
      };
      this.formData.postCode = {
        value: undefined,
        touched: false,
        hasError: false,
        errorMessage: "",
        previousValue: undefined
      };
    }
  },
  data() {
    return {
      buttonText: "Calculate",
      formData: {
        age: {
          value: undefined,
          touched: false,
          hasError: false,
          errorMessage: "Minimum age is 60 years",
          previousValue: undefined
        },
        homeValue: {
          value: undefined,
          touched: false,
          hasError: false,
          errorMessage: "Minimum property value is $200,000",
          previousValue: undefined
        },
        postCode: {
          value: undefined,
          touched: false,
          hasError: false,
          errorMessage: "",
          previousValue: undefined
        }
      }
    };
  },
  computed: {
     ...mapGetters("ui", ["getUpdateResetForm"]),
    ageValue() {
      return this.formData.age.value;
    },
    homeValue() {
      return this.formData.homeValue.value;
    },
    homeDisplay: {
      get() {
        if (this.formData.homeValue.value) {
          const stripped = strip(this.formData.homeValue.value);
          if (stripped) {
            const formattedStripped = parseInt(stripped).toLocaleString("en", {
              currency: "USD",
              minimumFractionDigits: 0,
              maximumFractionDigits: 7
            });
            return "$" + formattedStripped;
          } else {
            return "$";
          }
        }

        return "";
      },
      set(newValue) {
        const strippedZero = newValue.replace(/0/g, "");
        if (strippedZero === "$") {
          this.formData.homeValue.value = 0;
        }
        this.formData.homeValue.value = newValue;
      }
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
    onFocus(input) {
      input.previousValue = input.value;
      input.value = "";
    },
    ageBlur(input) {
      if (!input.value) {
        input.value = input.previousValue ? input.previousValue : 0;
        input.touched = true;
      }
      if (!this.ageValidate(input.value)) {
        input.hasError = true;
      } else {
        input.hasError = false;
      }
      input.errorMessage = "Minimum age is 60 years";
      if (input.value > 120) {
        input.errorMessage = "Are you intending to beat the world record? :P";
      }
    },
    homeBlur(input) {
      input.touched = true;
      if (!input.value) {
        input.value = input.previousValue ? input.previousValue : "$";
      }
      if (!this.homeValueValidate(input.value)) {
        input.hasError = true;
      } else {
        input.hasError = false;
      }
    },
    async calculate() {
      if (this.validate()) {
        await this.$store.dispatch("postcode/getPostcodeValidation", {
          postcode: this.formData.postCode.value
        });
        const lvr = await this.$store.dispatch("age/getLvrByAge", {
          age: this.formData.age.value
        });

        var stripped = strip(this.formData.homeValue.value);
        await this.$store.dispatch("postcode/clearResult");
        await this.$store.dispatch("postcode/setResult", {
          houseValue: stripped,
          lvr
        });
        await this.$store.dispatch("ui/setResult");
        this.buttonText = "Recalculate";
      }
    },
    validate() {
      let valid = true;
      if (
        !this.formData.age.value ||
        !this.ageValidate(this.formData.age.value)
      ) {
        this.formData.age.hasError = true;
        this.formData.age.touched = true;
        if (!this.formData.age.value) {
          this.formData.age.value = 0;
        }
        valid = false;
      }
      if (
        !this.formData.homeValue.value ||
        !this.homeValueValidate(this.formData.homeValue.value)
      ) {
        this.formData.homeValue.hasError = true;
        this.formData.homeValue.touched = true;
        if (!this.formData.homeValue.value) {
          this.formData.homeValue.value = "$";
        }
        valid = false;
      }
      if (!this.postCodeValidate()) {
        valid = false;
      }

      return valid;
    },
    ageValidate(value) {
      return value >= 60 && value <= 120;
    },
    homeValueValidate(value) {
      var stripped = strip(value);
      return stripped && stripped >= 200000;
    },
    postCodeValidate() {
      return (
        this.formData.postCode.value &&
        this.formData.postCode.value.length === 4
      );
    }
  }
};
</script>