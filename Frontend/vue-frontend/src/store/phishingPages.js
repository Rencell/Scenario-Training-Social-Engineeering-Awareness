import { defineStore } from 'pinia';
import { computed, ref} from 'vue';

export const useComponentStore = defineStore('story', () => {

    const currentPage = ref(parseInt(localStorage.getItem('phishingPage')) || 0);

    const setPage = (page) => {
        currentPage.value = page
        localStorage.setItem('phishingPage', page);
    }


    return { currentPage, setPage};
});


export const useEmail = defineStore('email', () => {
    const currentEmail = ref(0);


    const setEmail = (email) => {
        
        currentEmail.value = email
    }
    

    return { currentEmail, setEmail};
});