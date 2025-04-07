import { defineStore } from 'pinia';
import { computed, ref} from 'vue';
import { emailData } from "@/composables/Phishing/levelOne/pageSix/emails";

import videoskit from '@/views/Phishing/level_One/videoskit.vue'
import page1 from '@/views/Phishing/level_One/page1.vue'
import page2 from '@/views/Phishing/level_One/page2.vue'
import page3 from '@/views/Phishing/level_One/page3.vue'
import page4 from '@/views/Phishing/level_One/page4.vue'
import page5 from '@/views/Phishing/level_One/page5.vue'
import page5_5 from '@/views/Phishing/level_One/page5_5.vue'
import page6 from '@/views/Phishing/level_One/page6.vue'
import page7 from '@/views/Phishing/level_One/page7.vue'
import page7_5 from '@/views/Phishing/level_One/page7_5.vue'
import page8 from '@/views/Phishing/level_One/page8.vue'
import page9 from '@/views/Phishing/level_One/ending.vue'
import importantnote from '@/views/Phishing/level_One/ImportantNote.vue'
import tooldefense from '@/views/Phishing/level_One/ToolsDefense.vue'

export const useComponentStore = defineStore('story', () => {
    // const componentPages = [videoskit, page1,page2, page3, page4, page5, page6,page7, page8]

    const phishingPages = [
        {id: "videoskit", component: videoskit, nextPage: "page1", previousPage: null, pageStep: 1, pageStart: "videoskit" },
        { id: "page1", component: page1, nextPage: "page2", previousPage: "videoskit", pageStep: 2, pageStart: "page1" },
        { id: "page2", component: page2, nextPage: "page3", previousPage: "page1", pageStep: 2, pageStart: "page1" },
        { id: "page3", component: page3, nextPage: "page4", previousPage: "page2", pageStep: 3, pageStart: "page3" },
        { id: "page4", component: page4, nextPage: "page5", previousPage: "page3", pageStep: 4, pageStart: "page4" },
        { id: "page5", component: page5, nextPage: "page5_5", previousPage: "page4", pageStep: 4, pageStart: "page4" },
        { id: "page5_5", component: page5_5, nextPage: "page6", previousPage: "page5", pageStep: 4, pageStart: "page4" },
        { id: "page6", component: page6, nextPage: "importantnote", previousPage: "page5_5", pageStep: 5, pageStart: "page6" },
        { id: "importantnote", component: importantnote, nextPage: "page7", previousPage: "page6", pageStep: 5, pageStart: "page6" },
        { id: "page7", component: page7, nextPage: "page7_5", previousPage: "importantnote", pageStep: 6, pageStart: "page7" },
        { id: "page7_5", component: page7_5, nextPage: "page8", previousPage: "page7", pageStep: 6, pageStart: "page7" },
        { id: "page8", component: page8, nextPage: "tooldefense", previousPage: "page7_5", pageStep: 7, pageStart: "page8" },
        { id: "tooldefense", component: tooldefense, nextPage: "page9", previousPage: "page8", pageStep: 8, pageStart: "tooldefense" },
        { id: "page9", component: page9, nextPage: 'completed', previousPage: "tooldefense", pageStep: 9, pageStart: "page9" },
    ]

    const currentPageId = ref(localStorage.getItem('phishingPage') || "videoskit");
    const currentPage = computed(() => phishingPages.find(p => p.id === currentPageId.value));

    const setPage = (page) => {
        currentPageId.value = page
        localStorage.setItem('phishingPage', page);
    }

    const nextPage = () => {
        currentPageId.value = currentPage.value.nextPage
        localStorage.setItem('phishingPage', currentPageId.value);
    }
    const previousPage = () => {
        currentPageId.value = currentPage.value.previousPage
        localStorage.setItem('phishingPage', currentPageId.value);
    }

    const getPage = () => {
        return currentPage.value.component
    }
    const getPageStep = () => {
        return currentPage.value.pageStep
    }
    const getPageStart = () => {
        return currentPage.value.pageStart
    }
    return { currentPage, setPage, getPage, nextPage, previousPage, getPageStep, getPageStart, phishingPages};
});


export const useEmail = defineStore('email', () => {
    const listEmails = ref(emailData.map(email => ({ ...email, isScam: true })))
    const currentEmail = ref(999);


    const setEmail = (email) => {
        currentEmail.value = email
    }
    
    const getListEmails = () => {
        return listEmails
    }

    const isPhishing = (index) => {
        listEmails.value[index].isScam = false;
        setEmail(999);
    }
    const isNotPhishing = (index) => {
        listEmails.value[index].isScam = true;
        setEmail(999);
    }

    const resetState = () => {
        
        listEmails.value.map(email => email.isScam = true);
    }

    const hasScam = computed(() => {
        return listEmails.value.some( scam => scam.isScam === false)
    }) 
    
    const listPhishing = (() => {
        return listEmails.value.filter( email => email.isPhishing === true).length
    })

    const isEqualPhishing = computed(() => {

        const list_length_email = listEmails.value.length
        const total_correct_answer = listEmails.value.filter( email =>  email.isScam !== email.isPhishing).length
        const convert_percentage = (total_correct_answer / list_length_email) * 100
        return convert_percentage.toFixed(2)
    }) 
    

    return { currentEmail, setEmail, listEmails, getListEmails, isPhishing, isNotPhishing, hasScam, isEqualPhishing, listPhishing, resetState};
});