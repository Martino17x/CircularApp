import React from 'react';
import {
  Avatar,
  Button,
  TextField,
  Paper,
  Box,
  Typography,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const LoginCard = () => {
  return (
    <Paper elevation={6} sx={{ p: 4, width: 350 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Iniciar sesión
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField margin="normal" required fullWidth label="Email" name="email" />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Contraseña"
            type="password"
            name="password"
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Entrar
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default LoginCard;
