<template>
    <main class="w-full px-10 flex flex-col gap-y-10">
        <Hero />
        <AboutUs />
        <GenerateContent />
    </main>
</template>
<script setup>
import AboutUs from '../Screens/AboutUs.vue'
import GenerateContent from '../Screens/GenerateContent.vue';
import Hero from '../Screens/Hero.vue'
</script>