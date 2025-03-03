
<template>
    <div class="w-dvw h-dvh  bg-[#F6F6F6] flex flex-col text-black gap">
        
        <div class="p-3 ps-10 py-10 flex justify-between gap-2">

            <div class="flex gap-2">
                <div class="bg-primary-own p-4 rounded-md w-fit"></div>
                <p class="flex items-center">Phishing Attack</p>
            </div>

            <RouterLink :to="{ name: 'page3' }" class="bg-primary-own p-1 w-24 text-white rounded text-center">Next</RouterLink>

        </div>
        
        <div class="ps-20">
            <div class="pb-2 text-3xl" style="font-weight: 700;">Test your skill!</div>
            <div >Spot the signs of phishing by clicking the suspect element.</div>
        </div>

        <div class="flex flex-col items-center justify-center">

            <div class="rounded-se rounded-ss bg-[#333D54] flex gap-4 p-2 justify-end w-3xl">
                <div class="p-2 rounded-full bg-red-500"> </div>
                <div class="p-2 rounded-full bg-yellow-500"> </div>
                <div class="p-2 rounded-full bg-green-500"> </div>

            </div>

            <div class="bg-[#D9D9D9] w-3xl px-10">
                <div class="bg-white p-10">

                    <div class="flex gap-4 ">
                        <i class="bi bi-person-circle text-7xl text-[#888888]"></i>
                        <div class="flex flex-col justify-center">
                            <div class="flex text-xl">
                                <p>James Smith</p>
                                <p>&lt;netflix.com-support.com&gt;</p>
                            </div>

                            <p class="text-xs text-gray-500">Sun 12.20.2022 10:38 PM</p>
                            <p class="text-xs text-gray-500">to me</p>
                        </div>
                    </div>
                    
                    
                    <div class="ps-22 pt-10" >
                        <p>Sir/Madam</p>
                        <br>
                        <p>your account has been temporarily suspended due to suspicious activity. To restore access, please click the link below and verify your information immediately: <span class="text-blue-600">Click to take action</span>. Failure to act within 24 hours will result in permanent acount deactivation.</p>
                        <br>
                        <button class="bg-blue-500 text-white p-3 rounded-md">CLICK HERE NOW!</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { RouterLink, RouterView } from 'vue-router'

</script>

<style scoped>

</style>
