<script setup>
import TituloTecnica from "@/components/compTecnica/TItuloTecnica.vue";
import ArticulosTecnica from "@/components/compTecnica/ArticulosTecnica.vue";
import NavbarLogueado from "@/components/Navbars/NavbarLogueado.vue";
</script>

<template>
  <NavbarLogueado></NavbarLogueado>
  <main>
    <TituloTecnica></TituloTecnica>
    <ArticulosTecnica></ArticulosTecnica>
  </main>
</template>
<style scoped>
main {
  min-height: 657px;
  background: url("../assets/img/login/fondo.png") no-repeat center center;
  background-size: cover;
  object-fit: cover;
  background-attachment: fixed;
}
@media (min-width: 481px) and (max-width: 1024px) {
  main {
    min-height: 957px;
  }
}
</style>
