import Vue from "vue";
import Vuex from "vuex";
import postcode from './Postcode';
import age from './Age';
import ui from './Ui';
import AgeService from '../services/age'
import PostCodeService from '../services/postcode'
const ageService = new AgeService();
const postCodeService = new PostCodeService();

Vue.use(Vuex);


export default new Vuex.Store({
    modules: {
        age: age(ageService),
        postcode: postcode(postCodeService),
        ui:ui()
    }
});