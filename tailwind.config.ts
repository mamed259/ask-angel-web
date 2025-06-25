/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./404.vue",
    ],
    theme: {
        extend: {
            width: {
                'custom': 'calc(100% + 2.5rem)',
            },
            fontFamily: {
                larken: ['Larken', 'sans-serif'],
                founders: ['Founders Grotesk', 'sans-serif'],
            },
            screens: {
                '2xl': '1700px', // Override the default '2xl' to 1700px
            },
            maxWidth: {
                'screen-2xl': '1600px', // Custom max width for 2xl breakpoint
            },
        },
        colors: {
            black: "#3C3D3D",
            yellow: "#E3D899",
        },
    },
    plugins: [],
};
