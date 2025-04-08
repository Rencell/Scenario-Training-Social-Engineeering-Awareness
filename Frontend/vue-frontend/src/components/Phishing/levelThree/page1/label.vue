<template>
    <div class=" p-4 rounded-xl text-black text-center flex-center flex-col font-secondary relative">

        <div class="motion-preset-slide-up  absolute p-3 rounded-lg bg-white shadow-md -top-15 flex items-center flex-col"
            v-if="tiptool">
            <p>Lorem ipsum dolor sit amet.</p>
            <div class="triangle absolute -bottom-2 bg-white"></div>

        </div>
        <div @mouseenter="tiptool = true" @mouseleave="tiptool = false" class="flex-center flex-col cursor-pointer">
            <div class="w-5 h-5 flex-center bg-primary rounded-full text-white text-xs">{{ index
                }}</div>
            <div class="text-sm">
    
                <slot></slot>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';


const tiptool = ref(false)
const props = defineProps({
    index: String
})
</script>

<style scoped>
.triangle {
    width: 20px;
    aspect-ratio: 1/cos(30deg);
    clip-path: polygon(50% 100%, 100% 0, 0 0);

}
</style>