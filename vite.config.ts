import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: "/AndyBittar-Portfolio/",  // Set this to your GitHub repo name
    plugins: [react()],
    optimizeDeps: {
        exclude: ['lucide-react'],
    },
});
