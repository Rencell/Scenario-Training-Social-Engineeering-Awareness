<template>
    <div class=" text-black flex justify-center items-center gap-10 pt-3 ">


        <div class="flex flex-col gap-4 pt-10 w-xl">
            <div class="font-bold text-2xl" style="font-weight: 800;">WEBSITE PHISHING</div>
            <div class="text-lg">A cyberattack that use fake websites with manipulated URL to trick victims on providing sensitive information such as login credentials or bank information.</div>
            <bullet_point :color="'bg-primary'" :number="'1'">A cybercriminal creates a fake website with a deceiving subdomain.</bullet_point>
            <bullet_point :color="'bg-primary'" :number="'2'">They will impersonate trusted services, such as banks or email platforms.</bullet_point>
            <bullet_point :color="'bg-primary'" :number="'3'">The victim is deceived to enter their personal information which will be stolen and used for fraud.</bullet_point>
            
            
        </div>
        <div class="w-80">
            <img class="w-full" src="/Images/Phishing/page1/website.png" alt="">
        </div>
    </div>
</template>

<script setup>

import bullet_point from './bullet_point.vue';

</script>

<style scoped>

</style>