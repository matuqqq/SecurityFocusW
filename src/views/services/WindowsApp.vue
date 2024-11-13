<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" style="padding-top: 15vh;">
    <h1 class="text-4xl font-bold text-primary-light dark:text-primary-DEFAULT mb-8" style="margin-bottom: 5vh; text-align: center">{{ $t('WindowsApp.Aplicacion.titulo') }}</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 cont">
      <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-8">
        <div class="flex items-center mb-4">
          <i class="bx bx-exit text-3xl text-primary-light dark:text-primary-DEFAULT mr-4"></i>
          <h3 class="text-xl font-semibold">{{ $t('WindowsApp.IngresoYegreso.titulo') }}</h3>
        </div>
        <p class="text-gray-600">{{ $t('WindowsApp.IngresoYegreso.descripcion') }}</p>
      </div>

      <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-8">
        <div class="flex items-center mb-4">
          <i class="bx bx-user-check text-3xl text-primary-light dark:text-primary-DEFAULT mr-4"></i>
          <h3 class="text-xl font-semibold">{{ $t('WindowsApp.GestionDeInvitados.titulo') }}</h3>
        </div>
        <p class="text-gray-600">{{ $t('WindowsApp.GestionDeInvitados.descripcion') }}</p>
      </div>

      <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-8">
        <div class="flex items-center mb-4">
          <i class="bx bx-search-alt-2 text-3xl text-primary-light dark:text-primary-DEFAULT mr-4"></i>
          <h3 class="text-xl font-semibold">{{ $t('BuscarUsuarios.titulo') }}</h3>
        </div>
        <p class="text-gray-600">{{ $t('WindowsApp.BuscarUsuarios.descripcion') }}</p>
      </div>

      <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-8">
        <div class="flex items-center mb-4">
          <i class="bx bx-package text-3xl text-primary-light dark:text-primary-DEFAULT mr-4"></i>
          <h3 class="text-xl font-semibold">{{ $t('WindowsApp.Correspondencia.titulo') }}</h3>
        </div>
        <p class="text-gray-600">{{ $t('WindowsApp.Correspondencia.descripcion') }}</p>
      </div>

      <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-8">
        <div class="flex items-center mb-4">
          <i class="bx bx-clipboard text-3xl text-primary-light dark:text-primary-DEFAULT mr-4"></i>
          <h3 class="text-xl font-semibold">{{ $t('WindowsApp.Registros.titulo') }}</h3>
        </div>
        <p class="text-gray-600">{{ $t('WindowsApp.Registros.descripcion') }}</p>
      </div>

      <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-8">
        <div class="flex items-center mb-4">
          <i class="bx bxs-traffic-barrier text-3xl text-primary-light dark:text-primary-DEFAULT mr-4"></i>
          <h3 class="text-xl font-semibold">{{ $t('WindowsApp.ControlDeAcceso.titulo') }}</h3>
        </div>
        <p class="text-gray-600">{{ $t('WindowsApp.ControlDeAcceso.descripcion') }}</p>
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
