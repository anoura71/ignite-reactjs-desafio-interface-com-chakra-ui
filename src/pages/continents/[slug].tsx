import { GetStaticPaths, GetStaticProps } from 'next';

import { Box, useBreakpointValue } from '@chakra-ui/react';

import { ContinentBanner } from '../../components/ContinentBanner';
import { ContinentInfo } from '../../components/ContinentInfo';
import { Header } from '../../components/Header';
import { api } from '../../services/api';
import { Continent } from '../../types/Continent';

interface ContinentDetailProps {
  continent: Continent;
}

export default function ContinentDetail({ continent }: ContinentDetailProps) {
  const screenMode = useBreakpointValue({
    base: 'mobile',
    sm: 'phablet',
    md: 'tablet',
    lg: 'desktop',
    xl: 'wide',
  });

  const isWideVersion =
    screenMode === 'wide' ||
    screenMode === 'desktop' ||
    screenMode === 'tablet';

  return (
    <Box>
      <Header hasBackButton />

      <ContinentBanner
        bannerUrl={continent.bannerUrl}
        name={continent.name}
        isWideVersion={isWideVersion}
      />

      <Box maxWidth="1920" height="100%" marginX="auto" paddingX={['4', '10']}>
        <ContinentInfo
          description={continent.description}
          countries={continent.total_countries}
          languages={continent.total_languages}
          cities={continent.cities.length}
        />
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
