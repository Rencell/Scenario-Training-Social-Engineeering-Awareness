<template>
    <div class="h-full w-full bg-white-color rounded-xl p-15 text-black flex items-center flex-col ">
        <div class="text-xl font-semibold py-2">Things to ask yourself</div>
        <div class="w-40"><img src="/Images/Phishing/phishingTwo/page4/notepad-picture.png"
                alt="hacker-writing-picture"></div>
        <div class="w-xl flex flex-col gap-2">
            <bulletPoints>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit autem facere eaque corporis
                fugit itaque voluptas, odit natus quaerat ipsa!</bulletPoints>
            <bulletPoints>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit autem facere eaque corporis
                fugit itaque voluptas, odit natus quaerat ipsa!</bulletPoints>
            <div class="flex gap-2 mx-auto pt-5">
                <BaseButton :click="phishingTwo.previousPage">

                    Previous
                </BaseButton>
                <BaseButton :click="phishingTwo.nextPage">

                    Next
                </BaseButton>
            </div>
        </div>


    </div>
</template>

<script setup>
import BaseButton from '@/components/UI/BaseButton.vue';
import { usePhishingTwo } from '@/store/Phishing/phishingLevelTwo/componentPage';
import bulletPoints from '@/components/Phishing/levelTwo/page4/bulletPoints.vue';
const phishingTwo = usePhishingTwo();
</script>