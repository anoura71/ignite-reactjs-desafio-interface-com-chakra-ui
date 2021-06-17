import { Flex, Text, HStack, useBreakpointValue } from '@chakra-ui/react';

import { Info } from '../Info';

interface ContinentInfoProps {
  description: string;
  countries: number;
  languages: number;
  cities: number;
}

export function ContinentInfo({
  description,
  countries,
  languages,
  cities,
}: ContinentInfoProps) {
  const screenMode = useBreakpointValue({
    base: 'mobile',
    sm: 'phablet',
    md: 'tablet',
    lg: 'desktop',
    xl: 'wide',
  });

  const isWideVersion = screenMode === 'wide' || screenMode === 'desktop';

  return (
    <Flex
      direction={isWideVersion ? 'row' : 'column'}
      justify="space-between"
      align="center"
      marginTop={['6', '9', '12', '15', '18']}
      marginBottom={['8', '10', '12', '15', '20']}
    >
      <Text
        maxWidth="600"
        fontSize={['sm', 'md', 'lg', 'xl', '2xl']}
        lineHeight={['5', '6', '7', '8', '9']}
        textAlign="justify"
        fontWeight="400"
      >
        {description}
      </Text>

      <HStack
        spacing={10}
        marginTop={['4', '3', '2', '1', '0']}
        alignItems="start"
        paddingX="10"
      >
        <Info caption="countries" total={countries} />
        <Info caption="languages" total={languages} />
        <Info caption="cities +100" total={cities} hasTooltip />
      </HStack>
    </Flex>
  );
}
