import Vue from "vue";
import Router from "vue-router";
import Concept from "./views/Concept.vue";
import About from "./views/About.vue";
import Race from "./views/Race.vue";
import Theme from "./views/Theme.vue";
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
    }
  ]
});
