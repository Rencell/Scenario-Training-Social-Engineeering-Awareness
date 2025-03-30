<template>
    <div class=" text-black flex justify-center items-center gap-10 pt-3 ">


        <div class="flex flex-col gap-4 pt-10 w-lg">
            <div class="font-bold text-2xl" style="font-weight: 800;">Vishing</div>
            <div class="text-lg">A targeted cyberattack that use text messages to commit fraudulent acts.</div>
            <bullet_point :color="'bg-primary'" :number="'1'">A cybercriminal creates a fake but convincing text message</bullet_point>
            <bullet_point :color="'bg-primary'" :number="'2'">They impersonate a trusted source, such as banks or delivery services.</bullet_point>
            <bullet_point :color="'bg-primary'" :number="'3'">The victim clicks the malicious link or share personal information leading to fraud.</bullet_point>
            
            
        </div>
        <div class="w-96">
            <img class="w-full" src="/Images/Phishing/page1/vishing.png" alt="">
        </div>
    </div>
</template>

<script setup>

import bullet_point from './bullet_point.vue';

</script>

<style scoped>

</style>