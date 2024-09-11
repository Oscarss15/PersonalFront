<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <header>
    <Navbar></Navbar>
  </header>
  <main></main>

  <RouterView />
  <Footer></Footer>
</template>

<style scoped>
main {
  height: auto;
}
</style>
