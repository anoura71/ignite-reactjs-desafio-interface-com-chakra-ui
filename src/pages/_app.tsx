import { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';

import { ColorsProvider } from '../contexts/ColorsContext';
import { ContinentsProvider } from '../contexts/ContinentsContext';
import { ScreenProvider } from '../contexts/ScreenContext';
import { theme } from '../styles/theme';
import '../styles/slider.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ContinentsProvider currentContinentId={1}>
        <ScreenProvider>
          <ColorsProvider>
            <Component {...pageProps} />
          </ColorsProvider>
        </ScreenProvider>
      </ContinentsProvider>
    </ChakraProvider>
  );
}

export default MyApp;
