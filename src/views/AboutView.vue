<template>
  <div class="about-us-wrapper">
    <div class="about-us-container">
      <h2 class="title">Sobre Nosotros</h2>
      <div class="content">
        <p>
          <strong>Hard Stack</strong> está formado por los mejores estudiantes de informática y ciencias de la computación. Nuestro equipo posee amplios conocimientos en hardware, software, armado de PCs y desarrollo de aplicaciones. Somos un grupo apasionado y cohesionado, comprometido con la misión de servir a la comunidad a través de nuestras habilidades en el campo de la informática.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs'
};
</script>

<style scoped>
.about-us-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f6fbfc;
  margin: 0;
}

.about-us-container {
  max-width: 800px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 0 10px 5px rgba(150, 79, 216, 0.466), 0 0 10px 10px rgba(150, 79, 216, 0.356), 0 0 10px 10px rgba(150, 79, 216, 0.329);
  font-family: "Nunito", sans-serif;
}

.title {
  text-align: center;
  color: #964fd8;
  font-size: 2.5em;
  margin-bottom: 20px;
}

.content {
  color: #333;
  font-size: 1.2em;
  line-height: 1.6em;
  text-align: justify;
}

strong {
  color: #964fd8;
}

@media (max-width: 600px) {
  .about-us-container {
    padding: 15px;
  }

  .title {
    font-size: 2em;
  }

  .content {
    font-size: 1em;
  }
}
</style>
