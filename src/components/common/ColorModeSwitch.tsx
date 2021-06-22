import { Stack, Switch, Text } from '@chakra-ui/react';

import { useColors } from '../../contexts/ColorsContext';
import { useScreen } from '../../contexts/ScreenContext';

export function ColorModeSwitch() {
  const { screenMode } = useScreen();
  const { toggleColorMode, isDarkMode } = useColors();

  let switchSize: string;
  switch (screenMode) {
    case 'wide':
      switchSize = 'lg';
      break;
    case 'desktop':
      switchSize = 'lg';
      break;
    case 'tablet':
      switchSize = 'md';
      break;
    default:
      switchSize = 'sm';
  }

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="flex-end"
      marginTop={['6', '4', '3', '4', '5']}
      marginRight={['4', '6', '8', '10', '20']}
    >
      <Text fontSize={['sm', 'md', 'lg', 'xl', '2xl']}>Dark mode</Text>

      <Switch
        size={switchSize}
        colorScheme="yellow"
        onChange={toggleColorMode}
        isChecked={isDarkMode}
      />
    </Stack>
  );
}
