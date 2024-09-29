import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/tecnica",
      name: "tecnica",
      component: () => import("../views/TecnicaView.vue"),
    },
    {
      path: "/psicologia",
      name: "psicologia",
      component: () => import("../views/PsicologiaDeportivaView.vue"),
    },
    {
      path: "/salas",
      name: "salas",
      component: () => import("../views/SalasView.vue"),
    },
    {
      path: "/foro",
      name: "foro",
      component: () => import("../views/ForoView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/articulos",
      name: "articulos",
      component: () => import("../views/ArticulosView.vue"),
    },
    {
      path: "/adminArticulos",
      name: "adminArticulos",
      component: () => import("../views/AdminArticulosView.vue"),
    },
    {
      path: "/articulos/:id", // Ruta para CuerpoArticulo
      name: "cuerpoArticulo",
      component: () => import("../components/compArticulo/CuerpoArticulo.vue"),
      props: true, // Permitir pasar el ID como prop
    },
  ],
});

export default router;
