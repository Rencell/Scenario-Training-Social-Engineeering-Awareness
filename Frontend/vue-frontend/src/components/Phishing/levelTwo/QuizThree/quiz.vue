<template>
    <div class="w-fit rounded-lg shadow-xl bg-white p-6 h-fit">

        <div class="flex flex-col gap-6 w-xl">
            <!-- stage text -->
            <div class="p-4 bg-primary rounded-lg text-center text-white font-bold">
                Stage 1/5
            </div>
            <!-- test -->
            <div class="">
                <div class="grow flex gap-4 justify-between">
                    <div class="flex flex-col gap-1">
                        <transition-group name="fade" tag="div" class="flex gap-1">
                            <div class="font-semibold rounded-md h-fit" v-for="n in level_lives" :key="n">
                                <i class="bi bi-heart-fill text-red-500 text-3xl"></i>
                            </div>
                        </transition-group>
                    </div>

                    <div class="flex gap-4 w-80">

                        <div class=" grow bg-secondary/70 rounded-lg flex text-white border-b-4 border-[#18270C]">
                            <div
                                class="flex-1 bg-secondary p-2 flex items-center flex-col text-xs font-semibold rounded-s-lg">
                                <p>TIMER</p>
                                <p><i class="bi bi-alarm text-xl"></i></p>
                            </div>
                            <div class="flex-3 flex justify-end items-center text-4xl p-2 py-2 font-bold">
                                1:41
                            </div>
                        </div>
                        <div class="grow bg-secondary/70 rounded-lg flex text-white border-b-4 border-[#18270C]">
                            <div
                                class="flex-1 bg-secondary p-2 flex items-center flex-col text-xs font-semibold rounded-s-lg">
                                <p>POINTS</p>
                                <p><i class="bi bi-star text-xl"></i></p>
                            </div>
                            <div class="flex-3 flex justify-end items-center text-4xl p-2 py-2 font-bold">
                                0
                            </div>
                        </div>
                    </div>

                </div>

                <div class="grow flex flex-col gap-6 mt-10">
                    <!-- clue  -->
                    <div class=" flex-center p-4 motion-preset-expand" :key="currentLevel.answer">
                        <div class="text-xl font-secondary flex-center bg-secondary text-white transform -rotate-3 rounded-md border-white  border-4 p-4 shadow-xl w-72"
                            style="box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;">
                            {{ currentLevel.clues }}
                        </div>

                    </div>

                    <!-- Letter chose -->
                    <div class="flex justify-center gap-2">
                        <div @click="clearAnswer()"
                            class="cursor-pointer w-10 h-10 border-2  rounded-md flex items-center justify-center text-lg font-bold bg-secondary text-white">
                            <i class="bi bi-eraser"></i>
                        </div>
                        <div v-for="(letter, index) in userAnswer" :key="'answer-' + index"
                            :class="checkAnswer == 2 ? 'border-red-500 motion-preset-shake ' : 'border-primary'"
                            class="cursor-pointer w-10 h-10 border-2  rounded-md flex items-center justify-center text-lg font-bold"
                            @click="removeLetter(letter, index)">
                            {{ letter || '' }}
                        </div>
                    </div>


                    <!-- Letter Selection -->
                    <div class="grid grid-cols-8 gap-2 px-10">
                        <button v-for="(letter, index) in availableLetters" :key="'letter-' + index"
                            class="cursor-pointer w-10 h-10 p-0 text-lg font-semibold border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50"
                            :disabled="selectedLetterIndices.includes(index)" @click="selectLetter(letter, index)">
                            {{ letter }}
                        </button>
                    </div>

                    <div v-if="user_fail !== null">
                        <div class="p-2 ps-4 rounded-lg outline-1 text-sm flex justify-between">
                            <div v-if="user_fail === 'fail'">
                                <div class="text-red-500 font-semibold"><i class="bi bi-check-circle"></i> You lose, the correct is</div>
                                <i>"{{ currentLevel.completeProverb }}"</i>"
                            </div>
                            <div v-else>
                                <div class="text-green-500 font-semibold"><i class="bi bi-check-circle"></i> You are correct, impressive</div>
                                
                            </div>
                            
                            <BaseButton :click="increaseCurrentLevel">Next</BaseButton>
                        </div>

                    </div>
                </div>
            </div>

        </div>


    </div>


