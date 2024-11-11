<template>
  <div
    class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-9 py-12"
    style="padding-top: 15vh"
  >
    <h1
      class="text-4xl font-bold text-primary-light dark:text-primary-DEFAULT mb-8"
      style="margin-bottom: 5vh; text-align: center"
    >
      Aplicación Móvil
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-8">
        <div class="flex items-center mb-4">
          <i
            class="bx bx-news text-3xl text-primary-light dark:text-primary-DEFAULT mr-4"
          ></i>
          <h3 class="text-xl font-semibold">Novedades</h3>
        </div>
        <p class="text-gray-600">
          Mantente informado sobre las últimas actualizaciones y noticias
          importantes del barrio a través de notificaciones y una sección de
          noticias actualizado en tiempo real.
        </p>
      </div>

      <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-8">
        <div class="flex items-center mb-4">
          <i
            class="bx bx-minus-circle text-3xl text-primary-light dark:text-primary-DEFAULT mr-4"
          ></i>
          <h3 class="text-xl font-semibold">Infracciones</h3>
        </div>
        <p class="text-gray-600">
          Gestiona y visualiza las infracciones registradas y recibe
          notificaciones instantáneas.
        </p>
      </div>

      <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-8">
        <div class="flex items-center mb-4">
          <i
            class="bx bx-pie-chart-alt-2 text-3xl text-primary-light dark:text-primary-DEFAULT mr-4"
          ></i>
          <h3 class="text-xl font-semibold">Encuestas</h3>
        </div>
        <p class="text-gray-600">
          Participa en encuestas comunitarias, vota sobre decisiones importantes
          y visualiza resultados en tiempo real para mejorar la vida en
          comunidad.
        </p>
      </div>

      <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-8">
        <div class="flex items-center mb-4">
          <i
            class="bx bx-calendar-event text-3xl text-primary-light dark:text-primary-DEFAULT mr-4"
          ></i>
          <h3 class="text-xl font-semibold">Reservas</h3>
        </div>
        <p class="text-gray-600">
          Sistema integrado para reservar espacios comunes, canchas deportivas y
          salones de eventos con confirmación instantánea.
        </p>
      </div>

      <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-8">
        <div class="flex items-center mb-4">
          <i
            class="bx bx-message-rounded-error text-3xl text-primary-light dark:text-primary-DEFAULT mr-4"
          ></i>
          <h3 class="text-xl font-semibold">Denuncias</h3>
        </div>
        <p class="text-gray-600">
          Canal directo para reportar incidentes o situaciones que requieran
          atención.
        </p>
      </div>

      <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-8">
        <div class="flex items-center mb-4">
          <i
            class="bx bx-user-plus text-3xl text-primary-light dark:text-primary-DEFAULT mr-4"
          ></i>
          <h3 class="text-xl font-semibold">Visitas</h3>
        </div>
        <p class="text-gray-600">
          Gestiona el ingreso de visitas de manera anticipada, genera códigos QR
          para acceso rápido y mantén un registro de invitados.
        </p>
      </div>

      <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-8">
        <div class="flex items-center mb-4">
          <i
            class="bx bx-receipt text-3xl text-primary-light dark:text-primary-DEFAULT mr-4"
          ></i>
          <h3 class="text-xl font-semibold">Expensas</h3>
        </div>
        <p class="text-gray-600">
          Consulta y descarga los comprobantes de tus expensas mensuales y
          mantén un registro de tus pagos.
        </p>
      </div>

      <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-8">
        <div class="flex items-center mb-4">
          <i
            class="bx bx-file text-3xl text-primary-light dark:text-primary-DEFAULT mr-4"
          ></i>
          <h3 class="text-xl font-semibold">Documentos</h3>
        </div>
        <p class="text-gray-600">
          Accede a documentos importantes, reglamentos y otros archivos
          compartidos por la administración.
        </p>
      </div>

      <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-8">
        <div class="flex items-center mb-4">
          <i
            class="bx bx-credit-card text-3xl text-primary-light dark:text-primary-DEFAULT mr-4"
          ></i>
          <h3 class="text-xl font-semibold">Informar Pago</h3>
        </div>
        <p class="text-gray-600">
          Reporta tus pagos de expensas o servicios de manera rápida y sencilla,
          adjuntando comprobantes si es necesario.
        </p>
      </div>

      <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-8">
        <div class="flex items-center mb-4">
          <i
            class="bx bx-envelope text-3xl text-primary-light dark:text-primary-DEFAULT mr-4"
          ></i>
          <h3 class="text-xl font-semibold">Correspondencia</h3>
        </div>
        <p class="text-gray-600">
          Recibe notificaciones sobre la llegada de correspondencia o paquetes.
        </p>
      </div>

      <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-8">
        <div class="flex items-center mb-4">
          <i
            class="bx bx-map text-3xl text-primary-light dark:text-primary-DEFAULT mr-4"
          ></i>
          <h3 class="text-xl font-semibold">Guía Barrial</h3>
        </div>
        <p class="text-gray-600">
          Encuentra y comparte recomendaciones de servicios y lugares de interés
          con la comunidad.
        </p>
      </div>

      <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-8">
        <div class="flex items-center mb-4">
          <i
            class="bx bx-question-mark text-3xl text-primary-light dark:text-primary-DEFAULT mr-4"
          ></i>
          <h3 class="text-xl font-semibold">Consultas</h3>
        </div>
        <p class="text-gray-600">
          Envía tus preguntas y recibe asesoramiento directo de la
          administración y/o guardia.
        </p>
      </div>

      <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-8">
        <div class="flex items-center mb-4">
          <i
            class="bx bx-group text-3xl text-primary-light dark:text-primary-DEFAULT mr-4"
          ></i>
          <h3 class="text-xl font-semibold">Familia</h3>
        </div>
        <p class="text-gray-600">
          Gestiona los miembros de tu familia, incluyendo su acceso y permisos
          dentro de la comunidad.
        </p>
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