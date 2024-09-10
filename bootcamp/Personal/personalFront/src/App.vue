<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <header>
    <Navbar></Navbar>
  </header>
  <main></main>

  <RouterView />
</template>

<style scoped></style>
