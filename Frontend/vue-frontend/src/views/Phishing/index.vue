<template>
    <div class="w-full h-dvh bg-[#F6F6F6] flex-col gap-16 font-primary">
        <div class="bg-[#F6F6F6] shadow-lg flex items-center justify-between p-3 text-primary font-semibold">
            <div>Logo</div>
            <div class="border-[1px] border-gray-300 p-2 px-4 rounded-xl">Home</div>
        </div>

        <div class="bg-primary w-full h-60 gap-10 flex flex-col items-center text-white pt-10 px-10 relative">
            <h1 class="text-xl text-center">In just 2 minutes, you’ll see the power of gamified awareness assessments.
            </h1>

            <div class="px-20 pb-10 h-dvh w-full absolute top-25">
                <div class=" w-full h-full rounded-2xl border-gray-300 border-2" style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">


                    <component :is="currentPage"></component>
                </div>
            </div>


        </div>
    
    </div>

    <RouterView />
</template>

<script setup>


//store
import {useComponentStore} from '@/store/phishingPages.js';
import { computed} from 'vue'

const ComponentStore = useComponentStore();


const currentPage = computed(() => {
    return ComponentStore.getPage()
});



</script>

<style scoped></style>
