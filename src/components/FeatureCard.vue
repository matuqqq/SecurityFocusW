<script setup lang="ts">
defineProps<{
  title: string
  description: string
  icon: string
}>()
</script>

<template>
  <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-6 flex flex-col items-center text-center h-full">
    <i :class="icon" class="text-4xl mb-4 text-primary-light dark:text-primary-DEFAULT"></i>
    <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ title }}</h3>
    <p class="text-gray-600">{{ description }}</p>
  </div>
</template>