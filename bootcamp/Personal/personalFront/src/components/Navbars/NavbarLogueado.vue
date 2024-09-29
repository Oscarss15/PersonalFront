<script setup>
import { ref } from "vue";

const checkbox = ref(null);

function closeMenu() {
  if (checkbox.value) {
    checkbox.value.checked = false;
  }
}
</script>

<template>
  <div id="menu">
    <div id="containerLogo">
      <h1 class="titulo">PM</h1>

      <div id="TitleNav"><label></label></div>
    </div>
  </div>

  <input type="checkbox" id="active" ref="checkbox" />
  <label for="active" class="menu-btn">
    <img id="ballNav" src="../../assets/img/navbar/pelotaNav.png" alt="" />
  </label>

  <div class="wrapper">
    <ul>
      <RouterLink to="/" class="routerlink"
        ><li @click="closeMenu">Home</li></RouterLink
      >
      <RouterLink to="/tecnica" class="routerlink"
        ><li @click="closeMenu">Técnica</li></RouterLink
      >
      <RouterLink to="/psicologia" class="routerlink"
        ><li @click="closeMenu">Psicología</li></RouterLink
      >
      <RouterLink to="/salas" class="routerlink"
        ><li @click="closeMenu">Salas</li></RouterLink
      >
    </ul>
  </div>
</template>
<style scoped>
html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
}
.titulo {
  margin-left: 20px;
  font-size: 70px;
  color: #b0fc33;
}
#menu {
  width: 100%;
  background-color: #2d3b57;
  height: 120px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Lato", sans-serif;
  font-family: "Oswald", sans-serif;
}

.routerlink {
  text-decoration: none;
}
.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #2d3b57;
  clip-path: circle(25px at calc(100% - 45px) 45px);
  transition: all 0.3s ease-in-out;
  z-index: 1000;
}
#active:checked ~ .wrapper {
  clip-path: circle(75%);
}
.menu-btn {
  position: absolute;
  z-index: 1001;
  right: 20px;
  top: 30px;
  height: 60px;
  width: 60px;
  text-align: center;
  line-height: 50px;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  animation: girar 4s linear infinite;
  transition: all 0.3s ease-in-out;
}
.menu-btn:hover {
  box-shadow: 0 3px 10px #b0fc33;
  animation: girar 4s linear infinite;
}
#ballNav {
  height: 60px;
  width: 60px;
}
#containerLogo {
  width: 95%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#logo {
  height: 70px;
  width: 70px;
}
#TitleNav {
  width: 100%;
  color: #b0fc33;
  height: 120px;
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#active:checked ~ .menu-btn {
  color: #b0fc33;
}
#active:checked ~ .menu-btn i:before {
  content: "\f00d";
}
.wrapper ul {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  list-style: none;
  text-align: center;
}
.wrapper ul li {
  margin: 15px 0;
  width: 500px;
  background-color: #2d3b57;
  cursor: pointer;
  font-size: 40px;
  transition: all 0.5s ease;
  text-decoration: none;
  color: #b0fc33;
}

.wrapper ul li:hover {
  background-color: #b0fc33;
  border-radius: 20px;
  width: 100%;
  color: #2d3b57;
}

input[type="checkbox"] {
  display: none;
}

.wrapper ul li,
.wrapper ul li:hover,
.wrapper ul li a,
.wrapper ul li a:hover {
  cursor: url("../assets/img/cursor/cursorPadel.cur"), pointer;
}
@keyframes rotate {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}
@keyframes girar {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@media (max-width: 1024px) and (min-width: 481px) {
  .wrapper ul li {
    width: 350px;
  }
}
@media (max-width: 480px) {
  .wrapper ul li {
    width: 250px;
  }
}
</style>
