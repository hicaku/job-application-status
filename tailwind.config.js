/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            height: {
                "screen-150": "calc(100vh - 150px)",
            },
        },
    },
    plugins: [],
};
