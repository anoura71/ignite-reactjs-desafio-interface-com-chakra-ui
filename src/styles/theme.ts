import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    black: '#000000',
    gray: {
      600: '#47585B', // Dark/Headings and Text
      500: '#999999', // Dark/Info
      400: 'rgba(153, 153, 153, 0.5)', // Dark/Info 50%
      100: '#DADADA', // Light/Info
      50: '#F5F8FA', // Light/Headings and Text
    },
    white: '#FFFFFF', // Light/White
    yellow: {
      500: '#FFBA08', // Highlight
      100: 'rgba(255, 186, 0, 0.5)', // Highlight 50%
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.600',
      },
    },
  },
});
