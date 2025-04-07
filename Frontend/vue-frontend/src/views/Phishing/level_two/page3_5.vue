<template>

    <div class="h-full w-full bg-white-color rounded-xl py-5 px-15 text-black flex justify-center">
        <div class="flex flex-col bg-white w-3xl p-4 px-20 gap-10 overflow-auto">
            <div class="flex flex-col items-center">
                <div class="w-40"><img src="/Images/Phishing/phishingTwo/Page3_5/laptop.png" alt=""></div>
                <h1 class="font-bold text-2xl">Browser In The Browser (BITB) Attack</h1>
            </div>

            <div class="flex gap-5">
                <p class="flex-2 font-secondary">
                    <span class="font-semibold ">Browser In The Browser (BITB)</span> Attack is very hideous tactic that
                    replicates authentication of trusted
                    website. Quite often when we authenticate to a website via Google, Microsoft, Apple etc. we’re
                    provided
                    a pop-up window that asks us to authenticate.
                </p>

                <div class="flex-1">
                    <img class="rounded-lg" src="/Images/Phishing/phishingTwo/Page3_5/example1.jpg" alt="">
                </div>
            </div>

            <div class="font-secondary">
                Fortunately for us, replicating the entire window design using basic HTML/CSS is quite simple. Combine
                the window design with an iframe pointing to the malicious server hosting the phishing page, and its
                basically indistinguishable.
            </div>

            <div>
                <video src="/Images/Phishing/phishingTwo/Page3_5/example2.mp4" autoplay loop muted
                    class="outline-1 outline-gray-300 rounded-lg"></video>
            </div>
            <div class="text-lg font-semibold">
                How can i spot this attack?
            </div>

            <div class="flex flex-col items-center gap-4 font-secondary">
                <p class="text-center px-10 font-semibold">Try dragging a pop-up outside. A real browser can be moved
                    outside the window. </p>
                <div class=""><img class="rounded-lg" src="/Images/Phishing/phishingTwo/Page3_5/move-out.png" alt=""></div>

            </div>
            <hr class="text-black">
            <div class="flex flex-col items-center gap-4 font-secondary">
                <p class="text-center px-10 font-semibold">Always check the URL</p>
                <div class=""><img class="rounded-lg" src="/Images/Phishing/phishingTwo/Page3_5/check-url.png" alt=""></div>
            </div>
            <hr class="text-black">
            <div class="flex flex-col items-center gap-4 font-secondary">
                <p class="text-center px-10 font-semibold">Zoom in the pop-up or Press Ctrl + + (or Cmd + + on Mac). If
                    the whole page zooms in, it's likely part of the page and scam — real browser chrome doesn't zoom
                    with the page.</p>
                <div class=""><img class="rounded-lg" src="/Images/Phishing/phishingTwo/Page3_5/chrome-zoom-settings.webp" alt="">
                </div>
            </div>
            <div class="text-lg font-semibold">
                This shows how easily it is to replicate
            </div>
            <p class="font-secondary">Click the button to show the pop up.</p>
            
            <div class="relative w-full">
                <Parap></Parap>
            </div>
            <p class="font-secondary">Criminals are very smart so be careful online.</p>
            <hr>

            <div class="flex justify-between">
                <BaseButton :click="componentStore.previousPage">PREVIOUS</BaseButton>
                <BaseButton :click="componentStore.nextPage">NEXT</BaseButton>
            </div>
        </div>


    </div>
</template>

<script setup>
import Parap from '@/components/Phishing/levelTwo/page3_5/popup.vue';
import BaseButton from '@/components/UI/BaseButton.vue';
import { usePhishingTwo } from '@/store/Phishing/phishingLevelTwo/componentPage';
const componentStore = usePhishingTwo();

</script>