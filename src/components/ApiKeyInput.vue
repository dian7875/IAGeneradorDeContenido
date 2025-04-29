<template>
    <div class="p-6 md:p-8">
      <h2 class="text-xl font-bold text-sky-700 mb-4">Configuración de API</h2>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Clave API de OpenAI</label>
        <div class="flex">
          <input 
            type="password"
            class="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="Ingresa tu clave API de OpenAI"
          />
          <button 
            class="bg-sky-600 hover:bg-sky-700 text-white font-medium py-2 px-4 rounded-r-md transition-colors"
          >
            Guardar
          </button>
        </div>
        <p class="mt-2 text-sm text-gray-500">
          Tu clave API se guarda localmente en tu navegador y nunca se comparte.
        </p>
      </div>
    </div>
  </template>

<script setup></script>
<style></style>