<template>

    <button :class="[
                    customClass,
                    themes[props.theme], 
                    hovers
                    ]" 
        @click="enable">
        <slot></slot>
    </button>
</template>


<script setup>
import { computed } from 'vue';


const props = defineProps({
    click: Function,
    theme: {
        type: String,
        default: 'default'
    },
    customClass: {
        type: String,
        default: ''
    },
    withHover: {
        type: Boolean,
        default: true
    }
})  

const enable = computed(()=> {
    if(props.withHover){
        return props.click
    }else
        return null
})

const themes = {
    default: 'text-white bg-primary p-2 w-fit rounded-lg transition-all border-secondary border-b-4 shadow-md px-5',
    white: 'bg-white text-primary p-2 w-fit rounded-lg border-secondary border-b-4 shadow-md px-5 transition-all h-10',
}

const hovers = computed(() => {
    if(props.theme === "white"){
        
        if(props.withHover){
           return 'hover:border-b-1 hover:transition-all hover:bg-white-color cursor-pointer '
        }else{
            return 'bg-primary-light border-secondary/50'

        }
    }else{
        if(props.withHover){
           return 'hover:bg-secondary/80 hover:border-b-1 hover:transition-all cursor-pointer '
        }
        else{
            return 'bg-primary-light border-secondary/50'

        }
    }
});

</script>