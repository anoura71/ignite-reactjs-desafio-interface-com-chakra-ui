import {
  useContext,
  useState,
  createContext,
  ReactNode,
  useEffect,
} from 'react';

import { api } from '../services/api';
import { City } from '../types/City';
// import { dynamicSort } from '../utils/utils';

interface ContinentsContextData {
  currentContinentId?: number;
  cities?: City[];
  citySortOrder?: string;
  isDescending?: boolean;
  toggleDescending?: () => void;
  setCities?: (cityList: City[]) => void;
  handleSortOrderChange?: (sortOrder: string) => string;
  handleSelectContinent?: (id: number) => void;
}

interface ContinentsProviderProps {
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
}: ContinentsProviderProps) {
  const [currentContinentId, setCurrentContinentId] = useState(
    rest.currentContinentId ?? 1
  );
  const [citySortOrder, setCitySortOrder] = useState('');
  const [isDescending, setDescending] = useState(false);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    async function sortCities() {
      if (citySortOrder !== '') {
        const order = isDescending ? 'desc' : 'asc';
        // Get the cities of the selected continent, using the API, ordered
        const response = await api.get(
          `/cities?continentId=${currentContinentId}&_sort=${citySortOrder}&_order=${order}`
        );
        setCities(response.data);

        // setCities(cities.sort(dynamicSort(citySortOrder)));
      }
    }

    sortCities();
  }, [citySortOrder, currentContinentId, isDescending]);
  // }, [citySortOrder, cities]);

  /** Store the id of the active continent in the slider. */
  async function handleSelectContinent(id: number) {
    setCurrentContinentId(id);

    // Get the cities of the selected continent, using the API
    const response = await api.get(`/cities?continentId=${id}`);
    setCities(response.data);
  }

  /** Change the order by which the cities are listed. */
  function handleSortOrderChange(sortOrder: string): string {
    setCitySortOrder(sortOrder);

    return sortOrder;
  }

  /** Toggle descending order on/off. */
  function toggleDescending() {
    setDescending(!isDescending);
  }

  return (
    <ContinentsContext.Provider
      value={{
        currentContinentId,
        cities,
        citySortOrder,
        isDescending,
        toggleDescending,
        setCities,
        handleSortOrderChange,
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
