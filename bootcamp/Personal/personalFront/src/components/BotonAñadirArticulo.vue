<script setup>
import { ref } from "vue";

const showModal = ref(false);

// Datos del formulario
const formData = ref({
  titulo: "",
  autor: "",
  tipo: "",
  fecha: "",
  texto1: "",
  texto2: "",
  texto3: "",
  imagen1: null,
  imagen2: null,
  imagen3: null,
});

// Función para abrir y cerrar el modal
const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

// Función para manejar el envío del formulario
const submitForm = () => {
  console.log(formData.value);
  closeModal(); // Cerramos el modal tras enviar el formulario
};

// Función para manejar las imágenes
const onFileChange = (e, imagenKey) => {
  const file = e.target.files[0];
  if (file) {
    formData.value[imagenKey] = file;
  }
};
</script>

<template>
  <button class="button" @click="openModal">
    Añadir Articulo
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </button>

  <div v-if="showModal" class="modal-background" @click="closeModal">
    <div class="modal-content" @click.stop>
      <h2>Añadir Artículo</h2>
      <form @submit.prevent="submitForm" class="form-grid">
        <div>
          <label for="titulo">Título</label>
          <input type="text" id="titulo" />
        </div>
        <div>
          <label for="autor">Autor</label>
          <input type="text" id="autor" />
        </div>
        <div>
          <label for="tipo">Tipo</label>
          <select id="tipo">
            <option value="tecnica">Técnica</option>
            <option value="psicologia">Psicología</option>
          </select>
        </div>
        <div>
          <label for="fecha">Fecha</label>
          <input type="date" id="fecha" />
        </div>
        <div>
          <label for="texto1">Texto 1</label>
          <input type="text" id="texto1" />
        </div>
        <div>
          <label for="texto2">Texto 2</label>
          <input type="text" id="texto2" />
        </div>
        <div>
          <label for="texto3">Texto 3</label>
          <input type="text" id="texto3" />
        </div>
        <div>
          <label for="imagen1">Imagen 1</label>
          <input
            type="file"
            id="imagen1"
            @change="(e) => onFileChange(e, 'imagen1')"
          />
        </div>
        <div>
          <label for="imagen2">Imagen 2</label>
          <input
            type="file"
            id="imagen2"
            @change="(e) => onFileChange(e, 'imagen2')"
          />
        </div>
        <div>
          <label for="imagen3">Imagen 3</label>
          <input
            type="file"
            id="imagen3"
            @change="(e) => onFileChange(e, 'imagen3')"
          />
        </div>
        <div class="submit-btn">
          <button type="submit">Enviar</button>
        </div>
      </form>
      <button class="cerrar" @click="closeModal">Cerrar</button>
    </div>
  </div>
</template>

<style scoped>
.button {
  width: 250px;
  height: 70px;
  background-color: #2d3b57;
  border-style: none;
  color: #fff;
  font-size: 23px;
  letter-spacing: 3px;
  font-family: "Lato";
  font-weight: 600;
  outline: none;
  cursor: pointer;
  position: relative;
  padding: 0px;
  overflow: hidden;
  transition: all 0.5s;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.button span {
  position: absolute;
  display: block;
}

.button span:nth-child(1) {
  height: 3px;
  width: 200px;
  top: 0px;
  left: -200px;
  background: linear-gradient(to right, rgba(0, 0, 0, 0), #b0fc33);
  border-top-right-radius: 1px;
  border-bottom-right-radius: 1px;
  animation: span1 2s linear infinite;
  animation-delay: 1s;
}

@keyframes span1 {
  0% {
    left: -200px;
  }
  100% {
    left: 200px;
  }
}

.button span:nth-child(2) {
  height: 70px;
  width: 3px;
  top: -70px;
  right: 0px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), #b0fc33);
  border-bottom-left-radius: 1px;
  border-bottom-right-radius: 1px;
  animation: span2 2s linear infinite;
  animation-delay: 2s;
}

@keyframes span2 {
  0% {
    top: -70px;
  }
  100% {
    top: 70px;
  }
}

.button span:nth-child(3) {
  height: 3px;
  width: 200px;
  right: -200px;
  bottom: 0px;
  background: linear-gradient(to left, rgba(0, 0, 0, 0), #b0fc33);
  border-top-left-radius: 1px;
  border-bottom-left-radius: 1px;
  animation: span3 2s linear infinite;
  animation-delay: 3s;
}

@keyframes span3 {
  0% {
    right: -200px;
  }
  100% {
    right: 200px;
  }
}

.button span:nth-child(4) {
  height: 70px;
  width: 3px;
  bottom: -70px;
  left: 0px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0), #b0fc33);
  border-top-right-radius: 1px;
  border-top-left-radius: 1px;
  animation: span4 2s linear infinite;
  animation-delay: 4s;
}

@keyframes span4 {
  0% {
    bottom: -70px;
  }
  100% {
    bottom: 70px;
  }
}

.button:hover {
  transition: all 0.5s;
  transform: rotate(-3deg) scale(1.1);
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.4);
  background-color: #b0fc33;
  color: #2d3b57;
}

.button:hover span {
  animation-play-state: paused;
}

.modal-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 500px;
  max-width: 90%;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  z-index: 1060;
}

.modal-content h2 {
  margin-top: 0;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
}
.form-grid select {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  color: #333;
}
.form-grid div {
  margin-bottom: 15px;
}

.form-grid label {
  display: block;
  font-weight: bold;
}

.form-grid input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-btn {
  grid-column: span 2;
  display: flex;
  justify-content: center;
  font-weight: bold;
}

.modal-content form button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #2d3b57;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.modal-content form button:hover {
  background-color: #b0fc33;
  color: #2d3b57;
}

.modal-content button:hover {
  background-color: #b0fc33;
  color: #2d3b57;
}
.cerrar {
  background-color: #2d3b57;
  color: white;
  border-radius: 10px;
  height: 40px;
  border: none;
  font-weight: bold;
}
h2 {
  background-color: #2d3b57;
  height: 40px;
  border-radius: 10px;
  color: white;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}
label {
  background-color: #2d3b57;
  height: 20px;
  border-radius: 10px;
  color: white;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
