/** @type {import('tailwindcss').Config} */
export default {
    content: [
        path.resolve(__dirname, './index.html'),
        path.resolve(__dirname, './src/**/*.{vue,js,ts,jsx,tsx}')
    ],
    theme: {
        extend: {
            fontFamily: {
                lobster: ['Lobster'],
                },
        },
    },
    plugins: [],
}