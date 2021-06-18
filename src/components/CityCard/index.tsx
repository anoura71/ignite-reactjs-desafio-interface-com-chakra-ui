import ReactCountryFlag from 'react-country-flag';
import { FiInfo, FiChevronsUp, FiChevronsDown, FiMinus } from 'react-icons/fi';

import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
  useBreakpointValue,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
} from '@chakra-ui/react';

import { City } from '../../types/City';

interface CityCardProps {
  city: City;
}

export function CityCard({ city }: CityCardProps) {
  const screenMode = useBreakpointValue({
    base: 'mobile',
    sm: 'phablet',
    md: 'tablet',
    lg: 'desktop',
    xl: 'wide',
  });

  const isWideVersion = screenMode === 'wide' || screenMode === 'desktop';

  let rankChangeIcon = <Icon as={FiMinus} />;
  if (city.rank_change > 0) {
    rankChangeIcon = <Icon as={FiChevronsUp} />;
  } else if (city.rank_change < 0) {
    rankChangeIcon = <Icon as={FiChevronsDown} />;
  }

  return (
    <Box flexDirection="column">
      <Image
        borderTopRadius="4"
        src={city.imageUrl}
        alt={city.cityName}
        width="100%"
        height="173"
        objectFit="cover"
      />

      <Flex
        justify="space-between"
        align="center"
        padding={6}
        border="1px"
        borderColor="yellow.100"
        borderTop="0"
        borderBottomRadius="4"
      >
        <Flex direction="column">
          <Flex align="center">
            <Heading
              as="h3"
              fontFamily="Barlow"
              fontWeight="600"
              fontSize="xl"
              marginBottom={3}
            >
              {city.cityName}
            </Heading>

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

              <PopoverContent backgroundColor="gray.50" color="orange.500">
                <PopoverArrow />

                <PopoverBody
                  flexDirection="column"
                  fontFamily="Barlow"
                  fontWeight="500"
                  fontSize={isWideVersion ? 'md' : 'sm'}
                >
                  <Flex direction="row" alignItems="center">
                    <Text>Arrivals:</Text>

                    <Text marginLeft="1" color="gray.600">
                      {city.arrivals} million
                    </Text>
                  </Flex>

                  <Flex direction="row" alignItems="center">
                    <Text>Rank change:</Text>

                    <Text marginLeft="1" color="gray.600">
                      {rankChangeIcon}
                    </Text>

                    <Text color="gray.600">
                      {city.rank_change !== 0 && Math.abs(city.rank_change)}
                    </Text>
                  </Flex>

                  <Flex direction="row" alignItems="center">
                    <Text>Growth:</Text>

                    <Text marginLeft="1" color="gray.600">
                      {city.growth_pct} %
                    </Text>
                  </Flex>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>

          <Text
            color="gray.500"
            fontFamily="Barlow"
            fontWeight="500"
            fontSize="md"
          >
            {city.countryName}
          </Text>
        </Flex>

        <ReactCountryFlag
          style={{
            fontSize: '2em',
            lineHeight: '2em',
            borderRadius: '50%',
            objectFit: 'cover',
          }}
          aria-label={city.countryName}
          countryCode={city.countryCode}
          svg
        />
      </Flex>
    </Box>
  );
}
