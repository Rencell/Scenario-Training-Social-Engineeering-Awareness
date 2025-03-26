<template>
  <div class="flex h-full w-full flex-col rounded bg-[#F6F6F6] text-black">
    <div class="motion-preset-focus flex justify-center pt-20">
      <div
        class="relative flex w-2xl flex-col items-center rounded-md bg-orange-300 p-4"
      >
        <div class="z-2 w-60">
          <img src="/Images/remote-work-man.png" alt="" />
        </div>

        <div
          class="absolute -bottom-2 z-1 h-20 w-72 bg-[#F1924D]"
          style="clip-path: ellipse(50% 21% at 50% 50%)"
        ></div>
      </div>
    </div>

    <div class="motion-preset-focus flex justify-center">
      <div class="flex w-2xl flex-col gap-2 pt-6">
        <p style="font-weight: 500">Sam:</p>
        <p class="">
          Sam is a working a small company and his position is to check emails,
          this is his first day and he should not fail. Would you help sam with
          checking emails?
        </p>
      </div>
    </div>

    <div>
      <div class="flex justify-end gap-2 pe-10 pt-10 text-white">
        <button @click="ComponentStore.previousPage()" class="bg-primary p-2 w-28 rounded-lg hover:bg-primary/70 border-secondary border-b-4 shadow-md">
          PREVIOUS
        </button>
        <button
          @click="ComponentStore.nextPage()"
          class="bg-primary p-2 w-28 rounded-lg hover:bg-primary/70 border-secondary border-b-4 shadow-md"
        >
          NEXT
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
//store
import { useComponentStore } from "@/store/phishingPages.js";

const ComponentStore = useComponentStore();

</script>

<style scoped></style>
