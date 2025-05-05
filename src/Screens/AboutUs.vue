<template>
    <section class="w-full" id="About">
        <h2 class=" text-3xl font-bold text-center mb-10 max-md:text-xl dark:text-white">{{ t('AboutUS.SeccionName') }}</h2>
        <div class=" flex w-full justify-between items-start max-md:flex-col 
        max-md:items-center max-md:gap-y-3 
        max-lg:gap-x-2">
            <AboutCard :title="t('AboutUS.Service0.Title')" :icon="'fas fa-pencil'"
                :description="t('AboutUS.Service0.Description')" />
            <AboutCard :title="t('AboutUS.Service1.Title')" :icon="'fas fa-robot'"
                :description="t('AboutUS.Service1.Description')" />
            <AboutCard :title="t('AboutUS.Service2.Title')" :icon="'fas fa-square-poll-vertical'"
                :description="t('AboutUS.Service2.Description')" />
        </div>
    </section>
</template>
<script setup>
import AboutCard from '../components/AboutCard.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>