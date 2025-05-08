<template>
    <header class="w-full p-2 max-md:py-4 bg-[#DEEBEC] sticky top-0 dark:bg-black 
     dark:text-white">
        <nav class="flex items-center justify-between">
            <img src="/Icon.png" alt="" class="h-15 w-15 transition-filter duration-500 ease-in-out hover:invert-75 
            dark:invert max-md:h-9 max-md:w-9">
            
            <ul class="gap-x-6 px-4 hover-list hidden md:flex">
                <li><a class="relative inline-block text-black hover:text-sky-400 transition-colors duration-300
         before:content-[''] before:absolute before:bottom-0 before:left-0
         before:w-full before:h-[2px] before:bg-sky-400
         before:scale-x-0 before:origin-left before:transition-transform before:duration-300
         hover:before:scale-x-100 dark:text-white" href="#Start">{{ t('NavOPT.title0') }}</a></li>
                <li><a class="relative inline-block text-black hover:text-sky-400 transition-colors duration-300
         before:content-[''] before:absolute before:bottom-0 before:left-0
         before:w-full before:h-[2px] before:bg-sky-400
         before:scale-x-0 before:origin-left before:transition-transform before:duration-300
         hover:before:scale-x-100 dark:text-white" href="#About">{{ t('NavOPT.title1') }}</a></li>
                <li><a class="relative inline-block text-black hover:text-sky-400 transition-colors duration-300
         before:content-[''] before:absolute before:bottom-0 before:left-0
         before:w-full before:h-[2px] before:bg-sky-400
         before:scale-x-0 before:origin-left before:transition-transform before:duration-300
         hover:before:scale-x-100 dark:text-white" href="#ChatSecction">{{ t('NavOPT.title2') }}</a></li>
                <LanguajeSelector />
                <ThemeToogle />
            </ul>
            
            <div class="md:hidden flex items-center gap-3">
                <ThemeToogle />
                <button @click="toggleMobileMenu" class="text-black dark:text-white focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" 
                        stroke="currentColor" v-if="!mobileMenuOpen">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" 
                        stroke="currentColor" v-else>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </nav>
        
        <MobileMenu 
            :is-open="mobileMenuOpen"
            :menu-items="menuItems"
            @close="closeMobileMenu"
            @navigate="handleNavigate"
            @change-lang="handleChangeLang"
        />
    </header>
</template>
<script setup>
import ThemeToogle from '../components/ThemeToogle.vue'
import { useI18n } from 'vue-i18n'
import LanguajeSelector from '../components/LanguajeSelector.vue';
import MobileMenu from '../components/MobileMenu.vue';
import { ref } from 'vue';

const { t, locale } = useI18n();
const mobileMenuOpen = ref(false);

const menuItems = [
    { title: t('NavOPT.title0'), link: '#Start' },
    { title: t('NavOPT.title1'), link: '#About' },
    { title: t('NavOPT.title2'), link: '#ChatSecction' },
];

function toggleMobileMenu() {
    mobileMenuOpen.value = !mobileMenuOpen.value;
}

function closeMobileMenu() {
    mobileMenuOpen.value = false;
}

function handleNavigate(id) {
    window.location.href = id;
}

function handleChangeLang({ lang, langName }) {
    locale.value = lang;
    localStorage.setItem('lang', lang);
}
</script>
<style scoped>

</style>