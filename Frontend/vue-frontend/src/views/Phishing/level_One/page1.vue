<template>
  <div class="flex h-full w-full flex-col rounded-xl bg-[#F6F6F6]">
    <div class="flex gap-2 p-3 pt-5"></div>
    <div>
      <div class="flex justify-center gap-5">
        <div
          @click="toggle = 1"
          :class="{ [activeClass]: toggle == 1, [buttonAttr]: true }"
        >
          Spear Phishing
        </div>
        <div
          @click="toggle = 2"
          :class="{ [activeClass]: toggle == 2, [buttonAttr]: true }"
        >
          Smishing
        </div>
        <div
          @click="toggle = 3"
          :class="{ [activeClass]: toggle == 3, [buttonAttr]: true }"
        >
          Vishing
        </div>
        <div
          @click="toggle = 4"
          :class="{ [activeClass]: toggle == 4, [buttonAttr]: true }"
        >
          Website Phishing
        </div>
        <div
          @click="toggle = 5"
          :class="{ [activeClass]: toggle == 5, [buttonAttr]: true }"
        >
          Whailing
        </div>
      </div>
    </div>
    <component :is="activeComp"></component>

    <div>
      <div class="flex justify-end gap-2 pe-10 pt-10 text-white">
        <!-- <button class="bg-primary p-2 w-28 rounded-lg hover:bg-primary/70 border-secondary border-b-4 shadow-md" @click="ComponentStore.previousPage()">
          PREVIOUS
        </button>
        <button
          class="bg-primary p-2 w-28 rounded-lg hover:bg-primary/70 border-secondary border-b-4 shadow-md"
          @click="ComponentStore.nextPage()"
        >
          NEXT
        </button> -->
        <Button :click="ComponentStore.previousPage">
          PREVIOUS
        </Button>
        <Button :click="ComponentStore.nextPage">
          NEXT
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import Button from "@/components/UI/BaseButton.vue";
import compOne from "@/components/Phishing/levelOne/page1/page1_email_phishing.vue";
import compTwo from "@/components/Phishing/levelOne/page1/page1_smishing.vue";
import compThree from "@/components/Phishing/levelOne/page1/page1_website.vue";
import compFour from "@/components/Phishing/levelOne/page1/page1_social_media.vue";

import { useComponentStore } from "@/store/Phishing/phishingLevelOne.js";

const ComponentStore = useComponentStore();


const toggle = ref(1);
const activeClass = "bg-primary text-white";
const buttonAttr =
  "text-black p-3 rounded-xl hover:bg-primary-light transition-all hover:text-secondary";

const arr = [compOne, compTwo, compThree, compFour];

const activeComp = computed(() => {
  return arr[toggle.value - 1];
});
</script>

<style scoped></style>
