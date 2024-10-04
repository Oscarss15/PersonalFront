import "./assets/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

// Mostrar la pantalla de carga antes de cada cambio de ruta
router.beforeEach((to, from, next) => {
  const loadingElement = document.getElementById("loading");
  if (loadingElement) {
    loadingElement.classList.remove("hide"); // Mostrar el loading
  }
  next(); // Continuar con la navegación
});

// Ocultar la pantalla de carga después de que la ruta haya cambiado
router.afterEach(() => {
  const loadingElement = document.getElementById("loading");
  if (loadingElement) {
    setTimeout(() => {
      loadingElement.classList.add("hide"); // Ocultar el loading con un pequeño retardo
    }, 1500); // Puedes ajustar este tiempo si es necesario
  }
});

app.use(createPinia());
app.use(router);

app.mount("#app");
