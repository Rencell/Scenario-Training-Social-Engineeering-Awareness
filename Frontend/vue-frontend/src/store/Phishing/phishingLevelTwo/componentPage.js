import { defineStore } from 'pinia';
import page1 from '@/views/Phishing/level_two/page1.vue'
import page2 from '@/views/Phishing/level_two/page2.vue'
import page3 from '@/views/Phishing/level_two/page3.vue'
import page4 from '@/views/Phishing/level_two/page4.vue'
import scenario1 from '@/views/Phishing/level_two/Scenario1.vue'
import quiz from '@/views/Phishing/level_two/Quiz1.vue'
import page5 from '@/views/Phishing/level_two/page5.vue'
import { computed, ref } from 'vue';


export const usePhishingTwo = defineStore('phishingTwo', () => {
    const phishingPageTwo = [
        {id: "page1", component: page1, nextPage: "page2", previousPage: "page1", pageStep: 1 },
        {id: "page2", component: page2, nextPage: "page3", previousPage: "page1", pageStep: 1 },
        {id: "page3", component: page3, nextPage: "page4", previousPage: "page2", pageStep: 1 },
        {id: "page4", component: page4, nextPage: "scenario1", previousPage: "page3", pageStep: 1 },
        {id: "scenario1", component: scenario1, nextPage: "quiz", previousPage: "page4", pageStep: 1 },
        {id: "quiz", component: quiz, nextPage: "page5", previousPage: "scenario1", pageStep: 1 },
        {id: "page5", component: page5, nextPage: "scenario1", previousPage: "quiz", pageStep: 1 },
    ]

    const currentPageId = ref(localStorage.getItem('phishingPageTwo') || "page1");
    const currentPage = computed(() => phishingPageTwo.find(p => p.id === currentPageId.value));

    const setPage = (page) => {
        currentPage.value = page
        localStorage.setItem('phishingPageTwo', page);
    }

    const nextPage = () => {
        currentPageId.value = currentPage.value.nextPage
        localStorage.setItem('phishingPageTwo', currentPageId.value);
    }
    const previousPage = () => {
        currentPageId.value = currentPage.value.previousPage
        localStorage.setItem('phishingPageTwo', currentPageId.value);
    }

    const getPage = () => {
        return currentPage.value.component
    }
    const getPageStep = () => {
        return currentPage.value.pageStep
    }
    return { currentPage, setPage, getPage, nextPage, previousPage, getPageStep};
})