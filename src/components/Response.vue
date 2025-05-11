<template>
    <div class=" bg-[#F9FAFB] dark:bg-black dark:text-white grid grid-cols-2 justify-between items-center mx-6 p-3 rounded-lg mb-6"
        v-if="typeof response === 'object' && response !== null">
        <p class=" text-lg font-semibold text-[#666666] ">
            {{ t('ContentSecction.FormWords.Result') }}
        </p>
        <div class=" space-x-5 text-end">
            <AccionsButtons :response="response.resultado" />
            <button class="cursor-pointer" type="button"   @click="()=>onRegenerate()">
                <i class="fa-solid fa-rotate-right text-2xl max-md:text-base hover:text-red-500"></i>
            </button>

        </div>
        <div class=" col-span-2 py-3 ">
            {{ response.resultado }}
        </div>
    </div>
    <div v-else class="text-red-500 font-semibold p-4 text-center">
        {{ response }}
    </div>
</template>
<script setup lang="ts">
import AccionsButtons from './AccionsButtons.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
defineProps<{
    response: {
        resultado: string
        id: number
    } | string
    onRegenerate: () => void
}>()

</script>