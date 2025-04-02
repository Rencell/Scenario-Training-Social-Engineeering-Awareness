<template>
    <div class="flex h-full w-full flex-col rounded-xl bg-white-color text-black overflow-hidden items-center justify-center">

        <div class="flex-center gap-5 ">
            <div class="flex-2"><img src="/Images/Phishing/phishingTwo/page5/man-pointing-url.svg" alt=""></div>
            <div class="flex-1 pr-5">
                <p class="text-4xl font-bold pb-4 text-secondary">Always, Always Check the URL</p>
                <p class="text-gray-500 text-sm">The majority of website phishing attempts change the URL slightly to mimic a legitimate site.</p>
                <div class="flex flex-col gap-4 mt-10">
                    <div class="rounded-full bg-white">
                        <div class="w-15 h-15 flex-center bg-red-400 rounded-full">
                            h
                        </div>
                    </div>
                    <div class="rounded-full bg-white">
                        <div class="w-15 h-15 flex-center bg-red-400 rounded-full">
                            h
                        </div>
                    </div>
                    <BaseButton class="ms-auto" :click="phishingTwo.nextPage">Next</BaseButton>
                </div >
            </div>
        </div>
    </div>
    <modalWarning></modalWarning>
</template>

<script setup>
import modalWarning from '@/components/Phishing/levelTwo/page5/modalWarning.vue';
import BaseButton from '@/components/UI/BaseButton.vue';
import { usePhishingTwo } from '@/store/Phishing/phishingLevelTwo/componentPage';

const phishingTwo = usePhishingTwo()

</script>