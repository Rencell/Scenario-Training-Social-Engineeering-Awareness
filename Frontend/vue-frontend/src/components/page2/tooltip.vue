<template>
    <div class="w-dvw h-dvh absolute top-0" :class="{ 'hidden': !props.activeToolTip}">

        <div :class="{ 'hidden': !props.activeToolTip}" class="motion-preset-expand motion-duration-200 bg-white p-4 drop-shadow-2xl border-[#F1ECEC] border-1 w-fit absolute top-[365px] rounded-xl" 
            :style="{ left: `${props.numberX + 10}px`, top: `${props.numberY + 30}px` }">
            <div class="w-60 pb-3 text-black">
                <slot></slot>
            </div>
            
            <div class="flex place-content-end">
                <button @click="hideTooltip" class="p-2 text-white bg-primary-own rounded-md">Close</button>
            </div>
        </div>
    </div>


</template>
<script setup>
import { ref } from 'vue';


const props = defineProps({
    activeToolTip: {
        type: Boolean,
        default: true
    },
    numberX: Number,
    numberY: Number,
})

const emit = defineEmits(
    ['update:activeToolTip']
);

function hideTooltip(){
    emit('update:activeToolTip', false)
}

</script>

<style scoped>
</style>