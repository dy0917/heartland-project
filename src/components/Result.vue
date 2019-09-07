 
 <template>
  <div class="container-fluid px-0 js-calculator-reverse-mortgage-widget__result" style="display:none">
    <div class="row mb-3">
      <div class="col-12 pt-sm-2 text-center">
        <span id="heroCalculatorPostcode_error">{{getMessage}}</span>
      </div>
      <div class="col-12">
        <p
          class="text-center what-is-a-reverse-mortgage-hero-calculator__result js-small-calculator-result"
        >{{getResult}}</p>
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
          v-on:click.prevent="resetForm()"
        >Start application</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import $ from "jquery";
export default {
  computed: {
    ...mapGetters("postcode", ["getMessage"]),
    ...mapGetters("postcode", ["getResult"]),
    ...mapGetters("ui", ["getUpdateResult"])
  },
  watch: {
    getUpdateResult() {
      $(".js-calculator-reverse-mortgage-widget__result").slideDown(1500);
      $(".js-small-calculator-result").fadeOut(300, function() {
        $(".js-small-calculator-result").fadeIn(300);
      });
    }
  },
  methods: {
    resetForm() {
      $(".js-calculator-reverse-mortgage-widget__result").hide()
      this.$store.dispatch("ui/setResetFrom");
    }
  }
};
</script>


