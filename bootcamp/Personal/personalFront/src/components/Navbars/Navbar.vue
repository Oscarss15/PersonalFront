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
      <!--  <h1 class="titulo">PM</h1> -->
      <ul class="ul">
        <li class="li">P</li>
        <li class="li" id="letras">a</li>
        <li class="li" id="letras">d</li>
        <li class="li" id="letras">e</li>
        <li class="li" id="letras">l</li>
        <li class="li">M</li>
        <li class="li" id="letras">a</li>
        <li class="li" id="letras">t</li>
        <li class="li" id="letras">c</li>
        <li class="li" id="letras">h</li>
      </ul>

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
.ul {
  display: flex;
}
.li {
  list-style: none;
  font-weight: 500;
  font-size: 40px;
  letter-spacing: 0.1vw;
  margin-left: 20px;
  color: #b0fc33;
  text-shadow: none;
  animation: anim 8s infinite linear;
}
@keyframes anim {
  0% {
    color: #b0fc33;
    text-shadow: none;
  }
  18% {
    color: #b0fc33;
    text-shadow: none;
  }
  20% {
    color: #2d3b57;
    text-shadow: 0 0 0.5vw white, 0 0 3vw #b0fc33;
  }
  30% {
    color: #b0fc33;
    text-shadow: none;
  }
  35% {
    color: #2d3b57;
    text-shadow: 0 0 0.5vw white, 0 0 3vw #b0fc33;
  }
  70% {
    color: #b0fc33;
    text-shadow: none;
  }
  85% {
    color: #2d3b57;
    text-shadow: 0 0 0.5vw white, 0 0 3vw #b0fc33;
  }
  90% {
    color: #b0fc33;
    text-shadow: none;
  }
  100% {
    color: #b0fc33;
    text-shadow: none;
  }
}
.li:nth-child(1) {
  animation-delay: 0.2s;
}
.li:nth-child(2) {
  animation-delay: 0.4s;
}
.li:nth-child(3) {
  animation-delay: 0.6s;
}
.li:nth-child(4) {
  animation-delay: 0.8s;
}
.li:nth-child(5) {
  animation-delay: 0.1s;
}
.li:nth-child(6) {
  animation-delay: 1s;
}
.li:nth-child(7) {
  animation-delay: 1.2s;
}
.li:nth-child(8) {
  animation-delay: 1.4s;
}
.li:nth-child(9) {
  animation-delay: 1.6s;
}
.li:nth-child(10) {
  animation-delay: 1.8s;
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
  .li {
    font-size: 45px;
    letter-spacing: -15px;
  }
  #letras {
    display: none;
  }
}
</style>
