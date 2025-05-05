<template>
    <section class="grid grid-cols-5 justify-between items-center w-full px-10 
     max-md:flex max-md:flex-col-reverse max-md:text-center" id="Start">
        <div class=" flex flex-col col-span-2 items-start gap-y-6 max-md:items-center">
            <h1 class=" text-5xl font-bold 
            max-lg:text-3xl
             max-sm:text-xl
              max-xl:text-4xl dark:text-[#3D979F] ">{{ t('MainTex.Name') }}</h1>
            <p class=" text-2xl text-[#3D979F] dark:text-white
            max-lg:text-lg
             max-sm:text-base">{{ t('MainTex.Description') }}</p>
            <button class=" bg-[#3D979F] p-4 rounded-md text-white hover:bg-[#a8c3c4] hover:text-black
             max-lg:p-2" type="button">
             <a href="#ChatSecction">{{t('MainTex.ButtonTex') }}</a></button>
        </div>
        <img src="/Logo.png" class=" col-span-2 col-start-4 w-full max-lg:col-span-3 max-md:h-72 max-md:w-72"
            alt="LogoPrincipal">
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
