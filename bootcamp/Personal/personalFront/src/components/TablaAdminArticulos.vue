<script setup>
import { ref } from "vue";

// Variables para manejar el estado del modal
const showModal = ref(false);
const modalContent = ref("");

// Función para mostrar el modal con el texto correspondiente
const openModal = (texto) => {
  modalContent.value = texto;
  showModal.value = true;
};

// Función para cerrar el modal
const closeModal = () => {
  showModal.value = false;
};
</script>

<template>
  <table class="table table-striped custom-table-dark">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Título</th>
        <th scope="col">Autor</th>
        <th scope="col">Descripción</th>
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
      <tr>
        <th scope="row">1</th>
        <td>Título 1</td>
        <td>Autor 1</td>
        <td>Descripción 1</td>
        <td>10-12-2024</td>
        <td>
          <span
            class="ver-info"
            @click="
              openModal(
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque nisl ac ipsum imperdiet, non varius dolor ultricies. Maecenas sagittis accumsan mauris, euismod eleifend lectus maximus sed. Etiam scelerisque erat vel odio iaculis venenatis. In bibendum ullamcorper ipsum. Proin vel velit sem. Donec tempus consectetur nulla, sit amet porta neque accumsan sed. In mollis porta justo, ac ultrices orci luctus a. Duis in pharetra libero.'
              )
            "
            >+Info</span
          >
        </td>
        <td>
          <span
            class="ver-info"
            @click="
              openModal(
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque nisl ac ipsum imperdiet, non varius dolor ultricies. Maecenas sagittis accumsan mauris, euismod eleifend lectus maximus sed. Etiam scelerisque erat vel odio iaculis venenatis. In bibendum ullamcorper ipsum. Proin vel velit sem. Donec tempus consectetur nulla, sit amet porta neque accumsan sed. In mollis porta justo, ac ultrices orci luctus a. Duis in pharetra libero.'
              )
            "
            >+Info</span
          >
        </td>
        <td>
          <span
            class="ver-info"
            @click="
              openModal(
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque nisl ac ipsum imperdiet, non varius dolor ultricies. Maecenas sagittis accumsan mauris, euismod eleifend lectus maximus sed. Etiam scelerisque erat vel odio iaculis venenatis. In bibendum ullamcorper ipsum. Proin vel velit sem. Donec tempus consectetur nulla, sit amet porta neque accumsan sed. In mollis porta justo, ac ultrices orci luctus a. Duis in pharetra libero.'
              )
            "
            >+Info</span
          >
        </td>
        <td>imagen1.png</td>
        <td>imagen2.png</td>
        <td>imagen3.png</td>
        <td>
          <img
            class="img"
            src="../assets/img/admin/editarArticulo.png"
            alt="Editar"
          />
        </td>
        <td>
          <img
            class="img"
            src="../assets/img/admin/eliminarArticulo.png"
            alt="Eliminar"
          />
        </td>
      </tr>
      <tr>
        <th scope="row">1</th>
        <td>Título 1</td>
        <td>Autor 1</td>
        <td>Descripción 1</td>
        <td>10-12-2024</td>
        <td>
          <span
            class="ver-info"
            @click="
              openModal(
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque nisl ac ipsum imperdiet, non varius dolor ultricies. Maecenas sagittis accumsan mauris, euismod eleifend lectus maximus sed. Etiam scelerisque erat vel odio iaculis venenatis. In bibendum ullamcorper ipsum. Proin vel velit sem. Donec tempus consectetur nulla, sit amet porta neque accumsan sed. In mollis porta justo, ac ultrices orci luctus a. Duis in pharetra libero.'
              )
            "
            >+Info</span
          >
        </td>
        <td>
          <span
            class="ver-info"
            @click="
              openModal(
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque nisl ac ipsum imperdiet, non varius dolor ultricies. Maecenas sagittis accumsan mauris, euismod eleifend lectus maximus sed. Etiam scelerisque erat vel odio iaculis venenatis. In bibendum ullamcorper ipsum. Proin vel velit sem. Donec tempus consectetur nulla, sit amet porta neque accumsan sed. In mollis porta justo, ac ultrices orci luctus a. Duis in pharetra libero.'
              )
            "
            >+Info</span
          >
        </td>
        <td>
          <span
            class="ver-info"
            @click="
              openModal(
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque nisl ac ipsum imperdiet, non varius dolor ultricies. Maecenas sagittis accumsan mauris, euismod eleifend lectus maximus sed. Etiam scelerisque erat vel odio iaculis venenatis. In bibendum ullamcorper ipsum. Proin vel velit sem. Donec tempus consectetur nulla, sit amet porta neque accumsan sed. In mollis porta justo, ac ultrices orci luctus a. Duis in pharetra libero.'
              )
            "
            >+Info</span
          >
        </td>
        <td>imagen1.png</td>
        <td>imagen2.png</td>
        <td>imagen3.png</td>
        <td>
          <img
            class="img"
            src="../assets/img/admin/editarArticulo.png"
            alt="Editar"
          />
        </td>
        <td>
          <img
            class="img"
            src="../assets/img/admin/eliminarArticulo.png"
            alt="Eliminar"
          />
        </td>
      </tr>
      <tr>
        <th scope="row">1</th>
        <td>Título 1</td>
        <td>Autor 1</td>
        <td>Descripción 1</td>
        <td>10-12-2024</td>
        <td>
          <span
            class="ver-info"
            @click="
              openModal(
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque nisl ac ipsum imperdiet, non varius dolor ultricies. Maecenas sagittis accumsan mauris, euismod eleifend lectus maximus sed. Etiam scelerisque erat vel odio iaculis venenatis. In bibendum ullamcorper ipsum. Proin vel velit sem. Donec tempus consectetur nulla, sit amet porta neque accumsan sed. In mollis porta justo, ac ultrices orci luctus a. Duis in pharetra libero.'
              )
            "
            >+Info</span
          >
        </td>
        <td>
          <span
            class="ver-info"
            @click="
              openModal(
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque nisl ac ipsum imperdiet, non varius dolor ultricies. Maecenas sagittis accumsan mauris, euismod eleifend lectus maximus sed. Etiam scelerisque erat vel odio iaculis venenatis. In bibendum ullamcorper ipsum. Proin vel velit sem. Donec tempus consectetur nulla, sit amet porta neque accumsan sed. In mollis porta justo, ac ultrices orci luctus a. Duis in pharetra libero.'
              )
            "
            >+Info</span
          >
        </td>
        <td>
          <span
            class="ver-info"
            @click="
              openModal(
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque nisl ac ipsum imperdiet, non varius dolor ultricies. Maecenas sagittis accumsan mauris, euismod eleifend lectus maximus sed. Etiam scelerisque erat vel odio iaculis venenatis. In bibendum ullamcorper ipsum. Proin vel velit sem. Donec tempus consectetur nulla, sit amet porta neque accumsan sed. In mollis porta justo, ac ultrices orci luctus a. Duis in pharetra libero.'
              )
            "
            >+Info</span
          >
        </td>
        <td>imagen1.png</td>
        <td>imagen2.png</td>
        <td>imagen3.png</td>
        <td>
          <img
            class="img"
            src="../assets/img/admin/editarArticulo.png"
            alt="Editar"
          />
        </td>
        <td>
          <img
            class="img"
            src="../assets/img/admin/eliminarArticulo.png"
            alt="Eliminar"
          />
        </td>
      </tr>
    </tbody>
  </table>

  <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <div id="containerBloqueTexto">
        <div id="BloqueTexto"><h5>Bloque de Texto</h5></div>
      </div>
      <p>{{ modalContent }}</p>
      <button class="btn btn-secondary" @click="closeModal">Cerrar</button>
    </div>
  </div>
