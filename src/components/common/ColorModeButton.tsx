import { FiSun, FiMoon } from 'react-icons/fi';

import { IconButton } from '@chakra-ui/react';

import { useColors } from '../../contexts/ColorsContext';
import { useScreen } from '../../contexts/ScreenContext';

export function ColorModeButton() {
  const { screenMode } = useScreen();
  const { toggleColorMode, isDarkMode, backgroundColor } = useColors();

  let buttonSize: string;
  switch (screenMode) {
    case 'wide':
      buttonSize = 'lg';
      break;
    case 'desktop':
      buttonSize = 'lg';
      break;
    case 'tablet':
      buttonSize = 'md';
      break;
    default:
      buttonSize = 'sm';
  }

  return (
    <IconButton
      size={buttonSize}
      aria-label="Toggle color mode"
      onClick={toggleColorMode}
      icon={isDarkMode ? <FiMoon /> : <FiSun />}
      backgroundColor={backgroundColor}
      _hover={{ style: { backgroundColor } }}
      alignItems="center"
      justifyItems="center"
    />
  );
}
