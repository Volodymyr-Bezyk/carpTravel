import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#ffffff',
      mainBtnBg: 'rgba(255, 255, 255, 0.10)',
      mainBtnBgHover: 'rgba(255, 255, 255, 0.20)',
    },

    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    screens: {
      sm: '320px',
      md: '480px',
      lg: '768px',
      xl: '1280px',
      '2xl': '1536px',
    },

    spacing: {
      px: '1px',
      '14px': '14px',
      0: '0',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      4.5: '1.125rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
      auto: 'auto',
    },

    borderRadius: {
      '4xl': '2rem',
    },

    extend: {
      fontSize: {
        10: '10px',
        37: '37px',
        40: '40px',
      },
      letterSpacing: {
        0.14: '0.14px',
        1.6: '1.6px',
        1.67: '1.67px',
        9.48: '9px',
      },
      lineHeight: {
        2.66: '2.66',
      },
      width: {
        45: '180px',
      },
      maxWidth: {
        480: '480px',
      },
    },
  },
  plugins: [],
};
export default config;
