<template>
    <div ref="heigh"
        class="w-full h-full bg-[#F6F6F6] flex flex-col text-black gap rounded-xl overflow-hidden relative">

        <div class="p-3 ps-10 py-0 ">



        </div>

        <div class="ps-20 pe-20 pt-10 pb-10 flex justify-between items-center gap-2">
            <div>
                <div class="pb-2 text-3xl" style="font-weight: 700;">Look for These Red Flags!</div>
                <div class="text-black/60">Spot the signs of phishing by clicking the suspect elements.</div>
            </div>
            <div class="flex gap-2 text-white ">
                <BaseButton :click="ComponentStore.previousPage">
                    PREVIOUS
                </BaseButton>
                <BaseButton :click="ComponentStore.nextPage">
                    NEXT
                </BaseButton>
                <!-- <Button :click="ComponentStore.nextPage()">hey</Button> -->
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
                                <p class="font-secondary hover:transition-all hover:scale-105 cursor-pointer"
                                    @click="showToolTip(0, $event)">James Smith</p>&nbsp;
                                <p class="font-secondary hover:transition-all hover:scale-105 cursor-pointer"
                                    @click="showToolTip(1, $event)">&lt;netflix.com-support.com&gt;
                                </p>
                            </div>

                            <p class="text-xs text-gray-500">Sun 12.20.2022 10:38 PM</p>
                            <p class="text-xs text-gray-500">to me</p>
                        </div>
                    </div>


                    <div class="ps-22 pt-10">
                        <p class="hover:transition-all hover:scale-105 cursor-pointer" @click="showToolTip(2, $event)">
                            Sir/Madam</p>
                        <br>
                        <p class="cursor-pointer hover:transition-all hover:scale-105" @click="showToolTip(3, $event)">
                            your account has been temporarily suspended due to suspicious
                            activity. To restore access, please click the link below and verify your information
                            immediately: <span class="text-blue-600">Click to take action</span>. Failure to act within
                            24 hours will result in permanent <span @click.stop="showToolTip(5, $event)">acount</span>
                            deactivation.</p>
                        <br>
                        <a href="http://bit.ly/4h4OyxC" @click.prevent="showToolTip(4, $event)"
                            class="bg-blue-500 text-white p-3 rounded-md ">CLICK HERE NOW!</a>
                    </div>
                </div>
            </div>
        </div>
        <tooltip :number-x=position.x :number-y=position.y :screen-y="position.screenY"
            v-model:active-tool-tip="activeToolTip">
            {{ annotation_text }}
        </tooltip>
    </div>

</template>

<script setup>
import BaseButton from '@/components/UI/BaseButton.vue';
import tooltip from '@/components/Phishing/levelOne/page2/tooltip.vue';
import { data } from '@/components/Phishing/levelOne/page2/annotation.js';
import { computed, ref } from 'vue';

//store
import { useComponentStore } from '@/store/Phishing/phishingLevelOne.js';

const ComponentStore = useComponentStore();


//Annotation
const annotation_index = ref(0);
const get_rect = ref(null);
const position = ref({ x: 0, y: 0 });
const activeToolTip = ref(false)

const heigh = ref(null)



const showToolTip = (index, e) => {
    annotation_index.value = index;
    get_rect.value = e.target.getBoundingClientRect();
    position.value = {
        x: get_rect.value.x,
        y: get_rect.value.y,
        screenY: heigh.value.getBoundingClientRect().height
    }
    e.target.classList.add("check-pointed");
    activeToolTip.value = true
}

const annotation_text = computed(() => {
    return data[annotation_index.value].text;
})




</script>


<style scoped>
.check-pointed {
    position: relative;
    transition: all 0.3s ease-in-out;
    /* 0.3s duration with ease-in-out */
}

.check-pointed::before {
    content: '✔';
    font-size: 12px;
    color: #75BD3D;
    position: absolute;
    width: fit-content;
    border-radius: 50%;
    top: -6px;
    left: -10px;
    transition: all ease-in;
}
</style>
