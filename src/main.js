import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
const ToastOptions = {
    transition: "Vue-Toastification__bounce",
    position: "top-center",
    timeout: 3000,
    closeOnClick: true,
    pauseOnFocusLoss: false,
    pauseOnHover: false,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: "button",
    icon: true,
    rtl: false,
    maxToasts: 1,
    newestOnTop: true,
    filterBeforeCreate: (toast, toasts) => {
        if (toasts.filter(
        t => t.type === toast.type
        ).length !== 0) {
        // Returning false discards the toast
        return false;
        }
        // You can modify the toast if you want
        return toast;
    }
}

import VueFeather from 'vue-feather';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'


library.add(far,fas)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).component(VueFeather.name, VueFeather).use(store).use(router).use(Toast,ToastOptions).mount('#app')
