<template>
    <div class="flex h-full w-full flex-col rounded bg-[#F6F6F6] text-black">
        <div class="motion-preset-focus flex justify-center pt-10">

            
            <div class="relative flex w-2xl flex-col items-center gap-4">
                <p class="font-secondary p-3 bg-gray-300 rounded-xl">
                    Sam called you and you saw a multiple emails barrage on her e-mails
                </p>
                
                <div class="rounded-md bg-primary p-2 w-full">
                    <div class="w-full h-60">
                        <img class="w-full h-full object-cover object-center" src="/Images/Phishing/Scenario/2/sam-teach.jpg" alt="" />
                    </div>
                </div>

                
            </div>
        </div>
        
        <div class="motion-preset-focus flex justify-center">
            <div class="flex w-2xl flex-col gap-2 pt-6">
                
                <p><strong>Sam:</strong> Look at this jose, i just won a prize worth $500, well what do you think are trends to buy?</p>
                <p><strong>You:</strong> Woah wait there, that does not seem a good emails, let me check on your laptop.</p>
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