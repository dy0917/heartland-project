<template>
  <div class="col-12">
    <div class="position-relative text-left">
      <input
        type="tel"
        maxlength="3"
        class="form-control"
        v-model="formData.age.value"
        @focus="onFocus()"
        @keypress="onTouch($event)"
        @blur="onBlur()"
        autocomplete="off"
      />
      <label class="input-label" v-bind:class="{ active: formData.age.touched}">{{placeholderStr}}</label>
      <span
        id="heroCalculatorAge_error"
        v-bind:class="{ 'validation-warning': formData.age.hasError}"
      >{{formData.age.errorMessage}}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Calculator-form",
  props: {
    placeholderStr: {
      type: String
      //   required: true
    }
  },

  watch: {
    getUpdateResetForm() {
      this.formData.age = {
        value: undefined,
        touched: false,
        hasError: false,
        errorMessage: "Minimum age is 60 years",
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
        }
      }
    };
  },
  computed: {
    ...mapGetters("ui", ["getUpdateResetForm"]),
    ageValue() {
      return this.formData.age.value;
    }
  },

  methods: {
    onTouch(e) {
      const input = this.formData.age;
      input.touched = true;
      if (e.charCode >= 48 && e.charCode <= 57) {
        return true;
      }
      e.preventDefault();
    },
    onFocus() {
      const input = this.formData.age;
      input.previousValue = input.value;
      input.value = "";
    },
    onBlur() {
      const input = this.formData.age;
      if (!input.value) {
        input.value = input.previousValue ? input.previousValue : 0;
        input.touched = true;
      }
      if (!this.ageValidate(input.value)) {
        input.hasError = true;
      } else {
        this.$emit("onSetAge", input);
        input.hasError = false;
      }
      input.errorMessage = "Minimum age is 60 years";
      if (input.value > 120) {
        input.errorMessage = "Are you intending to beat the world record? :P";
      }
    },

    ageValidate(value) {
      return value >= 60 && value <= 120;
    }
  }
};
</script>