<script setup>
import TituloPsicologia from "@/components/TituloPsicologia.vue";
import ArticulosPsicologia from "@/components/ArticulosPsicologia.vue";
</script>

<template>
  <main>
    <TituloPsicologia></TituloPsicologia>
    <ArticulosPsicologia></ArticulosPsicologia>
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
