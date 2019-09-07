export default function() {
  return {
    namespaced: true,
    state: {
      resetForm: "",
      result: ""
    },

    getters: {
      getUpdateResult(state) {
        return state.result;
      },
      getUpdateResetForm(state) {
        return state.resetForm;
      }
    },

    mutations: {
      saveResetForm(state, { update }) {

        state.resetForm = update;
      },
      saveResult(state, { result }) {
        state.result = result;
      }
    },
    actions: {
      setResult({ commit }) {
        const update = new Date().getTime();
        commit("saveResult", {
          result: update
        });
        return update;
      },

      setResetFrom({ commit }) {
        const update = new Date().getTime();
        commit("saveResetForm", {
          update
        });
        return update;
      }
    }
  };
}
