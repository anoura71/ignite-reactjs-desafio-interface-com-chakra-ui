import { Box, Flex } from '@chakra-ui/react';

import { useScreen } from '../../contexts/ScreenContext';
import { TravelType } from './TravelType';

export function TravelTypes() {
  const { screenMode } = useScreen();

  const wrapValue =
    screenMode === 'wide' || screenMode === 'desktop' ? 'nowrap' : 'wrap';

  return (
    <Box
      maxWidth="1920"
      minWidth="375"
      marginX="auto"
      marginTop={['20', '9']}
      marginBottom={['20', '9']}
    >
      <Flex
        paddingX={['12', '10']}
        marginBottom={['9', '20']}
        justify="space-between"
        wrap={wrapValue}
      >
        <TravelType
          imageSrc="/assets/cocktail.svg"
          alt="Nightlife"
          text="nightlife"
        />

        <TravelType imageSrc="/assets/surf.svg" alt="Beaches" text="beaches" />

        <TravelType
          imageSrc="/assets/building.svg"
          alt="Modern"
          text="modern"
        />

        <TravelType
          imageSrc="/assets/museum.svg"
          alt="Classical"
          text="classical"
        />

        <TravelType
          imageSrc="/assets/earth.svg"
          alt="More"
          text="and more..."
          isLastChild
        />
      </Flex>
    </Box>
  );
}
