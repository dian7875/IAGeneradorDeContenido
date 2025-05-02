<template>
    <div class="px-10 py-4 flex flex-col gap-y-4">
        <HistoryCard v-for="item in data" :key="item.id" :prompts="item" @delete="handleDelete" />
    </div>
</template>

<script setup lang="ts">
import HistoryCard from './HistoryCard.vue'
import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query';
import { deletePromt, getPrompts } from '../services/Api.services';
import { toast } from '@steveyuowo/vue-hot-toast';

const { data } = useQuery({
    queryKey: ["Prompts"],
    queryFn: getPrompts
})

const queryClient = useQueryClient()

const { mutate } = useMutation({
    mutationFn: deletePromt,
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['Prompts'] })
    },
    onError: () => {
        toast.error('Error al eliminar el prompt')
    },
})

function handleDelete(id: number) {
    const promise = new Promise((resolve, reject) => {
        mutate(id, {
            onSuccess: () => resolve("¡Prompt eliminado exitosamente!"),
            onError: () => reject(new Error('Hubo un error al eliminar el prompt')),
        })
    })

    toast.promise(promise, {
        loading: 'Eliminando...',
        success: '¡Prompt eliminado exitosamente!',
        error: 'Hubo un error al eliminar el prompt',
        position: 'top-center'
    })
}

</script>