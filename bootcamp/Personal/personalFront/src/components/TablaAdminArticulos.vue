<script setup>
import { ref, onMounted } from "vue";

// Estado de los artículos
const articulos = ref([]);

// Estado del modal
const showModal = ref(false);
const modalContent = ref("");

// Estado para el modal de nuevo artículo
const showAddModal = ref(false);

// Estado para el artículo a editar
const articuloEdicion = ref(null);
const showEditModal = ref(false);

// Modelo para los datos del nuevo artículo
const nuevoArticulo = ref({
  titulo: "",
  autor: "",
  tipo: "",
  fecha: "",
  texto1: "",
  texto2: "",
  texto3: "",
  imagen1: "",
  imagen2: "",
  imagen3: "",
});

// Funciones para abrir y cerrar el modal
const openModal = (texto) => {
  modalContent.value = texto;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const openAddModal = () => {
  showAddModal.value = true;
};

const closeAddModal = () => {
  showAddModal.value = false;
};

const openEditModal = (articulo) => {
  articuloEdicion.value = { ...articulo };
  showEditModal.value = true;
};

const closeEditModal = () => {
  showEditModal.value = false;
  articuloEdicion.value = null;
};

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

onMounted(() => {
  fetchArticulos();
});
</script>

<template>
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
              src="../assets/img/admin/editarArticulo.png"
              alt="Editar"
              @click="openEditModal(articulo)"
            />
          </td>
          <td>
            <img
              class="img"
              src="../assets/img/admin/eliminarArticulo.png"
              alt="Eliminar"
              @click="deleteArticulo(articulo.id)"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <div id="containerBloqueTexto">
        <div id="cntbloqueTexto">
          <div id="BloqueTexto"><h5>Bloque de Texto</h5></div>
        </div>
      </div>
      <p>{{ modalContent }}</p>
      <button class="btn btn-secondary" id="btnCerrar" @click="closeModal">
        Cerrar
      </button>
    </div>
  </div>

  <div v-if="showAddModal" class="modal-overlay" @click.self="closeAddModal">
    <div class="modal-content">
      <h3>Añadir Nuevo Artículo</h3>
      <form @submit.prevent="addArticulo">
        <label for="titulo">Título</label>
        <input id="titulo" required />

        <label for="autor">Autor</label>
        <input id="autor" required />

        <label for="tipo">Tipo</label>
        <input id="tipo" required />

        <label for="fecha">Fecha</label>
        <input type="date" id="fecha" required />

        <label for="texto1">Texto 1</label>
        <textarea id="texto1"></textarea>

        <label for="texto2">Texto 2</label>
        <textarea id="texto2"></textarea>

        <label for="texto3">Texto 3</label>
        <textarea id="texto3"></textarea>

        <label for="imagen1">Imagen 1</label>
        <input id="imagen1" />

        <label for="imagen2">Imagen 2</label>
        <input id="imagen2" />

        <label for="imagen3">Imagen 3</label>
        <input id="imagen3" />

        <button type="submit" class="btn btn-primary">Añadir Artículo</button>
        <button type="button" class="btn btn-secondary" @click="closeAddModal">
          Cancelar
        </button>
      </form>
    </div>
  </div>

  <!-- Modal para editar artículo -->
  <div
    v-if="showEditModal"
    class="modal-background"
    @click.self="closeEditModal"
  >
    <div class="modal-content" @click.stop>
      <h2>Editar Artículo</h2>
      <form @submit.prevent="updateArticulo" class="form-grid">
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
          <select v-model="articuloEdicion.tipo" id="tipo">
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
          <input type="file" id="imagen1" />
        </div>
        <div>
          <label for="imagen2">Imagen 2</label>
          <input type="file" id="imagen2" />
        </div>
        <div>
          <label for="imagen3">Imagen 3</label>
          <input type="file" id="imagen3" />
        </div>
        <div class="submit-btn">
          <button type="submit">Actualizar Artículo</button>
        </div>
      </form>
      <button class="cerrar" @click="closeEditModal">Cerrar</button>
    </div>
  </div>
</template>

<style scoped>
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
</style>
