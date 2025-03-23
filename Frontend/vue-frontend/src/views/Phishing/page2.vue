<template>
    <div class="w-full h-full bg-[#F6F6F6] flex flex-col text-black gap overflow-visible rounded-xl">

        <div class="p-3 ps-10 py-0 ">



        </div>

        <div class="ps-20 pe-20 pt-10 pb-10 flex justify-between items-center gap-2">
            <div>
                <div class="pb-2 text-3xl" style="font-weight: 700;">Test your skill!</div>
                <div>Spot the signs of phishing by clicking the suspect elements.</div>
            </div>
            <div class="flex gap-2">
                <button class="bg-primary p-1 px-5 text-white rounded text-center"
                    @click="setCurrentPage(1)">Previous</Button>
                <button class="bg-primary p-1 px-5 text-white rounded text-center motion-scale-loop-105"
                    @click="setCurrentPage(3)">Next</Button>
            </div>
        </div>

        <div class="flex flex-col items-center justify-center pb-10">

            <div class="rounded-se rounded-ss bg-[#333D54] flex gap-4 p-2 justify-end w-3xl">
                <div class="p-2 rounded-full bg-red-500"> </div>
                <div class="p-2 rounded-full bg-yellow-500"> </div>
                <div class="p-2 rounded-full bg-green-500"> </div>

            </div>

            <div class="bg-[#D9D9D9] w-3xl px-10">
                <div class="bg-white p-10">

                    <div class="flex gap-4 ">
                        <i class="bi bi-person-circle text-7xl text-[#888888]"></i>
                        <div class="flex flex-col justify-center">
                            <div class="flex text-xl">
                                <p class="font-secondary" @click="showToolTip(0, $event)">James Smith</p>
                                <p class="font-secondary" @click="showToolTip(1, $event)">&lt;netflix.com-support.com&gt;
                                </p>
                            </div>

                            <p class="text-xs text-gray-500">Sun 12.20.2022 10:38 PM</p>
                            <p class="text-xs text-gray-500">to me</p>
                        </div>
                    </div>


                    <div class="ps-22 pt-10">
                        <p @click="showToolTip(2, $event)">Sir/Madam</p>
                        <br>
                        <p @click="showToolTip(3, $event)">your account has been temporarily suspended due to suspicious
                            activity. To restore access, please click the link below and verify your information
                            immediately: <span class="text-blue-600">Click to take action</span>. Failure to act within
                            24 hours will result in permanent <span @click="showToolTip(5, $event)">acount</span>
                            deactivation.</p>
                        <br>
                        <a href="http://bit.ly/4h4OyxC" @click.prevent="showToolTip(4, $event)"
                            class="bg-blue-500 text-white p-3 rounded-md">CLICK HERE NOW!</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <tooltip :number-x=position.x :number-y=position.y v-model:active-tool-tip="activeToolTip">
        {{ annotation_text }}
    </tooltip>
</template>

<script setup>

import tooltip from '../../components/page2/tooltip.vue';
import { data } from '../../components/page2/annotation.js';
import { computed, ref, onMounted } from 'vue';

//store
import { useComponentStore } from '@/store/phishingPages.js';

const ComponentStore = useComponentStore();

const setCurrentPage = (index) => {
    ComponentStore.setPage(index);
};

//Annotation
const annotation_index = ref(0);
const get_rect = ref(null);
const position = ref({ x: 0, y: 0 });
const activeToolTip = ref(false)


const showToolTip = (index, e) => {
    annotation_index.value = index;
    get_rect.value = e.target.getBoundingClientRect();
    position.value = {
        x: get_rect.value.x,
        y: get_rect.value.y
    }
    activeToolTip.value = true
}

const annotation_text = computed(() => {
    return data[annotation_index.value].text;
})



onMounted(() => {

});


</script>

<style scoped></style>
