import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import page1 from '@/views/Phishing/level_three/page1.vue'


export const usePhishingThree = defineStore('phishingThree', () => {
    const phishingPageThree = [
        {id: "page1", component: page1, nextPage: "page1", previousPage: "page1", pageStep: 1 },
    ]

    const currentPageId = ref(localStorage.getItem('phishingPageThree') || "page1");
    const currentPage = computed(() => phishingPageThree.find(p => p.id === currentPageId.value));

    const setPage = (page) => {
        currentPage.value = page
        localStorage.setItem('phishingPageThree', page);
    }

    const nextPage = () => {
        currentPageId.value = currentPage.value.nextPage
        localStorage.setItem('phishingPageThree', currentPageId.value);
    }
    const previousPage = () => {
        currentPageId.value = currentPage.value.previousPage
        localStorage.setItem('phishingPageThree', currentPageId.value);
    }

    const getPage = () => {
        return currentPage.value.component
    }
    const getPageStep = () => {
        return currentPage.value.pageStep
    }
    return { currentPage, setPage, getPage, nextPage, previousPage, getPageStep};
})