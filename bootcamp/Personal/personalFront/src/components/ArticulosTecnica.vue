<script setup></script>
<template>
  <main>
    <div class="containerArticulo">
      <div class="imageWrapper">
        <img
          class="imgTecnica"
          src="../assets/img/tecnica/tecnica1.jpg"
          alt="Imagen técnica 1"
        />
        <div class="overlay">
          <p>Titulo 1</p>
        </div>
      </div>
    </div>
    <div class="containerArticulo">
      <div class="imageWrapper">
        <img
          class="imgTecnica"
          src="../assets/img/tecnica/tecnica1.jpg"
          alt="Imagen técnica 2"
        />
        <div class="overlay">
          <p>Titulo 2</p>
        </div>
      </div>
    </div>
    <div class="containerArticulo">
      <div class="imageWrapper">
        <img
          class="imgTecnica"
          src="../assets/img/tecnica/tecnica1.jpg"
          alt="Imagen técnica 3"
        />
        <div class="overlay">
          <p>Titulo 3</p>
        </div>
      </div>
    </div>
    <div class="containerArticulo">
      <div class="imageWrapper">
        <img
          class="imgTecnica"
          src="../assets/img/tecnica/tecnica1.jpg"
          alt="Imagen técnica 4"
        />
        <div class="overlay">
          <p>Titulo 4</p>
        </div>
      </div>
    </div>
    <div class="containerArticulo">
      <div class="imageWrapper">
        <img
          class="imgTecnica"
          src="../assets/img/tecnica/tecnica1.jpg"
          alt="Imagen técnica 5"
        />
        <div class="overlay">
          <p>Titulo 5</p>
        </div>
      </div>
    </div>
    <div class="containerArticulo">
      <div class="imageWrapper">
        <img
          class="imgTecnica"
          src="../assets/img/tecnica/tecnica1.jpg"
          alt="Imagen técnica 6"
        />
        <div class="overlay">
          <p>Titulo 6</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-columns: auto auto auto;
}

.containerArticulo {
  padding: 5px;
}

.imageWrapper {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
}
.imageWrapper:hover {
  box-shadow: 0 0 10px #2d3b57;
}

.imgTecnica {
  height: 298px;
  width: 100%;
  object-fit: cover;
  opacity: 0.6;
  filter: grayscale(100%);
  transition: 1000ms;
}

.overlay {
  position: absolute;
  bottom: 0;
  background-color: rgba(45, 59, 87, 0.7);
  color: white;
  width: 100%;
  text-align: center;
  padding: 10px 0;
  height: 40px;
  opacity: 1;
  transition: height 0.5s ease, bottom 0.5s ease;
}

.imageWrapper:hover .overlay {
  height: 80px;
  box-shadow: 0 0 10px #b0fc33;
}

.imgTecnica:hover {
  opacity: 1;
  filter: grayscale(0%);
  box-shadow: 0 0 20px #b0fc33;
  transform: scale(1.03);
}
</style>
