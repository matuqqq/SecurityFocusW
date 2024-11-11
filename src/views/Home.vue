<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "boxicons/css/boxicons.min.css";
import FeatureCard from "../components/FeatureCard.vue";
import ServiceCard from "../components/ServiceCard.vue";

const features = [
  {
    title: "Tecnología Avanzada",
    description:
      "Incorporamos RFID, Face ID, y fotomultas para un control de acceso eficiente.",
    icon: "bx bxl-slack bx-lg",
  },
  {
    title: "Seguridad Integral",
    description:
      "Sistemas robustos desarrollados con Python para una protección completa del barrio.",
    icon: "bx bxs-lock bx-lg",
  },
  {
    title: "Gestión Simplificada",
    description:
      "Aplicaciones móviles en React Native y una interfaz de Windows Forms para una administración fácil y eficiente.",
    icon: "bx bxs-cog bx-lg",
  },
  {
    title: "Soporte Especializado",
    description:
      "Ofrecemos asistencia personalizada para asegurar el óptimo funcionamiento de nuestro sistema.",
    icon: "bx bxs-comment-detail bx-lg",
  },
  {
    title: "Alta Confiabilidad",
    description:
      "Nuestra infraestructura basada en SQL y Prisma asegura una alta disponibilidad y fiabilidad.",
    icon: "bx bxs-check-shield bx-lg",
  },
];

const services = [
  {
    category: "Aplicación Movil",
    path: "/mobile-app",
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
    path: "/windows-app",
    icons: [
      { class: "bx bx-exit bx-lg", description: "Ingreso y egreso" },
      { class: "bx bx-user-check bx-lg", description: "Gestión de invitados" },
      { class: "bx bx-search-alt-2 bx-lg", description: "Buscar usuarios" },
      { class: "bx bx-package bx-lg", description: "Correspondencia" },
      { class: "bx bx-clipboard bx-lg", description: "Registros" },
      {
        class: "bx bxs-traffic-barrier bx-lg",
        description: "Control de Acceso",
      },
    ],
  },
  {
    category: "Control de Acceso",
    path: "/access-control",
    icons: [
      { class: "bx bx-id-card bx-lg", description: "RFID" },
      { class: "bx bxs-face bx-lg", description: "Face ID" },
      { class: "bx bx-fingerprint bx-lg", description: "Huella digital" },
      { class: "bx bx-camera-home bx-lg", description: "Fotomultas" },
    ],
  },
];
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- Hero Section -->
    <div
      class="flex flex-col md:flex-row items-center justify-between gap-12 mb-16 front"
    >
      <div class="flex-1">
        <h1
          class="text-4xl font-bold text-primary-light dark:text-primary-DEFAULT mb-4 frontext"
        >
          Security Focus
        </h1>
        <h5 class="text-xl font-semibold text-text-light dark:text-text-dark mb-4 frontext">
          ¿Qué es?
        </h5>
        <p class="text-text-light dark:text-text-dark text-lg leading-relaxed frontext">
          Security Focus es un innovador proyecto desarrollado por la agencia
          <a
            href="https://hardstack.netlify.app"
            class="text-primary-light dark:text-primary-DEFAULT hover:text-blue-800"
            >Hardstack</a
          >
          para optimizar la seguridad y administración de barrios privados. Este
          sistema integral combina diversas tecnologías avanzadas para asegurar
          un control de acceso y seguridad eficaz.
        </p>
      </div>

      <div class="flex-1">
        <div class="aspect-w-16 aspect-h-9 rounded-lg">
          <div
            class="w-full h-[400px] rounded-lg flex items-center justify-center"
          >
            <img src="../assets/grafica.png" alt="" class="img" />
          </div>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div class="py-12">
      <h2
        class="text-3xl font-bold text-center text-primary-light dark:text-primary-DEFAULT mb-12"
      >
        ¿Por qué elegirnos?
      </h2>

      <swiper
        :modules="[Pagination, Autoplay]"
        :slides-per-view="1"
        :space-between="30"
        :pagination="{ clickable: true }"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :breakpoints="{
          '640': {
            slidesPerView: 2,
          },
          '1024': {
            slidesPerView: 3,
          },
        }"
        class="features-swiper"
      >
        <swiper-slide v-for="feature in features" :key="feature.title">
          <FeatureCard
            :title="feature.title"
            :description="feature.description"
            :icon="feature.icon"
          />
        </swiper-slide>
      </swiper>
    </div>

    <!-- Services Section -->
    <div class="py-12">
      <h2
        class="text-3xl font-bold text-center text-primary-light dark:text-primary-DEFAULT mb-12"
      >
        Nuestros Servicios
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          v-for="service in services"
          :key="service.category"
          :category="service.category"
          :icons="service.icons"
          :path="service.path"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.img {
  height: 100%;
}

.front {
  margin-top: 8%;
}

@media (max-width: 550px) {
  .img {
    height: 80%;
  }

  .frontext {
    text-align: center;
  }

  .front {
    margin-top: 15%;
}
}

.features-swiper {
  padding-bottom: 3rem;
}

:deep(.swiper-pagination-bullet) {
  background-color: #4b5563;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: #2563eb;
}
</style>