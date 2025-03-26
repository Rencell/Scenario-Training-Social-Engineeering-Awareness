<template>
    <div class="w-full h-full bg-black/25 absolute top-0" :class="{ 'hidden': !props.activeToolTip}">

        <div ref="shit" :class="{ 'hidden': !props.activeToolTip}" class="motion-preset-expand motion-duration-200 bg-white p-4 drop-shadow-2xl border-[#F1ECEC] border-1 w-fit absolute top-[365px] rounded-xl" 
            :style="
            { left: `${props.numberX + 10}px`, 
            top: (bull.bottom > props.screenY) ? `${props.numberY + -100}px` :  `${props.numberY + 30}px`}">
           
            <div class="w-60 pb-3 text-black">
                <slot></slot>
            </div>
            
            <div class="flex place-content-end">
                <button @click="hideTooltip" class="p-2 text-white bg-primary rounded-md">Close</button>
            </div>
        </div>
    </div>


</template>
<script setup>
import {  computed, nextTick, ref, watch } from 'vue';

const shit = ref(null)


const props = defineProps({
    activeToolTip: {
        type: Boolean,
        default: true
    },
    numberX: Number,
    numberY: Number,
    screenY: Number
})


const emit = defineEmits(
    ['update:activeToolTip']
    
);

function hideTooltip(){
    emit('update:activeToolTip', false)
}

const boundingBox = ref({});
watch(() => props.activeToolTip, async (newVal) => {
    if (newVal && shit.value) {
        await nextTick(); 
        boundingBox.value = shit.value.getBoundingClientRect();
    } else {
        boundingBox.value = {}; 
    }
});

const bull = computed(() => boundingBox.value);

</script>

<style scoped>
</style>