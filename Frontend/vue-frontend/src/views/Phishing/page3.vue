<template>
  <div class="w-dvw h-fit bg-[#F6F6F6] flex flex-col text-black">
    <div class="p-3 ps-10 py-10 flex justify-between gap-2">
      <div class="flex gap-2">
        <div class="bg-primary-own p-4 rounded-md w-fit"></div>
        <p class="flex items-center">Phishing Attack</p>
      </div>

      <RouterLink
        :to="{ name: 'page4' }"
        class="bg-primary-own p-1 w-24 text-white rounded text-center"
        >Next
      </RouterLink>
    </div>

    <div class="ps-20 text-3xl" style="font-weight: 700">
      Learn to spot Phishing Tactics
    </div>
    <br /><br />
    <div class="px-20 pb-20">
      <div class="flex gap-3 flex-col">
        <p class="text-xl" style="font-weight: 500">Sense of urgency</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
          quo minus accusantium ipsam! Totam perferendis corrupti, placeat eos
          aperiam quos ipsa libero quibusdam consectetur consequuntur est
          magnam? Ullam dolore dolor autem facere, corrupti expedita sint. Saepe
          sed esse, cum doloribus ratione placeat est voluptas, sequi mollitia
          ex commodi ad doloremque!
        </p>

        <div :class="{'hidden': !showExample.example1}" class="motion-preset-slide-down  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptate dolore reiciendis eligendi ipsam culpa voluptatum consectetur ratione quisquam ut!
        </div>
        <div class="text-center">
          <button class="p-2 px-5 bg-primary text-white rounded-full  transition" @click="showExample.example1 = !showExample.example1">
            <div v-if="!showExample.example1"><i class="bi bi-arrow-down-short"></i> Show examples</div>
            <div v-else><i class="bi bi-arrow-up-short"></i> Hide examples</div>
          </button>
        </div>
      </div>
     
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

const showExample = ref({
  example1: false,
  example2: false,
  example3: false
});

</script>

<style scoped></style>
