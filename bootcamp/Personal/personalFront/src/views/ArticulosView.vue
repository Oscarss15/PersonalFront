<script setup>
import TituloArticulo from "@/components/compArticulo/TituloArticulo.vue";
import CuerpoArticulo from "@/components/compArticulo/CuerpoArticulo.vue";
import BotonVolverArticulo from "@/components/compArticulo/BotonVolverArticulo.vue";
</script>

<template>
  <main>
    <TituloArticulo></TituloArticulo>
    <CuerpoArticulo></CuerpoArticulo>
    <BotonVolverArticulo></BotonVolverArticulo>
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
