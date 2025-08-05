import * as React from 'react';
import { IconButton, useTheme } from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useColorMode } from './AppTheme';

export default function ColorModeSelect({ sx = {} }: { sx?: any }) {
  const theme = useTheme();
  const colorMode = useColorMode();

  return (
    <IconButton
      onClick={colorMode.toggleColorMode}
      color="inherit"
      sx={{ zIndex: 2, ...sx }}
    >
      {theme.palette.mode === 'dark' ? (
        <LightModeOutlinedIcon />
      ) : (
        <DarkModeOutlinedIcon />
      )}
    </IconButton>
  );
}
