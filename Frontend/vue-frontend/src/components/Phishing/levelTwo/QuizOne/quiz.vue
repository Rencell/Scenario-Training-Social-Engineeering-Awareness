<template>
    <div class="flex justify-between items-center mb-6 ">
        <div>
            <span class="text-sm text-gray-500">Question</span>
            <h2 class="text-xl font-bold">1 of 1</h2>
        </div>
        <div>
            <span class="text-sm text-gray-500">Score</span>
            <p class="text-xl font-bold">1 / 2</p>
        </div>
    </div>

    <div>
        <div class="mb-6 ">


            <h3 class="text-lg font-semibold mb-2">Is this website legitimate or a phishing attempt?</h3>

            <div class="border rounded-lg flex-center p-4 mb-4">
                <div>
                    <p class="font-mono text-lg break-all">{{ quize.url }}</p>
                </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
                <button @click="quiz.answer = 'legit'" :disabled="quiz.revealQuizzes"
                    :class="quiz.answer === 'legit' ? 'bg-primary text-white' : 'bg-white text-black'"
                    class="flex-1 border border-gray-300 rounded-sm bg-background hover:bg-primary hover:text-primary-foreground h-10 px-4 py-2">
                    Legitimate
                </button>
                <button @click="quiz.answer = 'phishing'" :disabled="quiz.revealQuizzes"
                    :class="quiz.answer === 'phishing' ? 'bg-primary text-white' : 'bg-white text-black'"
                    class="flex-1 border border-gray-300 rounded-sm hover:bg-primary hover:text-primary-foreground h-10 px-4 py-2">
                    Phishing
                </button>
            </div>

            <div class="mt-5" v-if="quiz.revealQuizzes">
                <div v-if="quiz.answer == quize.answer" class="p-4 rounded-sm bg-primary/20 outline-1 text-primary">
                    <strong>Correct!</strong>
                    <p class="text-sm font-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                        similique laboriosam sed suscipit hic, fuga esse in adipisci tenetur maiores.

                    </p>
                </div>
                <div v-else class="p-4 rounded-sm bg-error/20 outline-1 text-error">
                    <strong>Good try!</strong>
                    <p class="text-sm font-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                        similique laboriosam sed suscipit hic, fuga esse in adipisci tenetur maiores.

                    </p>
                </div>
            </div>
        </div>

        <div class="flex justify-between">
            <BaseButton :click="previous">Previous</BaseButton>

            <BaseButton v-if="data.length - 1 > quiz.answer_number" :with-hover="quiz.answer !== ''" :click="next">Next
            </BaseButton>

            <BaseButton v-else :click="next">Next</BaseButton>
        </div>
    </div>


</template>

<script setup>
import BaseButton from '@/components/UI/BaseButton.vue';
import { computed } from 'vue';
import { useQuiz } from '@/store/Phishing/phishingLevelTwo/quizOne';
import base from './base.vue';
import result from './result.vue';



const quiz = useQuiz()



const data = [
    {
        url: 'hsahdsads',
        answer: 'phishing'
    },
    {
        url: '2',
        answer: 'phishing'
    },
]
const quize = computed(() => data[quiz.answer_number]);

const next = () => {
    if (quiz.answer_number >= data.length - 1) gotoResult();
    quiz.all_answers[quiz.answer_number] = quiz.answer

    quiz.answer_number++;
    quiz.answer = quiz.all_answers[quiz.answer_number] || ''
}
const previous = () => {
    if (quiz.answer_number <= 0) gotoQuiz();
    quiz.all_answers[quiz.answer_number] = quiz.answer

    quiz.answer_number--;
    quiz.answer = quiz.all_answers[quiz.answer_number] || ''
}

const gotoQuiz = () => {
    quiz.setPage(base)
    return quiz.component
}
const gotoResult = () => {
    quiz.setPage(result)
    return quiz.component
}

</script>