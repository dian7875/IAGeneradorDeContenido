<template>
    <div class="border rounded-md p-2 space-y-2">
        <div class=" flex justify-between">
            <p>{{ format(prompts.fecha, 'DD-MM-YYYY') }}</p>
            <div class=" flex gap-x-3">
                <AccionsButtons :response="prompts.resultado" />
                <button @click="emit('delete', prompts.id)" class=" cursor-pointer" type="button"><i class="fas fa-trash-alt text-2xl"></i>
                </button>
            </div>
        </div>
        <p>{{ prompts.prompt.replace('Genera un ', '').split(',')[0].toUpperCase() }}</p>
        <p class=" w-2/3">{{ prompts.resultado }}</p>
        <p>{{ format(prompts.fecha, 'hh:mm') }}</p>
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