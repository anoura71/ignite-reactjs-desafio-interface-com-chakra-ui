import Link from 'next/link';

import { Flex, Heading, Text } from '@chakra-ui/react';

interface SliderItemProps {
  id: number;
  name: string;
  imageUrl: string;
  about: string;
}

export function SliderItem({ id, about, imageUrl, name }: SliderItemProps) {
  return (
    <Flex
      width="100%"
      height="100%"
      align="center"
      justify="center"
      direction="column"
      backgroundImage={`url(${imageUrl})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      textAlign="center"
    >
      <Link href={`/continents/${id}`}>
        <a>
          <Heading
            fontSize={['2xl', '3xl', '4xl', '5xl', '6xl']}
            color="gray.50"
            fontWeight="700"
          >
            {name}
          </Heading>

          <Text
            fontWeight="bold"
            color="gray.100"
            fontSize={['sm', 'md', 'lg', '2xl', '3xl']}
            marginTop={['3', '3', '4', '4', '5']}
            marginX="4"
            paddingX="4"
          >
            {about}
          </Text>
        </a>
      </Link>
    </Flex>
  );
}
