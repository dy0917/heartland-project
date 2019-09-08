<template>
  <div class="position-relative text-left mt-4 mb-5">
    <input
      type="tel"
      maxlength="4"
      class="form-control"
      v-model="formData.postCode.value"
      @keypress="onTouch($event,)"
      @blur="onBlur()"
      required
    />
    <label
      class="input-label"
      v-bind:class="{ active: formData.postCode.touched}"
    >Enter your postcode</label>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  watch: {
    getUpdateResetForm() {
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
    ...mapGetters("ui", ["getUpdateResetForm"])
  },

  methods: {
    onTouch(e) {
      const input = this.formData.postCode;
      input.touched = true;
      if (e.charCode >= 48 && e.charCode <= 57) {
        return true;
      }
      e.preventDefault();
    },
    onBlur() {
      const input = this.formData.postCode;
      this.$emit("onSetPostcode", input);
    }
  }
};
</script>