<script setup lang="ts">
import { ref } from 'vue'
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/vue/24/outline'
import { EnvelopeIcon } from '@heroicons/vue/24/solid'

const isOpen = ref(false)
const isDark = ref(false)

const navigation = [
  { name: 'Inicio', path: '/' },
  { name: 'Sobre Nosotros', path: '/about' },
]

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark')
}

// Initialize dark mode based on system preference
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  isDark.value = true
  document.documentElement.classList.add('dark')
}
</script>

<template>
  <nav class="bg-background-light dark:bg-background-dark shadow-lg transition-colors duration-200 navbar">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <h1 class="text-xl font-bold text-primary-light dark:text-primary-DEFAULT">Security Focus</h1>
          </div>
        </div>
        
        <!-- Desktop menu -->
        <div class="hidden sm:flex sm:items-center">
          <div class="flex items-center space-x-6">
            <div class="flex space-x-4">
              <router-link
                v-for="item in navigation"
                :key="item.name"
                :to="item.path"
                class="text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-DEFAULT px-3 py-2 rounded-md text-sm font-medium"
              >
                {{ item.name }}
              </router-link>
            </div>
            
            <!-- Dark Mode Toggle -->
            <button
              @click="toggleDarkMode"
              class="p-2 rounded-lg bg-primary-light dark:bg-primary-dark text-text-dark dark:text-text-dark hover:bg-primary-DEFAULT transition-colors duration-200"
            >
              <SunIcon v-if="isDark" class="h-5 w-5" />
              <MoonIcon v-else class="h-5 w-5" />
            </button>
            
            <!-- Social Icons -->
            <div class="flex items-center space-x-4 ml-4">
              <a href="mailto:hardstack.arg@gmail.com" class="text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-DEFAULT">
                <EnvelopeIcon class="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/hardstack.arg" target="_blank" rel="noopener noreferrer" class="text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-DEFAULT">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="flex items-center space-x-4 sm:hidden">
          <!-- Dark Mode Toggle Mobile -->
          <button
            @click="toggleDarkMode"
            class="p-2 rounded-lg bg-primary-light dark:bg-primary-dark text-text-dark dark:text-text-dark hover:bg-primary-DEFAULT transition-colors duration-200"
          >
            <SunIcon v-if="isDark" class="h-5 w-5" />
            <MoonIcon v-else class="h-5 w-5" />
          </button>

          <button
            @click="isOpen = !isOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-DEFAULT hover:bg-secondary-light dark:hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-light dark:focus:ring-primary-DEFAULT"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!isOpen" class="block h-6 w-6" />
            <XMarkIcon v-else class="block h-6 w-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div :class="{ 'block': isOpen, 'hidden': !isOpen }" class="sm:hidden">
      <div class="pt-2 pb-3 space-y-1">
        <router-link
          v-for="item in navigation"
          :key="item.name"
          :to="item.path"
          class="text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-DEFAULT block px-3 py-2 rounded-md text-base font-medium"
          @click="isOpen = false"
        >
          {{ item.name }}
        </router-link>
        <div class="flex items-center space-x-4 px-3 py-2">
          <a href="mailto:contact@securityfocus.com" class="text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-DEFAULT">
            <EnvelopeIcon class="h-6 w-6" />
          </a>
          <a href="https://instagram.com/securityfocus" target="_blank" rel="noopener noreferrer" class="text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-DEFAULT">
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>

.navbar {
 position: fixed;
 width: 100%;
 z-index: 999;
}
</style>