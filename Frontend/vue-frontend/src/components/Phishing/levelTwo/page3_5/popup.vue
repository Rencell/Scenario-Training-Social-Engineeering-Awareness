<template>
    <div ref="container" class="popup-wrapper flex-center">
        
        <button class="btn bg-blue-500 text-white" @click="show = !show">
            <img height="20" width="20" src="https://cdn.simpleicons.org/google/white" />
            &nbsp;Sign up with google
        </button>
        <div v-if="show" class="fake-browser" ref="popup" @mousedown="startDrag"
            :style="{ top: position.top + 'px', left: position.left + 'px' }">
            <div class="title-bar font-secondary flex gap-2"><img class="w-5 h-5 flex-center" src="https://cdn-icons-png.flaticon.com/512/720/720255.png" alt="">Sign in - Google Account</div>
            <div class="address-bar overflow-hidden text-nowrap">
                🔒 <span>https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dgo-to-account-button%26gar%3DWzEzMywiMjM2NzM2Il0%26sl%3Dtrue&ifkv=AXH0vVs6kQKbPn0Dh3I19ZY9zjyaSxK0UDd4qbj3n4kiIctHWVcy74wVSkuIR8vddVmVofLdOvBEow&service=accountsettings&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1359976643%3A1744037997509881</span>
            </div>
            <div class="login-content">
                <div class="w-full flex-center flex-col">
                <div class="w-32"><img src="https://images.icon-icons.com/2699/PNG/512/google_logo_icon_170071.png"
                        alt="">
                </div>
                <p class="">Sign in with Google</p>
                <i class="text-8xl text-gray-500 py-4 bi bi-person-circle"></i></div>
                <input class="border-gray-400" type="email" placeholder="Email or phone" />
                <input class="border-gray-400" type="password" placeholder="Password" />
                <button>Next</button>
                <p class="text-blue-500 mt-2">Need Help?</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const position = reactive({ top: 50, left: 50 })
const offset = reactive({ x: 0, y: 0 })
const dragging = ref(false)
const container = ref(null)
const show = ref(false)
const startDrag = (e) => {
    if (!e.target.classList.contains('title-bar')) return
    dragging.value = true
    offset.x = e.clientX - position.left
    offset.y = e.clientY - position.top

    document.addEventListener('mousemove', onDrag)
    document.addEventListener('mouseup', stopDrag)
}

const onDrag = (e) => {
    if (!dragging.value) return

    const bounds = container.value.getBoundingClientRect()
    const popupWidth = 400
    const popupHeight = 250

    let newLeft = e.clientX - offset.x
    let newTop = e.clientY - offset.y

    // Boundaries
    newLeft = Math.max(0, Math.min(newLeft, bounds.width - popupWidth))
    newTop = Math.max(0, Math.min(newTop, bounds.height - popupHeight))

    position.left = newLeft
    position.top = newTop
}

const stopDrag = () => {
    dragging.value = false
    document.removeEventListener('mousemove', onDrag)
    document.removeEventListener('mouseup', stopDrag)
}
</script>

<style scoped>
.popup-wrapper {
    width: 100%;
    height: 600px;
    position: relative;
    border: 2px dashed #ccc;
    overflow: hidden;
    margin-top: 20px;
}

.fake-browser {
    width: 400px;
    position: absolute;
    border: 1px solid #ccc;
    background: white;
    border-radius: 6px;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
}

.title-bar {
    background-color: #e1e1e1;
    padding: 8px;
    font-weight: bold;
    cursor: move;
    border-bottom: 1px solid #ccc;
}

.address-bar {
    background-color: #f6f6f6;
    padding: 8px;
    font-size: 14px;
    border-bottom: 1px solid #ccc;
    color: #333;
}

.address-bar span {
    color: green;
}

.login-content {
    padding: 20px;
}

.login-content input {
    width: 100%;
    border-radius: 2px;
    padding: 10px;

}

.login-content button {
    width: 100%;
    margin-top: 10px;
    padding: 10px;
    background: #1877f2;
    color: white;
    border: none;
    border-radius: 4px;
}
</style>
