<template>
  <div class="flex h-full w-full flex-col items-center justify-center rounded-xl bg-[#F6F6F6] text-black">
    <div class="motion-preset-slide-right flex justify-center text-white">
      <div class="flex flex-col justify-center">
        <button @click="decrementCount()" class="bg-primary border-secondary w-28 rounded-xl border-b-3 p-2">
          PREVIOUS
        </button>
      </div>
      <div class="relative m-4 w-xl shadow-lg" v-if="toolsData.type == 'video'">
        <video ref="videoRef" 
          :src="toolsData.video" 
          class="w-full h-full object-cover rounded-xl transition-opacity duration-300" playsInline loop muted />

        <div class="absolute top-0 transition-all flex h-full w-full items-center justify-center rounded-xl"
          :class="[isPlaying ? 'bg-primary/0' : 'bg-primary/40']">
          <div @click="togglePlay()" class="flex h-12 w-12 items-center justify-center rounded-full bg-black/50"
            :class="[isPlaying ? 'opacity-30' : 'opacity-100']">
            <i v-if="isPlaying" class="bi bi-pause-circle text-4xl"></i>
            <i v-else class="bi bi-play-fill text-4xl"></i>
          </div>
        </div>
      </div>

      <div v-else class="relative m-4 w-sm">
        <img :src="toolsData.img" alt="">
      </div>
      <div class="flex flex-col justify-center">
        <button @click="incrementCount()"
          class="bg-primary border-secondary w-28 rounded-xl border-b-3 p-2 text-center">
          NEXT
        </button>
      </div>

    </div>

    <div class="font-secondary motion-preset-slide-right flex flex-col items-center font-bold">
      <p :key="count" class="motion-preset-focus mb-2 text-2xl">
        {{ toolsData.header }}
      </p>
      <p :key="count" class="motion-preset-focus w-lg text-center text-lg font-medium text-gray-400">
        {{ toolsData.subheader }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { toolsDefenseData } from "@/composables/Phishing/toolDefenses/data";
import { useComponentStore } from "@/store/phishingPages.js";
import { computed, ref, watch } from "vue";
const ComponentStore = useComponentStore();

const count = ref(0);

const videoRef = ref(null);
const isPlaying = ref(false);

const togglePlay = () => {
  isPlaying.value = !isPlaying.value;
};

const toolsData = computed(() => toolsDefenseData[count.value]);
const incrementCount = () => {
  if (toolsDefenseData.length > count.value) {
    count.value++;
  }
};
const decrementCount = () => {
  if (0 <= count.value) {
    count.value--;
  }
};
watch(isPlaying, async (newVal) => {
  if (videoRef.value) {
    if (newVal) {
      try {
        await videoRef.value.play();
      } catch (error) {
        console.error("Error playing video:", error);
      }
    } else {
      videoRef.value.pause();
      videoRef.value.currentTime = 0;
    }
  }
});
</script>

<style scoped></style>
