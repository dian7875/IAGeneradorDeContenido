<template>
    <div class="border rounded-md p-2 space-y-2 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900">
        <div class=" flex justify-between">
            <p class=" max-md:text-sm">{{ format(prompts.fecha, 'DD-MM-YYYY') }}</p>
            <div class=" flex gap-x-3">
                <AccionsButtons :response="prompts.resultado" />
                <button @click="emit('delete', prompts.id)" class=" cursor-pointer" type="button"><i class="fas fa-trash-alt text-2xl max-md:text-base hover:text-red-500"></i>
                </button>
            </div>
        </div>
        <p class="max-md:text-sm">{{ prompts.prompt.replace('Genera un ', '').split(',')[0].toUpperCase() }}</p>
        <p class=" w-2/3 max-md:text-sm max-md:w-full">{{ prompts.resultado }}</p>
        <p class=" max-md:text-sm">{{ format(prompts.fecha, 'hh:mm') }}</p>
    </div>
</template>
<script setup lang="ts">
import { format } from '@formkit/tempo';
import AccionsButtons from './AccionsButtons.vue';

defineProps<{
    prompts: {
        id: number,
        prompt: string,
        resultado: string,
        fecha: Date
    }
}>()

const emit = defineEmits<{
  (e: 'delete', id: number): void
}>()



</script>