import { FaCircle } from 'react-icons/fa';

import { Flex, Icon, Image, Text, useBreakpointValue } from '@chakra-ui/react';

interface TravelTypeProps {
  text: string;
  imageSrc: string;
  alt?: string;
  isLastChild?: boolean;
}

export function TravelType({
  text,
  imageSrc,
  alt,
  isLastChild = false,
}: TravelTypeProps) {
  const screenMode = useBreakpointValue({
    base: 'mobile',
    sm: 'phablet',
    md: 'tablet',
    lg: 'desktop',
    xl: 'wide',
  });

  return (
    <>
      {
        {
          mobile: (
            <Text
              fontSize="lg"
              fontWeight="500"
              marginBottom={isLastChild ? '0' : '27px'}
            >
              <Icon
                as={FaCircle}
                fontSize="8"
                color="yellow.500"
                marginRight={2}
              />
              {text}
            </Text>
          ),
          phablet: (
            <Text
              fontSize="xl"
              fontWeight="500"
              marginBottom={isLastChild ? '0' : '27px'}
            >
              <Icon
                as={FaCircle}
                fontSize="10"
                color="yellow.500"
                marginRight={2}
              />
              {text}
            </Text>
          ),
          tablet: (
            <Flex direction="column" align="center">
              <Image src={imageSrc} alt={alt} maxWidth="75" />
              <Text marginTop={6} fontSize="xl" fontWeight="600">
                {text}
              </Text>
            </Flex>
          ),
          desktop: (
            <Flex direction="column" align="center">
              <Image src={imageSrc} alt={alt} maxWidth="85" />
              <Text marginTop={6} fontSize="2xl" fontWeight="600">
                {text}
              </Text>
            </Flex>
          ),
          wide: (
            <Flex direction="column" align="center">
              <Image src={imageSrc} alt={alt} maxWidth="95" />
              <Text marginTop={6} fontSize="3xl" fontWeight="600">
                {text}
              </Text>
            </Flex>
          ),
        }[screenMode]
      }
    </>
  );
}
