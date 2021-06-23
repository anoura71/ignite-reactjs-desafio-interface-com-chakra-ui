import { Flex, Text, Stack } from '@chakra-ui/react';

import { useScreen } from '../../contexts/ScreenContext';
import { Info } from './Info';

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
  const { isWideVersion, screenMode } = useScreen();

  return (
    <Flex
      direction={isWideVersion ? 'row' : 'column'}
      justify={screenMode === 'desktop' ? 'space-evenly' : 'space-between'}
      align="center"
      marginTop={['6', '9', '12', '15', '18']}
      marginBottom={['8', '10', '12', '15', '20']}
    >
      <Text
        maxWidth={['600', '600', '600', '600', '1000']}
        fontSize={['sm', 'md', 'lg', 'xl', '2xl']}
        lineHeight={['5', '6', '7', '8', '9']}
        textAlign="justify"
        fontWeight="400"
      >
        {description}
      </Text>

      <Stack
        direction={screenMode === 'desktop' ? 'column' : 'row'}
        spacing={screenMode === 'desktop' ? 3 : 10}
        marginTop={['4', '3', '2', '1', '0']}
        marginBottom={screenMode === 'desktop' ? '10' : '0'}
        alignItems={screenMode === 'desktop' ? 'center' : 'start'}
        paddingX="10"
      >
        <Info caption="countries" total={countries} />

        <Info caption="languages" total={languages} />

        <Info caption="cities +100" total={cities} hasTooltip />
      </Stack>
    </Flex>
  );
}
