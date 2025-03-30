<template>
    <div class="h-full w-full bg-[#F6F6F6] text-black overflow-auto">
        <div class="flex flex-col items-center justify-center p-3 ps-10">
            <div class="font-bold text-2xl py-2 bg-primary-600">Important to know</div>
            <div class="w-40 mb-5">
                <img class="w-full motion-preset-blur-right " src="/Images/Phishing/Note/Worker-sitting.svg" alt="" />
            </div>


            <div class="flex flex-col gap-4">
                <importantNote></importantNote>
                <importantNote></importantNote>
                <importantNote></importantNote>
            </div>


            <div>
                <div class="flex justify-end gap-2 pt-10 text-white">
                    <BaseButton :click="ComponentStore.previousPage">
                        PREVIOUS
                    </BaseButton>
                    <BaseButton :click="ComponentStore.nextPage">
                        NEXT SCENARIO
                    </BaseButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseButton from "@/components/UI/BaseButton.vue";
//store
import { useComponentStore } from "@/store/Phishing/phishingLevelOne.js";
import importantNote from "@/components/Phishing/levelOne/importantNote/list.vue"
const ComponentStore = useComponentStore();
</script>

<style scoped></style>
