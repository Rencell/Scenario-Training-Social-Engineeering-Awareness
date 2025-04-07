<template>
    <div class="w-full h-full bg-primary bg-center bg-contain bg-[url(/Images/Phishing/confetti.png)] flex flex-col  text-black rounded-xl" >
        
  
        <div class="flex flex-col items-center justify-center h-full motion-preset-pop ">
  
            <div class="w-2xl bg-primary rounded-2xl p-4" style="box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;">
                <p class="font-semibold text-2xl text-white text-center">Level 2</p>
                <div class="w-2xlrounded-md flex items-center flex-col relative p-4">
                    <div class="w-60 z-2"><img src="/Images/Phishing/illustration.png" alt=""></div>
      
                </div>
                <div class="flex justify-center text-white">
                    <div class=" w-2xl flex gap-2 flex-col pt-6 text-center">
                        <p class="font-semibold text-2xl">Congratulations!</p>
                        <p class="text-sm">Congratulations on Finishing! 🎉 You've accomplished the minor level in phishing awareness—but are you confident enough to take on the more advanced challenges ahead?</p>
                    </div>
                </div>
                <div class="flex gap-2 text-white pt-10 justify-center">
                    <BaseButton :theme="'white'" :click="null">
                      NEXT
                    </BaseButton>
                </div>
            </div>
        </div>
  
  
  
    </div>
  </template>
  
  <script setup>
  import BaseButton from '@/components/UI/BaseButton.vue';
  import { useComponentStore } from '@/store/Phishing/phishingLevelOne.js';
  const ComponentStore = useComponentStore();
  </script>
  
  <style scoped></style>
  