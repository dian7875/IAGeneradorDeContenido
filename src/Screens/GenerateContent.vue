<template>
    <section id="ChatSecction" class="w-full flex flex-col items-center gap-y-6">
        <h2 class=" text-center text-3xl font-bold">{{ t('ContentSecction.Title') }}</h2>
        <div class=" border w-2/3 rounded-md">
            <div class=" border-b">
                <button type="button" class="p-4 cursor-pointer"
                    :class="{ ' border-b-[#3C979F]  border-b-2 text-[#3C979F]': mode === 'Generator' }"
                    @click="changeMode('Generator')">
                    <i class="fas fa-pencil-alt"></i>{{ t('ContentSecction.ContentSelector.Opcion0')
                    }}</button>
                <button type="button" class="p-4 cursor-pointer"
                    :class="{ 'border-b-[#3C979F]  border-b-2 text-[#3C979F]': mode === 'History' }" @click="changeMode('History')">
                    <i class="fas fa-history"></i>{{ t('ContentSecction.ContentSelector.Opcion')
                    }}</button>
            </div>
            <div>
                <Generator v-if="mode === 'Generator'" />
                <History v-if="mode === 'History'" />
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import History from '../components/History.vue'
import Generator from '../components/Generator.vue'

const mode = ref('Generator')

function changeMode(value: string) {
    mode.value = value
}
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>