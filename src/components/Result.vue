<template>
    <div class="mt-6 border border-gray-200 rounded-md p-4 bg-gray-50">
      <div class="flex justify-between items-center mb-2">
        <h3 class="text-lg font-medium text-gray-900">Texto generado</h3>
        <div class="flex space-x-2">
          <button class="p-2 text-sky-600 hover:bg-sky-100 rounded-md transition-colors" title="Copiar al portapapeles">
            📋
          </button>
          <button class="p-2 text-sky-600 hover:bg-sky-100 rounded-md transition-colors" title="Descargar">
            ⬇️
          </button>
        </div>
      </div>
      <div class="bg-white p-3 rounded border border-gray-200 whitespace-pre-wrap">
        Aquí se mostrará el texto generado.
      </div>
    </div>
  </template>

<script setup></script>
<style></style>