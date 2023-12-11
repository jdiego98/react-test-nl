import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff', // Un azul moderno para botones y elementos destacados
    },
    secondary: {
      main: '#ff4081', // Un rosa contrastante para acciones secundarias
    },
    delete: {
      main: "#d32f2f"
    },
    background: {
      default: '#f4f6f8', // Un fondo claro y limpio
    },
    text: {
      primary: '#2d3436', // Color oscuro para el texto principal, mejora la legibilidad
      secondary: '#636e72', // Color más suave para texto secundario
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    h1: {
      fontWeight: 500,
      fontSize: '3rem',
    },
    h5: {
      fontWeight: 300, // Negrita para títulos de sección
    },
    button: {
      textTransform: 'none', // Botones sin transformación de texto para un aspecto más limpio
    },
  },
  spacing: 8, // Espaciado consistente para márgenes y padding
  shape: {
    borderRadius: 4, // Bordes ligeramente redondeados para elementos como botones y tarjetas
  },
  // Puedes añadir más configuraciones personalizadas aquí
});

export default theme;
