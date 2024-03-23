'use client';

import { Roboto, Alex_Brush } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const robotoFont = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const alexBrushFont = Alex_Brush({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

export const globalTheme = createTheme({
  typography: {
    fontFamily: robotoFont.style.fontFamily,
  },
});

export default globalTheme;