<template>
  <div class="services-container">
    <h2 class="services-title">Servicios</h2>
    <div class="service-boxes">
      <div class="service-box" v-for="(service, index) in services" :key="index">
        <h3 class="service-title">{{ service.category }}</h3>
        <div class="icon-flex">
          <div v-for="(icon, iconIndex) in service.icons" :key="iconIndex" class="icon-item">
            <i :class="icon.class"></i>
            <p>{{ icon.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const services = [
      {
        category: "Aplicación Movil",
        icons: [
          { class: "bx bx-news bx-lg", description: "Novedades" },
          { class: "bx bx-minus-circle bx-lg", description: "Infracciones" },
          { class: "bx bx-pie-chart-alt-2 bx-lg", description: "Encuestas" },
          { class: "bx bx-calendar-event bx-lg", description: "Reservas" },
          { class: "bx bx-message-rounded-error bx-lg", description: "Denuncias" },
          { class: "bx bx-user-plus bx-lg", description: "Visitas" },
        ],
      },
      {
        category: "Aplicación para Windows",
        icons: [
          { class: "bx bx-exit bx-lg", description: "Ingreso y egreso" },
          { class: "bx bx-user-check bx-lg", description: "Gestión de invitados" },
          { class: "bx bx-search-alt-2 bx-lg", description: "Buscar usuarios" },
          { class: "bx bx-package bx-lg", description: "Correspondencia" },
          { class: "bx bx-clipboard bx-lg", description: "Registros" },
          { class: "bx bxs-traffic-barrier bx-lg", description: "Control de Acceso" },
        ],
      },
      {
        category: "Control de Acceso",
        icons: [
          { class: "bx bx-id-card bx-lg", description: "RFID" },
          { class: "bx bxs-face bx-lg", description: "Face ID" },
          { class: "bx bx-fingerprint bx-lg", description: "Huella digital" },
          { class: "bx bx-camera-home bx-lg", description: "Fotomultas" },
        ],
      },
    ];

    return { services };
  },
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");

.services-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
}

.services-title {
  font-family: "Nunito", sans-serif;
  font-weight: 800;
  font-size: 5vh;
  color: #9555d0;
  margin-bottom: 30px;
}

.service-boxes {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
}

.service-box {
  background-color: #f4f4f4;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 30%;
  padding: 20px;
  margin: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}

.service-title {
  font-family: "Nunito", sans-serif;
  font-size: 3vh;
  margin-bottom: 20px; 
  color: #9555d0;
}

.icon-flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  gap: 15px;
}

.icon-item {
  flex: 1 1 30%;
  box-sizing: border-box;
  text-align: center;
  margin-bottom: 15px;
}

.icon-item i {
  font-size: 2.5vh;
  color: #9555d0;
  margin-bottom: 5px;
}

.icon-item p {
  font-family: "Nunito", sans-serif;
  font-size: 1.8vh;
  color: #555;
  margin: 0;
}

/* Estilos responsivos */
@media (max-width: 1024px) {
  .service-box {
    width: auto;
  }
}

@media (max-width: 768px) {

  .services-container {
    margin-top: 80%;
  }

  .service-box {
    width: 90%;
    margin: 20px 0;
  }

}

@media (max-width: 480px) {
  .icon-flex {
    align-items: center;
  }

  .icon-item {
    max-width: none;
  }

  .icon-item i {
    font-size: 2vh;
  }

  .icon-item p {
    font-size: 1.8vh;
  }
}
</style>
