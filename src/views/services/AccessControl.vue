<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" style="padding-top: 15vh;">
    <h1 class="text-4xl font-bold text-primary-light dark:text-primary-DEFAULT mb-8" style="margin-bottom: 5vh; text-align: center">
      {{ $t('AccessControl.tituloPrincipal') }}
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 cont">
      <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-8">
        <div class="flex items-center mb-4">
          <i class="bx bx-id-card text-3xl text-primary-light dark:text-primary-DEFAULT mr-4"></i>
          <h3 class="text-xl font-semibold">{{ $t('AccessControl.rfid.titulo') }}</h3>
        </div>
        <p class="text-gray-600">{{ $t('AccessControl.rfid.descripcion') }}</p>
      </div>

      <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-8">
        <div class="flex items-center mb-4">
          <i class="bx bxs-face text-3xl text-primary-light dark:text-primary-DEFAULT mr-4"></i>
          <h3 class="text-xl font-semibold">{{ $t('AccessControl.faceId.titulo') }}</h3>
        </div>
        <p class="text-gray-600">{{ $t('AccessControl.faceId.descripcion') }}</p>
      </div>

      <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-8">
        <div class="flex items-center mb-4">
          <i class="bx bx-fingerprint text-3xl text-primary-light dark:text-primary-DEFAULT mr-4"></i>
          <h3 class="text-xl font-semibold">{{ $t('AccessControl.huellaDigital.titulo') }}</h3>
        </div>
        <p class="text-gray-600">{{ $t('AccessControl.huellaDigital.descripcion') }}</p>
      </div>

      <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-8">
        <div class="flex items-center mb-4">
          <i class="bx bx-camera-home text-3xl text-primary-light dark:text-primary-DEFAULT mr-4"></i>
          <h3 class="text-xl font-semibold">{{ $t('AccessControl.fotomultas.titulo') }}</h3>
        </div>
        <p class="text-gray-600">{{ $t('AccessControl.fotomultas.descripcion') }}</p>
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