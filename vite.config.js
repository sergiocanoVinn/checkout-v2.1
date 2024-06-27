// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { terser } from 'rollup-plugin-terser'; 

const outDir = './checkout-ui-custom'; // directorio de salida
const src = './src/App';
const input = { //nombres para el directorio de salida
    "checkout-confirmation-custom.js": `${src}/checkout-confirmation-custom.js`,
    "checkout-confirmation-custom.css": `${src}/checkout-confirmation-custom.scss`,

    "checkout-instore-custom.js": `${src}/checkout-instore-custom.js`,
    "checkout-instore-custom.css": `${src}/checkout-instore-custom.scss`,

    "checkout6-custom.js": `${src}/checkout6-custom.js`,
    "checkout6-custom.css": `${src}/checkout6-custom.scss`,
}

export default defineConfig({
    plugins: [react()],
    css: {
        preprocessorOptions: {
            scss: { implementation: require('sass')}
        }
    },
    build: {
        minify: true,
        sourcemap: false, 
        outDir,
        assetsDir: '',
        manifest: false,
        rollupOptions: {
            input,
            output: {
                plugins: [terser()]
            }
        }
    },
    resolve: { extensions: [".js", ".jsx"] },
    optimizeDeps: {
        exclude: process.env.NODE_ENV === 'development' ? ['react/jsx-dev-runtime', 'react/jsx-runtime'] : []
    }
});