<template>
    <div class=" text-black flex justify-center items-center gap-10 pt-3 ">


        <div class="flex flex-col gap-4 pt-10 w-lg">
            <div class="font-bold text-2xl" style="font-weight: 800;">SPEAR PHISHING</div>
            <div class="text-lg"> It is an attack targeted towards a victim with the end goal of stealing confidential information for fraud.</div>
            <bullet_point :color="'bg-primary'" :number="'1'">A cybercriminal identify valuable data and a victim who has it.</bullet_point>
            <bullet_point :color="'bg-primary'" :number="'2'">They research the victim and will impersonate one of their trusted contact.</bullet_point>
            <bullet_point :color="'bg-primary'" :number="'3'">They will trick their victim to share the data and use it to commit malicious acts.</bullet_point>
            
            
        </div>
        <div class="w-96">
            <img class="w-full" src="/Images/Phishing/page1/emailPhishing.png" alt="">
        </div>
    </div>
</template>

<script setup>

import bullet_point from './bullet_point.vue';

</script>

<style scoped>

</style>