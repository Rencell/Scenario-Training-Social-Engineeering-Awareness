<template>
  <div
    class="bg-white-color flex h-full w-full flex-col overflow-auto rounded-xl text-black"
  >
    <div class="bg-primary p-4">Home</div>
    <div class="flex w-full h-full flex-col items-center gap-4 py-4">
      <component :is="quiz.component">
        
      </component>
    </div>
  </div>
</template>

<script setup>
import base from '@/components/Phishing/levelTwo/QuizTwo/base.vue';
import { useQuizTwo } from '@/store/Phishing/phishingLevelTwo/quizTwo';
const quiz  = useQuizTwo();
quiz.setPage(base);

</script>
