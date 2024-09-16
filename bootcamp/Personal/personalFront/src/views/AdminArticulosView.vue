<script setup>
import TablaAdminArticulos from "@/components/TablaAdminArticulos.vue";
import TituloAdminArticulos from "@/components/TituloAdminArticulos.vue";
</script>
<template>
  <main>
    <TituloAdminArticulos></TituloAdminArticulos>
    <div id="containerBoton"></div>
    <div id="containerTabla">
      <TablaAdminArticulos></TablaAdminArticulos>
    </div>
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
#containerTabla {
  display: flex;
  justify-content: center;
  align-items: center;
}
#containerBoton {
  width: 100%;
  height: 150px;
}
</style>
