<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" style="height: 90vh; align-content: center;">
    <h1 class="text-4xl font-bold text-primary-light dark:text-primary-DEFAULT mb-8" style="text-align: center;">
      {{ $t('SobreNosotros.titulo') }}
    </h1>
    <div class="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
      <div class="prose prose-lg max-w-none">
        <p class="text-gray-700 leading-relaxed">
          <strong class="text-primary-light dark:text-primary-DEFAULT">{{ $t('SobreNosotros.descripcion') }}</strong>
        </p>
      </div>
    </div>
  </div>
</template>
