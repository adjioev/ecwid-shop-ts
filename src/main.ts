import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// Conditionally start the mock server in development mode or when using the --fake flag
if (import.meta.env.VITE_USE_FAKE_API === 'true') {
    const { worker } = await import('./mocks/browser');
    worker.start();
}

import './style.css'
import App from './App.vue'
import router from './router';

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount('#app');
