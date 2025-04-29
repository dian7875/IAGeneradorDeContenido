<template>
  <div class="min-h-screen bg-gradient-to-br from-sky-50 to-teal-100 p-4 md:p-8">
    <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
    <LayoutHeader/>
    <FormBody/>
    </div>
    <div class="max-w-4xl mx-auto mt-6 bg-white rounded-xl shadow-lg overflow-hidden">
    <ApiKeyInput/>  
    </div>
  </div>
</template>

<script setup lang="ts">
import ApiKeyInput from './components/ApiKeyInput.vue';
import FormBody from './components/FormBody.vue';
import LayoutHeader from './components/LayoutHeader.vue';

</script>
