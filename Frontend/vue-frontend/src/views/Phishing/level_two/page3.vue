<template>
    <div class="h-full w-full bg-white-color rounded-xl px-15 pb-20">


        <div class="flex flex-col h-full">

            <div class="flex py-5 items-center gap-2">
                <div class="p-4 rounded w-fit bg-primary"></div>
                <div class="text-secondary font-semibold">Observe this website, guess if it contains any sign of website phishing attacks</div>
            </div>
            <div class="w-fit bg-[#44475A] rounded-tl-lg rounded-tr-lg p-2 px-3 flex gap-2" style="margin-left: 10px;">
                <i class="bi bi-facebook"></i>
                <div>Log into Facebook</div>
            </div>
            <div class="p-2 bg-[#44475A] flex items-center h-fit">
                <div class="flex gap-3 text-xl">
                    <i class="bi bi-arrow-left"></i>
                    <i class="bi bi-arrow-right"></i>
                    <i class="bi bi-arrow-repeat"></i>
                </div>

                <div class="grow px-5 relative">
                    <input type="text"
                        class="bg-gray-800 rounded-full w-full ps-2 p-1 font-mono text-gray-400 outline-gray-800"
                        value="https://www.Fαcebook.com/login"
                        >
                    <div class="absolute top-10">
                        
                        <tooltip v-model="tooltipDisable" :model-answer="answer"></tooltip>
                    </div>
                </div>
            </div>
            <div class="bg-gray-200 grow-1 flex justify-center items-center flex-col ">
                <div class="w-44 p-5"><img src="/Images/Facebook_logo.png" alt=""></div>
                <div class="w-96 bg-white flex flex-col gap-3 p-3 rounded-lg shadow-lg">

                    <div class="text-center text-black py-3">Log into Facebook</div>
                    <input type="text" class="text-black border-[0.5px] placeholder:text-gray-400 border-gray-300 p-2 rounded-md"
                        placeholder="Email or phone number">
                    <input type="text" class="text-black border-[0.5px]  placeholder:text-gray-400 border-gray-300 p-2 rounded-md"
                        placeholder="Password">
                    <button class="bg-blue-500 p-2 rounded">Login</button>
                    <div class="text-blue-700 flex text-xs justify-center gap-3 py-3">
                        <div style="font-weight: 500;">forgot account?</div>
                        <div style="font-weight: 500;">Sign up for Facebook</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-wrap gap-2 justify-between grow py-5 ">
            <div>

                <BaseButton :click="phishingTwo.previousPage">Previous</BaseButton>
            </div>
            <div class="gap-2 flex">
                <button 
                    :disabled="triggerNext"
                    class="font-medium p-3 rounded-full  shadow-sm text-sm hover:bg-primary/90 hover:text-white"
                    @click="selected('phish')"
                    :class="[answer === 'phish' ? 'bg-primary text-white' : 'bg-white text-gray-500']">
                    This is phishing</button>
                <button
                    :disabled="triggerNext"
                    class="font-medium p-3 rounded-full  shadow-sm text-sm hover:bg-primary/90 hover:text-white"
                    @click="selected('legit')"
                    :class="[answer === 'legit' ? 'bg-primary text-white' : 'bg-white text-gray-500']">
                    This looks legitimate site</button>
            </div>
            <div>

                <BaseButton v-if="!triggerNext" :with-hover="!enableButton" :click="showToolTip">
                    
                    Reveal reason
                </BaseButton>
                <BaseButton v-else :click="phishingTwo.nextPage">
                    
                    Next
                </BaseButton>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseButton from '@/components/UI/BaseButton.vue';
import { usePhishingTwo } from '@/store/Phishing/phishingLevelTwo/componentPage';
import tooltip from '@/components/Phishing/levelTwo/page3/tooltip.vue';
import { computed, ref } from 'vue';

const phishingTwo = usePhishingTwo();

const answer = ref('')

const selected = (value) => {
    answer.value = value
}

const enableButton = computed (() => {
    if(answer.value !== '') return false
    else return true
})

const triggerNext = ref(false);
const tooltipDisable = ref(false);
const showToolTip = () => {
    triggerNext.value = true
    tooltipDisable.value = true
    // phishingTwo.nextPage()
};


</script>

<style scoped></style>
