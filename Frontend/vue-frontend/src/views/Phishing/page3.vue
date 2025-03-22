<template>
  <div class="w-full h-full bg-[#F6F6F6] flex flex-col text-black rounded-xl">
    

    <div class="flex justify-between ps-20 pe-20 pt-10">
      <div class="text-3xl font-secondary" style="font-weight: 700" >Learn to spot Phishing Tactics</div>

      <div class="flex gap-2">
        <button class="bg-primary p-1 w-24 text-white rounded text-center" @click="setCurrentPage(1)">
          Previous
        </button>
        <button class="bg-primary p-1 w-24 text-white rounded text-center" @click="setCurrentPage(3)">
          Next
        </button>
      </div>
    </div>
    <br /><br />
    <div class="px-20 pb-20 overflow-y-scroll">
      <descriptionList :heading="'hello'" :subheading="'world'"></descriptionList>
      <descriptionList :heading="'hello'" :subheading="'world'"></descriptionList>
      <descriptionList :heading="'hello'" :subheading="'world'"></descriptionList>
      <descriptionList :heading="'hello'" :subheading="'world'"></descriptionList>
      <descriptionList :heading="'hello'" :subheading="'world'"></descriptionList>
      <descriptionList :heading="'hello'" :subheading="'world'"></descriptionList>
      <descriptionList :heading="'hello'" :subheading="'world'"></descriptionList>
     
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import descriptionList from "@/components/page3/description-list.vue";
//store
import { useComponentStore } from '@/store/phishingPages.js';

const ComponentStore = useComponentStore();

const setCurrentPage = (index) =>{
    ComponentStore.setPage(index); 
};


</script>

<style scoped></style>
