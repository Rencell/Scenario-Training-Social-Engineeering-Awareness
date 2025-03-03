<template>
    <div class="w-dvw h-dvh bg-[#F6F6F6] flex flex-col  text-white">
        <div class="w-full p-3 bg-primary-own flex justify-between items-center px-8">

            Menu

            <div class="flex gap-5 items-center">
                < Leave Scenario <button class="rounded-md bg-white text-[#75BD3D] p-1 px-5">Submit</button>
            </div>

        </div>

        <div class="flex p-8 items-center text-black gap-4">
            <div class="p-4 rounded w-fit bg-primary-own"></div>
            Sam goes to the facebook page, however he can’t validate if it is phishing website or not. Can you spot it?
        </div>

        <div class="flex flex-col h-full">
            <div class="w-fit bg-[#44475A] rounded-tl-lg rounded-tr-lg p-2 px-3 flex gap-2" style="margin-left: 10px;"> 
                <i class="bi bi-facebook"></i> <div>Log into Facebook</div>
            </div>
            <div class="p-2 bg-[#44475A] flex items-center h-fit">
                <div class="flex gap-3 text-xl">
                    <i class="bi bi-arrow-left"></i>
                    <i class="bi bi-arrow-right"></i>
                    <i class="bi bi-arrow-repeat"></i>
                </div>

                <div class="grow px-5">
                    <input type="text" class="bg-gray-800 rounded-full w-full ps-2 p-1" value="Facebook.com"> 

                </div>
            </div>
            <div class="bg-gray-200 grow-1 flex justify-center items-center flex-col ">
                <div class="w-44 p-5"><img src="/Images/Facebook_logo.png" alt=""></div>
                <div class="w-96 bg-white flex flex-col gap-3 p-3 rounded-lg shadow-lg">

                    <div class="text-center text-black py-3">Log into Facebook</div>
                    <input type="text" class="border-[0.5px] placeholder:text-gray-400 border-gray-300 p-2 rounded-md" placeholder="Email or phone number">
                    <input type="text" class="border-[0.5px]  placeholder:text-gray-400 border-gray-300 p-2 rounded-md" placeholder="Password">
                    <button class="bg-blue-500 p-2 rounded">Login</button>
                    <div class="text-blue-700 flex text-xs justify-center gap-3 py-3" >
                        <div style="font-weight: 500;">forgot account?</div>
                        <div style="font-weight: 500;">Sign up for Facebook</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { RouterLink, RouterView } from 'vue-router'

</script>

<style scoped></style>
