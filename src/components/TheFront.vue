<template>
  <div class="portada">
    <div class="portadatext">
      <h1>Security Focus</h1>
      <h5>¿Quienes somos?</h5>
      <p>
        Security Focus es un innovador proyecto desarrollado por la agencia
      <a href="hardstack.netlify.app">Hardstack </a> para optimizar la seguridad y administración de barrios para optimizar la seguridad y administración de barrios
        privados. Este sistema integral combina diversas tecnologías avanzadas
        para asegurar un control de acceso y seguridad eficaz.
      </p>
    </div>
    <img src="../../public/assets/images/front.png" alt="Imagen de Security Focus" />
  </div>
</template>

<script>
export default {
  name: "TheFront",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Alkatra:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap");

.portada {
  background-color: rgb(255, 255, 255);
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 5vw;
  box-sizing: border-box;
}

.portadatext {
  flex: 1;
  margin-left: 10vw;
  margin-top: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
}

.portada h1 {
  font-size: 10vh; /* Tamaño grande para pantallas grandes */
  text-align: left;
  max-width: 90%; /* Ajusta el ancho máximo para evitar desbordamientos */
  font-family: "Nunito", sans-serif;
  font-weight: 800;
  margin: 0;
}

.portada h5 {
  text-align: left;
  font-family: "Nunito", sans-serif;
  font-weight: 800;
  font-size: 5vh;
  max-width: 90%;
  margin: 0;
}

.portada p {
  text-align: left;
  padding-top: 2%;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 3vh; /* Tamaño grande para pantallas grandes */
  max-width: 90%;
}

.portada img {
  margin-top: 23vh;
  width: 31vw; /* Tamaño grande para pantallas grandes */
  height: auto;
  margin-left: 5vw; /* Espaciado en pantallas grandes */
}

@media screen and (max-width: 1440px) {
  .portadatext {
    padding-top: 5%;
  }
}

@media screen and (max-width: 1040px) {
  .portadatext {
    padding-top: 8%;
  }
}

@media screen and (max-width: 860px) {
  .portada img {
    width: 50vw;
    margin-left: 0; /* Centra la imagen */
    margin-top: 3vh;
  }

.portadatext {
  margin-left: 0;
  margin-top: 0;
  padding-top: 0;
}

  .portada h1 {
    font-size: 8vw; /* Reduce el tamaño en pantallas más pequeñas */
  }

  .portada h5 {
    font-size: 4vw; /* Reduce el tamaño en pantallas más pequeñas */
  }

  .portada p {
    font-size: 2.5vw; /* Reduce el tamaño en pantallas más pequeñas */
  }
}

@media screen and (max-width: 630px) {
  .portada {
    display: block;
    align-items: center;
    text-align: center;
    align-content: center;
    flex-wrap: wrap;
    padding-top: 40%;
  }

  .portadatext {
    padding-top: 5%;
    text-align: center;
  }

  .portada img {
    width: 60vw; /* Ajusta el tamaño en pantallas muy pequeñas */
    margin: 20px 0;
  }

  .portada h1 {
    font-size: 10vw; /* Tamaño más pequeño para pantallas pequeñas */
    text-align: center;
  }

  .portada h5 {
    font-size: 6vw; /* Tamaño más pequeño para pantallas pequeñas */
    text-align: center;
  }

  .portada p {
    font-size: 4vw; /* Tamaño más pequeño para pantallas pequeñas */
    text-align: center;
  }
}
</style>
