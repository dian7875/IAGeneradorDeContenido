<template>
    <form @submit="handleSubmit" class=" grid px-6 py-3 text-lg gap-y-6 max-lg:text-base dark:text-white ">
        <fieldset class="grid">
            <label class="text-[#666666] font-semibold" for="contentType">{{
                t('ContentSecction.FormWords.ContendType.Title') }}</label>
            <select required v-model="contentType" class="w-fit border p-2 rounded-md border-[#AAAAAA] max-md:w-full
             dark:bg-black overflow-hidden"
                name="" id="contentType" :title="t('ContentSecction.FormWords.ContendType.PlaceHolder')">
                <option value="">{{ t('ContentSecction.FormWords.ContendType.PlaceHolder') }}</option>
                <option :value="t('ContentSecction.FormWords.ContendType.Opt0')">{{
                    t('ContentSecction.FormWords.ContendType.Opt0') }}</option>
                <option :value="t('ContentSecction.FormWords.ContendType.Opt1')">{{
                    t('ContentSecction.FormWords.ContendType.Opt1') }}</option>
                <option :value="t('ContentSecction.FormWords.ContendType.Opt2')">{{
                    t('ContentSecction.FormWords.ContendType.Opt2') }}</option>
            </select>
        </fieldset>
        <fieldset class=" grid">
            <label class="text-[#666666] font-semibold" for="UserPromt">{{ t('ContentSecction.FormWords.TextArea.Title')
            }}</label>
            <textarea required v-model="Userprompt" class="border p-2 rounded-xl border-[#AAAAAA]" rows="10"
                :placeholder="t('ContentSecction.FormWords.TextArea.PlaceHolder')" name="" id="UserPromt"></textarea>
        </fieldset>
        <fieldset class=" grid grid-cols-2 grid-rows-2 max-md:grid-cols-1 max-md:gap-y-4">
            <legend class="text-[#666666] font-semibold max-md:pb-2">{{
                t('ContentSecction.FormWords.ExtraOptions.Title') }}
            </legend>
            <div>
                <label class=" mr-2.5" for="tone">{{ t('ContentSecction.FormWords.ExtraOptions.Tone.Title') }}</label>
                <select required v-model="tone" class="w-fit border p-1 rounded-md border-[#AAAAAA] dark:bg-black
                max-md:w-full" :title="t('ContentSecction.FormWords.ExtraOptions.Tone.PlaceHolder')" name="" id="">
                    <option value="">{{ t('ContentSecction.FormWords.ExtraOptions.Tone.PlaceHolder') }}</option>
                    <option :value="t('ContentSecction.FormWords.ExtraOptions.Tone.Opt.Opt0')">{{
                        t('ContentSecction.FormWords.ExtraOptions.Tone.Opt.Opt0') }}</option>
                    <option :value="t('ContentSecction.FormWords.ExtraOptions.Tone.Opt.Opt1')">{{
                        t('ContentSecction.FormWords.ExtraOptions.Tone.Opt.Opt1') }}</option>
                    <option :value="t('ContentSecction.FormWords.ExtraOptions.Tone.Opt.Opt2')">{{
                        t('ContentSecction.FormWords.ExtraOptions.Tone.Opt.Opt2') }}</option>
                </select>
            </div>
            <div>
                <label class=" mr-2.5" for="tone">{{ t('ContentSecction.FormWords.ExtraOptions.Length.Title') }}</label>
                <select required v-model="length" class="w-fit border p-1 rounded-md border-[#AAAAAA] dark:bg-black
                 max-md:w-full" :title="t('ContentSecction.FormWords.ExtraOptions.Length.PlaceHolder')" name="" id="">
                    <option value="">{{
                        t('ContentSecction.FormWords.ExtraOptions.Length.PlaceHolder') }}</option>
                    <option :value="t('ContentSecction.FormWords.ExtraOptions.Length.Opt.Opt0')">{{
                        t('ContentSecction.FormWords.ExtraOptions.Length.Opt.Opt0') }}</option>
                    <option :value="t('ContentSecction.FormWords.ExtraOptions.Length.Opt.Opt1')">{{
                        t('ContentSecction.FormWords.ExtraOptions.Length.Opt.Opt1') }}</option>
                    <option :value="t('ContentSecction.FormWords.ExtraOptions.Length.Opt.Opt2')">{{
                        t('ContentSecction.FormWords.ExtraOptions.Length.Opt.Opt2') }}</option>
                </select>
            </div>
        </fieldset>

        <button :disabled="isPending" :title="t('ContentSecction.FormWords.ButtonTex')" class=" bg-[#3D979F]
         p-2 font-semibold text-white rounded-xl cursor-pointer hover:bg-[#3d979fce]" type="submit">
            {{ isPending ? t('ContentSecction.FormWords.loading') : t('ContentSecction.FormWords.ButtonTex') }}
        </button>
    </form>
    <div>
        <div v-if="isPending">
            <img src="/Loader.gif" alt="" class="h-70 w-full">
        </div>
        <Response v-else-if="response" :response="response" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Response from './Response.vue';
import { useI18n } from 'vue-i18n'
import { useMutation } from '@tanstack/vue-query';
import { generateText } from '../services/Api.services';
const { t } = useI18n()


const contentType = ref('')
const Userprompt = ref('')
const tone = ref('')
const length = ref('')
const response = ref('')

const { mutate, isPending } = useMutation({
    mutationFn: generateText,
    onSuccess: (data) => {
        response.value = data.data.resultado
    },
    onError: (err) => {
        console.error(err)
        response.value = 'Ocurrió un error al generar el texto.'
    }
})

function getLangName(lang: string) {
  const langNames: Record<string, string> = {
    es: 'Español',
    en: 'English',
    fr: 'Français',
    ja: '日本語',
    de: 'Deutsch',
  }
  return langNames[lang] || lang
}

const handleSubmit = (e: Event) => {
    e.preventDefault()
    mutate({
        prompt: `Genera un ${contentType.value.toLowerCase()}, en idioma ${getLangName(localStorage.getItem('lang') || "Español")}, con un tono ${tone.value.toLowerCase()} y una longitud ${length.value.toLowerCase()}. Tema: ${Userprompt.value}`
    })
}

</script>