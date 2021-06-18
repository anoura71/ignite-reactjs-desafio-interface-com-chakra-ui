import { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';

import { ContinentsProvider } from '../contexts/ContinentsContext';
import { theme } from '../styles/theme';
import '../styles/slider.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ContinentsProvider currentContinentId={1}>
        <Component {...pageProps} />
      </ContinentsProvider>
    </ChakraProvider>
  );
}

export default MyApp;
