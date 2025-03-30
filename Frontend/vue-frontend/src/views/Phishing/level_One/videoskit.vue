<template>

    <div class="w-full h-full bg-primary rounded-xl">
        <div class="h-full flex flex-col justify-center items-center gap-20 relative">
            <p class="font-secondary text-xl font-bold">Phishing video skit</p>
            <div class="flex gap-30">
                <div class="w-60"><img class="w-full" src="/Images/Phishing/page1/Tv.png" alt=""></div>
                <div class="text-center w-96 ">
                    <div class="p-4 bg-white-color rounded-full h-fit">
    
                        <div class="bg-primary rounded-full h-10 text-center"><i class="text-4xl text-gray-300 bi bi-play-circle-fill"></i></div>
                    </div>
                    <h1 class="font-bold text-xl my-4">Play Video</h1>
                    <p class="break-words">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ab fugit aspernatur alias ut. Aut!</p>
                </div>
            </div>
        
            <div class="absolute bottom-10 right-10">
                
                <BaseButton :click="ComponentStore.nextPage" :theme="'white'">
                    NEXT
                </BaseButton>
            </div>
        </div>

    </div>


</template>

<script setup>
import BaseButton from '@/components/UI/BaseButton.vue';
import { useComponentStore } from '@/store/Phishing/phishingLevelOne.js';

const ComponentStore = useComponentStore();

</script>