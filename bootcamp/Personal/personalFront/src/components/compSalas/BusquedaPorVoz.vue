<script setup>
import { ref, defineEmits } from "vue";

const searchQuery = ref("");
const emit = defineEmits(["update:searchQuery"]);
const recognitionLang = ref("es-ES"); // Estado reactivo para el idioma
const isRecognizing = ref(false); // Estado reactivo para saber si el reconocimiento está activo

// Variables para los placeholders
const placeholders = {
  "es-ES": "Buscar sala por ciudad, lugar, fecha o utiliza el microfono",
  "fr-FR": "Chercher une salle par ville, lieu, date ou utilisez le microphone",
  "en-US": "Search for a room by city, place, date, or use the microphone",
};

// Placeholder reactivo
const placeholderText = ref(placeholders[recognitionLang.value]);

const startRecognition = () => {
  if (!("webkitSpeechRecognition" in window)) {
    alert(
      "Lo siento, tu navegador no soporta la API de reconocimiento de voz."
    );
    return;
  }

  const recognition = new webkitSpeechRecognition();
  recognition.lang = recognitionLang.value; // Usar el idioma seleccionado
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  isRecognizing.value = true; // Cambiar el estado a verdadero al iniciar el reconocimiento
  recognition.start();

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    searchQuery.value = transcript; // Actualiza el modelo con el texto reconocido
    emit("update:searchQuery", searchQuery.value); // Emitimos el nuevo valor para actualizar el modelo en el padre
  };

  recognition.onerror = (event) => {
    console.error("Error en reconocimiento de voz: ", event.error);
  };

  recognition.onend = () => {
    console.log("Reconocimiento de voz terminado.");
    isRecognizing.value = false; // Cambiar el estado a falso cuando el reconocimiento termine
  };
};

// Funciones para cambiar el idioma y comenzar el reconocimiento
const setLanguageToSpanish = () => {
  recognitionLang.value = "es-ES"; // Cambia el idioma a español
  placeholderText.value = placeholders["es-ES"]; // Cambia el placeholder
  startRecognition(); // Inicia el reconocimiento de voz en español
};

const setLanguageToFrench = () => {
  recognitionLang.value = "fr-FR"; // Cambia el idioma a francés
  placeholderText.value = placeholders["fr-FR"]; // Cambia el placeholder
  startRecognition(); // Inicia el reconocimiento de voz en francés
};

const setLanguageToEnglish = () => {
  recognitionLang.value = "en-US"; // Cambia el idioma a inglés
  placeholderText.value = placeholders["en-US"]; // Cambia el placeholder
  startRecognition(); // Inicia el reconocimiento de voz en inglés
};

// Función para emitir el valor actualizado de searchQuery
const updateSearchQuery = () => {
  emit("update:searchQuery", searchQuery.value);
};
</script>

<template>
  <div class="buscador-combinado">
    <input
      type="text"
      v-model="searchQuery"
      :placeholder="placeholderText"
      class="search-bar"
      @input="updateSearchQuery"
    />
    <button @click="setLanguageToSpanish" class="voz-buttonPais">
      <img
        class="bandera"
        src="../../assets/img/banderas/espana.png"
        alt="Español"
      />
    </button>
    <button @click="setLanguageToFrench" class="voz-buttonPais">
      <img
        class="bandera"
        src="../../assets/img/banderas/francia.png"
        alt="Francés"
      />
    </button>
    <button @click="setLanguageToEnglish" class="voz-buttonPais">
      <img
        class="bandera"
        src="../../assets/img/banderas/reinoUnido.png"
        alt="Inglés"
      />
    </button>

    <!-- El botón de micrófono ya no activa el reconocimiento de voz -->
    <button class="voz-button" :class="{ active: isRecognizing }">🎙️</button>
  </div>
</template>

<style scoped>
.buscador-combinado {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  background-color: #2d3b57;
  border: 3px solid white;
  border-radius: 25px;
}

.search-bar {
  padding: 10px;
  width: 100%;
  background-color: #2d3b57;
  border: none;
  border-radius: 25px;
  font-size: 20px;
  color: white;
}
.search-bar::placeholder {
  color: #c1c1c1;
}
.search-bar:focus {
  outline: none; /* Elimina el contorno cuando está enfocado */
  box-shadow: none; /* Elimina cualquier sombra si existe */
}

.voz-button {
  margin-left: 10px;
  padding: 10px;
  background-color: #2d3b57;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 20px;
  color: white;
}
.voz-button:hover {
  padding: 10px;
}
.voz-button.active {
  background-color: white;
  padding: 10px;
  border-radius: 20px;
}
.voz-buttonPais {
  margin-left: 10px;
  padding: 5px;
  background-color: #2d3b57;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 20px;
  color: white;
}

.voz-buttonPais:hover {
  background-color: white;
}
@media (max-width: 480px) {
  .search-bar {
    font-size: 15px;
  }
  .bandera {
    width: 20px;
  }
}
</style>
