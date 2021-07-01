import { Box, Flex } from '@chakra-ui/react';

import { useScreen } from '../../contexts/ScreenContext';
import { TravelTypeItem } from './TravelTypeItem';

export function TravelTypes() {
  const { screenMode, isWideVersion } = useScreen();

  const wrapValue =
    screenMode === 'wide' || screenMode === 'desktop' ? 'nowrap' : 'wrap';

  return (
    <Box
      maxWidth="1920"
      minWidth="375"
      marginX="auto"
      marginTop={['8', '10', '12', '20', '9']}
      marginBottom={['8', '10', '12', '20', '9']}
    >
      <Flex
        paddingX={isWideVersion ? '10' : '12'}
        marginBottom={isWideVersion ? '20' : '9'}
        justify="space-between"
        wrap={wrapValue}
      >
        <TravelTypeItem
          imageSrc="/assets/cocktail.svg"
          alt="Nightlife"
          text="nightlife"
        />

        <TravelTypeItem imageSrc="/assets/surf.svg" alt="Beaches" text="beaches" />

        <TravelTypeItem
          imageSrc="/assets/building.svg"
          alt="Modern"
          text="modern"
        />

        <TravelTypeItem
          imageSrc="/assets/museum.svg"
          alt="Classical"
          text="classical"
        />

        <TravelTypeItem
          imageSrc="/assets/earth.svg"
          alt="More"
          text="and more..."
          isLastChild
        />
      </Flex>
    </Box>
  );
}
