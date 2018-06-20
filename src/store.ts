import Vue from "vue";
import Vuex from "vuex";
import Mutation from "@/models/Mutation";
import State from "@/state";

import wizard from "./wizard";

Vue.use(Vuex);

export default new Vuex.Store<State>({
  modules: {
    wizard
  }
});
