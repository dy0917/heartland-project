<template>
  <div class="col-12">
    <div class="position-relative text-left mt-4">
      <input
        type="tel"
        class="form-control"
        v-model="homeDisplay"
        @keypress="onTouch($event)"
        @blur="onBlur()"
        @focus="onFocus()"
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
</template>

<script>
import { strip } from "../util/common";
import { mapGetters } from "vuex";
export default {
  name: "Calculator-form",
  watch: {
    getUpdateResetForm() {
      this.buttonText = "Calculate";
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
      formData: {
        homeValue: {
          value: undefined,
          touched: false,
          hasError: false,
          errorMessage: "Minimum property value is $200,000",
          previousValue: undefined
        }
      }
    };
  },
  computed: {
    ...mapGetters("ui", ["getUpdateResetForm"]),
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
    onTouch(e) {
      if (e.charCode >= 48 && e.charCode <= 57) {
        return true;
      }
      e.preventDefault();
    },
    onFocus() {
      const input = this.formData.homeValue;
      input.previousValue = input.value;
      input.value = "";
    },
    onBlur() {
      const input = this.formData.homeValue;
      input.touched = true;
      if (!input.value) {
        input.value = input.previousValue ? input.previousValue : "$";
      }
      if (!this.homeValueValidate(input.value)) {
        input.hasError = true;
      } else {
        this.$emit("onSetHomeValue", input);
        input.hasError = false;
      }
    },
    homeValueValidate(value) {
      var stripped = strip(value);
      return stripped && stripped >= 200000;
    }
  }
};
</script>