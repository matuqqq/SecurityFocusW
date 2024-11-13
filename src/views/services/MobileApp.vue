<template>
  <div
    class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-9 py-12"
    style="padding-top: 15vh"
  >
    <h1
      class="text-4xl font-bold text-primary-light dark:text-primary-DEFAULT mb-8"
      style="margin-bottom: 5vh; text-align: center"
    >
      {{ $t('MobileApp.tituloPrincipal') }}   
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-8">
        <div class="flex items-center mb-4">
          <i
            class="bx bx-news text-3xl text-primary-light dark:text-primary-DEFAULT mr-4"
          ></i>
          <h3 class="text-xl font-semibold">    
            {{ $t('MobileApp.novedades.titulo') }}   
          </h3>
        </div>
        <p class="text-gray-600">
          {{ $t('MobileApp.novedades.descripcion') }}   
        </p>
      </div>

      <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-8">
        <div class="flex items-center mb-4">
          <i
            class="bx bx-minus-circle text-3xl text-primary-light dark:text-primary-DEFAULT mr-4"
          ></i>
          <h3 class="text-xl font-semibold">
            {{ $t('MobileApp.infracciones.titulo') }} 
          </h3>
        </div>
        <p class="text-gray-600">
          {{ $t('MobileApp.infracciones.descripcion') }} 
        </p>
      </div>

      <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-8">
        <div class="flex items-center mb-4">
          <i
            class="bx bx-pie-chart-alt-2 text-3xl text-primary-light dark:text-primary-DEFAULT mr-4"
          ></i>
          <h3 class="text-xl font-semibold">
            {{ $t('MobileApp.encuestas.titulo') }} 
          </h3>
        </div>
        <p class="text-gray-600">
          {{ $t('MobileApp.encuestas.descripcion') }} 
        </p>
      </div>

      <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-8">
        <div class="flex items-center mb-4">
          <i
            class="bx bx-calendar-event text-3xl text-primary-light dark:text-primary-DEFAULT mr-4"
          ></i>
          <h3 class="text-xl font-semibold">
            {{ $t('MobileApp.reservas.titulo') }} 
          </h3>
        </div>
        <p class="text-gray-600">
          {{ $t('MobileApp.reservas.descripcion') }} 
        </p>
      </div>

      <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-8">
        <div class="flex items-center mb-4">
          <i
            class="bx bx-message-rounded-error text-3xl text-primary-light dark:text-primary-DEFAULT mr-4"
          ></i>
          <h3 class="text-xl font-semibold">
            {{ $t('MobileApp.denuncias.titulo') }} 
          </h3>
        </div>
        <p class="text-gray-600">
          {{ $t('MobileApp.denuncias.descripcion') }} 
        </p>
      </div>

      <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-8">
        <div class="flex items-center mb-4">
          <i
            class="bx bx-user-plus text-3xl text-primary-light dark:text-primary-DEFAULT mr-4"
          ></i>
          <h3 class="text-xl font-semibold">
            {{ $t('MobileApp.visitas.titulo') }} 
          </h3>
        </div>
        <p class="text-gray-600">
          {{ $t('MobileApp.visitas.descripcion') }} 
        </p>
      </div>

      <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-8">
        <div class="flex items-center mb-4">
          <i
            class="bx bx-receipt text-3xl text-primary-light dark:text-primary-DEFAULT mr-4"
          ></i>
          <h3 class="text-xl font-semibold">
            {{ $t('MobileApp.expensas.titulo') }} 
          </h3>
        </div>
        <p class="text-gray-600">
          {{ $t('MobileApp.expensas.descripcion') }} 
        </p>
      </div>

      <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-8">
        <div class="flex items-center mb-4">
          <i
            class="bx bx-file text-3xl text-primary-light dark:text-primary-DEFAULT mr-4"
          ></i>
          <h3 class="text-xl font-semibold">
            {{ $t('MobileApp.documentos.titulo') }} 
          </h3>
        </div>
        <p class="text-gray-600">
          {{ $t('MobileApp.documentos.descripcion') }} 
        </p>
      </div>

      <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-8">
        <div class="flex items-center mb-4">
          <i
            class="bx bx-credit-card text-3xl text-primary-light dark:text-primary-DEFAULT mr-4"
          ></i>
          <h3 class="text-xl font-semibold">
            {{ $t('MobileApp.informarPago.titulo') }} 
          </h3>
        </div>
        <p class="text-gray-600">
          {{ $t('MobileApp.informarPago.descripcion') }} 
        </p>
      </div>

      <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-8">
        <div class="flex items-center mb-4">
          <i
            class="bx bx-envelope text-3xl text-primary-light dark:text-primary-DEFAULT mr-4"
          ></i>
          <h3 class="text-xl font-semibold">
            {{ $t('MobileApp.correspondencia.titulo') }} 
          </h3>
        </div>
        <p class="text-gray-600">
          {{ $t('MobileApp.correspondencia.descripcion') }} 
        </p>
      </div>

      <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-8">
        <div class="flex items-center mb-4">
          <i
            class="bx bx-map text-3xl text-primary-light dark:text-primary-DEFAULT mr-4"
          ></i>
          <h3 class="text-xl font-semibold">
            {{ $t('MobileApp.guiaBarrial.titulo') }} 
          </h3>
        </div>
        <p class="text-gray-600">
          {{ $t('MobileApp.guiaBarrial.descripcion') }} 
        </p>
      </div>

      <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-8">
        <div class="flex items-center mb-4">
          <i
            class="bx bx-question-mark text-3xl text-primary-light dark:text-primary-DEFAULT mr-4"
          ></i>
          <h3 class="text-xl font-semibold">
            {{ $t('MobileApp.consultas.titulo') }} 
          </h3>
        </div>
        <p class="text-gray-600">
          {{ $t('MobileApp.consultas.descripcion') }} 
        </p>
      </div>

      <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-8">
        <div class="flex items-center mb-4">
          <i
            class="bx bx-group text-3xl text-primary-light dark:text-primary-DEFAULT mr-4"
          ></i>
          <h3 class="text-xl font-semibold">
            {{ $t('MobileApp.familia.titulo') }} 
          </h3>
        </div>
        <p class="text-gray-600">
          {{ $t('MobileApp.familia.descripcion') }} 
        </p>
      </div>
    </div>
  </div>
</template>
