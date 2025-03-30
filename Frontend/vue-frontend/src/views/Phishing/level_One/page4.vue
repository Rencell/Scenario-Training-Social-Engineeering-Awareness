<template>
  <div class="flex h-full w-full flex-col rounded bg-[#F6F6F6] text-black">
    <div class="motion-preset-focus flex justify-center pt-20">
      <div class="relative flex w-2xl flex-col items-center rounded-md bg-primary p-2">
        <div class="w-full h-60">
          <img class="w-full h-full object-cover" src="/Images/Phishing/Scenario/1/two-friends.jpg" alt="" />
        </div>

        
      </div>
    </div>

    <div class="motion-preset-focus flex justify-center">
      <div class="flex w-2xl flex-col gap-2 pt-6">
        <p class="">
          It’s a regular afternoon at school, and you’re hanging out with your classmate Sam in the library. Sam is staring at his laptop, looking confused.
        </p>
      </div>
    </div>

    <div>
      <div class="flex justify-end gap-2 pe-10 pt-10 text-white">
        <BaseButton :click="ComponentStore.previousPage">
          PREVIOUS
        </BaseButton>
        <BaseButton :click="ComponentStore.nextPage">
          NEXT
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
//store
import { useComponentStore } from "@/store/Phishing/phishingLevelOne.js";
import BaseButton from "@/components/UI/BaseButton.vue";
const ComponentStore = useComponentStore();

</script>

<style scoped></style>
