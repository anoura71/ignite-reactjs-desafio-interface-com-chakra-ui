import { Box, Center, Heading, Text } from '@chakra-ui/react';

import { useScreen } from '../../contexts/ScreenContext';

interface BannerContinentProps {
  bannerUrl: string;
  name: string;
}

export function ContinentBanner({ bannerUrl, name }: BannerContinentProps) {
  const { screenMode, isWideVersion } = useScreen();

  return (
    <Box
      height={['150', '225', '300', '400', '400']}
      backgroundImage={`url(${bannerUrl})`}
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <Box
        maxWidth="1920"
        height="100%"
        marginX="auto"
        paddingX={10}
        position="relative"
      >
        {isWideVersion || screenMode === 'tablet' ? (
          <Heading
            as="h1"
            fontWeight="600"
            fontSize={['', '', '4xl', '5xl', '7xl']}
            color="gray.50"
            position="absolute"
            bottom="60px"
            textTransform="capitalize"
          >
            {name}
          </Heading>
        ) : (
          <Center width="100%" height="100%">
            <Text
              as="h1"
              fontWeight="600"
              fontSize={['1.75rem', '2rem']}
              color="gray.50"
            >
              {name}
            </Text>
          </Center>
        )}
      </Box>
    </Box>
  );
}
