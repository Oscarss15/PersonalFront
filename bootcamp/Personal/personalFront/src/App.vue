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

<style>
main {
  height: auto;
}
body {
  cursor: url("./assets/img/cursor/cursorPadel.cur"), auto;
}

img,
a,
button,
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  cursor: url("./assets/img/cursor/cursorPadel.cur"), pointer;
}

header img:hover,
header a:hover,
header p:hover,
header h1:hover,
header h2:hover,
header h3:hover,
footer img:hover,
footer a:hover,
footer p:hover,
footer h1:hover,
footer h2:hover,
footer h3:hover {
  cursor: url("./assets/img/cursor/cursorPadel.cur"), pointer;
}
</style>
