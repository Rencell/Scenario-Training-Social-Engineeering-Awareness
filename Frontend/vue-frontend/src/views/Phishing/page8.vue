<template>
    <div class="w-full h-full rounded-2xl bg-[#F6F6F6] flex flex-col  text-white overflow-auto">
        <div @click="setCurrentPage(7)" class="w-full p-3 bg-primary flex justify-between items-center px-8 rounded-tr-xl rounded-tl-xl">

            Previous

            <div class="flex gap-5 items-center">
                &lt; Leave Scenario <button class="rounded-md bg-white text-[#75BD3D] p-1 px-5">Submit</button>
            </div>

        </div>

        <div class="flex p-8 items-center text-black gap-4">
            <div class="p-4 rounded w-fit bg-primary"></div>
            Your task is to identify the Phishing tactics used by the bad hacker
        </div>

        <div class="flex justify-center">


            <div class="bg-white w-4xl p-5 text-black rounded-md border-[0.5px] border-gray-200 flex flex-col gap-5">

                <div class="flex justify-between ">
                    <div class="flex items-center gap-5">
                        <div class="p-2 py-1 rounded-md h-fit bg-black text-blue-400">m</div>
                        <div>
                            <h1>Mike</h1>
                            <h1>Quotation required now</h1>
                        </div>
                    </div>

                    <div class="place-content-center text-xs">11:14 PM</div>
                </div>

                <div class="p-5 rounded-lg bg-gray-200">
                    <div class="py-4"><i class="bi bi-shield-exclamation text-blue-500 text-7xl"></i></div>
                    
                    <div>Government-backed attackers may be trying to steal your password</div>
                    <br>
                    <div class="text-xs">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis at ex impedit asperiores nisi doloribus ullam aliquid obcaecati totam vel sed quod amet perspiciatis adipisci dolorum facilis atque, quidem animi. Adipisci natus porro aspernatur temporibus soluta, possimus magnam vitae illo. Officia sunt neque consequuntur illo hic. Sed excepturi optio saepe?</div>
                    <br>
                    <button class="text-blue-600">Change Password</button>
                </div>
            </div>
        </div>

        <div class="flex flex-wrap justify-center pt-5">
            <div class="flex flex-wrap gap-2 justify-center">
                <button class="p-2 rounded-full bg-primary">Sense of urgency</button>
                <button class="p-2 rounded-full bg-primary">Generic Greetings</button>
                <button class="p-2 rounded-full bg-primary">Fake security update</button>
                <button class="p-2 rounded-full bg-primary">Different URL link</button>
                <button class="p-2 rounded-full bg-primary">Shared document</button>
                <button class="p-2 rounded-full bg-primary">Suspicious from email</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useComponentStore } from '@/store/phishingPages.js';

const ComponentStore = useComponentStore();
const setCurrentPage = (index) => {
  ComponentStore.setPage(index);
};

</script>

<style scoped></style>
