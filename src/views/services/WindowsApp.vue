<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" style="padding-top: 15vh;">
    <h1 class="text-4xl font-bold text-primary-light dark:text-primary-DEFAULT mb-8" style="margin-bottom: 5vh; text-align: center">Aplicación para Windows</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 cont">
      <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-8">
        <div class="flex items-center mb-4">
          <i class="bx bx-exit text-3xl text-primary-light dark:text-primary-DEFAULT mr-4"></i>
          <h3 class="text-xl font-semibold">Ingreso y egreso</h3>
        </div>
        <p class="text-gray-600">Control eficiente de entradas y salidas con registro automático, verificación de identidad y alertas en tiempo real.</p>
      </div>

      <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-8">
        <div class="flex items-center mb-4">
          <i class="bx bx-user-check text-3xl text-primary-light dark:text-primary-DEFAULT mr-4"></i>
          <h3 class="text-xl font-semibold">Gestión de invitados</h3>
        </div>
        <p class="text-gray-600">Sistema completo para administrar visitantes, con pre-registro, validación de datos y seguimiento de permanencia.</p>
      </div>

      <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-8">
        <div class="flex items-center mb-4">
          <i class="bx bx-search-alt-2 text-3xl text-primary-light dark:text-primary-DEFAULT mr-4"></i>
          <h3 class="text-xl font-semibold">Buscar usuarios</h3>
        </div>
        <p class="text-gray-600">Búsqueda avanzada de residentes y visitantes con filtros personalizados y acceso rápido a información relevante.</p>
      </div>

      <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-8">
        <div class="flex items-center mb-4">
          <i class="bx bx-package text-3xl text-primary-light dark:text-primary-DEFAULT mr-4"></i>
          <h3 class="text-xl font-semibold">Correspondencia</h3>
        </div>
        <p class="text-gray-600">Gestión integral de paquetería y correspondencia con notificaciones automáticas y registro de entregas.</p>
      </div>

      <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-8">
        <div class="flex items-center mb-4">
          <i class="bx bx-clipboard text-3xl text-primary-light dark:text-primary-DEFAULT mr-4"></i>
          <h3 class="text-xl font-semibold">Registros</h3>
        </div>
        <p class="text-gray-600">Sistema de logs detallado con historial completo de operaciones y generación de reportes personalizados.</p>
      </div>

      <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-8">
        <div class="flex items-center mb-4">
          <i class="bx bxs-traffic-barrier text-3xl text-primary-light dark:text-primary-DEFAULT mr-4"></i>
          <h3 class="text-xl font-semibold">Control de Acceso</h3>
        </div>
        <p class="text-gray-600">Gestión centralizada de todos los puntos de acceso con monitoreo en tiempo real y control de barreras.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cont {
  margin-top: 8%;
}

@media (max-width: 550px) {
  .cont {
    margin-top: 15%;
}
}
</style>