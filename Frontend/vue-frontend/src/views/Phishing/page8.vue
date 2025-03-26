<template>
    <div class="w-full h-full rounded-2xl bg-[#F6F6F6] flex flex-col text-white overflow-auto pb-10">
        <div class="w-full p-3 bg-primary flex justify-between items-center px-8 rounded-tr-xl rounded-tl-xl">

            <div @click="ComponentStore.previousPage()">Previous</div>

            <div class="flex gap-5 items-center">
                &lt; Leave Scenario 
                <button v-if="!quizCompleted" class="rounded-md bg-primary text-white psm px-5">Submit</button>
                <button v-else  @click="ComponentStore.nextPage()" class="rounded-md bg-primary text-primary p-1 px-5 bg-white">Next</button>
            </div>

        </div>

        <div class="flex p-8 items-center text-black gap-4">
            <div class="p-4 rounded w-fit bg-primary"></div>
            Your task is to identify the Phishing tactics used by the bad hacker
        </div>

        <div class="flex justify-center">
            <div class="flex flex-col">
                <ul class="steps pb-5 px-30">
                    <li class="step " :class="clickme >= 0 ? 'step-primary' : ''"></li>
                    <li class="step " :class="clickme >= 1 ? 'step-primary' : ''"></li>
                    <li class="step " :class="clickme >= 2 ? 'step-primary' : ''"></li>
                    <li class="step " :class="clickme >= 3 ? 'step-primary' : ''"></li>
                    <li class="step " :class="clickme >= 4 ? 'step-primary' : ''"></li>
                </ul>

                <div
                    class="bg-white w-4xl p-5 text-black rounded-md border-[0.5px] border-gray-200 flex flex-col gap-5 text-sm">

                    <div v-if="!quizCompleted">
                        <div v-if="question.type == 'email'">
                            <div class="flex justify-between ">
                                <div class="flex items-center gap-5">
                                    <div class="p-2 py-1 rounded-md h-fit bg-black text-blue-400">m</div>
                                    <div class="flex gap-2 flex-col font-secondary mb-4">
                                        <h1>{{ question.sender }}</h1>
                                        <h1>{{ question.subject }}</h1>
                                    </div>
                                </div>
    
                                <div class="place-content-center text-xs">{{ question.date }}</div>
                            </div>
    
                            <div class="p-5 rounded-lg border-1 border-gray-300 motion-preset-fade">
                                <div class="py-4" v-html="question.content">
    
    
                                </div>
    
                            </div>
                        </div>
                        <div v-if="question.type === 'sms'"
                            class="rounded-md overflow-hidden mb-4 max-w-xs mx-auto  motion-preset-fade">
                            <div class="bg-gray-800 p-2 text-white text-center text-sm">
                                {{ question.sender }}
                            </div>
                            <div class="bg-gray-200 p-4 min-h-[100px] flex flex-col">
                                <div class="bg-white rounded-lg p-3 shadow-sm self-start max-w-[90%] mb-2">
                                    <p class="text-sm">{{ question.content }}</p>
                                    <p class="text-xs text-gray-500 text-right mt-1">{{ question.date }}</p>
                                </div>
                            </div>
                        </div>
    
                        <div class="flex flex-wrap flex-col justify-center items-center ">
                            <i class="text-xs text-gray-400 mb-5 ">Select all that apply</i>
                            <div class="flex flex-wrap gap-2 justify-center w-xl ">
                                <button v-for="(option, index) in question.options" @click="selectAnswer(option)"
                                    :key="index"
                                    :class="[selectedOption.includes(option) ? 'bg-primary text-white' : 'bg-white-color text-gray-500']"
                                    class="font-medium p-3 rounded-full  shadow-sm text-sm hover:bg-primary/90 hover:text-white">
                                    {{ option }}</button>
                            </div>
                        </div>
    
    
    
                        <div class="flex justify-between w-full">
                            <a @click="prevQuestion()"
                                class="bg-primary border-secondary border-b-3 shadow-sm text-white px-4 py-2 rounded-xl">Previous</a>
                            <a @click="nextQuestion()" class="border-b-3 shadow-sm text-white px-4 py-2 rounded-xl"
                                :class="[selectedOption.length === 0 ? 'bg-primary-light border-secondary/50' : 'bg-primary border-secondary']">Next
                                Question</a>
    
    
                        </div>
                    </div>


                    <div class="text-center" v-else>
                        <h2 class="text-2xl font-bold text-green-700 mb-4">Quiz Completed!</h2>
                        <p class="text-lg mb-2">Your Score: <span class="font-bold">2 / 5</span></p>
                        <p class="text-gray-600 mb-6">
                            2
                        </p>
                        <div class="mb-6 text-left bg-primary/20 p-4 rounded-md">
                            <h3 class="font-semibold mb-2">Tips to Identify Phishing:</h3>
                            <ul class="list-disc pl-5 space-y-1 text-sm">
                                <li>Check sender email addresses carefully for misspellings</li>
                                <li>Be suspicious of urgent requests or threats</li>
                                <li>Hover over links before clicking to see the actual URL</li>
                                <li>Be wary of offers that seem too good to be true</li>
                                <li>Don't provide personal information in response to unsolicited messages</li>
                            </ul>
                        </div>
                        <div class="flex gap-3 justify-center">
                            <button class="bg-primary text-white font-medium hover:bg-primary/90 p-3 rounded-xl border-b-3 border-secondary">
                                Take Quiz Again
                            </button>
                            <button class="bg-primary text-white font-medium hover:bg-primary/90 p-3 rounded-xl border-b-3 border-secondary">
                                Review Answers
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>



    </div>
</template>

<script setup>
import { useComponentStore } from '@/store/phishingPages.js';
import { computed, ref } from 'vue';
import { QuizQuestion } from '@/composables/Phishing/pageEight/index'
const ComponentStore = useComponentStore();

const selectedOption = ref([])
const clickme = ref(0);
const question = computed(() => QuizQuestion[clickme.value]);
const userAnswers = ref([])
const quizCompleted = ref(false);


const selectAnswer = (option) => {
    if (!selectedOption.value.includes(option)) {
        selectedOption.value.push(option);
    } else {
        selectedOption.value = selectedOption.value.filter(item => item !== option);
    }
}

const isCorrect = computed(() => {
    return (
        selectedOption.value.length == question.value.correctAnswer.length &&
        question.value.correctAnswer.every(option => selectedOption.value.includes(option))
    );
})

const nextQuestion = () => {
    if (selectedOption.value.length == 0) return;

    userAnswers.value[clickme.value] = selectedOption.value;

    if(clickme.value < QuizQuestion.length - 1){
       
        clickme.value++;
        selectedOption.value = userAnswers.value[clickme.value] || [];
    }else{
        
        quizCompleted.value = true
    }
        

}

const prevQuestion = () => {
    if (selectedOption.value.length < 0) return;

    clickme.value--;
    selectedOption.value = userAnswers.value[clickme.value] || [];
}

</script>

<style scoped></style>
