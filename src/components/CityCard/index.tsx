import ReactCountryFlag from 'react-country-flag';

import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

interface CityCardProps {
  cityName: string;
  countryCode: string;
  countryName: string;
  imageUrl: string;
}

export function CityCard({
  cityName,
  countryCode,
  countryName,
  imageUrl,
}: CityCardProps) {
  return (
    <Box flexDirection="column">
      <Image
        borderTopRadius="4"
        src={imageUrl}
        alt={cityName}
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
          <Heading
            as="h3"
            fontFamily="Barlow"
            fontWeight="600"
            fontSize="xl"
            marginBottom={3}
          >
            {cityName}
          </Heading>

          <Text
            color="gray.500"
            fontFamily="Barlow"
            fontWeight="500"
            fontSize="md"
          >
            {countryName}
          </Text>
        </Flex>

        <ReactCountryFlag
          style={{
            fontSize: '2em',
            lineHeight: '2em',
            borderRadius: '50%',
            objectFit: 'cover',
          }}
          aria-label={countryName}
          countryCode={countryCode}
          svg
        />
      </Flex>
    </Box>
  );
}
