<template>
  <div @click="showExample = !showExample"
    class="flex gap-3 flex-col bg-white border-gray-200 border-[0.5px] rounded-sm hover:shadow-lg hover:scale-102 duration-100 ease-in">
    <div class="flex justify-between p-5 py-8 items-center">
      <div class="flex flex-col gap-3">
        <p class="text-xl font-bold font-secondary">{{ heading }}</p>
        <p>
          {{ subheading }}
        </p>
      </div>

      <div class="text-center">
        <button @click="showExample = showExample" class="p-1 px-3 text-xs bg-primary-light text-[#487425] font-semibold rounded-full  transition">
          <div v-if="!showExample">Expand<i class="bi bi-arrow-down-short"></i> </div>
          <div v-else>Collapse<i class="bi bi-arrow-up-short"></i> </div>
        </button>
      </div>
    </div>
    <div :class="{ 'hidden': !showExample }" class="motion-preset-slide-down  ">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptate dolore reiciendis eligendi ipsam culpa
      voluptatum consectetur ratione quisquam ut!
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showExample = ref(false);


const props = defineProps({
  heading: String,
  subheading: String,
})


</script>