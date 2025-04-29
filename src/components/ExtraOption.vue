<template>
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Opciones adicionales</label>
      <div class="flex flex-wrap gap-4">
        <div class="flex items-center">
          <label class="mr-2">Tono:</label>
          <select class="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500">
            <option>Formal</option>
            <option>Casual</option>
            <option>Profesional</option>
            <option>Amigable</option>
          </select>
        </div>
        <div class="flex items-center">
          <label class="mr-2">Longitud:</label>
          <select class="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500">
            <option>Corta</option>
            <option>Media</option>
            <option>Larga</option>
          </select>
        </div>
      </div>
    </div>
  </template>

<script setup></script>
<style></style>