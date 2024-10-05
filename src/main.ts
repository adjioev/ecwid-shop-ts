import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// Conditionally start the mock server in development mode or when using the --fake flag

async function enableMocking() {
    if (import.meta.env.VITE_USE_FAKE_API !== 'true') { return };
    const { worker } = await import('./mocks/browser');
    return worker.start()
}

import './style.css'
import App from './App.vue'
import router from './router';


const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App);
app.use(router);
app.use(pinia);
enableMocking().then(() => {
    app.mount('#app');
});
