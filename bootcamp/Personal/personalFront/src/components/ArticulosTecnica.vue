<script setup>
import { ref, onMounted, computed } from "vue";

// Propiedad reactiva para almacenar los artículos
const articulos = ref([]);

// Imagen por defecto para todas las tarjetas
const defaultImgSrc = "../assets/img/tecnica/tecnica1.jpg"; // Cambia esta ruta a la imagen que deseas usar

// Función para obtener los artículos de tipo técnica
const fetchArticulos = async () => {
  try {
    const response = await fetch(
      "http://localhost:8080/api/v1/articulos/tecnica"
    ); // Cambia esta URL a tu API
    if (!response.ok) {
      throw new Error("Error al obtener los artículos");
    }
    const data = await response.json();
    articulos.value = data; // Suponiendo que data es un array de artículos
  } catch (error) {
    console.error(error);
  }
};

// Llamar a fetchArticulos al montar el componente
onMounted(fetchArticulos);

// Computed para establecer el estilo del grid
const gridStyle = computed(() => {
  const count = articulos.value.length; // Número de artículos
  return {
    gridTemplateColumns: `repeat(${Math.min(count, 3)}, 1fr)`, // Máximo 3 columnas
    justifyContent: count === 2 ? "center" : "flex-start", // Centrar si hay 2 elementos
  };
});
</script>

<template>
  <main :style="gridStyle">
    <RouterLink
      to="/articulos"
      v-for="articulo in articulos"
      :key="articulo.id"
    >
      <div class="containerArticulo">
        <div class="imageWrapper">
          <img
            class="imgTecnica"
            src="../assets/img/tecnica/tecnica1.jpg"
            alt="Imagen técnica 1"
          />
          <div class="overlay">
            <p class="titulo">{{ articulo.titulo }}</p>
            <p class="autor-fecha">
              {{ articulo.autor }} - {{ articulo.fecha }}
            </p>
          </div>
        </div>
      </div>
    </RouterLink>
  </main>
</template>

<style scoped>
main {
  display: grid;
  gap: 10px; /* Espaciado entre tarjetas */
  align-items: start; /* Alinea las tarjetas al principio de cada celda */
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
  height: 80px; /* Aumenta la altura en hover */
  box-shadow: 0 0 10px #b0fc33;
}

.imgTecnica:hover {
  opacity: 1;
  filter: grayscale(0%);
  box-shadow: 0 0 20px #b0fc33;
  transform: scale(1.03);
}

.titulo {
  margin: 0; /* Eliminar margen por defecto */
}

.autor-fecha {
  margin: 0; /* Eliminar margen por defecto */
  font-size: 1.5rem; /* Tamaño de fuente más pequeño */
  opacity: 0; /* Ocultar inicialmente */
  transition: opacity 0.3s ease; /* Transición para mostrar */
  color: #b0fc33;
}

.imageWrapper:hover .autor-fecha {
  opacity: 1; /* Mostrar al hacer hover */
}

@media (max-width: 768px) and (min-width: 481px) {
  main {
    grid-template-columns: 1fr; /* Columna única en pantallas medianas */
  }
}

@media (max-width: 480px) {
  main {
    grid-template-columns: 1fr; /* Columna única en pantallas pequeñas */
  }
}
</style>
