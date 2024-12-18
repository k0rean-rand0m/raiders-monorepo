/** @type {import('tailwindcss').Config} */
export default {
content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {},
    },
    variants: {
        extend: {
            opacity: ['responsive', 'hover', 'focus'], // Оставляем возможность анимации `opacity`
            transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'], // Для работы transition
        },
    },
    plugins: [],
}

