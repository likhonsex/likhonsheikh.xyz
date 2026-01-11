/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Vercel-style spacing scale (based on 4px grid)
      spacing: {
        '0': '0px',
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '28px',
        '8': '32px',
        '9': '36px',
        '10': '40px',
        '11': '44px',
        '12': '48px',
        '13': '52px',
        '14': '56px',
        '15': '60px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
      },
      
      // Sizing scale
      sizing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '28px',
        '8': '32px',
        '9': '36px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
      },
      
      // Typography scale following Vercel/Geist design system
      fontSize: {
        // Display - for hero sections
        'display-lg': ['72px', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-md': ['48px', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-sm': ['36px', { lineHeight: '1', letterSpacing: '-0.01em', fontWeight: '600' }],
        
        // Heading - for section headers
        'heading-xl': ['32px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'heading-lg': ['28px', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
        'heading-md': ['24px', { lineHeight: '1.3', letterSpacing: '0', fontWeight: '600' }],
        'heading-sm': ['20px', { lineHeight: '1.4', letterSpacing: '0', fontWeight: '600' }],
        'heading-xs': ['18px', { lineHeight: '1.4', letterSpacing: '0', fontWeight: '600' }],
        
        // Body - for content
        'body-lg': ['18px', { lineHeight: '1.6', letterSpacing: '0', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.6', letterSpacing: '0', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.5', letterSpacing: '0', fontWeight: '400' }],
        'body-xs': ['12px', { lineHeight: '1.5', letterSpacing: '0', fontWeight: '400' }],
        
        // Caption - for metadata
        'caption': ['12px', { lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: '500' }],
      },
      
      // Line height for better readability
      lineHeight: {
        'tight': '1.2',
        'normal': '1.5',
        'relaxed': '1.6',
        'loose': '1.8',
      },
      
      // Letter spacing
      letterSpacing: {
        'tighter': '-0.04em',
        'tight': '-0.02em',
        'normal': '0',
        'wide': '0.02em',
        'wider': '0.04em',
      },
      
      // Font family for Bengali typography
      fontFamily: {
        heading: ['"Kaium Simanto"', 'sans-serif'],
        body: ['"Shohid Tahmid Tamin"', 'sans-serif'],
      },
      
      // Color palette following Vercel/Geist design system
      colors: {
        // Primary - Dusty Rose (accessible, high contrast)
        dustyRose: {
          DEFAULT: '#C06C84',
          50: '#FDF2F4',
          100: '#FBE5E8',
          200: '#F6CBD2',
          300: '#F0A1AD',
          400: '#E87684',
          500: '#C06C84',
          600: '#A8556E',
          700: '#8A4559',
          800: '#72394B',
          900: '#5E2F3E',
          950: '#33161E',
        },
        
        // Secondary - Muted Lavender
        mutedLavender: {
          DEFAULT: '#8B5CF6',
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
          950: '#2E1065',
        },
        
        // Neutral - Charcoal (high contrast, accessible)
        charcoal: {
          DEFAULT: '#0F172A',
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          950: '#020617',
        },
        
        // Background - Paper (warm white)
        paper: {
          DEFAULT: '#FDFBF7',
          50: '#FFFCFA',
          100: '#FDFBF7',
          200: '#F9F5F0',
          300: '#F3EDE4',
          400: '#EAE1D6',
          500: '#DDD2C5',
          600: '#C9BDB0',
          700: '#AFA499',
          800: '#948B82',
          900: '#7A736B',
          950: '#3D3936',
        },
        
        // Utility - Soft Gray
        softGray: {
          DEFAULT: '#71717A',
          50: '#FAFAFA',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A',
          600: '#52525B',
          700: '#3F3F46',
          800: '#27272A',
          900: '#18181B',
          950: '#09090B',
        },
        
        // GitHub Design System Colors (Dark Mode - Dimmed)
        github: {
          // Dark mode colors (GitHub Dimmed)
          bg: '#0d1117',
          bgSubtle: '#161b22',
          bgOverlay: '#0d1117',
          bgSelection: 'rgba(56, 139, 253, 0.15)',
          bgHover: 'rgba(177, 186, 196, 0.12)',
          surface: '#161b22',
          border: '#30363d',
          borderHover: '#484f58',
          borderSubtle: '#21262d',
          
          // Text colors
          textPrimary: '#c9d1d9',
          textSecondary: '#8b949e',
          textTertiary: '#6e7681',
          
          // Accent colors
          accent: '#58a6ff',
          accentHover: '#79c0ff',
          
          // Semantic colors
          success: '#238636',
          successText: '#3fb950',
          danger: '#f85149',
          warning: '#d29922',
          
          // Type-specific colors
          poetry: '#a371f7',
          about: '#58a6ff',
          project: '#3fb950',
        },
      },
      
      // Border radius following Vercel conventions
      borderRadius: {
        'none': '0',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        'full': '9999px',
      },
      
      // Box shadow - subtle, layered shadows
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      
      // Animation utilities following Vercel principles
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'scale-in': 'scaleIn 0.2s ease-out forwards',
      },
      
      // Keyframes
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      
      // Transition utilities
      transitionDuration: {
        'fast': '150ms',
        'normal': '200ms',
        'slow': '300ms',
      },
      
      transitionTimingFunction: {
        'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      
      // Z-index scale
      zIndex: {
        '0': '0',
        '10': '10',
        '20': '20',
        '30': '30',
        '40': '40',
        '50': '50',
        'auto': 'auto',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
