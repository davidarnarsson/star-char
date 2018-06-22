import Vue from "vue";
import Router from "vue-router";
import Concept from "./views/Concept.vue";
import About from "./views/About.vue";
import Race from "./views/Race.vue";
import Theme from "./views/Theme.vue";
import AbilityScores from "@/views/AbilityScores.vue";
import PickClass from "@/views/PickClass.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Concept",
      component: Concept
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/race",
      name: "race",
      component: Race
    },
    {
      path: "/theme",
      name: "theme",
      component: Theme
    },
    {
      path: "/class",
      name: "class",
      component: PickClass
    },
    {
      path: "/ability-scores",
      name: "ability-scores",
      component: AbilityScores
    }
  ]
});
