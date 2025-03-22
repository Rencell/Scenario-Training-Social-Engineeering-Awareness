<template>
  <div class="flex h-full w-full flex-col rounded-xl bg-[#F6F6F6]">
    <div class="flex gap-2 p-3"></div>
    <div>
      <div class="flex justify-center gap-5">
        <div
          @click="toggle = 1"
          :class="{ [activeClass]: toggle == 1, [buttonAttr]: true }"
        >
          Email Phishing
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
          Social Media Phishing
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
        <button class="bg-primary w-28 rounded p-2" @click="setCurrentPage(0)">
          PREVIOUS
        </button>
        <button
          class="bg-primary motion-scale-loop-105 w-28 rounded p-2 text-center"
          @click="setCurrentPage(1)"
        >
          NEXT
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import compOne from "../../components/page1/page1_email_phishing.vue";
import compTwo from "../../components/page1/page1_smishing.vue";
import compThree from "../../components/page1/page1_website.vue";
import compFour from "../../components/page1/page1_social_media.vue";

import { useComponentStore } from "@/store/phishingPages.js";

const ComponentStore = useComponentStore();

const setCurrentPage = (index) => {
  ComponentStore.setPage(index);
};

const toggle = ref(1);
const activeClass = "bg-primary text-white";
const buttonAttr =
  "text-black p-3 rounded-xl hover:bg-[#8bd965] transition-all hover:text-white";

const arr = [compOne, compTwo, compThree, compFour];

const activeComp = computed(() => {
  return arr[toggle.value - 1];
});
</script>

<style scoped></style>
