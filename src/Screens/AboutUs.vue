<template>
    <section class="w-full" id="About">
        <h2 class=" text-3xl font-bold text-center mb-10">{{ t('AboutUS.SeccionName') }}</h2>
        <div class=" flex w-full justify-between items-start">
            <AboutCard :title="t('AboutUS.Service0.Title')" :icon="'fas fa-robot'"
                :description="t('AboutUS.Service0.Description')" />
            <AboutCard :title="t('AboutUS.Service1.Title')" :icon="'fas fa-robot'"
                :description="t('AboutUS.Service1.Description')" />
            <AboutCard :title="t('AboutUS.Service2.Title')" :icon="'fas fa-robot'"
                :description="t('AboutUS.Service2.Description')" />
        </div>
    </section>
</template>
<script setup>
import AboutCard from '../components/AboutCard.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>