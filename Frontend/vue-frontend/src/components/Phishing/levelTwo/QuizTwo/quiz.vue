<template>

<div class="flex w-4xl flex-col space-y-4">
        <div class="flex justify-between">
          <p class="text-xl font-bold">
            Stage {{ dataPage.id }} of {{ data.length }}
          </p>
          <p>Score: {{ score }}</p>
        </div>

        <div class="rounded-lg bg-white p-4 shadow-md">
          <div class="font-secondary">
            <timer :key="dataPage.id" :timerout="nextData"></timer>
          </div>
        </div>
        
        <div class="w-full rounded-xl flex gap-4">

          <div v-if="zoom == 'zoom'">
            <ZoomImg class="rounded-xl bg-red-400 object-cover " :src="dataPage.image" />
          </div>

          <div v-else :key="dataPage.id">
            <img
              class="rounded-xl bg-red-400 object-cover "
              :src="dataPage.image"
              :usemap="'#map' + dataPage.id"
              @click="score -= 5"
            />
  
            <map :name="'#map' + dataPage.id" >
              <area
                v-for="(target, key) in dataPage.areas"
                :key="target.id"
                :title="target.id"
                @click="checkAreas(key)"
                :coords="target.coordinates"
                shape="poly"
                class="cursor-pointer"
              />
            </map>
          </div>

          <div class="grow flex flex-col gap-4 ">
            <div class=" p-4 bg-primary rounded-md text-white flex-center flex-col">
              <p>Found</p>
              <p>{{ found_count }} of {{ number_areas }}</p>
            </div>

            <div class=" p-4 rounded-md  flex-center flex-col cursor-pointer" 
            @click="zoom = 'zoom' " 
            :class="zoom === 'zoom' ? 'bg-primary text-white' : 'bg-white text-primary'">
              <i class="bi bi-zoom-in text-xl"></i>
              <p class="text-xs font-secondary">Zoom</p>
            </div>
            <div class=" p-4 rounded-md  flex-center flex-col cursor-pointer" 
            @click="zoom = 'select'" 
            :class="zoom === 'select' ? 'bg-primary text-white' : 'bg-white text-primary'">
              <i class="bi bi-cursor-fill text-xl"></i>
              <p class="text-xs font-secondary">Select</p>
            </div>


          </div>
        </div>
      </div>
</template>

<script setup>
import { ZoomImg } from "vue3-zoomer";
import imageMapResize from "image-map-resizer";

import { useQuizTwo } from "@/store/Phishing/phishingLevelTwo/quizTwo";
import { computed, nextTick, onMounted, ref, watch } from "vue";
import { PhishingTwoQuizTwodata } from "@/composables/Phishing/levelTwo/QuizTwo";
import timer from "@/components/Phishing/levelTwo/QuizTwo/timer.vue";
import result from "./result.vue";

const quizTwo = useQuizTwo()
const data = ref(PhishingTwoQuizTwodata);

const pageCount = ref(0);
const dataPage = computed(() => data.value[pageCount.value]);
const found_count = ref(0);
const foundAreas = ref([]);
const number_areas = ref(dataPage.value.areas.length);

const score = ref(0);

const zoom = ref('select');
const checkAreas = (area_id) => {
  if (foundAreas.value.includes(area_id)) return;
  
  foundAreas.value.push(area_id);
  found_count.value++;
  score.value += 10;
};

const nextData = () => {

  pageCount.value++;

  if (pageCount.value >= data.value.length) {
    quizTwo.setPage(result);
  }

  found_count.value = 0;
  foundAreas.value = [];
  imageMapResize();
};


const resizeMap = () => {
  nextTick(() => {
    imageMapResize();
  });
};

watch(dataPage, async () => {
  await nextTick();
  resizeMap();
})

watch(zoom, async () => {
  if(zoom.value === 'select'){

    await nextTick();
    resizeMap();
  }
})

watch(found_count, () => {
  if(found_count.value === number_areas.value){
    if (pageCount.value < data.value.length - 1) {
      nextData();
    }
  }
})

onMounted(() => {
  imageMapResize();
});


</script>