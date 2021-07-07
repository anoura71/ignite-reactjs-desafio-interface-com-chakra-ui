import ReactCountryFlag from 'react-country-flag';

import {
  Box,
  Flex,
  Heading,
  Image,
  Link as ChakraLink,
  Modal,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import { useScreen } from '../../contexts/ScreenContext';
import { City } from '../../types/City';
import { CityInfo } from './CityInfo';
import { CityModalContent } from './CityModalContent';

interface CityCardProps {
  city: City;
}

export function CityCard({ city }: CityCardProps) {
  const { screenMode } = useScreen();
  const { isOpen, onOpen, onClose } = useDisclosure();

  let modalSize: string;
  switch (screenMode) {
    case 'wide':
      modalSize = '3xl';
      break;
    case 'desktop':
      modalSize = '2xl';
      break;
    case 'tablet':
      modalSize = 'xl';
      break;
    case 'phablet':
      modalSize = 'md';
      break;
    default:
      modalSize = 'xs';
  }

  return (
    <Box flexDirection="column">
      <ChakraLink onClick={onOpen}>
        <Image
          borderTopRadius="4"
          src={city.imageUrl}
          alt={city.cityName}
          width="100%"
          height="173"
          objectFit="cover"
        />
      </ChakraLink>

      <Modal isOpen={isOpen} onClose={onClose} size={modalSize}>
        <CityModalContent city={city} />
      </Modal>

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

            <CityInfo city={city} />
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
          title={city.countryName}
          countryCode={city.countryCode}
          svg
        />
      </Flex>
    </Box>
  );
}
