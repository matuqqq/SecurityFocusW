<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  category: string
  icons: Array<{ class: string; description: string }>
  path: string
}>()
</script>

<template>
  <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-6 flex flex-col">
    <h3 class="text-xl font-semibold text-gray-900 mb-6">{{ category }}</h3>
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 flex-grow">
      <div v-for="icon in icons" :key="icon.description" class="flex flex-col items-center text-center">
        <i :class="icon.class" class="text-primary-light dark:text-primary-DEFAULT mb-2"></i>
        <span class="text-sm text-gray-600">{{ icon.description }}</span>
      </div>
    </div>
    <RouterLink
      :to="path"
      class="mt-6 inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-light dark:bg-primary-dark text-text-dark dark:text-text-dark hover:bg-primary-DEFAULT focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      Conocer más
    </RouterLink>
  </div>
</template>