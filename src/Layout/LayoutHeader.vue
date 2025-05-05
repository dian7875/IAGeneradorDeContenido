<template>
    <header class="w-full p-2 bg-[#DEEBEC] sticky top-0 dark:bg-black 
     dark:text-white">
        <nav class=" flex items-center justify-between max-md:justify-end ">
            <img src="/Icon.png" alt="" class=" h-15 w-15 transition-filter duration-500 ease-in-out hover:invert-75 
            dark:invert
             max-md:h-9 max-md:w-9 max-md:hidden">
            <ul class=" flex gap-x-6 px-4 hover-list 
            max-md:text-xs">
                <li><a class="relative inline-block text-black hover:text-sky-400 transition-colors duration-300
         before:content-[''] before:absolute before:bottom-0 before:left-0
         before:w-full before:h-[2px] before:bg-sky-400
         before:scale-x-0 before:origin-left before:transition-transform before:duration-300
         hover:before:scale-x-100 dark:text-white" href="#Start">{{ t('NavOPT.title0') }}</a></li>
                <li><a class=" relative inline-block text-black hover:text-sky-400 transition-colors duration-300
         before:content-[''] before:absolute before:bottom-0 before:left-0
         before:w-full before:h-[2px] before:bg-sky-400
         before:scale-x-0 before:origin-left before:transition-transform before:duration-300
         hover:before:scale-x-100 dark:text-white" href="#About">{{ t('NavOPT.title1') }}</a></li>
                <li><a class=" relative inline-block text-black hover:text-sky-400 transition-colors duration-300
         before:content-[''] before:absolute before:bottom-0 before:left-0
         before:w-full before:h-[2px] before:bg-sky-400
         before:scale-x-0 before:origin-left before:transition-transform before:duration-300
         hover:before:scale-x-100 dark:text-white" href="#ChatSecction">{{ t('NavOPT.title2') }}</a></li>
                <LanguajeSelector />
                <ThemeToogle />
            </ul>
        </nav>
    </header>
</template>
<script setup>
import ThemeToogle from '../components/ThemeToogle.vue'
import { useI18n } from 'vue-i18n'
import LanguajeSelector from '../components/LanguajeSelector.vue';

const { t } = useI18n()
</script>
<style lang="">

</style>