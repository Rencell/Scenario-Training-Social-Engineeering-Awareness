<template>
    <div class="bg-[#f3f4f6] text-black w-dvw h-dvh">
        <div class="bg-secondary flex gap-2 p-2 ">
            <div class="flex hover:bg-green-800 p-2 rounded gap-2 hover:cursor-pointer">
                <i class="bi bi-trophy-fill text-yellow-200"></i> 
                <p class="text-white">View Badges</p>

            </div>
        </div>
        <div class="bg-[url(/Images/stacked-peaks-haikei.png)] bg-bottom h-56"></div>

        
        <div class="w-dvw flex justify-center">
            <div class="grid justify-center grid-cols-3 gap-4 absolute top-35">
                
                <div class="bg-white h-fit rounded-lg w-80 shadow-xl"> 
                    <div class="bg-secondary h-40 rounded-tr-lg rounded-tl-lg bg-cover bg-center bg-[url(/Images/Category_Background/Phishing.png)]">
                       
                    </div>
                    <div class="p-7 flex flex-col gap-3">
                        <p class="font-medium text-xl" style="font-weight: 600;"> Phishing Attack</p>
                        <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <div class="pt-4">
                            <RouterLink :to="{ name: 'phishing' }" class="text-sm rounded-2xl border-[#75BD3D] text-[#75BD3D] border-2 p-2">Start Now!</RouterLink>
                        </div>
                    </div>
                </div>
                
        
            </div>
        </div>
    </div>
    
    <RouterView /> 
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>
<style scoped>




</style>
