<template>
    <div class="w-full h-full bg-[#F6F6F6] flex flex-col  text-black rounded-xl">
        <div class="p-3 ps-10 py-10 flex">

          
        </div>

        <div class="flex justify-center">

            <div class="w-2xl bg-orange-300 rounded-md flex items-center flex-col relative p-4">
                <div class="w-60 z-2"><img src="/Images/remote-work-man.png" alt=""></div>

                <div class="w-72 h-20 bg-[#F1924D] absolute -bottom-2 z-1"
                    style="clip-path: ellipse(50% 21% at 50% 50%);"> </div>
            </div>
        </div>

        <div class="flex justify-center">
            <div class=" w-2xl flex gap-2 flex-col pt-6">
                <p style="font-weight: 500;">Sam:</p>
                <p>Sam is somewhat confused with phishing attack, would you help him identify the phishing elements used by the bad hacker?</p>
            </div>
        </div>


        <div>

            <div class="flex gap-2 text-white pt-10 justify-end pe-10">
                <button class="bg-primary p-2 w-28 rounded-lg hover:bg-primary/70 border-secondary border-b-4 shadow-md" @click="ComponentStore.previousPage()">PREVIOUS</button>
                <button class="bg-primary p-2 w-28 rounded-lg hover:bg-primary/70 text-center border-secondary border-b-4 shadow-md" @click="ComponentStore.nextPage()">NEXT
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useComponentStore } from '@/store/phishingPages.js';
const ComponentStore = useComponentStore();


</script>

<style scoped></style>
