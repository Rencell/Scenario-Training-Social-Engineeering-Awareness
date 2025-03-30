<template>
    <div class="w-dvw h-dvh flex flex-col font-primary bg-white-color">
        <div class="flex justify-between p-4 bg-white">
            <div>Menu</div>
            <div>Home</div>
        </div>
        <div class="grow p-5">
            <div class="p-4 flex gap-14 items-center">
                <div class="p-4 bg-primary w-fit rounded-lg"></div>
                <p class="font-semibold text-black">Phishing - Hook and Catch</p>
            </div>

            <div class="p-10">
                <p class="text-2xl font-bold text-primary">LEVEL OVERVIEW</p>
                <div class="flex">
                    <RouterLink
                        :to="{ name: 'phishing' }"
                        class="flex items-center flex-col gap-4 hover:bg-primary/30 hover:transition-all transition-all p-4 rounded-xl cursor-pointer py-5 pb-7">
                        <div class="w-60 text-center p-4 bg-primary rounded-xl font-semibold text-white text-xl">LEVEL 1
                        </div>
                        <div class="break-words font-semibold ">What is phishing</div>
                        <div class="relative w-25 h-25 flex items-center justify-center">
                            
                            <div class="absolute w-25 h-25 flex items-center justify-center bg-black rounded-full z-10 border-3 border-white-color">

                                <!-- Briefcase Icon -->
                                <svg class="w-10 h-10 text-white-color" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M10 2a2 2 0 00-2 2v2H5a3 3 0 00-3 3v3h20V9a3 3 0 00-3-3h-3V4a2 2 0 00-2-2h-4zm0 2h4v2h-4V4zM2 14v5a3 3 0 003 3h14a3 3 0 003-3v-5H2zm5 2h10v2H7v-2z">
                                    </path>
                                </svg>
                            </div>

                            <!-- Ribbon -->
                            <div class="absolute bottom-[-5px] flex -space-x-2 z-0">
                                <div class="w-10 h-5 bg-black transform rotate-115 ribbon" ></div>
                                <div class="relative top-3 w-7 h-5 bg-black transform rotate-90 ribbon" ></div>
                                <div class="w-10 h-5 bg-black transform rotate-65 ribbon"></div>
                            </div>
                        </div>
                    </RouterLink>
                    <RouterLink
                        :to="{ name: 'PhishingTwo' }"
                        class="flex items-center flex-col gap-4 hover:bg-primary/30 hover:transition-all transition-all p-4 rounded-xl cursor-pointer py-5">
                        <div class="w-60 text-center p-4 bg-primary rounded-xl font-semibold text-white text-xl">LEVEL 2
                        </div>
                        <div class="break-words font-semibold ">Website Phishing</div>
                        <div class="relative w-25 h-25 flex items-center justify-center">
                            
                            <div class="absolute w-25 h-25 flex items-center justify-center bg-gray-400 rounded-full z-10 border-3 border-white-color">

                                <!-- Briefcase Icon -->
                                <svg class="w-10 h-10 text-white-color" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M10 2a2 2 0 00-2 2v2H5a3 3 0 00-3 3v3h20V9a3 3 0 00-3-3h-3V4a2 2 0 00-2-2h-4zm0 2h4v2h-4V4zM2 14v5a3 3 0 003 3h14a3 3 0 003-3v-5H2zm5 2h10v2H7v-2z">
                                    </path>
                                </svg>
                            </div>

                            <!-- Ribbon -->
                            <div class="absolute bottom-[-5px] flex -space-x-2 z-0">
                                <div class="w-10 h-5 bg-gray-400 transform rotate-115 ribbon" ></div>
                                <div class="relative top-3 w-7 h-5 bg-gray-400 transform rotate-90 ribbon" ></div>
                                <div class="w-10 h-5 bg-gray-400 transform rotate-65 ribbon"></div>
                            </div>
                        </div>
                    </RouterLink>
                    <div
                        class="flex items-center flex-col gap-4 hover:bg-primary/30 hover:transition-all transition-all p-4 rounded-xl cursor-pointer py-5">
                        <div class="w-60 text-center p-4 bg-primary rounded-xl font-semibold text-white text-xl">LEVEL 3
                        </div>
                        <div class="break-words font-semibold ">Social Media</div>
                        <div class="relative w-25 h-25 flex items-center justify-center">
                            
                            <div class="absolute w-25 h-25 flex items-center justify-center bg-gray-400 rounded-full z-10 border-3 border-white-color">

                                <!-- Briefcase Icon -->
                                <svg class="w-10 h-10 text-white-color" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M10 2a2 2 0 00-2 2v2H5a3 3 0 00-3 3v3h20V9a3 3 0 00-3-3h-3V4a2 2 0 00-2-2h-4zm0 2h4v2h-4V4zM2 14v5a3 3 0 003 3h14a3 3 0 003-3v-5H2zm5 2h10v2H7v-2z">
                                    </path>
                                </svg>
                            </div>

                            <!-- Ribbon -->
                            <div class="absolute bottom-[-5px] flex -space-x-2 z-0">
                                <div class="w-10 h-5 bg-gray-400 transform rotate-115 ribbon" ></div>
                                <div class="relative top-3 w-7 h-5 bg-gray-400 transform rotate-90 ribbon" ></div>
                                <div class="w-10 h-5 bg-gray-400 transform rotate-65 ribbon"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="bg-gray-300 p-3 rounded-xl w-xl mt-0 m-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure amet ut vitae aliquid iusto. Atque porro
                animi eveniet necessitatibus asperiores numquam exercitationem, dicta delectus! Totam.
            </div>

            <div></div>
        </div>

    </div>
    <RouterView />
</template>

<script setup>

import { RouterLink, RouterView } from 'vue-router'

</script>

<style scoped>
.ribbon{
    clip-path: polygon(100% 0%, 75% 50%, 100% 100%, 0 100%, 6% 50%, 0 0);
}


</style>
