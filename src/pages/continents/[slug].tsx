import { GetStaticPaths, GetStaticProps } from 'next';
import { useEffect } from 'react';

import { Box, Flex, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react';

import { CityCard } from '../../components/CityCard';
import { Header } from '../../components/common/Header';
import { CitySortOrderSwitch } from '../../components/ContinentPage/CitySortOrderSwitch';
import { CitySortSelector } from '../../components/ContinentPage/CitySortSelector';
import { ContinentBanner } from '../../components/ContinentPage/ContinentBanner';
import { ContinentInfo } from '../../components/ContinentPage/ContinentInfo';
import { useColors } from '../../contexts/ColorsContext';
import { useContinents } from '../../contexts/ContinentsContext';
import { useScreen } from '../../contexts/ScreenContext';
import { api } from '../../services/api';
import { Continent } from '../../types/Continent';

interface ContinentDetailProps {
  continent: Continent;
}

export default function ContinentPage({ continent }: ContinentDetailProps) {
  const { screenMode } = useScreen();
  const { backgroundColor } = useColors();
  const { cities, setCities } = useContinents();

  useEffect(() => {
    setCities(continent.cities);
  }, [continent.cities, setCities]);

  return (
    <Box backgroundColor={backgroundColor}>
      <Header hasBackButton />

      <ContinentBanner bannerUrl={continent.bannerUrl} name={continent.name} />

      <Box maxWidth="1920" height="100%" marginX="auto" paddingX={['4', '10']}>
        <ContinentInfo
          description={continent.description}
          countries={continent.total_countries}
          languages={continent.total_languages}
          cities={cities.length}
        />

        <Box>
          <Stack
            direction={screenMode === 'mobile' ? 'column' : 'row'}
            spacing="auto"
            alignItems={screenMode === 'mobile' ? 'start' : 'center'}
          >
            <Heading
              as="h1"
              fontWeight="500"
              fontSize={['2xl', '2xl', '3xl', '4xl', '4xl']}
              color="gray.600"
            >
              Cities +100
            </Heading>

            <Flex
              direction="row"
              alignItems="center"
              justifyContent="center"
              paddingTop={screenMode === 'mobile' ? '2' : '0'}
            >
              <Text
                fontSize={['md', 'md', 'lg', 'xl', 'xl']}
                // color="yellow.500"
                paddingRight="4"
                alignItems="center"
                justifyContent="center"
              >
                Order
              </Text>

              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                marginRight="auto"
              >
                <CitySortSelector />

                <CitySortOrderSwitch />
              </Stack>
            </Flex>
          </Stack>

          <SimpleGrid
            columns={[1, 2, 3, 4, 5]}
            spacing={[5, 6, 8, 10, 12]}
            marginY={['5', '5', '32px', '45px', '45px']}
            paddingBottom="5"
          >
            {cities.map((city) => (
              <CityCard key={city.id} city={city} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const response = await api.get(`/continents/${slug}?_embed=cities`);

  const continent: Continent = response.data;

  return {
    props: {
      continent,
    },
  };
};
