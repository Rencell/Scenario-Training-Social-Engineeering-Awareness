<template>
    <div class="flex h-full w-full flex-col rounded bg-[#F6F6F6] text-black">
        <div class="motion-preset-focus flex justify-center pt-10">

            
            <div class="relative flex w-2xl flex-col items-center gap-4">
                <p class="font-secondary p-3 bg-gray-300 rounded-xl">
                    "Dear Valued Student,
                    You’ve been selected as a winner of our Semester Rewards Program! Claim your $500 Amazon Gift Card
                    in the next 2 HOURS by clicking below:
                    👉 [<span class="text-blue-400">CLAIM NOW</span>] 👈
                    Hurry—prizes expire soon!"
                </p>

               <div class="rounded-md bg-primary p-2 w-full">
                    <div class="w-full h-60">
                        <img class="w-full h-full object-cover" src="/Images/Phishing/Scenario/1/check-email.jpg" alt="" />
                    </div>
               </div>


            </div>
        </div>

        <div class="motion-preset-focus flex justify-center">
            <div class="flex w-2xl flex-col gap-2 pt-6">
                
                <p><strong>Sam:</strong> I should call jose to check these emails...</p>
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