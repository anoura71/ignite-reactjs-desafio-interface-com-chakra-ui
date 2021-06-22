import { useContext, createContext, ReactNode, useState } from 'react';

interface ColorsContextData {
  isDarkMode?: boolean;
  toggleColorMode?: () => void;
  setInfoColor?: (halfValue?: boolean) => string;
  setHeadingsAndTextColor?: () => string;
  setBackgroundColor?: () => string;
  setHighlightColor?: (halfValue?: boolean) => string;
}

interface ColorsProviderProps {
  children: ReactNode;
}

let initialContext: ColorsContextData;
// eslint-disable-next-line prefer-const
initialContext = {};
export const ColorsContext = createContext(initialContext);

export function ColorsProvider({ children }: ColorsProviderProps) {
  const [isDarkMode, setDarkMode] = useState(false);

  /** Toggle dark mode on/off. */
  function toggleColorMode() {
    setDarkMode(!isDarkMode);
  }

  /** Set the color for info text. */
  function setInfoColor(halfValue = false): string {
    if (halfValue) {
      return 'gray.400';
    }
    return isDarkMode ? 'gray.100' : 'gray.500';
  }

  /** Set the color for headings and common text. */
  function setHeadingsAndTextColor(): string {
    return isDarkMode ? 'gray.50' : 'gray.600';
  }

  /** Set the color for the screen background. */
  function setBackgroundColor(): string {
    return isDarkMode ? 'black' : 'white';
  }

  /** Set the color for highlight text. */
  function setHighlightColor(halfValue = false): string {
    if (halfValue) {
      return 'yellow.100';
    }
    return 'yellow.500';
  }

  return (
    <ColorsContext.Provider
      value={{
        isDarkMode,
        toggleColorMode,
        setInfoColor,
        setHeadingsAndTextColor,
        setBackgroundColor,
        setHighlightColor,
      }}
    >
      {children}
    </ColorsContext.Provider>
  );
}

export const useColors = () => {
  return useContext(ColorsContext);
};
