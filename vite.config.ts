import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    optimizeDeps: {
        exclude: ['lucide-react'],
    },
    server: {
        port: 5174, // Change this to a different port (e.g., 5174)
        host: '0.0.0.0', // Optional: Bind to all network interfaces
    },
});