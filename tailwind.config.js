/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const figmaTokens = require('./components/tokens/tokens.json');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}'],
    corePlugins: {
        preflight: false,
    },
    theme: {
        extend: {},

        fontFamily: figmaTokens.fontFamilies,
        lineHeight: figmaTokens.lineHeights,
        fontWeight: figmaTokens.fontWeights,
        fontSize: figmaTokens.fontSize,
        letterSpacing: figmaTokens.letterSpacing,

        colors: figmaTokens._base_tokens.colour,
    },
    plugins: [],
};
