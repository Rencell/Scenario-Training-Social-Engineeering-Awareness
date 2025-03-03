<template>
    <div class="w-dvw h-dvh bg-[#F6F6F6] flex flex-col">

        <div class="p-3 ps-10 py-10 flex gap-2">

            <div class="bg-primary-own p-4 rounded-md w-fit"></div>
            <p class="text-black flex items-center">Phishing Attack</p>

        </div>
        <div>
            <div class="flex justify-center gap-5">

                <div @click="toggle = 1" :class="{ [activeClass]: toggle == 1, [buttonAttr]: true }">Email Phishing
                </div>
                <div @click="toggle = 2" :class="{ [activeClass]: toggle == 2, [buttonAttr]: true }">Smishing</div>
                <div @click="toggle = 3" :class="{ [activeClass]: toggle == 3, [buttonAttr]: true }">Social Media
                    Phishing</div>
                <div @click="toggle = 4" :class="{ [activeClass]: toggle == 4, [buttonAttr]: true }">Website Phishing
                </div>
                <div @click="toggle = 5" :class="{ [activeClass]: toggle == 5, [buttonAttr]: true }">Whailing</div>

            </div>

        </div>
        <component :is="activeComp"></component>

        <div>

            <div class="flex gap-2 text-white pt-10 justify-end pe-10">
                <button class="bg-primary-own p-2 w-28 rounded ">PREVIOUS</button>
                <RouterLink :to="{ name: 'page2' }" class="bg-primary-own p-2 w-28 rounded text-center">NEXT
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>

import { computed, ref, watch } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import compOne from '../../components/page1/page1_email_phishing.vue'
import compTwo from '../../components/page1/page1_smishing.vue'
import compThree from '../../components/page1/page1_website.vue'
import compFour from '../../components/page1/page1_social_media.vue'

const toggle = ref(1);
const activeClass = 'bg-primary-own text-white';
const buttonAttr = 'text-black p-3 rounded-xl hover:bg-[#8bd965] transition-all hover:text-white';

const arr = [compOne, compTwo, compThree, compFour]

const activeComp = computed(() =>{
    return arr[toggle.value - 1]
})

</script>

<style scoped></style>
