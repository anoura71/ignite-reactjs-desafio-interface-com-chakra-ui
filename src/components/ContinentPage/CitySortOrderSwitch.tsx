import { Stack, Switch, Text } from '@chakra-ui/react';

import { useContinents } from '../../contexts/ContinentsContext';
import { useScreen } from '../../contexts/ScreenContext';

export function CitySortOrderSwitch() {
  const { screenMode } = useScreen();
  const { toggleDescending, isDescending } = useContinents();

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
      justifyContent="center"
      marginTop={['6', '4', '3', '4', '5']}
      marginLeft={['2', '3', '4', '5', '10']}
    >
      <Switch
        size={switchSize}
        colorScheme="yellow"
        onChange={toggleDescending}
        isChecked={isDescending}
        paddingLeft={['1', '2', '3', '4', '5']}
      />

      <Text fontSize={['sm', 'md', 'lg', 'xl', '2xl']}>
        {
          {
            mobile: isDescending ? 'Descending' : 'Ascending',
            phablet: isDescending ? 'Desc' : 'Asc',
            tablet: isDescending ? 'Desc' : 'Asc',
            desktop: isDescending ? 'Descending' : 'Ascending',
            wide: isDescending ? 'Descending' : 'Ascending',
          }[screenMode]
        }
      </Text>
    </Stack>
  );
}
