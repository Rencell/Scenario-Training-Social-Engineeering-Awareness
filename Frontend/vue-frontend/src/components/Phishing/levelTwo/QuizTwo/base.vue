<template>
    <div class="h-full flex-center">
        <div class="w-xl rounded-lg shadow-xl bg-white p-6 h-fit ">

            <Strong class="text-xl ">Test Your Phishing Detection Skills</Strong>
            <p class="text-sm font-secondary py-5">Phishing attacks are one of the most common security challenges
                that people face today. This quiz
                will test your ability to identify phishing attempts from legitimate websites.
                <br> <br>
                You'll be presented with various website URLs and screenshots. Your task is to determine which ones
                are legitimate and which ones are phishing attempts.
            </p>

            <div class="w-full bg-primary-light p-3 rounded-lg ">
                <strong>How to play?</strong>
                <div class="font-secondary text-sm pt-3">
                    <ul class="list-disc list-inside space-y-1 text-gray-700">
                        <li>You'll see a series of website examples.</li>
                        <li>For each example, decide if it's legitimate or a phishing attempt.</li>
                        <li>Click on the appropriate button to make your selection.</li>
                        <li>Get immediate feedback on your answers.</li>
                        <li>See your final score at the end.</li>
                    </ul>
                </div>
            </div>

            <div class="py-5 flex justify-between">
                <BaseButton >Previous</BaseButton>
                <BaseButton :click="gotoQuiz">Next</BaseButton>
            </div>
        </div>
    </div>




</template>

<script setup>
import { useQuizTwo } from '@/store/Phishing/phishingLevelTwo/quizTwo';
import BaseButton from '@/components/UI/BaseButton.vue';
import quizez from './quiz.vue';
const quiz  = useQuizTwo();

const gotoQuiz = () => {
    quiz.setPage(quizez)
    return quiz.component
}


</script>