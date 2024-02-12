'use client';

import { createTheme } from '@mantine/core';

export const theme = createTheme({
  colors: {
    green: [
      '#effee7',
      '#e0f8d4',
      '#c2efab',
      '#a2e67e',
      '#87de57',
      '#75d940',
      '#6bd731',
      '#59be23',
      '#4da91b',
      '#3d920c',
    ],
  },

  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },

  headings: {
    fontFamily: 'Roboto, sans-serif',
    sizes: {
      // h1: { fontSize: rem(36) },
    },
  },
});