</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import BaseButton from '@/components/UI/BaseButton.vue';
const data = [
    {
        clues: "Don't judge the ___ by its cover",
        answer: "book",
        completeProverb: "Don't judge the book by its cover"
    },
    {
        clues: "Always, always read the ___ before you click.",
        answer: "URL",
        completeProverb: "Don't judge the book by its cover"
    },
]
const current_level_index = ref(0)
const increaseCurrentLevel = () => {
    
    current_level_index.value ++;

    if(current_level_index.value > data.length - 1){
        gotoResult();
    }
    setupLevel();
}
const userAnswer = ref([])
const selectedLetterIndices = ref([])
const availableLetters = ref([])
const level_lives = ref(0)
const user_fail = ref(null)
//computed
const currentLevel = computed(() => data[current_level_index.value])

const setupLevel = () => {
    const level = currentLevel.value;
    userAnswer.value = Array(level.answer.length).fill('');
    selectedLetterIndices.value = []
    level_lives.value = 3
    user_fail.value = null
    // Create available letters (answer + random letters)
    const answerLetters = level.answer.toUpperCase().split('')
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const randomLetters = []

    // Add random letters to make total of 16 letters
    while (randomLetters.length < 16 - answerLetters.length) {
        const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)]
        if (!answerLetters.includes(randomLetter) && !randomLetters.includes(randomLetter)) {
            randomLetters.push(randomLetter)
        }
    }

    availableLetters.value = [...answerLetters, ...randomLetters]
        .sort(() => Math.random() - 0.5)
}

onMounted(() => {
    setupLevel()
})

// Select a letter
const selectLetter = (letter, index) => {
    if(user_fail.value !== null) return;
    //   alert(selectedLetterIndices.value.findIndex(l => l === ''))

    const emptyIndex = userAnswer.value.findIndex(l => l === '')
    const emptyIndex2 = selectedLetterIndices.value.findIndex(l => l === '')
    if (emptyIndex !== -1) {
        if (emptyIndex2 !== -1) {
            userAnswer.value[emptyIndex] = letter
            selectedLetterIndices.value[emptyIndex2] = index
            return;
        }
        userAnswer.value[emptyIndex] = letter
        selectedLetterIndices.value.push(index)
    }
}

function clearAnswer() {
    userAnswer.value = Array(currentLevel.value.answer.length).fill('')
    selectedLetterIndices.value = []
}


//remove a letter
const removeLetter = (letter, index) => {
    if(user_fail.value !== null) return;
    userAnswer.value[index] = '';
    if (selectedLetterIndices.value[index + 1] == null) {
        selectedLetterIndices.value.splice(index, 1)
    } else
        selectedLetterIndices.value[index] = '';
}

//decrease lives


const checkAnswer = computed(() => {

    const isAnswerLengthMatch = selectedLetterIndices.value.length === currentLevel.value.answer.length

    if (isAnswerLengthMatch) {
        const hasEmptyletter = selectedLetterIndices.value.includes('');
        if (hasEmptyletter) {
            return 3;
        }if (userAnswer.value.join('') === currentLevel.value.answer.toUpperCase()) {
            return 1
        } else
            return 2
    }

    return 0;


})

watch(checkAnswer, (newVal) => {
    if (newVal === 2) {
        level_lives.value--;
        if (level_lives.value <= 0) {
            user_fail.value = 'fail';
        }
    } else if (newVal == 1) {
        user_fail.value = 'success';
    }
});
import { useQuizThree } from '@/store/Phishing/phishingLevelTwo/quizThree';
import result from './result.vue';
const quiz = useQuizThree();
const gotoResult = () => {
    quiz.setPage(result)
}

</script>


<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: all 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(0.5rem);
}
</style>