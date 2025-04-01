<template>

    <dialog ref="modal" class="modal">
    <div class="modal-box ">
        <component :is="gotoComponent" v-model="toggle"></component>
    </div>
    </dialog>
</template>

<script setup>

import { computed, onMounted, ref } from 'vue';
import warning from './warning.vue';
import modalCorrect from './modalCorrect.vue';
import modalWrong from './modalWrong.vue';
const toggle = ref(0)

const gotoComponent = computed(() => {
    if(toggle.value == 1) return modalCorrect
    else if(toggle.value == 2) return modalWrong
    else return warning
})


const modal = ref(null);

onMounted(() => {
    modal.value.showModal()
})

</script>