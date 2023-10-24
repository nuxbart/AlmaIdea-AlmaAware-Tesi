import { createRouter, createWebHistory } from "vue-router";
import Layout from "../layouts/Default.vue";

import Home from "../pages/Home.vue";
import Sdg from "../pages/Sdg.vue";
import Unibo from "../pages/Unibo.vue";
import Student from "../pages/Student.vue";
import Profil from "../pages/Profil.vue";
import Badges from "../pages/Badges.vue";
import Flower from "../pages/Flower.vue";

import SignIn from "../pages/SignIn.vue";
import SignUp from "../pages/SignUp.vue";
import Connexion from "../pages/Connexion.vue";

import Kiosk from "../pages/Kiosk.vue";

import lineChart from "../components/graphs/lineChart.vue"
import GreenhouseVue from "../pages/Greenhouse.vue";

const Router = createRouter({
  base: "./AlmaIdea/",
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "home",
          name: "home",
          component: Home,
        },
        {
          path: "sdg/:id",
          name: "sdg",
          component: Sdg,
        },
        {
          path: "sdg/:id/unibo",
          name: "unibo",
          component: Unibo,
        },
        {
          path: "sdg/:id/student",
          name: "student",
          component: Student,
        },
        {
          path: "profil",
          name: "profil",
          component: Profil,
        },
        {
          path: "badges",
          name: "badges",
          component: Badges,
        },
        {
          path: "flower",
          name: "flower",
          component: Flower,
        },
      ],
    },
    {
      path: "/signin/",
      name: "signin",
      component: SignIn,
    },
    {
      path: "/signup/",
      name: "signup",
      component: SignUp,
    },
    {
      path: "",
      name: "connexion",
      component: Connexion,
    },
    {
      path: "/kiosk/:id",
      name: "kiosk",
      component: Kiosk,
    },
    {
      path: "/greenhouse",
      name: "greenhouse",
      component: GreenhouseVue,
    },
    {
      path: "/test",
      name: "test",
      component: lineChart,
    },
  ],
});

export default Router;