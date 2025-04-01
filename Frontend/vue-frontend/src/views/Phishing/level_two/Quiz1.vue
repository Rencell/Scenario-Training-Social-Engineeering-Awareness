<template>
    <div class="flex h-full w-full flex-col rounded-xl bg-white-color text-black overflow-auto">
        <div
            class="shadow-xl bg-primary rounded-tr--xl flex w-full items-center justify-between rounded-tl-xl p-3 px-8 text-white">
            <div class="flex gap-2">
                <button class="hover:bg-primary-light hover:text-secondary rounded-md p-2">
                    <i class="bi bi-arrow-return-left"></i> Previous
                </button>
                <button class="hover:bg-primary-light hover:text-secondary rounded-md p-2"
                    onclick="my_modal_1.showModal()">
                    <i class="bi bi-info-circle-fill"></i> Instruction
                </button>
            </div>


        </div>

        <div class="grow grid place-items-center py-5 ">
            <div class="w-xl rounded-lg shadow-xl bg-white p-6 h-fit">
                
                <component :is="quiz.component"> </component>

            </div>
        </div>


    </div>

</template>

<script setup>

import baseComp from '@/components/Phishing/levelTwo/QuizOne/base.vue';

import { useQuiz } from '@/store/Phishing/phishingLevelTwo/quizOne';
const quiz = useQuiz();
quiz.setPage(baseComp);





</script>