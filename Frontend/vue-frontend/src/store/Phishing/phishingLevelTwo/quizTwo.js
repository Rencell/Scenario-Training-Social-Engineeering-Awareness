import { defineStore } from "pinia";
import baseComp from "@/components/Phishing/levelTwo/QuizTwo/base.vue";
import { ref } from "vue";

export const useQuizTwo = defineStore("quiz2", () => {
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
