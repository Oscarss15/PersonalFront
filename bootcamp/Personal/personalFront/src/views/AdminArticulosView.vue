<script setup>
import TablaAdminArticulos from "@/components/TablaAdminArticulos.vue";
import TituloAdminArticulos from "@/components/TituloAdminArticulos.vue";
import BotonAñadirArticulo from "@/components/BotonAñadirArticulo.vue";
</script>
<template>
  <main>
    <TituloAdminArticulos></TituloAdminArticulos>

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

@media (min-width: 481px) and (max-width: 1024px) {
  main {
    min-height: 1100px;
  }
}
</style>
