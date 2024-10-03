<script setup>
import { ref, onMounted } from "vue";
import NavbarLogueado from "@/components/Navbars/NavbarLogueado.vue";
import TituloSalas from "@/components/compSalas/TituloSalas.vue";
import BotonAñadirSala from "@/components/compSalas/BotonAñadirSala.vue";
import CardSala from "@/components/compSalas/CardSala.vue";

// Estado para las salas
const salas = ref([]);

// Función para obtener todas las salas desde la API
const fetchSalas = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/v1/salas/allsalas");
    if (response.ok) {
      const data = await response.json();
      salas.value = data; // Actualizamos la lista de salas con la respuesta de la API
    } else {
      console.error("Error fetching salas:", response.statusText);
    }
  } catch (error) {
    console.error("Error fetching salas:", error);
  }
};

// Llamar a la API para obtener las salas cuando el componente se monta
onMounted(() => {
  fetchSalas();
});

// Función para añadir una nueva sala
const addSala = async (newSala) => {
  try {
    const response = await fetch("http://localhost:8080/api/v1/salas/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSala), // Convertir el objeto newSala a JSON
    });

    if (response.ok) {
      const data = await response.json();
      salas.value.push(data); // Añadimos la nueva sala a la lista
    } else {
      console.error("Error adding sala:", response.statusText);
    }
  } catch (error) {
    console.error("Error adding sala:", error);
  }
};
</script>

<template>
  <NavbarLogueado />

  <main>
    <TituloSalas />

    <!-- Botón para añadir sala, pasando la función addSala para que la use -->
    <BotonAñadirSala @sala-added="addSala" />

    <!-- Renderizado dinámico de las tarjetas de salas -->

    <CardSala
      class="cardSala"
      v-for="sala in salas"
      :key="sala.id"
      :sala="sala"
    />
  </main>
</template>

<style scoped>
main {
  min-height: 400px;
  background: url("../assets/img/login/fondo.png") no-repeat center center;
  background-size: cover;
  object-fit: cover;
  background-attachment: fixed;
}
.cardSala {
}
@media (min-width: 481px) and (max-width: 1024px) {
  main {
    min-height: 400px;
  }
}
</style>
