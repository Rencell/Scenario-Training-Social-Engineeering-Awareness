<template>
    <div class="w-full h-dvh bg-[#F6F6F6] flex-col gap-16 font-primary">
        <div class="bg-[#F6F6F6] shadow-lg flex items-center justify-between p-3 text-primary font-semibold">
            <div>Logo</div>
            <RouterLink :to="{ name: 'phishingLevel' }" class="border-[1px] border-gray-300 p-2 px-4 rounded-xl">Back level
            </RouterLink>
        </div>

        <div class="bg-primary w-full h-60 gap-10 flex flex-col items-center text-white py-10 px-10 relative">
            
            <div class="px-20 pb-10 h-fit w-full absolute top-4 py-5">
                <h1 class="text-xl text-center">Level 1 - What is Phishing?
                </h1>
                <div class=" flex justify-center">
                    <ul class="steps w-4xl p-2 text-sm">
                        <li v-for="(step, index) in steps" :key="index"
                            :class="[currentPageName >= index + 1 ? 'step-secondary' : 'step-white']"
                            :data-content="index + 1 === steps.length ? '🏁' : '✓'"
                            @click="gotoPageStart(index)"
                            class="cursor-pointer step"
                            >
                            {{ step }}
                        </li>
                    </ul>
                </div>
                <div class=" w-full h-dvh rounded-2xl border-gray-300 border-2"
                    style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">

                    <component :is="currentPage"></component>
                </div>
            </div>


        </div>

    </div>
    <RouterView />
</template>

<script setup>

import { RouterLink, RouterView } from 'vue-router'
//store
import { useComponentStore } from '@/store/Phishing/phishingLevelOne.js';
import { computed } from 'vue'

const ComponentStore = useComponentStore();


const currentPage = computed(() => {
    return ComponentStore.getPage()
});

const steps = ["Video Scenario", "Types of Phishing", "Phishing Tactics", "Scenario #1", "Assessment", "Scenario #1", "Assessment", "Tools Security", "Finish"]
const currentPageName = computed(() => {
    const page = ComponentStore.getPageStep();
    return page || 0;
});

const gotoPageStart = (step) => {
    const match = ComponentStore.phishingPages.find(p => p.pageStep === step + 1)

    const pageStart = match ? match.pageStart : null;
    ComponentStore.setPage(pageStart)
}

</script>

<style scoped></style>