</template>

<style scoped>
table {
  width: 85%;
  box-shadow: 0 0 20px #2d3b57;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 1.5s ease;
}
table:hover {
  transform: scale(1.1);
  transition: 1.5s;
  box-shadow: 0 0 30px #2d3b57;
}

.img {
  width: 30px;
  height: 30px;
}
.img:hover {
  cursor: pointer;
}

.custom-table-dark {
  background-color: #2d3b57 !important;
  color: #fff !important;
}

.custom-table-dark th,
.custom-table-dark td {
  background-color: #2d3b57 !important;
  color: #fff !important;
  border-color: #454d66 !important;
}

.ver-info {
  color: #b0fc33;
  cursor: pointer;
  text-decoration: none;
}

.ver-info:hover {
  color: white;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  width: 75%;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  transform: scale(0.9);
  transition: transform 0.5s ease;
}

.modal-overlay div.modal-content {
  transform: scale(1.1);
}

.btn {
  margin: 5px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.btn-secondary {
  background-color: #2d3b57;
  color: white;
  border-radius: 10px;
}
.btn-secondary:hover {
  box-shadow: 0 0 10px #b0fc33;
}
#BloqueTexto {
  width: 50%;
  height: 40px;
  border-radius: 5px;
  background-color: #2d3b57;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
#containerBloqueTexto {
  display: flex;
  justify-content: center;
  align-items: center;
}
h5 {
  color: white;
}
</style>
