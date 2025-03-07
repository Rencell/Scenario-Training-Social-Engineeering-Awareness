<template>
    <div class="w-dvw h-dvh bg-[#F6F6F6] flex flex-col  text-white">
        <div class="w-full p-3 bg-primary-own flex justify-between items-center px-8">

            Menu

            <div class="flex gap-5 items-center">
                < Leave Scenario
                <button class="rounded-md bg-white text-[#75BD3D] p-1 px-5">Submit</button>
            </div>
            
        </div>

        <div class="flex p-8 items-center text-black gap-4 motion-preset-slide-right ">
            <div class="p-4 rounded w-fit bg-primary-own "></div>
            There is two email phishing among the emails, your task is to find it
        </div>

        <div class="flex justify-center motion-preset-slide-right ">
            <div class="flex w-7xl rounded-md shadow-md border-[0.5px] border-gray-200">
                
                <div class="grow text-black bg-white">
                    
                    <div class="flex justify-center items-center gap-8 text-[#75BD3D] py-2">
                        <div>INBOX (0)</div>
                        <div>SCAMBOX (0)</div>
                    </div>

                    <div class="flex justify-between p-5 border-t-[0.5px] border-gray-300">
                        <div class="flex items-center gap-5">
                            <div class="p-2 py-1 rounded-md h-fit bg-black text-blue-400">m</div>
                            <div>
                                <h1>Mike</h1>
                                <h1>Quotation required now</h1>
                            </div>
                        </div>

                        <div class="place-content-end text-xs">11:14 PM</div>
                    </div>
                    <div class="flex justify-between p-5 border-t-[0.5px] border-gray-300">
                        <div class="flex items-center gap-5">
                            <div class="p-2 py-1 rounded-md h-fit bg-black text-blue-400">m</div>
                            <div>
                                <h1>Mike</h1>
                                <h1>Quotation required now</h1>
                            </div>
                        </div>

                        <div class="place-content-end text-xs">11:14 PM</div>
                    </div>
                    <div class="flex justify-between p-5 border-t-[0.5px] border-gray-300">
                        <div class="flex items-center gap-5">
                            <div class="p-2 py-1 rounded-md h-fit bg-black text-blue-400">m</div>
                            <div>
                                <h1>Mike</h1>
                                <h1>Quotation required now</h1>
                            </div>
                        </div>

                        <div class="place-content-end text-xs">11:14 PM</div>
                    </div>
                    <div class="flex justify-between p-5 border-t-[0.5px] border-gray-300">
                        <div class="flex items-center gap-5">
                            <div class="p-2 py-1 rounded-md h-fit bg-black text-blue-400">m</div>
                            <div>
                                <h1>Mike</h1>
                                <h1>Quotation required now</h1>
                            </div>
                        </div>

                        <div class="place-content-end text-xs">11:14 PM</div>
                    </div>
                </div>
                <div class=" grow-4"> 
                    <div class="bg-gray-300 p-2 flex justify-end text-black gap-2 items-center">
                            This is Phishing scam <i class="bi bi-exclamation-circle-fill text-base text-red-500"></i>
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
