import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EstudianteView from "@/views/EstudianteView.vue";
import CarroView from "@/views/CarroView.vue";
import HolaMundoView from "@/views/HolaMundoView.vue";
import ClimaView from "@/views/ClimaView.vue";

const routes = [
  //carga normal
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/estudiante/:cedula",
    name: "estudiante",
    component: EstudianteView,
  },
  {
    path: "/estudiante-tabla",
    name: "estudiante-tabla",
    component: () =>
      import(
        /* webpackChunkName: "estudiante-tabla" */ "@/views/EstudianteTablaView.vue"
      ),
  },
  {
    path: "/contador",
    name: "contador",
    component: () =>
      import(/* webpackChunkName: "contador" */ "@/views/ContadorView.vue"),
  },
  {
    path: "/pregunta",
    name: "pregunta",
    component: () =>
      import(/* webpackChunkName: "pregunta" */ "@/views/PreguntaView.vue"),
  },
  {
    path: "/pokemon",
    name: "pokemon",
    component: () =>
      import(/* webpackChunkName: "pokemon" */ "@/views/PokemonView.vue"),
  },
  {
    path: "/carro",
    name: "carro",
    component: CarroView,
  },
  {
    path: "/hola-mundo",
    name: "hola-mundo",
    component: HolaMundoView,
  },
  {
    path: "/clima",
    name: "clima",
    component: ClimaView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
