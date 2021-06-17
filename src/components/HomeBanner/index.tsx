import { Flex, Image, useBreakpointValue } from '@chakra-ui/react';

import { HomeBannerText } from './HomeBannerText';

export function HomeBanner() {
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
      width="100%"
      height={['163', '335']}
      backgroundImage="url('/assets/Background.svg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Flex
        maxWidth="1920px"
        minWidth="375px"
        width="100%"
        marginX="auto"
        justify="space-between"
        align="center"
      >
        <HomeBannerText />

        {isWideVersion && (
          <Image
            src="assets/Airplane.svg"
            alt="Avião"
            marginBottom="-30"
            paddingRight={['35', '28']}
          />
        )}
      </Flex>
    </Flex>
  );
}
