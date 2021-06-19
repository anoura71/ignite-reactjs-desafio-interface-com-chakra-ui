import { GetStaticPaths, GetStaticProps } from 'next';

import { Box, Heading, SimpleGrid } from '@chakra-ui/react';

import { CityCard } from '../../components/CityCard';
import { ContinentBanner } from '../../components/ContinentBanner';
import { ContinentInfo } from '../../components/ContinentInfo';
import { Header } from '../../components/Header';
import { api } from '../../services/api';
import { Continent } from '../../types/Continent';

interface ContinentDetailProps {
  continent: Continent;
}

export default function ContinentDetail({ continent }: ContinentDetailProps) {
  return (
    <Box>
      <Header hasBackButton />

      <ContinentBanner bannerUrl={continent.bannerUrl} name={continent.name} />

      <Box maxWidth="1920" height="100%" marginX="auto" paddingX={['4', '10']}>
        <ContinentInfo
          description={continent.description}
          countries={continent.total_countries}
          languages={continent.total_languages}
          cities={continent.cities.length}
        />

        <Box>
          <Heading
            as="h1"
            fontWeight="500"
            fontSize={['2xl', '4xl']}
            color="gray.600"
          >
            Cities +100
          </Heading>

          <SimpleGrid
            columns={[1, 2, 3, 4, 5]}
            spacing={[5, 6, 8, 10, 12]}
            marginY={['5', '5', '32px', '45px', '45px']}
          >
            {continent.cities.map((city) => (
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
