import { defineStore } from 'pinia';
import { computed, ref, watch} from 'vue';
import { emailData } from "@/composables/Phishing/pageSix/emails";

import videoskit from '@/views/Phishing/videoskit.vue'
import page1 from '@/views/Phishing/page1.vue'
import page2 from '@/views/Phishing/page2.vue'
import page3 from '@/views/Phishing/page3.vue'
import page4 from '@/views/Phishing/page4.vue'
import page5 from '@/views/Phishing/page5.vue'
import page6 from '@/views/Phishing/page6.vue'
import page7 from '@/views/Phishing/page7.vue'
import page8 from '@/views/Phishing/page8.vue'
import page9 from '@/views/Phishing/page9.vue'
import importantnote from '@/views/Phishing/ImportantNote.vue'
import tooldefense from '@/views/Phishing/ToolsDefense.vue'

export const useComponentStore = defineStore('story', () => {
    // const componentPages = [videoskit, page1,page2, page3, page4, page5, page6,page7, page8]

    const phishingPages = [
        {id: "videoskit", component: videoskit, nextPage: "page1", previousPage: null },
        { id: "page1", component: page1, nextPage: "page2", previousPage: "videoskit" },
        { id: "page2", component: page2, nextPage: "page3", previousPage: "page1" },
        { id: "page3", component: page3, nextPage: "page4", previousPage: "page2" },
        { id: "page4", component: page4, nextPage: "page5", previousPage: "page3" },
        { id: "page5", component: page5, nextPage: "page6", previousPage: "page4" },
        { id: "page6", component: page6, nextPage: "importantnote", previousPage: "page5" },
        { id: "importantnote", component: importantnote, nextPage: "page7", previousPage: "page6" },
        { id: "page7", component: page7, nextPage: "page8", previousPage: "importantnote" },
        { id: "page8", component: page8, nextPage: "tooldefense", previousPage: "page7" },
        { id: "tooldefense", component: tooldefense, nextPage: "page9", previousPage: "page8" },
        { id: "page9", component: page9, nextPage: null, previousPage: "tooldefense" }
    ]

    const currentPageId = ref(localStorage.getItem('phishingPage') || "videoskit");
    const currentPage = computed(() => phishingPages.find(p => p.id === currentPageId.value));

    const setPage = (page) => {
        currentPage.value = page
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
    return { currentPage, setPage, getPage, nextPage, previousPage};
});


export const useEmail = defineStore('email', () => {
    const listEmails = ref(emailData.map(email => ({ ...email, isScam: true })))
    const currentEmail = ref(0);


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