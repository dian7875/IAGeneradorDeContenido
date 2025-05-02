<template>
    <footer class=" bg-[#BED9DD] w-full p-5 text-center">
        <p class="text-sm text-gray-700">© {{ currentYear }} {{ t('FooterText') }}</p>
    </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
