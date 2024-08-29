<template>
  <header class="header">
    <!-- Logo -->
    <router-link to="/" class="logo">
        <img src="../../public/assets/images/Security-logo.png" alt=""/>
    </router-link>

    <!-- Hamburger icon -->
    <input class="side-menu" type="checkbox" id="side-menu" />
    <label class="hamb" for="side-menu"><span class="hamb-line"></span></label>

    <!-- Menu -->
    <nav class="nav corruptible">
      <ul class="menu">
        <li class="selectable"><router-link to="/">INICIO</router-link></li>
        <li class="selectable"><router-link to="/about">SOBRE NOSOTROS</router-link></li>
        <li class="menuFace">
          <a id="face" class="selectable" href="mailto:hardstack.arg@gmail.com" target="_blank"><i class="bx bxl-gmail bx-sm" style="color: #ffffff"></i></a>
        </li>
        <li class="menuIg">
          <a id="ig" class="selectable" href="https://www.instagram.com/hardstack.arg/" target="_blank"><i class="bx bxl-instagram bx-sm" style="color: #ffffff"></i></a>
        </li>
      </ul>
      <div class="social-icons">
        <a href="https://instagram.com" target="_blank" class="icon ig">IG</a>
        <a href="mailto:example@example.com" class="icon mail">Mail</a>
      </div>
    </nav>
    <button class="hamburger" @click="toggleMenu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>
    <div v-if="isMenuOpen" class="mobile-menu">
      <ul class="mobile-menu-list">
        <li><a href="#inicio" @click="closeMenu">Inicio</a></li>
        <li><a href="#habilidades" @click="closeMenu">Habilidades</a></li>
        <li><a href="#servicios" @click="closeMenu">Servicios</a></li>
        <li><a href="#contacto" @click="closeMenu">Contacto</a></li>
        <li><a href="https://instagram.com" target="_blank" class="icon ig">IG</a></li>
        <li><a href="mailto:example@example.com" class="icon mail">Mail</a></li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background-color: #9555d0; /* Cambia el color de fondo según sea necesario */
  border-bottom: 1px solid #ddd; /* Opcional: añade una línea de separación inferior */
}

.logo img {
  height: 50px; /* Ajusta según el tamaño del logo */
}

.nav {
  display: flex;
  align-items: center;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-list li {
  margin: 0 10px;
}

.nav-list a {
  text-decoration: none;
  color: #333; /* Cambia el color del texto según sea necesario */
}

.social-icons {
  display: flex;
  align-items: center;
}

.social-icons .icon {
  margin-left: 10px;
  text-decoration: none;
  color: #333; /* Cambia el color del ícono según sea necesario */
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
}

.hamburger .bar {
  width: 25px;
  height: 3px;
  background-color: #333; /* Cambia el color de las barras según sea necesario */
  margin: 3px 0;
}

.mobile-menu {
  display: none;
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  background-color: #fff; /* Cambia el color de fondo según sea necesario */
  border: 1px solid #ddd; /* Opcional: añade una línea de separación */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Opcional: sombra para el menú */
}

.mobile-menu-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.mobile-menu-list li {
  padding: 10px 20px;
}

.mobile-menu-list a {
  text-decoration: none;
  color: #333; /* Cambia el color del texto según sea necesario */
}

@media (max-width: 610px) {
  .nav {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .mobile-menu {
    display: block;
  }
}
</style>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  }
};

/* eslint-disable */
$(document).ready(function() {
  // Cierra el menú desplegable cuando se hace clic en un enlace de la navbar
  let selectable = document.querySelectorAll(".selectable");
  let checkbox = document.getElementById("side-menu");
  $(selectable).on('click', function(){
   
    checkbox.checked = false;
  });
});
</script>
