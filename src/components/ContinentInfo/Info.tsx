import { FiInfo } from 'react-icons/fi';

import {
  Flex,
  Icon,
  Text,
  Tooltip,
  useBreakpointValue,
} from '@chakra-ui/react';

interface InfoProps {
  total: number;
  caption: string;
  hasTooltip?: boolean;
}

export function Info({ total, caption, hasTooltip = false }: InfoProps) {
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
      direction="column"
      align={isWideVersion ? 'center' : 'flex-start'}
      paddingX={['0', '2']}
    >
      <Text
        as="span"
        fontSize={['2xl', '3xl', '4xl', '5xl', '6xl']}
        fontWeight="600"
        color="yellow.500"
      >
        {total}
      </Text>

      {hasTooltip ? (
        <Flex align="center">
          <Text
            fontSize={isWideVersion ? '2xl' : 'lg'}
            fontWeight={isWideVersion ? '600' : '400'}
            align="start"
          >
            {caption}
          </Text>

          <Tooltip
            label="The 100 most popular city destinations"
            backgroundColor="gray.600"
            color="gray.50"
          >
            <span>
              <Icon
                as={FiInfo}
                fontSize={isWideVersion ? 'md' : 'xs'}
                opacity="0.5"
                marginLeft="5px"
              />
            </span>
          </Tooltip>
        </Flex>
      ) : (
        <Text
          fontSize={isWideVersion ? '2xl' : 'lg'}
          fontWeight={isWideVersion ? '600' : '400'}
          align="start"
        >
          {caption}
        </Text>
      )}
    </Flex>
  );
}
