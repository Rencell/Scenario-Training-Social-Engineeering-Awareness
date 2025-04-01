import { defineStore } from "pinia";
import baseComp from "@/components/Phishing/levelTwo/QuizOne/base.vue";
import { ref } from "vue";

export const useQuiz = defineStore("quiz", () => {
  const answer = ref("");
  const answer_number = ref(0);
  const all_answers = ref([]);
  const component = ref(baseComp);
  const revealQuizzes = ref(false);

  const setPage = (value) => {
    component.value = value;
  };

  return { setPage, component, revealQuizzes, answer, answer_number, all_answers };
});
