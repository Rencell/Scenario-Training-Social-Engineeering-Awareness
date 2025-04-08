<template>
    <div class="h-full w-full bg-white-color rounded-xl overflow-hidden flex justify-center">
        <div class="h-full flex flex-col justify-end w-full relative">

            <div class="flex flex-col justify-between">
                <div class="text-center text-gray-800">
                    <h1 class=" text-5xl font-semibold pb-5">Social Media Phishing</h1>
                    <div class="font-secondary flex justify-center pb-10">
                        <p class="w-xl text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis repellendus
                            illo a itaque nihil odit fugit. Esse doloribus nulla dolor?</p>
                    </div>

                    <div class="flex gap-4 justify-center">
                        <labelVue :index="'1'">Lorem ipsum dolor sit amet.</labelVue>
                        <labelVue :index="'1'">Lorem ipsum dolor sit amet.</labelVue>
                        <labelVue :index="'1'">Lorem ipsum dolor sit amet.</labelVue>
                    </div>
                </div>
            </div>



            <div class="flex justify-around px-10">
                <div class="flex gap-4 flex-col pb-10">
                    <labelVue :index="'1'">Lorem ipsum dolor sit amet.</labelVue>
                    <labelVue :index="'1'">Lorem ipsum dolor sit amet.</labelVue>
                    <labelVue :index="'1'">Lorem ipsum dolor sit amet.</labelVue>
                </div>
                <div class="w-lg flex items-end">
                    <img src="/Images/Phishing/phishingThree/page1/social-media.webp " alt="">
                </div>

                <div class="flex gap-4 flex-col">
                    <labelVue :index="'1'">Lorem ipsum dolor sit amet.</labelVue>
                    <labelVue :index="'1'">Lorem ipsum dolor sit amet.</labelVue>
                    <labelVue :index="'1'">Lorem ipsum dolor sit amet.</labelVue>
                </div>

            </div>
            <div class="bg-primary h-23 flex justify-end items-center pe-4">
                <BaseButton :theme="'white'" :click="phishingThree.nextPage">Next</BaseButton>

            </div>
        </div>

    </div>
</template>


<script setup>
import BaseButton from '@/components/UI/BaseButton.vue';
import { usePhishingThree } from '@/store/Phishing/phishingLevelThree/componentPage';
import labelVue from '@/components/Phishing/levelThree/page1/label.vue';
const phishingThree = usePhishingThree();

</script>