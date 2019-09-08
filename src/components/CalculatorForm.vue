<template>
  <div>
    <div class="row">
      <AgeInput :placeholderStr="placeholderStr" @onSetAge="setAge" ref="ageInput" />
    </div>
    <div class="row">
      <HomeValueInput @onSetHomeValue="setHomeValue" ref="homeInput" />
    </div>

    <div class="row mb-0">
      <div class="col-12 col-sm-8">
        <PostcodeInput @onSetPostcode="setPostCode" ref="postcodeInput" />
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
import AgeInput from "./AgeInput.vue";
import HomeValueInput from "./HomeValueInput.vue";
import PostcodeInput from "./PostcodeInput.vue";
import { mapGetters } from "vuex";
export default {
  name: "Calculator-form",
  props: {
    placeholderStr: {
      type: String,
      required: true
    }
  },
  components: {
    AgeInput,
    HomeValueInput,
    PostcodeInput
  },

  watch: {//notify update
    getUpdateResetForm() {
      this.buttonText = "Calculate";
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
          previousValue: undefined
        },
        homeValue: {
          value: undefined,
          touched: false,
          hasError: false,
          previousValue: undefined
        },
        postcode: {
          value: undefined,
          touched: false,
          hasError: false,
          previousValue: undefined
        }
      }
    };
  },
  computed: {
    ...mapGetters("ui", ["getUpdateResetForm"])
  },

  methods: {
    setAge(age) {
      this.formData.age = age;
    },
    setHomeValue(homeValue) {
      this.formData.homeValue = homeValue;
    },
    setPostCode(postcode) {
      this.formData.postcode = postcode;
    },

    async calculate() {
      if (this.validate()) {
        await this.$store.dispatch("postcode/getPostcodeValidation", {
          postcode: this.formData.postcode.value
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
      //trigger children component get data
      this.$refs.ageInput.onBlur();
      this.$refs.homeInput.onBlur();
      this.$refs.postcodeInput.onBlur();
      if (
        !this.formData.age.value
      ) {
      
        valid = false;
      }
      if (
        !this.formData.homeValue.value
      ) {
        valid = false;
      }
      if (!this.postCodeValidate()) {
        valid = false;
      }
      return valid;
    },
    postCodeValidate() {
      return (
        this.formData.postcode.value &&
        this.formData.postcode.value.length === 4
      );
    }
  }
};
</script>