<template>
    <section id="ChatSecction" class="w-full flex flex-col items-center gap-y-6">
        <h2 class=" text-center text-3xl font-bold max-md:text-xl dark:text-white">{{ t('ContentSecction.Title') }}</h2>
        <div class=" border-2 w-2/3 rounded-md border-[#C5C5C5] max-lg:w-11/12">
            <div class=" border-b border-[#C5C5C5] max-md:text-sm dark:text-white">
                <button type="button" class="p-4 cursor-pointer"
                    :class="{ ' border-b-[#3C979F]  border-b-2 text-[#3C979F]': mode === 'Generator' }"
                    @click="changeMode('Generator')">
                    <i class="fas fa-pencil-alt mr-2"></i>{{ t('ContentSecction.ContentSelector.Opcion0')
                    }}</button>
                <button type="button" class="p-4 cursor-pointer"
                    :class="{ 'border-b-[#3C979F]  border-b-2 text-[#3C979F]': mode === 'History' }" @click="changeMode('History')">
                    <i class="fas fa-history mr-2"></i>{{ t('ContentSecction.ContentSelector.Opcion1')
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