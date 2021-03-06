import Link from 'next/link';
import { FiChevronLeft } from 'react-icons/fi';

import {
  Center,
  Flex,
  Icon,
  Image,
  Link as ChakraLink,
  Stack,
} from '@chakra-ui/react';

import { useScreen } from '../../contexts/ScreenContext';
import { ColorModeButton } from './ColorModeButton';

interface HeaderProps {
  hasBackButton?: boolean;
}

export function Header({ hasBackButton = false }: HeaderProps) {
  const { isWideVersion, screenMode } = useScreen();

  let logoWidth = '82px';
  if (screenMode === 'tablet') {
    logoWidth = '116px';
  }
  if (isWideVersion) {
    logoWidth = '184px';
  }

  return (
    <Stack direction="row" spacing="auto">
      <Center
        as="header"
        width="100%"
        maxWidth={1920}
        height={isWideVersion ? '100' : '50'}
        marginX="auto"
        paddingX={['4', '5', '7', '10', '16']}
        position="relative"
      >
        {hasBackButton && (
          <Link href="/">
            <ChakraLink position="absolute" left={['4', '5', '7', '10', '16']}>
              <Icon
                as={FiChevronLeft}
                fontSize={['16', '20', '24', '32', '48']}
              />
            </ChakraLink>
          </Link>
        )}

        <Image src="/assets/Logo.svg" alt="WorldTrip" width={logoWidth} />
      </Center>

      <Flex paddingRight={['4', '6', '8', '10', '20']} align="center">
        <ColorModeButton />
      </Flex>
    </Stack>
  );
}
