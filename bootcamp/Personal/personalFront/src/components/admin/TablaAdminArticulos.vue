<script setup>
import { ref, onMounted } from "vue";

// Estado de los artículos
const articulos = ref([]);

// Estado del modal de información
const showModal = ref(false);
const modalContent = ref("");
// Funciones para abrir y cerrar el modal de información
const openModal = (texto) => {
  modalContent.value = texto;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const showEditModal = ref(false);
const nuevoArticulo = ref({
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

const openEditModal = () => {
  showEditModal.value = true;
};

const closeEditModal = () => {
  showEditModal.value = false;
  // Resetear el modelo del nuevo artículo
  nuevoArticulo.value = {
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
  };
};

// Función para añadir un nuevo artículo
const addArticulo = async () => {
  const formData = new FormData();
  formData.append("titulo", nuevoArticulo.value.titulo);
  formData.append("autor", nuevoArticulo.value.autor);
  formData.append("tipo", nuevoArticulo.value.tipo);
  formData.append("fecha", nuevoArticulo.value.fecha);
  formData.append("texto1", nuevoArticulo.value.texto1);
  formData.append("texto2", nuevoArticulo.value.texto2);
  formData.append("texto3", nuevoArticulo.value.texto3);

  if (nuevoArticulo.value.imagen1) {
    formData.append("imagen1", nuevoArticulo.value.imagen1);
  }
  if (nuevoArticulo.value.imagen2) {
    formData.append("imagen2", nuevoArticulo.value.imagen2);
  }
  if (nuevoArticulo.value.imagen3) {
    formData.append("imagen3", nuevoArticulo.value.imagen3);
  }

  try {
    const response = await fetch(
      "http://localhost:8080/api/v1/articulos/create",
      {
        method: "POST",
        body: formData,
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log("Artículo añadido:", data);
      // Llamar a la función para recargar los artículos
      await fetchArticulos(); // Recargar los artículos
      closeEditModal(); // Cerrar el modal
    } else {
      console.error("Error al añadir el artículo:", response.statusText);
    }
  } catch (error) {
    console.error("Error al añadir el artículo:", error);
  }
};

// Función para obtener los artículos desde una API (simulada)
const fetchArticulos = async () => {
  try {
    const response = await fetch(
      "http://localhost:8080/api/v1/articulos/allarticulos"
    );
    if (!response.ok) {
      throw new Error("Error al obtener los artículos");
    }
    const data = await response.json();
    articulos.value = data;
  } catch (error) {
    console.error(error);
  }
};

// Función para eliminar un artículo
const deleteArticulo = async (id) => {
  try {
    await fetch(`http://localhost:8080/api/v1/articulos/${id}`, {
      method: "DELETE",
    });
    articulos.value = articulos.value.filter((articulo) => articulo.id !== id);
  } catch (error) {
    console.error("Error al eliminar el artículo:", error);
  }
};

// Cargar los artículos al montar el componente
onMounted(() => {
  fetchArticulos();
});
</script>

<template>
  <div id="containerAñadirArticulo">
    <!-- Botón para abrir el modal de añadir artículo -->

    <button class="button" @click="openEditModal()">
      Añadir Artículo
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
    <!-- Modal para agregar un artículo -->
    <div
      v-if="showEditModal"
      class="modal-background"
      @click.self="closeEditModal"
    >
      <div class="modal-content" @click.stop>
        <h2>Añadir Artículo</h2>
        <form @submit.prevent="addArticulo" class="form-grid">
          <div>
            <label for="titulo">Título</label>
            <input
              v-model="nuevoArticulo.titulo"
              type="text"
              id="titulo"
              required
            />
          </div>
          <div>
            <label for="autor">Autor</label>
            <input
              v-model="nuevoArticulo.autor"
              type="text"
              id="autor"
              required
            />
          </div>
          <div>
            <label for="tipo">Tipo</label>
            <select v-model="nuevoArticulo.tipo" id="tipo" required>
              <option value="tecnica">Técnica</option>
              <option value="psicologia">Psicología</option>
            </select>
          </div>
          <div>
            <label for="fecha">Fecha</label>
            <input
              v-model="nuevoArticulo.fecha"
              type="date"
              id="fecha"
              required
            />
          </div>
          <div>
            <label for="texto1">Texto 1</label>
            <input v-model="nuevoArticulo.texto1" type="text" id="texto1" />
          </div>
          <div>
            <label for="texto2">Texto 2</label>
            <input v-model="nuevoArticulo.texto2" type="text" id="texto2" />
          </div>
          <div>
            <label for="texto3">Texto 3</label>
            <input v-model="nuevoArticulo.texto3" type="text" id="texto3" />
          </div>
          <div>
            <label for="imagen1">Imagen 1</label>
            <input
              type="file"
              id="imagen1"
              @change="(e) => (nuevoArticulo.imagen1 = e.target.files[0])"
              accept="image/*"
            />
          </div>
          <div>
            <label for="imagen2">Imagen 2</label>
            <input
              type="file"
              id="imagen2"
              @change="(e) => (nuevoArticulo.imagen2 = e.target.files[0])"
              accept="image/*"
            />
          </div>
          <div>
            <label for="imagen3">Imagen 3</label>
            <input
              type="file"
              id="imagen3"
              @change="(e) => (nuevoArticulo.imagen3 = e.target.files[0])"
              accept="image/*"
            />
          </div>
          <div class="submit-btn">
            <button type="submit">Añadir Artículo</button>
          </div>
        </form>
        <button class="cerrar" @click="closeEditModal">Cerrar</button>
      </div>
    </div>
  </div>
  <div id="containerTabla">
    <div class="table-responsive">
      <table class="table table-striped custom-table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Título</th>
            <th scope="col">Autor</th>
            <th scope="col">Tipo</th>
            <th scope="col">Fecha</th>
            <th scope="col">Texto 1</th>
            <th scope="col">Texto 2</th>
            <th scope="col">Texto 3</th>
            <th scope="col">Imagen 1</th>
            <th scope="col">Imagen 2</th>
            <th scope="col">Imagen 3</th>
            <th scope="col">Editar</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="articulo in articulos" :key="articulo.id">
            <th scope="row">{{ articulo.id }}</th>
            <td>{{ articulo.titulo }}</td>
            <td>{{ articulo.autor }}</td>
            <td>{{ articulo.tipo }}</td>
            <td>{{ articulo.fecha }}</td>
            <td>
              <span class="ver-info" @click="openModal(articulo.texto1)"
                >+Info</span
              >
            </td>
            <td>
              <span class="ver-info" @click="openModal(articulo.texto2)"
                >+Info</span
              >
            </td>
            <td>
              <span class="ver-info" @click="openModal(articulo.texto3)"
                >+Info</span
              >
            </td>
            <td>{{ articulo.imagen1 }}</td>
            <td>{{ articulo.imagen2 }}</td>
            <td>{{ articulo.imagen3 }}</td>
            <td>
              <img
                class="img"
                src="../../assets/img/admin/editarArticulo.png"
                alt="Editar"
                @click="openEditModal(articulo)"
              />
            </td>
            <td>
              <img
                class="img"
                src="../../assets/img/admin/eliminarArticulo.png"
                alt="Eliminar"
                @click="deleteArticulo(articulo.id)"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Modal para mostrar información adicional -->
  <div v-if="showModal" class="modal-background" @click.self="closeModal">
    <div class="modal-content" @click.stop>
      <h2>Información</h2>
      <p>{{ modalContent }}</p>
      <button @click="closeModal">Cerrar</button>
    </div>
  </div>
</template>

<style scoped>
#containerAñadirArticulo {
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#containerTabla {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
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
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 500px;
  max-width: 90%;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
}

.form-grid div {
  margin-bottom: 15px;
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
.table-responsive {
  width: 90%;
  box-shadow: 0 0 20px #2d3b57;
  border-radius: 10px;
  overflow-x: auto;
  box-sizing: border-box;
  background-color: #2d3b57;
}

.custom-table-dark {
  background-color: #2d3b57;
  color: #fff !important;
}

.custom-table-dark th {
  background-color: #454d66;
  color: #b0fc33;
  padding: 10px;
}

.custom-table-dark tr {
  background-color: #2d3b57;
  color: white;
}

.custom-table-dark td {
  padding: 8px;
  background-color: #3b4969;
  color: white;
}

.img {
  width: 30px;
  height: 30px;
}

.img:hover {
  cursor: pointer;
}

.ver-info {
  color: #b0fc33;
  cursor: pointer;
}

.ver-info:hover {
  color: white;
}

.table-responsive::-webkit-scrollbar {
  height: 8px;
}

.table-responsive::-webkit-scrollbar-thumb {
  background-color: #b0fc33;
  border-radius: 10px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5000;
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
  background-color: #2d3b57;
  color: white;
  padding: 3px;
  border-radius: 10px;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
}

.form-grid div {
  margin-bottom: 15px;
}

.form-grid label {
  display: block;
  font-weight: bold;
  background-color: #2d3b57;
  border-radius: 10px;
  color: White;
}

.form-grid input,
.form-grid select {
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

table button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 5px;
}

table button:hover {
  opacity: 0.7;
}
#BloqueTexto {
  background-color: #2d3b57;
  color: white;
  border-radius: 10px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  width: 85%;
}
#btnCerrar {
  background-color: #2d3b57;
  border-radius: 10px;
}
#btnCerrar:hover {
  background-color: #b0fc33;
  font-weight: bold;
  color: #2d3b57;
  border-color: white;
}
#cntbloqueTexto {
  display: flex;
  justify-content: center;
  align-items: center;
}
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
