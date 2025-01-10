import type { Config } from 'tailwindcss';
import { PluginAPI } from 'tailwindcss/types/config';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#FF7F50',
        sub: '#D3CBC4',
        background: '#FDF9F8',
        gray: {
          '50': '#F7F8F9',
          '100': '#E8EBED',
          '200': '#C9CDD2',
          '400': '#9EA4AA',
          '500': '#72787F',
          '600': '#454C53',
          '800': '#26282B',
        },
        orange: {
          light: '#FFF2EE',
          lightHover: '#FFECE5',
          lightActive: '#FFD7C9',
          normal: '#FF7F50',
          normalHover: '#E67248',
          normalActive: '#CC6640',
          dark: '#BF5F3C',
          darkHover: '#994C30',
          darkActive: '#733924',
          darker: '#592C1C',
        },
        etc: {
          red: '#F94E51',
          green: '#00B038',
        },
      },
      fontSize: (() => {
        const sizes: { [key: string]: string } = {};
        for (let i = 1; i <= 100; i++) {
          sizes[i] = `${i}px`;
        }
        return sizes;
      })(),
      gap: (() => {
        const gaps: { [key: string]: string } = {};
        for (let i = 1; i <= 100; i++) {
          gaps[i] = `${i}px`;
        }
        return gaps;
      })(),
      spacing: (() => {
        const Spacings: { [key: string]: string } = {};
        for (let i = 1; i <= 100; i++) {
          Spacings[i] = `${i}px`;
        }
        return Spacings;
      })(),
      boxShadow: {
        'sns-btn': '0px 4px 8px rgba(27, 27, 27, 0.16)',
      },
      backdropBlur: {
        '10': '10px',
      },
      borderRadius: {
        '4': '4px',
        '8': '8px',
        '10': '10px',
        '12': '12px',
        '14': '14px',
        '16': '16px',
        '20': '20px',
        '24': '24px',
      },
      lineHeight: {
        '12': '1.2',
        '14': '1.4',
        '16': '1.6',
        '18': '1.8',
        '20': '2.0',
      },
      zIndex: {
        auto: 'auto',
        base: '0',
        dropdown: '100',
        sticky: '200',
        backdrop: '900',
        modal: '1000',
        tooltip: '1200',
        important: '9999',
      },
      maxWidth: {
        screen: '600px',
      },
      backgroundImage: {
        'gradient-custom1': 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%)',
      },
    },
  },
  plugins: [
    function ({ addBase }: PluginAPI) {
      addBase({
        ':root': {
          // root
        },
      });
    },
    plugin(function ({ addUtilities }) {
      const customUtilities: Record<string, any> = {
        '.font-header1': {
          fontSize: '32px',
          lineHeight: '44px',
          letterSpacing: '-1px',
          fontWeight: '700',
        },
        '.font-header2': {
          fontSize: '28px',
          lineHeight: '38px',
          letterSpacing: '-1px',
          fontWeight: '700',
        },
        '.font-title1': {
          fontSize: '26px',
          lineHeight: '36px',
          letterSpacing: '-1.3px',
          fontWeight: '700',
        },
        '.font-title2_bold': {
          fontSize: '24px',
          lineHeight: '34px',
          letterSpacing: '-1px',
          fontWeight: '700',
        },
        '.font-title2_m': {
          fontSize: '24px',
          lineHeight: '34px',
          letterSpacing: '-1px',
          fontWeight: '500',
        },
        '.font-title3_bold': {
          fontSize: '20px',
          lineHeight: '30px',
          letterSpacing: '-0.5px',
          fontWeight: '700',
        },
        '.font-title3_m': {
          fontSize: '20px',
          lineHeight: '30px',
          letterSpacing: '-0.5px',
          fontWeight: '500',
        },
        '.font-title4_semi': {
          fontSize: '18px',
          lineHeight: '26px',
          letterSpacing: '-0.5px',
          fontWeight: '600',
        },
        '.font-title4_m': {
          fontSize: '18px',
          lineHeight: '26px',
          letterSpacing: '-0.5px',
          fontWeight: '500',
        },
        '.font-body1_m': {
          fontSize: '16px',
          lineHeight: '24px',
          letterSpacing: '-0.3px',
          fontWeight: '500',
        },
        '.font-body2_m': {
          fontSize: '14px',
          lineHeight: '22px',
          letterSpacing: '-0.3px',
          fontWeight: '500',
        },
        '.font-caption': {
          fontSize: '12px',
          lineHeight: '18px',
          letterSpacing: '0px',
          fontWeight: '500',
        },
      };

      addUtilities(customUtilities);
    }),
  ],
};
export default config;
