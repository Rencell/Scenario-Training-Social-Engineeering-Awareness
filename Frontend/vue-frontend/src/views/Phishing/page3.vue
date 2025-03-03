<template>
    <div class="w-dvw h-fit bg-[#F6F6F6] flex flex-col  text-black">
        <div class="p-3 ps-10 py-10 flex justify-between gap-2">

            <div class="flex gap-2">
                <div class="bg-primary-own p-4 rounded-md w-fit"></div>
                <p class="flex items-center">Phishing Attack</p>
            </div>

            <RouterLink :to="{ name: 'page4' }" class="bg-primary-own p-1 w-24 text-white rounded text-center">Next
            </RouterLink>

        </div>

        <div class="ps-20 text-3xl" style="font-weight: 700;"> Learn to spot Phishing Tactics </div>
        <br><br>
        <div class="px-20 pb-20">
            <div class="flex gap-3 flex-col">
                <p class="text-xl" style="font-weight: 500;">Sense of urgency</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis quo minus accusantium ipsam! Totam perferendis corrupti, placeat eos aperiam quos ipsa libero quibusdam consectetur consequuntur est magnam? Ullam dolore dolor autem facere, corrupti expedita sint. Saepe sed esse, cum doloribus ratione placeat est voluptas, sequi mollitia ex commodi ad doloremque!</p>
                <div class="text-center"><button class="p-2 px-5 bg-primary-own text-white rounded-full"><i class="bi bi-arrow-down-short"></i> Show examples</button></div>
            </div>
            <div class="flex gap-3 flex-col">
                <p class="text-xl" style="font-weight: 500;">Sense of urgency</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis quo minus accusantium ipsam! Totam perferendis corrupti, placeat eos aperiam quos ipsa libero quibusdam consectetur consequuntur est magnam? Ullam dolore dolor autem facere, corrupti expedita sint. Saepe sed esse, cum doloribus ratione placeat est voluptas, sequi mollitia ex commodi ad doloremque!</p>
                <div class="text-center"><button class="p-2 px-5 bg-primary-own text-white rounded-full"><i class="bi bi-arrow-down-short"></i> Show examples</button></div>
            </div>
            <div class="flex gap-3 flex-col">
                <p class="text-xl" style="font-weight: 500;">Sense of urgency</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis quo minus accusantium ipsam! Totam perferendis corrupti, placeat eos aperiam quos ipsa libero quibusdam consectetur consequuntur est magnam? Ullam dolore dolor autem facere, corrupti expedita sint. Saepe sed esse, cum doloribus ratione placeat est voluptas, sequi mollitia ex commodi ad doloremque!</p>
                <div class="text-center"><button class="p-2 px-5 bg-primary-own text-white rounded-full"><i class="bi bi-arrow-down-short"></i> Show examples</button></div>
            </div>

        </div>
    </div>
</template>

<script setup>

import { RouterLink, RouterView } from 'vue-router'

</script>

<style scoped></style>
