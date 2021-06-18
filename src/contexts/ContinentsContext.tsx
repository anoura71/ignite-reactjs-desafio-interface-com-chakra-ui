import { useContext, useState, createContext, ReactNode } from 'react';

interface ContinentsContextData {
  currentContinentId?: number;
  handleSelectContinent?: (id: number) => void;
}

interface ContinentProviderProps {
  children: ReactNode;
  currentContinentId: number;
}

let initialContext: ContinentsContextData;
// eslint-disable-next-line prefer-const
initialContext = {};
export const ContinentsContext = createContext(initialContext);

export function ContinentsProvider({
  children,
  ...rest
}: ContinentProviderProps) {
  const [currentContinentId, setCurrentContinentId] = useState(
    rest.currentContinentId ?? 1
  );

  /** Store the id of the active continent in the slider. */
  function handleSelectContinent(id: number) {
    setCurrentContinentId(id);
  }

  return (
    <ContinentsContext.Provider
      value={{
        currentContinentId,
        handleSelectContinent,
      }}
    >
      {children}
    </ContinentsContext.Provider>
  );
}

export const useContinents = () => {
  return useContext(ContinentsContext);
};
