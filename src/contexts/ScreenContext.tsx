import { useContext, createContext, ReactNode } from 'react';

import { useBreakpointValue } from '@chakra-ui/react';

interface ScreenContextData {
  screenMode?: string;
  isWideVersion?: boolean;
}

interface ScreenProviderProps {
  children: ReactNode;
}

let initialContext: ScreenContextData;
// eslint-disable-next-line prefer-const
initialContext = {};
export const ScreenContext = createContext(initialContext);

export function ScreenProvider({ children }: ScreenProviderProps) {
  const screenMode = useBreakpointValue({
    base: 'mobile',
    sm: 'phablet',
    md: 'tablet',
    lg: 'desktop',
    xl: 'wide',
  });
  const isWideVersion = screenMode === 'wide' || screenMode === 'desktop';

  return (
    <ScreenContext.Provider
      value={{
        screenMode,
        isWideVersion,
      }}
    >
      {children}
    </ScreenContext.Provider>
  );
}

export const useScreen = () => {
  return useContext(ScreenContext);
};
