import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: "/AndyBittar-Portfolio/",  // MUST match your repo name exactly
    plugins: [react()],
    optimizeDeps: {
        exclude: ['lucide-react'],
    },
});
