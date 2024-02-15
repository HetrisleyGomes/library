import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const IP_ADDRESS = ip.address(); 
function ippublico(){
    return name === 'public' ? ip.isPrivate(details.address): ip.isPublic(details.address);
}
createApp(App).use(router).mount('#app')
