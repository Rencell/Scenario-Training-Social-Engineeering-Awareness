
<template>
    <div class="w-dvw h-dvh p-5 bg-[#F6F6F6] place-items-center flex flex-col gap-16">


        <div class="w-full h-96 border-green-600 border-4"> </div>
        <div class="w-full text-white flex justify-between"> 

            <button class="border-2 p-3 rounded-xl bg-red-500">Previous</button>
            <RouterLink :to="{ name: 'page1' }" class="border-2 p-2 px-4 rounded-xl bg-green-500">Next</RouterLink>
        </div>

    </div>

    <RouterView /> 
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>

</style>
