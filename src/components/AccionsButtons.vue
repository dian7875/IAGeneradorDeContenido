<template>
    <button @click="copyToClipboard(response)" class=" cursor-pointer"
        :title="t('ContentSecction.FormWords.TitleBTNCopy')" type="button"><i class="fas fa-copy text-2xl"></i></button>
    <button @click="downloadFile(response)" class=" cursor-pointer"
        :title="t('ContentSecction.FormWords.TitleBTNDownload')" type="button"><i
            class="fas fa-download text-2xl"></i></button>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { format } from '@formkit/tempo';
import { toast } from '@steveyuowo/vue-hot-toast';
defineProps<{ response: string }>()
const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
        .then(() => {
            toast.success('Texto copiado al portapapeles');
        })
        .catch((err) => {
            toast.error(`Error al copiar al portapapeles: ${err}`);
        });
};
const downloadFile = (text: string) => {
    const currentTime = new Date();
    const name = format(currentTime, 'DD/MM/YYYY HH:mm');
    const filename = `archivo-${name}.txt`
    const blob = new Blob([text], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
};
</script>