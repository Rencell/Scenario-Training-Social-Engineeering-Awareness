<template>
  <div
    @click="showExample = !showExample"
    class="flex flex-col gap-3 rounded-sm border-[0.5px] border-gray-200 bg-white duration-100 ease-in hover:scale-102 hover:shadow-lg pb-5"
  >
    <div @click="showExample = showExample" class="flex items-center justify-between p-5 py-8">
      <div class="flex gap-4">
        <div class="box-content w-10 rounded-full bg-gray-200 p-2">
          <slot name="image"></slot>
        </div>
        <div class="flex flex-col gap-2">
          <p class="font-secondary text-xl font-bold">{{ heading }}</p>
          <i class="text-sm">
            {{ subheading }}
          </i>
        </div>
      </div>

      <div class="text-center">
        <button
          @click="showExample = showExample"
          class="bg-primary-light rounded-full p-1 px-3 text-xs font-semibold text-[#487425] transition"
        >
          <div v-if="!showExample">
            Expand<i class="bi bi-arrow-down-short"></i>
          </div>
          <div v-else>Collapse<i class="bi bi-arrow-up-short"></i></div>
        </button>
      </div>
    </div>
    <div
      :class="{ hidden: !showExample }"
      class="motion-preset-slide-down px-23"
    >
      <h1 class="font-secondary mb-4 text-xs font-semibold text-gray-400">
        WHAT IS THIS?
      </h1>
      <p class="font-secondary mb-7 text-sm text-gray-800">
        Most phishing attacks try to give sense of urgency to victim, seemingly
        time-sensitive calls to action. The aim is to make victim feel as if
        they’re missing out on an urgent offer or reward, or nervous about the
        threat of punishment.
      </p>

      <h1 class="font-secondary mb-4 text-xs font-semibold text-gray-400">
        SOME OF EXAMPLES
      </h1>

      <slot name="examples">

      </slot>
      <h1 class="font-secondary mb-4 text-xs font-semibold text-gray-400">
        TYPICAL SIGNS OF {{ heading.toUpperCase() }}
      </h1>
     <div class="font-secondary ms-4">
        <slot name="signs" >
  
        </slot>
     </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showExample = ref(false);

const props = defineProps({
  heading: String,
  subheading: String,
});
</script>
