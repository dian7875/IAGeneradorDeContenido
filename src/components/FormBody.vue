<template>
    <div class="p-6 md:p-8 space-y-6">
      <ContentTypeSelec/>
      <FormInput/>
      <ExtraOption/>
      <ConfirmButton/>
      <Result/>
    </div>
  </template>
  
  <script setup lang="ts">
import ConfirmButton from './ConfirmButton.vue';
import ContentTypeSelec from './ContentTypeSelec.vue';
import ExtraOption from './ExtraOption.vue';
import FormInput from './FormInput.vue';
import Result from './Result.vue';
  </script>

<style>
</style>