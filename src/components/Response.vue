<template>
    <div class=" bg-[#F9FAFB] grid grid-cols-2 justify-between items-center mx-6 p-3 rounded-lg mb-6">
        <p class=" text-lg font-semibold text-[#666666] ">
            {{ t('ContentSecction.FormWords.Result') }}
        </p>
        <div class=" space-x-5 text-end">
            <AccionsButtons :response="response" />
        </div>
        <div class=" col-span-2 py-3 ">
            {{ response }}
        </div>
    </div>
</template>
<script setup lang="ts">
import AccionsButtons from './AccionsButtons.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
defineProps<{
    response: string
}>()

</script>