<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <footer class="bg-gray-800 text-white mt-auto">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <p class="text-sm">
            &copy; {{ new Date().getFullYear() }} Hardstack. {{ t('footer.copyright') }}
          </p>
        </div>
        <div class="flex space-x-6">
        </div>
      </div>
    </div>
  </footer>
</template>
