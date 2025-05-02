<template>
    <section class="grid grid-cols-5 justify-between items-center w-full px-10" id="Start">
        <div class=" flex flex-col col-span-2 items-start gap-y-6">
            <h1 class=" text-5xl font-bold">{{ t('MainTex.Name') }}</h1>
            <p class=" text-2xl text-[#3D979F]">{{ t('MainTex.Description') }}</p>
            <button class=" bg-[#AECFD0] p-4 rounded-md text-white hover:bg-[#a8c3c4] hover:text-black" type="button">{{
                t('MainTex.ButtonTex') }}</button>
        </div>
        <img src="/Logo.png" class=" col-span-2 col-start-4 w-full" alt="LogoPrincipal">
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
