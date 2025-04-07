<template>
    <div class="bg-white-color flex h-full w-full flex-col overflow-auto rounded-xl text-black">
        <div class="bg-primary p-4">Home</div>
        <div class="flex w-full h-full flex-col items-center gap-4 py-4">


            <div class="h-full flex-center">
                    <component :is="quiz.component">

                    </component>
            </div>
        </div>
    </div>

</template>

<script setup>
import base from '@/components/Phishing/levelTwo/QuizThree/base.vue';
import { useQuizThree } from '@/store/Phishing/phishingLevelTwo/quizThree';
const quiz = useQuizThree();
quiz.setPage(base);

</script>