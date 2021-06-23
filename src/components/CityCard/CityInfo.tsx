import { FiChevronsDown, FiChevronsUp, FiInfo, FiMinus } from 'react-icons/fi';

import {
  Flex,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
} from '@chakra-ui/react';

import { useColors } from '../../contexts/ColorsContext';
import { useScreen } from '../../contexts/ScreenContext';
import { City } from '../../types/City';

interface CityInfoProps {
  city: City;
}

export function CityInfo({ city }: CityInfoProps) {
  const { isWideVersion } = useScreen();
  const { isDarkMode } = useColors();

  let rankChangeIcon = <Icon as={FiMinus} />;
  if (city.rank_change > 0) {
    rankChangeIcon = <Icon as={FiChevronsUp} />;
  } else if (city.rank_change < 0) {
    rankChangeIcon = <Icon as={FiChevronsDown} />;
  }

  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <span>
          <Icon
            as={FiInfo}
            fontSize={isWideVersion ? 'md' : 'sm'}
            opacity="0.5"
            marginLeft="5px"
            marginBottom={2}
          />
        </span>
      </PopoverTrigger>

      <PopoverContent
        backgroundColor={isDarkMode ? 'gray.600' : 'gray.50'}
        color="orange.500"
      >
        <PopoverArrow />

        <PopoverBody
          flexDirection="row"
          fontFamily="Barlow"
          fontWeight="500"
          fontSize={isWideVersion ? 'md' : 'sm'}
        >
          <Stack direction="row" spacing="auto">
            <Flex direction="column">
              <Flex direction="row" alignItems="center">
                <Text>Arrivals</Text>

                <Text
                  marginLeft="1"
                  color={isDarkMode ? 'gray.50' : 'gray.600'}
                >
                  {city.arrivals} million
                </Text>
              </Flex>

              <Flex direction="row" alignItems="center">
                <Text>Rank change</Text>

                <Text
                  marginLeft="1"
                  color={isDarkMode ? 'gray.50' : 'gray.600'}
                >
                  {rankChangeIcon}
                </Text>

                <Text color={isDarkMode ? 'gray.50' : 'gray.600'}>
                  {city.rank_change !== 0 && Math.abs(city.rank_change)}
                </Text>
              </Flex>

              <Flex direction="row" alignItems="center">
                <Text>Growth</Text>

                <Text
                  marginLeft="1"
                  color={isDarkMode ? 'gray.50' : 'gray.600'}
                >
                  {city.growth_pct} %
                </Text>
              </Flex>
            </Flex>

            <Flex direction="row" alignItems="center" paddingRight="2">
              <Text color={isDarkMode ? 'gray.50' : 'gray.600'}>Rank</Text>

              <Text marginLeft="1" fontSize="xl">
                {city.rank}
              </Text>
            </Flex>
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
