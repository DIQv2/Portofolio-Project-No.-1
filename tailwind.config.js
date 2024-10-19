/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],  // Include .jsx, .ts, and .tsx if needed
    theme: {
        extend: {
            backgroundImage: {
                'main-bg' : "url('./assets/images/background-gray.png')",
                'burning-city' : "url('./assets/images/burning-city.jpg')",
                'hyakuthen' : "url('./assets/images/hyakuthen-bg.jpg')",
                'new-heaven' : "url('./assets/images/new-heaven-bg.png')",
                'burning-town' : "url('./assets/images/burning-town.jpg')",
                'new-heaven-main' : "url('./assets/images/new-heaven-main-bg.jpg')",
                'battlefield' : "url('./assets/images/battlefield.jpg')",
                'gray-wallpaper' : "url('./assets/images/gray-wallpaper.jpg')",
                'stripes-texture' : "url('./assets/images/stripes-texture.png')",
                'jagged-peaks' : "url('./assets/images/jagged-peaks.png')",
                'burning-city-large' : "url('./assets/images/burning-city-large.png')",
            },
            keyframes: {
                moveBackground: {
                    '0%': { backgroundPosition: '0 0' },
                    '100%': { backgroundPosition: '100% 100%' }, // Adjust value as needed for speed
                },
            },
            animation: {
                'move-background' : 'moveBackground 200s linear infinite'
            },
            transitionProperty: {
                'size-and-opacity' : 'height, width, opacity',
            }
        },
    },
    plugins: [],
}
