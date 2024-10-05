import { defineConfig } from 'vitest/config';
import path from "path";

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    test: {
        environment: 'jsdom', // or 'node', based on your test requirements
    }
});