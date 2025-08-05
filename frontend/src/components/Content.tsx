
import * as React from 'react';
import { Typography, Box } from '@mui/material';

export default function Content() {
  return (
    <Box
      sx={{
        maxWidth: 360,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        justifyContent: 'center',
      }}
    >
      <Typography variant="h4" fontWeight="bold">
        Bienvenido a Circulapp
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Iniciá sesión para comenzar a reutilizar materiales, conectar con vecinos y participar en la red colaborativa de Charbonier.
      </Typography>
    </Box>
  );
}
