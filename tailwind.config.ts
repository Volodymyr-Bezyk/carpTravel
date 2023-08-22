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
      transparent: 'transparent',
      inputBg: 'rgba(255, 255, 255, 0.05)',
      black: '#000000',
      error: '#FF5757',
      galleryBg: 'rgba(2, 15, 8, 0.75)',
      secondaryText: 'rgba(255, 255, 255, 0.20)',
      bgMobMenu: 'rgba(1, 10, 5, 0.75)',
    },

    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    screens: {
      sm: '320px',
      md: '480px',
      tablet: '768px',
      desktop: '1440px',
    },

    spacing: {
      px: '1px',
      '2px': '2px',
      '14px': '14px',
      '20px': '20px',
      '22px': '22px',
      '53px': '53px',
      '66px': '66px',
      '71px': '71px',
      '72px': '72px',
      '86px': '86px',
      '90px': '90px',
      '96px': '96px',
      '120px': '120px',
      '104px': '104px',
      '146px': '146px',
      '196px': '196px',
      '220px': '220px',
      '226px': '226px',
      '230px': '230px',
      '244px': '244px',
      '262px': '262px',
      '268px': '268px',
      '294px': '294px',
      '296px': '296px',
      '300px': '300px',
      '305px': '305px',
      '312px': '312px',
      '345px': '345px',
      '368px': '368px',
      '376px': '376px',
      '408px': '408px',
      '426px': '426px',
      '436px': '436px',
      '463px': '463px',
      '466px': '466px',
      '474px': '474px',
      '482px': '482px',
      '484px': '484px',
      '498px': '498px',
      '529px': '529px',
      '606px': '606px',
      '646px': '646px',
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

    extend: {
      boxShadow: {
        galleryShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      fontSize: {
        10: '10px',
        13: '13px',
        22: '22px',
        28: '28px',
        32: '32px',
        33: '33px',
        37: '37px',
        40: '40px',
        43: '43px',
        67: '67px',
        98: '98px',
      },
      letterSpacing: {
        0.14: '0.14px',
        0.32: '0.32px',
        1.26: '1.26px',
        1.4: '1.4px',
        1.44: '1.44px',
        1.6: '1.6px',
        1.67: '1.67px',
        2.11: '2.11px',
        2.4: '2.4px',
        2.68: '2.68px',
        3.92: '3.92px',
        8.71: '8.71px',
        9.48: '9px',
        25.9: '25.9px',
        36.48: '36.48px',
      },
      lineHeight: {
        0.85: '0.85',
        1.08: '1.08',
        1.83: '1.83',
        2.66: '2.66',
      },
      width: {
        45: '180px',
      },
      maxWidth: {
        480: '480px',
      },
    },
    borderWidth: {
      1: '1px',
      3: '3px',
    },
  },
  plugins: [],
};
export default config;
