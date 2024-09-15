<script setup>
import TituloArticulo from "@/components/TituloArticulo.vue";
import CuerpoArticulo from "@/components/CuerpoArticulo.vue";
</script>

<template>
  <main>
    <TituloArticulo></TituloArticulo>
    <CuerpoArticulo></CuerpoArticulo>
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
</style>
