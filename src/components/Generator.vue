<template>
    <form action="" class=" grid px-6 py-3 text-lg gap-y-6">
        <fieldset class="grid">
            <label class="text-[#666666] font-semibold" for="contentType">{{ t('ContentSecction.FormWords.ContendType.Title') }}</label>
            <select class="w-fit border p-2 rounded-md border-[#AAAAAA]" name="" id="contentType" :title="t('ContentSecction.FormWords.ContendType.PlaceHolder')">
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
            <label class="text-[#666666] font-semibold" for="UserPromt">{{ t('ContentSecction.FormWords.TextArea.Title') }}</label>
            <textarea class="border p-2 rounded-xl border-[#AAAAAA]" rows="10" :placeholder="t('ContentSecction.FormWords.TextArea.PlaceHolder')" name=""
                id="UserPromt"></textarea>
        </fieldset>
        <fieldset class=" grid grid-cols-2 grid-rows-2">
            <legend class="text-[#666666] font-semibold">{{ t('ContentSecction.FormWords.ExtraOptions.Title') }}</legend>
            <div>
                <label class=" mr-2.5" for="tone">{{ t('ContentSecction.FormWords.ExtraOptions.Tone.Title') }}</label>
                <select  class="w-fit border p-1 rounded-md border-[#AAAAAA]" :title="t('ContentSecction.FormWords.ExtraOptions.Tone.PlaceHolder')" name="" id="">
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
                <select  class="w-fit border p-1 rounded-md border-[#AAAAAA]" :title="t('ContentSecction.FormWords.ExtraOptions.Length.PlaceHolder')" name="" id="">
                    <option :value="t('ContentSecction.FormWords.ExtraOptions.Length.Opt.Opt0')">{{
                        t('ContentSecction.FormWords.ExtraOptions.Length.Opt.Opt0') }}</option>
                    <option :value="t('ContentSecction.FormWords.ExtraOptions.Length.Opt.Opt1')">{{
                        t('ContentSecction.FormWords.ExtraOptions.Length.Opt.Opt1') }}</option>
                    <option :value="t('ContentSecction.FormWords.ExtraOptions.Length.Opt.Opt2')">{{
                        t('ContentSecction.FormWords.ExtraOptions.Length.Opt.Opt2') }}</option>
                </select>
            </div>
        </fieldset>

        <button :title="t('ContentSecction.FormWords.ButtonTex')" class=" bg-[#3D979F]
         p-2 font-semibold text-white rounded-xl" type="submit">{{
            t('ContentSecction.FormWords.ButtonTex') }}</button>
    </form>
    <Response />
</template>
<script setup lang="ts">
import Response from './Response.vue';
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

</script>