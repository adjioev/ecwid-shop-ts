/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly STORE_ID: string;
    readonly TOKEN: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}