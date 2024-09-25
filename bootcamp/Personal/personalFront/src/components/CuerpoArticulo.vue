<script setup></script>
<template>
  <div id="containerArticulos">
    <div class="contArticulo">
      <div class="contTexto">
        <p id="bloqueTexto1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          tortor massa, lacinia quis felis quis, viverra tincidunt libero. Cras
          in leo eu arcu facilisis aliquet. Mauris eros sem, consectetur et est
          a, cursus tristique felis. Donec ultricies, ipsum sit amet facilisis
          pretium, lacus est lobortis dui, auctor venenatis enim neque at nibh.
          Mauris venenatis, felis at tristique iaculis, enim dolor posuere
          neque, non pulvinar metus arcu vel lectus. Vivamus fringilla sodales
          felis non scelerisque. Sed ac elit lacinia, cursus mauris
          pellentesque, iaculis quam. Proin at sem eu turpis varius lobortis.
          Pellentesque sit amet purus mattis, ullamcorper massa elementum,
          volutpat erat. Sed consequat ex est, quis tristique odio tempor ut.
          Sed at molestie orci. Mauris vel quam vestibulum elit vestibulum
          egestas ut at augue. Sed dictum convallis arcu.
        </p>
      </div>
      <div class="contImagen">
        <img class="img1" src="../assets/img/tecnica/tecnica1.jpg" alt="" />
      </div>
    </div>
    <div class="contSeparador">
      <div class="separador"></div>
    </div>
    <div class="contArticulo">
      <div class="contTextoInvertido">
        <p id="bloqueTexto2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          tortor massa, lacinia quis felis quis, viverra tincidunt libero. Cras
          in leo eu arcu facilisis aliquet. Mauris eros sem, consectetur et est
          a, cursus tristique felis. Donec ultricies, ipsum sit amet facilisis
          pretium, lacus est lobortis dui, auctor venenatis enim neque at nibh.
          Mauris venenatis, felis at tristique iaculis, enim dolor posuere
          neque, non pulvinar metus arcu vel lectus. Vivamus fringilla sodales
          felis non scelerisque. Sed ac elit lacinia, cursus mauris
          pellentesque, iaculis quam. Proin at sem eu turpis varius lobortis.
          Pellentesque sit amet purus mattis, ullamcorper massa elementum,
          volutpat erat. Sed consequat ex est, quis tristique odio tempor ut.
          Sed at molestie orci. Mauris vel quam vestibulum elit vestibulum
          egestas ut at augue. Sed dictum convallis arcu.
        </p>
      </div>
      <div class="contImagenInvertido">
        <img class="img2" src="../assets/img/tecnica/tecnica1.jpg" alt="" />
      </div>
    </div>
    <div class="contSeparador">
      <div class="separador"></div>
    </div>
    <div class="contArticulo">
      <div class="contTexto">
        <p id="bloqueTexto3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          tortor massa, lacinia quis felis quis, viverra tincidunt libero. Cras
          in leo eu arcu facilisis aliquet. Mauris eros sem, consectetur et est
          a, cursus tristique felis. Donec ultricies, ipsum sit amet facilisis
          pretium, lacus est lobortis dui, auctor venenatis enim neque at nibh.
          Mauris venenatis, felis at tristique iaculis, enim dolor posuere
          neque, non pulvinar metus arcu vel lectus. Vivamus fringilla sodales
          felis non scelerisque. Sed ac elit lacinia, cursus mauris
          pellentesque, iaculis quam. Proin at sem eu turpis varius lobortis.
          Pellentesque sit amet purus mattis, ullamcorper massa elementum,
          volutpat erat. Sed consequat ex est, quis tristique odio tempor ut.
          Sed at molestie orci. Mauris vel quam vestibulum elit vestibulum
          egestas ut at augue. Sed dictum convallis arcu.
        </p>
      </div>
      <div class="contImagen">
        <img class="img3" src="../assets/img/tecnica/tecnica1.jpg" alt="" />
      </div>
    </div>
  </div>
  <div class="separador"></div>
</template>
<style scoped>
#containerArticulos {
  display: grid;
  grid-template-columns: auto;
  width: 100%;
}

.contArticulo {
  height: auto;
  margin-bottom: 30px;
  display: flex;
}

.contTexto {
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  float: left;
}

.contImagen {
  width: 30%;
  height: 300px;
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contTextoInvertido {
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  float: right;
}

.contImagenInvertido {
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  float: left;
}

#bloqueTexto1,
#bloqueTexto2,
#bloqueTexto3 {
  width: 90%;
  font-size: 20px;
  font-weight: bold;
  text-align: justify;
}

.img1,
.img2,
.img3 {
  width: 90%;
  height: 90%;
  border-radius: 10px;
  box-shadow: 0 0 20px #2d3b57;
  object-fit: cover;
  transition: 1000ms;
}
.img1:hover,
.img2:hover,
.img3:hover {
  opacity: 1;
  filter: grayscale(0%);
  box-shadow: 0 0 20px #b0fc33;
  transform: scale(1.03);
}

.contSeparador {
  display: flex;
  justify-content: center;
  align-items: center;
}

.separador {
  width: 100%;
  height: 15px;
  background-color: #2d3b57;
}
@media (min-width: 481px) and (max-width: 1024px) {
  .contArticulo {
    display: grid;
    grid-template-columns: 1fr;
  }

  .contTexto,
  .contTextoInvertido {
    width: 100%;
    float: none;
    height: auto;
    margin-top: 20px;
  }

  .img1,
  .img2,
  .img3,
  .contImagen,
  .contImagenInvertido {
    display: none;
  }
}
@media (max-width: 480px) {
  .contArticulo {
    display: grid;
    grid-template-columns: 1fr;
  }

  .contTexto,
  .contTextoInvertido {
    width: 100%;
    float: none;
    height: auto;
  }

  .img1,
  .img2,
  .img3,
  .contImagen,
  .contImagenInvertido {
    display: none;
  }

  #bloqueTexto1,
  #bloqueTexto2,
  #bloqueTexto3 {
    width: 90%;
    font-size: 14px;
    padding: 15px;
  }
}
</style>
