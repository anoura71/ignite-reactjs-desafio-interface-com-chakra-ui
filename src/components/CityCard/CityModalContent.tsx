import ReactCountryFlag from 'react-country-flag';
import { FiChevronsUp, FiChevronsDown, FiMinus } from 'react-icons/fi';

import {
  Flex,
  Icon,
  Image,
  Text,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

import { useColors } from '../../contexts/ColorsContext';
import { useScreen } from '../../contexts/ScreenContext';
import { City } from '../../types/City';

interface CityModalContentProps {
  city: City;
}

export function CityModalContent({ city }: CityModalContentProps) {
  const { screenMode, isWideVersion } = useScreen();
  const { backgroundColor, isDarkMode } = useColors();

  let rankChangeIcon = <Icon as={FiMinus} />;
  if (city.rank_change > 0) {
    rankChangeIcon = <Icon as={FiChevronsUp} />;
  } else if (city.rank_change < 0) {
    rankChangeIcon = <Icon as={FiChevronsDown} />;
  }

  return (
    <>
      <ModalOverlay />

      <ModalContent style={{ backgroundColor }}>
        <ModalHeader>
          <Flex
            direction="row"
            alignItems="center"
            fontFamily="Barlow"
            fontWeight="600"
          >
            <Flex alignItems="center">
              <ReactCountryFlag
                style={{
                  fontSize: '2em',
                  lineHeight: '2em',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginRight: '10px',
                }}
                aria-label={city.countryName}
                countryCode={city.countryCode}
                svg
              />

              <Flex direction="column">
                <Text fontSize={['md', 'lg', 'xl', '2xl', '3xl']}>
                  {city.cityName}
                </Text>

                <Text
                  color="gray.500"
                  fontFamily="Barlow"
                  fontWeight="500"
                  fontSize={['sm', 'md', 'lg', 'xl', '2xl']}
                >
                  {city.countryName}
                </Text>
              </Flex>
            </Flex>

            <Flex direction="row" alignItems="center" marginX="auto">
              <Text
                fontSize={['sm', 'md', 'lg', 'xl', '2xl']}
                fontWeight="500"
                color="gray.600"
              >
                Rank
              </Text>

              <Text
                fontSize={['lg', 'xl', '2xl', '3xl', '4xl']}
                color="yellow.500"
                marginLeft={['1', '2', '3', '4', '5']}
              >
                {city.rank}
              </Text>
            </Flex>
          </Flex>
        </ModalHeader>

        <ModalCloseButton
          size={isWideVersion ? 'md' : 'sm'}
          outline="0"
          outlineColor="transparent"
        />

        <ModalBody flexDirection="column">
          <Image
            borderTopRadius="4"
            src={city.imageUrl}
            alt={city.cityName}
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </ModalBody>

        <ModalFooter
          backgroundColor={isDarkMode ? 'gray.900' : 'gray.50'}
          color="orange.500"
          width="100%"
          justifyContent="center"
        >
          <Flex
            direction="row"
            alignItems={screenMode === 'mobile' ? 'start' : 'center'}
            justifyItems="left"
            justifyContent="space-between"
            fontFamily="Barlow"
            fontWeight="500"
            fontSize={isWideVersion ? 'lg' : 'sm'}
          >
            <Flex
              direction={screenMode === 'mobile' ? 'column' : 'row'}
              alignItems={screenMode === 'mobile' ? 'start' : 'center'}
              paddingX={screenMode === 'mobile' ? '3' : '5'}
            >
              <Text>Arrivals</Text>

              <Text
                marginLeft={screenMode === 'mobile' ? '0' : '1'}
                color="gray.600"
              >
                {city.arrivals} million
              </Text>
            </Flex>

            <Flex
              direction={screenMode === 'mobile' ? 'column' : 'row'}
              alignItems={screenMode === 'mobile' ? 'start' : 'center'}
              justifyContent="center"
              paddingX={screenMode === 'mobile' ? '3' : '2'}
            >
              <Text>Rank change</Text>
              <Flex direction="row" alignItems="center" justifyContent="center">
                <Text
                  marginLeft={screenMode === 'mobile' ? '0' : '1'}
                  color="gray.600"
                >
                  {rankChangeIcon}
                </Text>

                <Text color="gray.600">
                  {city.rank_change !== 0 && Math.abs(city.rank_change)}
                </Text>
              </Flex>
            </Flex>

            <Flex
              direction={screenMode === 'mobile' ? 'column' : 'row'}
              alignItems={screenMode === 'mobile' ? 'start' : 'center'}
              paddingX={screenMode === 'mobile' ? '3' : '2'}
            >
              <Text>Growth</Text>

              <Text
                marginLeft={screenMode === 'mobile' ? '0' : '1'}
                color="gray.600"
              >
                {city.growth_pct} %
              </Text>
            </Flex>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </>
  );
}
