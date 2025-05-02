<template>
    <LayoutHeader />
    <HomePage/>
    <LayoutFooter />
</template>

<script setup lang="ts">
import "/node_modules/flag-icons/css/flag-icons.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css'
import LayoutFooter from './Layout/LayoutFooter.vue';
import LayoutHeader from './Layout/LayoutHeader.vue';
import HomePage from './Pages/HomePage.vue';
</script>
