<template>
    <div class="w-full h-dvh bg-[#F6F6F6] flex-col gap-16 font-primary absolute">
        <div class="bg-[#F6F6F6] shadow-lg flex items-center justify-between p-3 text-primary font-semibold">
            <div>Logo</div>
            <RouterLink :to="{ name: 'phishingLevel' }" class="border-[1px] border-gray-300 p-2 px-4 rounded-xl">Back level
            </RouterLink>
        </div>

        <div class="bg-primary w-full h-60 gap-10 flex flex-col items-center text-white py-10 px-10 relative">
            
            <div class="px-20 pb-10 h-fit w-full absolute top-4 py-5">
                <h1 class="text-xl text-center">Level 2 - Website Phishing
                </h1>
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
import { usePhishingThree } from '@/store/Phishing/phishingLevelThree/componentPage';
import { computed } from 'vue';

const phishingThree = usePhishingThree();

const currentPage = computed(() => {
    return phishingThree.getPage()
});


</script>

<style scoped></style>
