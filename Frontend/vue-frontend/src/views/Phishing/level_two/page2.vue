<template>
    <div class="h-full w-full bg-white-color rounded-xl p-15 text-black">
        <div class="flex justify-between">
            <p class="text-3xl font-semibold w-fit text-gray-700 after:h-2 after:w-1/2 after:bg-primary after: after:content-[' '] relative after:absolute after:-bottom-2 after:left-0">How to spot a Website phishing?</p>
            <div class="flex gap-3">
                <BaseButton :click="phishingTwo.previousPage">PREVIOUS</BaseButton>
                <BaseButton :click="phishingTwo.nextPage">NEXT</BaseButton>
            </div>
        </div>
            <div class="grid grid-cols-4 grid-rows-2 pt-20 gap-10 h-full font-secondary text-sm font-bold">
            <div class="bg-white rounded-xl flex flex-col">
                <div class="w-full p-4 grow flex justify-center items-center">
                    <img src="/Images/Phishing/phishingTwo/page2/gcash.jpg" alt="">
                </div>
                <p class="text-center p-4">Blurry Logos</p>
            </div>
            <div class="bg-white rounded-xl flex flex-col h-full ">
                <div class="w-full p-4 grow flex justify-center items-center">
                    <img class="rounded" src="/Images/Phishing/phishingTwo/page2/red-website.png" alt="">
                </div>
                <p class="text-center p-4 ">It tells site contains malware</p>
            </div>
            <div class="bg-white rounded-xl flex flex-col h-full ">
                <div class="w-full p-4 grow flex justify-center items-center">
                    <img class="rounded" src="/Images/Phishing/phishingTwo/page2/gcash.png" alt="">
                </div>
                <p class="text-center p-4 ">Using unsecured protocol</p>
            </div>
            <div class="bg-white rounded-xl flex flex-col h-full ">
                <div class="h-1/2 p-4 grow flex justify-center items-center">
                    <img class="rounded h-full"  src="/Images/Phishing/phishingTwo/page2/congratulation.png" alt="">
                </div>
                <p class="text-center p-4 ">Random Pop-ups </p>
            </div>
            <div class="bg-white rounded-xl flex flex-col h-full ">
                <div class="h-1/2 p-4 grow flex justify-center items-center">
                    <img class="rounded h-full"  src="/Images/Phishing/phishingTwo/page2/congratulation.png" alt="">
                </div>
                <p class="text-center p-4 ">Manipulated URL</p>
            </div>
            <div class="bg-white rounded-xl flex flex-col h-full ">
                <div class="h-1/2 p-4 grow flex justify-center items-center">
                    <img class="rounded h-full"  src="/Images/Phishing/phishingTwo/page2/Search_results.png" alt="">
                </div>
                <p class="text-center p-4 ">Sponsored Search</p>
            </div>
            <div class="bg-white rounded-xl flex flex-col h-full ">
                <div class="h-1/2 p-4 grow flex justify-center items-center">
                    <img class="rounded h-full"  src="/Images/Phishing/phishingTwo/page2/login.png" alt="">
                </div>
                <p class="text-center p-4 ">Directly route you to login</p>
            </div>
            <div class="bg-white rounded-xl flex flex-col h-full ">
                <div class="h-1/2 p-4 grow flex justify-center items-center">
                    <img class="rounded h-full"  src="/Images/Phishing/phishingTwo/page2/login.png" alt="">
                </div>
                <p class="text-center p-4 ">Asking for information</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseButton from '@/components/UI/BaseButton.vue';
import { usePhishingTwo } from '@/store/Phishing/phishingLevelTwo';

const phishingTwo = usePhishingTwo();
</script>