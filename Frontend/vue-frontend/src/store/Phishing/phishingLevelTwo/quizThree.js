import { defineStore } from "pinia";
import baseComp from "@/components/Phishing/levelTwo/QuizThree/base.vue";
import { ref } from "vue";

export const useQuizThree = defineStore("quiz3", () => {

  const component = ref(baseComp);

  const setPage = (value) => {
    component.value = value;
  };

  return { setPage, component};
});
