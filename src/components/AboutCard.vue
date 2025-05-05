<template >
    <div class=" flex flex-col w-72 text-center items-center gap-y-4">
        <i :class="icon" class=" border p-3 rounded-full text-[#3D979F] w-fit"></i>
        <span class=" font-bold text-lg max-md:text-base dark:text-[#3D979F]">{{title}}</span>
        <p class="dark:text-white">{{ description }}</p>
    </div>
</template>
<script setup lang="ts">

defineProps<{
    title:string,
    icon:string,
    description:string
}>()

</script>