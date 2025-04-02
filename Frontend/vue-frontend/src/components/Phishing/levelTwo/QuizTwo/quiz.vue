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
        <div class="flex flex-col gap-4 rounded-lg bg-white p-4 shadow-md">
          <div
            class="font-secondary flex justify-between text-sm font-semibold"
          >
            <p>Found: {{ found_count }} of {{ number_areas }}</p>
            <p>{{ parseInt(found_percentage) }}%</p>
          </div>

          <progress
            class="progress progress-success"
            :value="found_percentage"
            max="100"
          ></progress>
        </div>
        <div class="w-full rounded-xl">
          <img
            class="rounded-xl bg-red-400 object-cover "
            :src="dataPage.image"
            :usemap="'#' + dataPage.id"
            @click="score -= 5"
          />

          <map :name="'#' + dataPage.id">
            <area
              v-for="(target, key) in dataPage.areas"
              :key="key"
              :title="target.title"
              @click="checkAreas(key)"
              :coords="target.coordinates"
              shape="poly"
              class="cursor-pointer"
            />
          </map>
        </div>

      </div>
</template>

<script setup>

import imageMapResize from "image-map-resizer";
import { computed, onMounted, ref, watch } from "vue";
import { PhishingTwoQuizTwodata } from "@/composables/Phishing/levelTwo/QuizTwo";
import timer from "@/components/Phishing/levelTwo/QuizTwo/timer.vue";
const data = PhishingTwoQuizTwodata;

const pageCount = ref(0);
const dataPage = computed(() => data[pageCount.value]);
const found_count = ref(0);
const foundAreas = ref([]);
const number_areas = ref(dataPage.value.areas.length);
const found_percentage = computed(
  () => (found_count.value / number_areas.value) * 100,
);
const score = ref(0);

const checkAreas = (area_id) => {
  if (foundAreas.value.includes(area_id)) return;

  foundAreas.value.push(area_id);
  found_count.value++;
  score.value += 10;
};

const nextData = () => {
  if (pageCount.value < data.length) pageCount.value++;
  found_count.value = 0;
  foundAreas.value = [];
};

watch(found_count, () => {
    if(found_count.value === number_areas.value){
        if (pageCount.value < data.length - 1) {
            nextData();
        }
    }
})

onMounted(() => {
  imageMapResize();
});

</script>