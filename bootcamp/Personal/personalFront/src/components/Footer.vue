<script setup></script>

<template>
  <footer class="text-center text-lg-start" style="background-color: #2d3b57">
    <div class="container d-flex justify-content-center py-5">
      <button
        type="button"
        class="btn btn-primary btn-lg btn-floating mx-2"
        id="btnfb"
      >
        <i class="fab fa-facebook-f"></i>
      </button>
      <button
        type="button"
        class="btn btn-primary btn-lg btn-floating mx-2"
        id="btntw"
      >
        <i class="fab fa-twitter"></i>
      </button>
      <button
        type="button"
        class="btn btn-primary btn-lg btn-floating mx-2"
        id="btnig"
      >
        <i class="fab fa-instagram"></i>
      </button>
      <button
        type="button"
        class="btn btn-primary btn-lg btn-floating mx-2"
        id="btnws"
      >
        <i class="fab fa-whatsapp"></i>
      </button>
    </div>

    <div
      class="text-center p-3"
      style="background-color: #404040"
      id="divfooter"
    >
      © 2024 Copyright:
      <a
        class="linkProyecto"
        href="https://github.com/FactoriaF5-FactZoopia/Sonar-Events-FrontEnd.git"
        target="_blank"
        >PadelMatch</a
      >
    </div>
  </footer>
</template>

<style scoped>
footer {
  box-shadow: 0 -10px 15px #b0fc33;
  z-index: 1000;
}

button {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 2px solid #b0fc33;
  box-shadow: 0 0 5px #b0fc33;
  background-color: #2d3b57;
  transition: transform 0.3s;
}

i {
  color: #b0fc33;
}

button:hover i {
  color: #2d3b57;
}

#btnfb:hover,
#btntw:hover,
#btnig:hover,
#btnws:hover {
  transform: scale(1.1);
  background-color: #b0fc33;
  box-shadow: 0 0 15px #b0fc33;
  border: 2px solid #b0fc33;
  transform: rotateY(360deg);
}

#btnws,
#btnig,
#btntw,
#btnfb {
  transition: transform 3s;
  transform-style: preserve-3d;
}

#divfooter {
  color: white;
  box-shadow: 0 0 15px #b0fc33;
}

.linkProyecto {
  font-size: 18px;
  color: #b0fc33;
}

button,
button:hover {
  cursor: url("../assets/img/cursor/cursorPadel.cur"), pointer;
}
@media (max-width: 600px) {
  button {
    width: 60px;
    height: 60px;
  }
}
</style>
