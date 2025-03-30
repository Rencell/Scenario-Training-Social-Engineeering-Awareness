<template>
    <div class="h-full w-full bg-white rounded-xl relative overflow-hidden flex">
        <div class="h-full w-1/2 flex items-end">

            <div class="w-xl"><img src="/Images/Phishing/phishingTwo/page1/magnifying-glass.png" alt=""></div>
        </div>
        <div class="bg-primary grow flex justify-center flex-col p-3">

            <p class="text-3xl font-semibold border-b-4 w-fit pb-2 mb-4">Website Phishing</p>
            <p class="">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <BaseButton :click="phishingTwo.nextPage" :theme="'white'">
                Next
            </BaseButton>
        </div>

    </div>
</template>


<script setup>
import BaseButton from '@/components/UI/BaseButton.vue';
import { usePhishingTwo } from '@/store/Phishing/phishingLevelTwo';

const phishingTwo = usePhishingTwo();

</script>