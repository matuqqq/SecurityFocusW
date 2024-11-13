<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "boxicons/css/boxicons.min.css";
import FeatureCard from "../components/FeatureCard.vue";
import ServiceCard from "../components/ServiceCard.vue";
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { t } = useI18n();

// Features: Usamos el JSON para definir las características
const features = computed(() => [
  {
    title: t('Home.Features.TecnologíaAvanzada.title'),
    description: t('Home.Features.TecnologíaAvanzada.description'),
    icon: t('Home.Features.TecnologíaAvanzada.icon'),
  },
  {
    title: t('Home.Features.SeguridadIntegral.title'),
    description: t('Home.Features.SeguridadIntegral.description'),
    icon: t('Home.Features.SeguridadIntegral.icon'),
  },
  {
    title: t('Home.Features.GestionSimplificada.title'),
    description: t('Home.Features.GestionSimplificada.description'),
    icon: t('Home.Features.GestionSimplificada.icon'),
  },
  {
    title: t('Home.Features.SoporteEspecializado.title'),
    description: t('Home.Features.SoporteEspecializado.description'),
    icon: t('Home.Features.SoporteEspecializado.icon'),
  },
  {
    title: t('Home.Features.AltaConfiabilidad.title'),
    description: t('Home.Features.AltaConfiabilidad.description'),
    icon: t('Home.Features.AltaConfiabilidad.icon'),
  }
]);

// Services: Usamos el JSON para definir los servicios
const services = computed(() => [
  {
    category: t('Home.Services.MobileApp.category'),
    icons: [
      { class: "bx bx-news bx-lg", description: t('Home.Services.MobileApp.icons[0].description') },
      { class: "bx bx-minus-circle bx-lg", description: t('Home.Services.MobileApp.icons[1].description') },
      { class: "bx bx-pie-chart-alt-2 bx-lg", description: t('Home.Services.MobileApp.icons[2].description') },
      { class: "bx bx-calendar-event bx-lg", description: t('Home.Services.MobileApp.icons[3].description') },
      { class: "bx bx-message-rounded-error bx-lg", description: t('Home.Services.MobileApp.icons[4].description') },
      { class: "bx bx-user-plus bx-lg", description: t('Home.Services.MobileApp.icons[5].description') },
    ],
    path: "/mobile-app",
  },
  {
    category: t('Home.Services.WindowsApp.category'),
    icons: [
      { class: "bx bx-exit bx-lg", description: t('Home.Services.WindowsApp.icons[0].description') },
      { class: "bx bx-user-check bx-lg", description: t('Home.Services.WindowsApp.icons[1].description') },
      { class: "bx bx-search-alt-2 bx-lg", description: t('Home.Services.WindowsApp.icons[2].description') },
      { class: "bx bx-package bx-lg", description: t('Home.Services.WindowsApp.icons[3].description') },
      { class: "bx bx-clipboard bx-lg", description: t('Home.Services.WindowsApp.icons[4].description') },
      { class: "bx bxs-traffic-barrier bx-lg", description: t('Home.Services.WindowsApp.icons[5].description') },
    ],
    path: "/windows-app",
  },
  {
    category: t('Home.Services.AccessControl.category'),
    icons: [
      { class: "bx bx-id-card bx-lg", description: t('Home.Services.AccessControl.icons[0].description') },
      { class: "bx bxs-face bx-lg", description: t('Home.Services.AccessControl.icons[1].description') },
      { class: "bx bx-fingerprint bx-lg", description: t('Home.Services.AccessControl.icons[2].description') },
      { class: "bx bx-camera-home bx-lg", description: t('Home.Services.AccessControl.icons[3].description') },
    ],
    path: "/access-control",
  }
]);
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- Hero Section -->
    <div class="flex flex-col md:flex-row items-center justify-between gap-12 mb-16 front">
      <div class="flex-1">
        <h1 class="text-4xl font-bold text-primary-light dark:text-primary-DEFAULT mb-4 frontext">
          {{ $t('Home.SecurityFocus.title') }}
        </h1>
        <h5 class="text-xl font-semibold text-text-light dark:text-text-dark mb-4 frontext">
          {{ $t('Home.SecurityFocus.whatIs') }}
        </h5>
        <p class="text-text-light dark:text-text-dark text-lg leading-relaxed frontext">
          {{ $t('Home.SecurityFocus.description') }}
        </p>
      </div>

      <div class="flex-1">
        <div class="aspect-w-16 aspect-h-9 rounded-lg">
          <div class="w-full h-[400px] rounded-lg flex items-center justify-center">
            <img src="../assets/grafica.png" alt="" class="img" />
          </div>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div class="py-12">
      <h2 class="text-3xl font-bold text-center text-primary-light dark:text-primary-DEFAULT mb-12">
        {{ $t('Home.SecurityFocus.whyChooseUs') }}
      </h2>

      <swiper
        :modules="[Pagination, Autoplay]"
        :slides-per-view="1"
        :space-between="30"
        :pagination="{ clickable: true }"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :breakpoints="{
          '640': { slidesPerView: 2 },
          '1024': { slidesPerView: 3 }
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
      <h2 class="text-3xl font-bold text-center text-primary-light dark:text-primary-DEFAULT mb-12">
        {{ $t('Home.SecurityFocus.ourServices') }}
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