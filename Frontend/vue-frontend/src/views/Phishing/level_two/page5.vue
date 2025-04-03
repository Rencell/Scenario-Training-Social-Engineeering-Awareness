<template>
    <div class="flex h-full w-full flex-col rounded-xl bg-white-color text-black overflow-auto p-5">

        <div class="flex-center gap-5 h-dvh">
            <div class="flex-1"><img src="/Images/Phishing/phishingTwo/page5/pop-ups.png" alt=""></div>
            <div class="flex-1 pr-5">
                <p class="text-4xl font-bold pb-4">Never click any of these</p>
                <p class="text-gray-500 text-sm">If the website is not maintained well, pop-up ads is the signs that it is unsecured.</p>
                <div class="grid grid-cols-2 gap-4 mt-10 text-sm">
                    <div class="p-4 shadow-md relative bg-primary text-white font-semibold rounded-md">
                        Most of them contains <span class="text-red-500">Malicious software</span>
                        <div class="rounded-full bg-secondary absolute -left-3 -top-3 h-7 w-7 flex-center">1</div>
                    </div>
                    <div class="p-4 shadow-md relative bg-primary text-white font-semibold rounded-md">
                        It always says that your device is at risk
                        <div class="rounded-full bg-secondary absolute -left-3 -top-3 h-7 w-7 flex-center">2</div>
                    </div>
                    <div class="p-4 shadow-md relative bg-primary text-white font-semibold rounded-md">
                        They create a sense of urgency such as putting timer
                        <div class="rounded-full bg-secondary absolute -left-3 -top-3 h-7 w-7 flex-center">3</div>
                    </div>
                </div >
            </div>
        </div>

        <hr class="text-gray-400 h-2 py-10"> 
        
        <div class="w-full flex flex-col items-center gap-15">
            <div class="text-center space-y-3">
                <h1 class="text-5xl font-semibold">Warning Scam</h1>
                <h2 class="text-gray-500">Normally we get panic when a security popped up in our screens</h2>
                <div class="flex-center gap-2 w-xl text-white mx-auto ">
                    <div class="rounded-md p-3 bg-secondary ">Never ever click any buttons</div>
                    <div class="rounded-md p-3 bg-secondary ">Close the popup <i class="bi bi-x text-sm text-red-500"></i> or just leave the tab.</div>
                    <div class="rounded-md p-3 bg-secondary ">Check the official to validate</div>
                </div>
            </div>
            <img src="/Images/Phishing/phishingTwo/page5/MALWARE.webp" alt="">
        </div>
        <hr class="text-gray-400 h-2 py-10"> 
        <BaseButton class="ms-auto" :click="phishingTwo.nextPage">Next</BaseButton>
    </div>
    <modalWarning></modalWarning>
</template>

<script setup>
import modalWarning from '@/components/Phishing/levelTwo/page5/modalWarning.vue';
import BaseButton from '@/components/UI/BaseButton.vue';
import { usePhishingTwo } from '@/store/Phishing/phishingLevelTwo/componentPage';

const phishingTwo = usePhishingTwo()

</script>