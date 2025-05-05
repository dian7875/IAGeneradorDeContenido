<template>
    <footer class="bg-[#BED9DD] w-full p-5 text-center mt-8 dark:bg-black ">
        <p class="text-sm max-md:text-xs text-gray-700 dark:text-white ">© {{ currentYear }} {{ t('FooterText') }}</p>
    </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
