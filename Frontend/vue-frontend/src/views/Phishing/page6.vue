<template>
  <div class="flex h-full w-full flex-col bg-[#F6F6F6] text-white rounded-xl">
    <div class="bg-primary flex w-full items-center justify-between p-3 px-8 rounded-tl-xl rounded-tr--xl">
      Previous

      <div class="flex items-center gap-5">
        &lt; Leave Scenario
        <button class="text-primary rounded-md bg-white p-1 px-5">
          Submit
        </button>
      </div>
    </div>

    <div class="motion-preset-slide-right flex items-center gap-4 p-8 text-black">
      <div class="bg-primary w-fit rounded p-4"></div>
      There is two email phishing among the emails, your task is to find it
    </div>

    <div class="motion-preset-slide-right flex justify-center px-8">
      <div class="flex w-7xl rounded-md border-[0.5px] border-gray-200 shadow-md h-[400px]">
        <div class="grow text-[1vw] text-black flex flex-col">
          <div class="text-primary flex items-center justify-center gap-8 py-2 border-b-[0.5px] border-gray-300">
            <div>INBOX (0)</div>
            <div>SCAMBOX (0)</div>
          </div>

          <div class=" overflow-y-auto">
            <emailList 
              v-for="(email,index) in email_datas"
              :key="index" 
              v-bind="email" 
            />
          </div>
        </div>
        <div class="w-3xl h-full flex flex-col">
          <div class="flex items-center justify-end gap-2 bg-gray-300 p-2 text-black">
            This is Phishing scam
            <i class="bi bi-exclamation-circle-fill text-base text-red-500"></i>
          </div>

          <div class="grow bg-white overflow-y-auto">
            <emailContent></emailContent>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import emailList from "@/components/page6/email-list.vue";
import emailContent from "@/components/page6/email-content.vue";

import { emailData } from '@/composables/Phishing/pageSix/emails.js'
import { ref } from "vue";

const email_datas = ref(emailData);

</script>

<style scoped></style>
