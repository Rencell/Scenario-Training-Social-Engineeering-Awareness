<template>
    <div class="w-full h-full bg-[#F6F6F6] flex flex-col  text-black">
        <div class="p-3 ps-10 py-10 flex">


          
        </div>

        <div class="flex justify-center motion-preset-focus  ">

            <div class="w-2xl bg-gray-900 rounded-md flex items-center flex-col relative p-4">
                <div class="w-60 z-2"><img src="/Images/hacker.png" alt=""></div>

                <div class="w-72 h-20 bg-gray-800 absolute -bottom-2 z-1"
                    style="clip-path: ellipse(50% 21% at 50% 50%);"> </div>
            </div>
        </div>

        <div class="flex justify-center motion-preset-focus  ">
            <div class=" w-2xl flex gap-2 flex-col pt-6">
                <p style="font-weight: 500;">Bad Hacker:</p>
                <p>A bad hacker puts 2 Phishing in Sam’s email, would you identify those 2?</p>
            </div>
        </div>


        <div>

            <div class="flex gap-2 text-white pt-20 justify-end pe-10">
                <button @click="setCurrentPage(3)" class="bg-primary p-2 w-28 rounded ">PREVIOUS</button>
                <button @click="setCurrentPage(5)" class="bg-primary p-2 w-28 rounded text-center">NEXT
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>


//store
import { useComponentStore } from '@/store/phishingPages.js';

const ComponentStore = useComponentStore();

const setCurrentPage = (index) =>{
    ComponentStore.setPage(index); 
};
</script>

<style scoped></style>
