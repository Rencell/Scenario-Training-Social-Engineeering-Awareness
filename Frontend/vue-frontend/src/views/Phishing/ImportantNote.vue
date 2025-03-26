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
                    <button @click="ComponentStore.previousPage()"
                        class="bg-primary hover:bg-primary/70 border-secondary w-28 rounded-lg border-b-4 p-2 shadow-md">
                        PREVIOUS
                    </button>
                    <button @click="ComponentStore.nextPage()"
                        class="bg-primary hover:bg-primary/70 border-secondary w-fit rounded-lg border-b-4 p-2 shadow-md">
                        NEXT SCENARIO
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
//store
import { useComponentStore } from "@/store/phishingPages.js";
import importantNote from "@/components/importantNote/list.vue"

const ComponentStore = useComponentStore();
</script>

<style scoped></style>
