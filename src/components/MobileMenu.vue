<template>
  <div>
    <!-- Overlay con efecto blur aplicado al fondo de la página cuando el menú está abierto -->
    <div v-if="isOpen" 
         class="fixed inset-0 z-40 backdrop-blur-[4px] bg-black/5 dark:bg-black/10 transition-all duration-300"
         :class="{ 'opacity-100': isOpen, 'opacity-0': !isOpen }"
         @click="closeMenu"></div>
    

    <div class="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-[#ffffff] dark:bg-[#14191f] z-50 shadow-lg transform transition-transform duration-300 ease-in-out"
         :class="isOpen ? 'translate-x-0' : 'translate-x-full'">
        

        <div class="flex justify-between items-center p-4 border-b border-sky-100/30 dark:border-gray-700/30">
            <div class="text-xl font-bold text-black dark:text-white">
                <img src="/Icon.png" alt="Logo" class="h-8 w-8 dark:invert">
            </div>
            <button @click="closeMenu" class="text-black hover:text-sky-500 dark:text-white dark:hover:text-sky-400 transition-colors duration-300">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        

        <div class="p-4">
            <ul class="space-y-5">
                <li v-for="(item, index) in menuItems" :key="index">
                    <a @click="navigateTo(item.link)" 
                       class="block text-black dark:text-white hover:text-sky-400 dark:hover:text-sky-400 transition-colors duration-300 cursor-pointer">
                        {{ item.title }}
                    </a>
                </li>
            </ul>
            
   
            <div class="mt-8">
                <div class="text-black dark:text-white mb-2 font-medium">{{ t('Language') }}</div>
                <div class="grid grid-cols-2 gap-2 w-full">
                    <button 
                        v-for="lang in languages.filter((_, i) => i < 4)"
                        :key="lang.code"
                        @click="changeLang(lang.code, lang.name)" 
                        :class="['p-2 rounded flex items-center transition-all duration-300', 
                                locale === lang.code ? 'bg-sky-100/80 text-sky-700 dark:bg-sky-900/80 dark:text-sky-300' : 
                                'bg-gray-100/80 text-black hover:bg-gray-200/80 dark:bg-gray-800/80 dark:text-white dark:hover:bg-gray-700/80']">
                        <span :class="`fi fi-${lang.flag} mr-2`"></span> {{ lang.name }}
                    </button>
                    <button 
                        v-for="lang in languages.filter((_, i) => i >= 4)"
                        :key="lang.code"
                        @click="changeLang(lang.code, lang.name)" 
                        :class="['p-2 rounded flex items-center transition-all duration-300 col-span-2 mx-auto', 
                                locale === lang.code ? 'bg-sky-100/80 text-sky-700 dark:bg-sky-900/80 dark:text-sky-300' : 
                                'bg-gray-100/80 text-black hover:bg-gray-200/80 dark:bg-gray-800/80 dark:text-white dark:hover:bg-gray-700/80']">
                        <span :class="`fi fi-${lang.flag} mr-2`"></span> {{ lang.name }}
                    </button>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, defineProps, defineEmits, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const props = defineProps({
    isOpen: Boolean,
    menuItems: {
        type: Array,
        default: () => []
    }
});

const emit = defineEmits(['close', 'navigate', 'changeLang']);
const { t, locale } = useI18n();

const languages = [
    { code: 'es', name: 'Español', flag: 'cr' },
    { code: 'en', name: 'English', flag: 'us' },
    { code: 'fr', name: 'Français', flag: 'fr' },
    { code: 'ja', name: '日本語', flag: 'jp' },
    { code: 'de', name: 'Deutsch', flag: 'de' },
];


function handleEscKey(event) {
    if (event.key === 'Escape' && props.isOpen) {
        closeMenu();
    }
}

function toggleBodyScroll(disable) {
    if (disable) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

function closeMenu() {
    emit('close');
    toggleBodyScroll(false);
}

function navigateTo(id) {
    closeMenu();
    emit('navigate', id);
}

function changeLang(lang, langName) {
    emit('changeLang', { lang, langName });
}

onMounted(() => {
    document.addEventListener('keydown', handleEscKey);
    if (props.isOpen) {
        toggleBodyScroll(true);
    }
});

onBeforeUnmount(() => {
    document.removeEventListener('keydown', handleEscKey);
    toggleBodyScroll(false);
});

watch(() => props.isOpen, (newValue) => {
    toggleBodyScroll(newValue);
});
</script>

<style scoped>

.transition-transform {
    will-change: transform;
}

.transition-opacity {
    will-change: opacity;
}


button:hover, a:hover {
    transform: translateY(-1px);
}

button:active, a:active {
    transform: translateY(1px);
}
</style>