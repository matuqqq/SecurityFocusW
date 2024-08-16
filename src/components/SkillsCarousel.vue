<template>
  <div class="carousel-container">
    <h2 class="carousel-title">¿Por qué elegirnos?</h2>
    <div class="slick-carousel">
      <div v-for="(card, index) in cards" :key="index" class="carousel-card">
        <div class="card-content">
          <i :class="card.icon"></i>
          <h3>{{ card.title }}</h3>
          <p>{{ card.description }}</p>
        </div>
      </div>
    </div>
    <div class="carousel-controls">
      <button @click="prevCard">Anterior</button>
      <button @click="nextCard">Siguiente</button>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';  
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';

export default {
  data() {
    return {
      cards: [
    { 
        title: 'Tecnología Avanzada', 
        description: 'Incorporamos RFID, Face ID, y fotomultas para un control de acceso eficiente.', 
        icon: "bx bxl-slack bx-lg" 
    },
    { 
        title: 'Seguridad Integral', 
        description: 'Sistemas robustos desarrollados con Python para una protección completa del barrio.', 
        icon: "bx bxs-lock bx-lg" 
    },
    { 
        title: 'Gestión Simplificada', 
        description: 'Aplicaciones móviles en React Native y una interfaz de Windows Forms para una administración fácil y eficiente.', 
        icon: "bx bxs-cog bx-lg" 
    },
    { 
        title: 'Soporte Especializado', 
        description: 'Ofrecemos asistencia personalizada para asegurar el óptimo funcionamiento de nuestro sistema.', 
        icon: "bx bxs-comment-detail bx-lg" 
    },
    { 
        title: 'Alta Confiabilidad', 
        description: 'Nuestra infraestructura basada en SQL y Prisma asegura una alta disponibilidad y fiabilidad.', 
        icon: "bx bxs-check-shield bx-lg" 
    }
]
    };
  },
  mounted() {
    // Inicializa Slick Carousel
    $('.slick-carousel').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true
    });
  },
  methods: {
    prevCard() {
      $('.slick-carousel').slick('slickPrev');
    },
    nextCard() {
      $('.slick-carousel').slick('slickNext');
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200..1000&display=swap");

.carousel-container {
  text-align: center;
  margin: 50px auto;
  max-width: 90%;
}

.carousel-title {
  font-family: "Nunito", sans-serif;
  font-weight: 800;
  font-size: 5vh;
  color: #9555d0;
  margin-bottom: 30px;
}

.slick-carousel .slick-slide {
  text-align: center;
}

.carousel-card {
  background-color: #f1ebf7;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 90px;
  margin: 0 15px;
  width: 80% !important;
}

.card-content {
  font-family: "Nunito", sans-serif;
  color: #333;
}

.card-content h3 {
  font-size: 3vh;
  color: #9555d0;
  margin-bottom: 10px;
}

.card-content p {
  font-size: 2.5vh;
  color: #555;
}

.card-content i {
  color: #9555d0;
} 

.carousel-controls {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.carousel-controls button {
  background-color: #9555d0;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 2.5vh;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.carousel-controls button:hover {
  background-color: #7645b3;
}
</style>
