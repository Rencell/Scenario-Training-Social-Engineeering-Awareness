<template>
  <div class="w-full h-full bg-[#F6F6F6] flex flex-col  text-black rounded-xl">
      <div class="p-3 ps-10 py-10 flex">


        
      </div>

      <div class="flex justify-center">

          <div class="w-2xl bg-orange-300 rounded-md flex items-center flex-col relative p-4">
              <div class="w-60 z-2"><img src="/Images/remote-work-man.png" alt=""></div>

              <div class="w-72 h-20 bg-[#F1924D] absolute -bottom-2 z-1"
                  style="clip-path: ellipse(50% 21% at 50% 50%);"> </div>


              <div class="w-sm z-3 p-1 rounded-md bg-red-600 text-xs text-white absolute right-2 flex items-center gap-2 "> 
                <i class="bi bi-envelope-at-fill text-2xl"></i>  
                <div class="">Important: We detected unusual login attempts on your Facebook account. Please log in immediately to secure your account: <span class="text-blue-400">[fake-link.com]</span></div> </div>
          </div>
      </div>

      <div class="flex justify-center">
          <div class=" w-2xl flex gap-2 flex-col pt-6">
              <p style="font-weight: 500;">Sam:</p>
              <p>Sam is alarmed but knows he should check his account. He quickly taps the link without thinking twice, assuming it’s a legitimate security notification from Facebook, now sam is on the Phishing website.</p>
          </div>
      </div>


      <div>

          <div class="flex gap-2 text-white pt-10 justify-end pe-10">
              <button @click="ComponentStore.previousPage()" class="bg-primary p-2 w-28  border-b-3 border-secondary rounded-xl">PREVIOUS</button>
              <button @click="ComponentStore.nextPage()" class="bg-primary p-2 w-28  text-center border-b-3 border-secondary rounded-xl">NEXT
              </button>
          </div>
      </div>
  </div>
</template>

<script setup>

import { useComponentStore } from '@/store/phishingPages.js';
const ComponentStore = useComponentStore();
</script>

<style scoped></style>
