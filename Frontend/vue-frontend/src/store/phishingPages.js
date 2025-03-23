import { defineStore } from 'pinia';
import { computed, ref} from 'vue';
import { emailData } from "@/composables/Phishing/pageSix/emails";

export const useComponentStore = defineStore('story', () => {

    const currentPage = ref(parseInt(localStorage.getItem('phishingPage')) || 0);

    const setPage = (page) => {
        currentPage.value = page
        localStorage.setItem('phishingPage', page);
    }


    return { currentPage, setPage};
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

    const hasScam = computed(() => {
        return listEmails.value.some( scam => scam.isScam === false)
    }) 
    
    const listPhishing = (() => {
        return listEmails.value.filter( email => email.isPhishing === true).length
    })

    const isEqualPhishing = computed(() => {
        return listEmails.value.filter( email =>  email.isScam === false && email.isPhishing === true).length
    }) 

    return { currentEmail, setEmail, listEmails, getListEmails, isPhishing, isNotPhishing, hasScam, isEqualPhishing, listPhishing};
});