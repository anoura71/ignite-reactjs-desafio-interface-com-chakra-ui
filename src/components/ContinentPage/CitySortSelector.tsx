// import {
//   FiBarChart,
//   FiBarChart2,
//   FiChevronDown,
//   FiChevronsUp,
//   FiMap,
//   FiMapPin,
// } from 'react-icons/fi';

import { Select } from '@chakra-ui/react';

import { useContinents } from '../../contexts/ContinentsContext';

export function CitySortSelector() {
  const { citySortOrder, handleSortOrderChange } = useContinents();

  return (
    <Select
      width="-webkit-fit-content"
      fontFamily="Poppins"
      fontSize={['md', 'md', 'lg', 'xl', 'xl']}
      placeholder="Sort by..."
      value={citySortOrder}
      onChange={(event) => handleSortOrderChange(event.currentTarget.value)}
    >
      <option style={{ fontFamily: 'Poppins' }} value="rank">
        Rank
      </option>
      <option style={{ fontFamily: 'Poppins' }} value="cityName">
        City Name
      </option>
      <option style={{ fontFamily: 'Poppins' }} value="countryName">
        Country Name
      </option>
      <option style={{ fontFamily: 'Poppins' }} value="growth_pct">
        Growth %
      </option>
      <option style={{ fontFamily: 'Poppins' }} value="rank_change">
        Rank Change
      </option>
    </Select>
  );
}
