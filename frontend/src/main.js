import { createApp } from 'vue';
import App from './App.vue';
import router from '../router'; // ✅ This now works
import 'animate.css';

createApp(App)
    .use(router)
    .mount('#app');