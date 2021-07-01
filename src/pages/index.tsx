import { GetStaticProps } from 'next';

import { Box, Center, Divider, Heading } from '@chakra-ui/react';

import { Header } from '../components/common/Header';
import { HomeBanner } from '../components/HomePage/HomeBanner';
import { Slider } from '../components/HomePage/Slider';
import { TravelTypes } from '../components/HomePage/TravelTypes';
import { useColors } from '../contexts/ColorsContext';
import { useContinents } from '../contexts/ContinentsContext';
import { api } from '../services/api';
import { Continent } from '../types/Continent';

interface HomeProps {
  continents: Continent[];
}

export default function HomePage({ continents }: HomeProps) {
  const { currentContinentId } = useContinents();
  const { backgroundColor } = useColors();

  return (
    <Box backgroundColor={backgroundColor}>
      <Header />

      <HomeBanner />

      <TravelTypes />

      <Center
        width="90px"
        marginX="auto"
        borderTopWidth="2px"
        borderColor="gray.600"
      />

      <Box>
        <Heading
          paddingY={['6', '8', '10', '12', '14']}
          fontWeight="normal"
          fontSize={['xl', '2xl', '3xl', '4xl', '4xl']}
          textAlign="center"
          lineHeight={[
            '1.875rem',
            '1.875rem',
            '2.625rem',
            '3.375rem',
            '3.375rem',
          ]}
        >
          Are you ready? <Divider as="br" /> Choose a continent to get started.
        </Heading>

        <Box flex={1} width="100%" height={['250', '320', '480', '640', '768']}>
          <Slider
            continents={continents}
            initialSlide={currentContinentId - 1}
          />
        </Box>
      </Box>
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('/continents');

  const continents: Continent[] = response.data;

  return {
    props: {
      continents,
    },
  };
};
