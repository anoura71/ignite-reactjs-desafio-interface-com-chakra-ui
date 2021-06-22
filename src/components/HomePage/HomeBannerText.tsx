import { Divider, Flex, Heading, Text } from '@chakra-ui/react';

export function HomeBannerText() {
  return (
    <Flex
      direction="column"
      paddingLeft={['35', '28']}
      paddingRight={['10', '8']}
      marginTop={['20', '7']}
      marginBottom={['16', '7']}
    >
      <Heading fontSize={['20', '36']} color="gray.50">
        6 continents, <Divider as="br" /> infinite possibilities
      </Heading>

      <Text fontSize={['14', '20']} color="gray.100" maxWidth="524">
        Time to make your trip of a lifetime finally happen.
      </Text>
    </Flex>
  );
}
