<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const formData = ref({
  fullName: '',
  email: '',
  phone: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)
const showError = ref(false)

const handleSubmit = async (e: { preventDefault: () => void }) => {
  e.preventDefault();
  isSubmitting.value = true;
  showSuccess.value = false;
  showError.value = false;

  try {
    fetch('/sendEmail.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(formData.value),
    }).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.text();
  })
  .then((data) => console.log("Response from PHP:", data))
  .catch((error) => console.error("Fetch error:", error));
  } catch (error) {
    showError.value = true;
  } finally {
    isSubmitting.value = false;
  }
};

// Botón para cambiar el idioma
const toggleLanguage = () => {
  locale.value = locale.value === 'es' ? 'en' : 'es'
}
</script>

<template>
  <div class="bg-white rounded-lg shadow-lg p-8">
    <h2 class="text-2xl font-bold text-gray-900 mb-6">{{ t('form.title') }}</h2>

    <!-- Botón para cambiar el idioma -->
    <button @click="toggleLanguage">
      <img :src="locale === 'es' ? 'path/to/argentina-flag.png' : 'path/to/usa-flag.png'" alt="Change language" />
    </button>

    <form @submit="handleSubmit" class="space-y-6">
      <div>
        <label for="fullName" class="block text-sm font-medium text-gray-700">{{ t('form.fullName') }}</label>
        <input
          type="text"
          id="fullName"
          v-model="formData.fullName"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">{{ t('form.email') }}</label>
        <input
          type="email"
          id="email"
          v-model="formData.email"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label for="phone" class="block text-sm font-medium text-gray-700">{{ t('form.phone') }}</label>
        <input
          type="tel"
          id="phone"
          v-model="formData.phone"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label for="message" class="block text-sm font-medium text-gray-700">{{ t('form.message') }}</label>
        <textarea
          id="message"
          v-model="formData.message"
          rows="4"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        ></textarea>
      </div>

      <div>
        <button
          type="submit"
          :disabled="isSubmitting"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {{ isSubmitting ? t('form.sending') : t('form.sendMessage') }}
        </button>
      </div>

      <div v-if="showSuccess" class="rounded-md bg-green-50 p-4">
        <div class="flex">
          <div class="flex-shrink-0">
            <i class="bx bx-check-circle text-green-400 text-xl"></i>
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-green-800">
              {{ t('form.success') }}
            </p>
          </div>
        </div>
      </div>

      <div v-if="showError" class="rounded-md bg-red-50 p-4">
        <div class="flex">
          <div class="flex-shrink-0">
            <i class="bx bx-x-circle text-red-400 text-xl"></i>
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-red-800">
              {{ t('form.error') }}
            </p>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
