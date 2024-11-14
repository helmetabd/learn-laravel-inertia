import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

export default defineConfig({
    "plugins": [
        laravel({
            "input": [
                "resources/js/app.ts"
            ],
            "refresh": true
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        vueDevTools({
            appendTo: "app.ts"
        })
    ],
    resolve: {
        alias: {
            '@assets': '/resources/', // Update this with the correct path to your images
            '~@assets': '/resources/', // Update this with the correct path to your images
            '@favicon': '/resources/images/', // Update this with the correct path to your images
        },
    },
});