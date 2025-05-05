<template>
    <button @click="toggleTheme" type="button" class=" 
    cursor-pointer rounded-md flex items-center justify-center group w-5 ">
        <span v-if="isDarkMode">
            <i class="fa-solid fa-moon group-hover:text-indigo-500 text-2xl max-md:text-lg"></i>
        </span>
        <span v-else>
            <i class="fa-solid fa-sun group-hover:text-amber-400 text-2xl max-md:text-lg"></i>
        </span>
    </button>
</template>


<script setup lang="ts">

import { onMounted, ref } from 'vue';

const isDarkMode = ref(false);

const applyTheme = () => {
    if (isDarkMode.value) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
};

const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;
    applyTheme();
};

onMounted(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        isDarkMode.value = storedTheme === 'dark';
    }
    applyTheme();
});

</script>
