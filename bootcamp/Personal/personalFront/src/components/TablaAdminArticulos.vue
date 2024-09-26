<template>
  <div>
    <!-- Botón para abrir el modal de añadir artículo -->
    <button class="btn btn-primary" @click="openEditModal()">
      Añadir Artículo Nuevo
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
</template>

<script setup>
import { ref } from "vue";

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
      // Aquí podrías añadir lógica para actualizar la lista de artículos si es necesario
      closeEditModal(); // Cerrar el modal
    } else {
      console.error("Error al añadir el artículo:", response.statusText);
    }
  } catch (error) {
    console.error("Error al añadir el artículo:", error);
  }
};
</script>

<style scoped>
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
</style>
