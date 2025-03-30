<template>
    <div class="h-full" v-if="modelValue">

        <div class="motion-preset-expand motion-duration-200 bg-white p-4 drop-shadow-2xl border-[#F1ECEC] border-1 w-fit rounded-xl">

            <div class="text-black font-semibold mb-2">
                <p class="text-green-500" v-if="modelAnswer === 'phish'"> You got it correct! </p>
                <p class="text-red-500" v-else-if="modelAnswer === 'legit'">Nice try!</p>
            </div>
            <div class="inset-shadow-sm inset-shadow-gray-400 rounded text-center">
                <p class="font-mono text-gray-700 text-3xl">F<span class="text-green-500">α</span>cebook</p>
            </div>
            <div class="w-60 pb-3 text-black text-sm pt-2 ">
                Bad actors use different alphabet to make their site look legitimate, like the above highlights where a is replaced by Cyrillic alphabet 'α'
            </div>
            <a href="https://guard.io/blog/cyrillic-scams-protection" target="_blank" class="text-blue-400">Learn more</a>
            
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps(["modelValue", "modelAnswer"]);
const emit = defineEmits(["update:modelValue"]);

const closeTooltip = () => {
  emit("update:modelValue", false); // Set to true (disabling the tooltip)
};

</script>