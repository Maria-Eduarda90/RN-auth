import { extendTheme } from 'native-base';

export const THEME = extendTheme({
  colors: {
    primary: {
      700: "#584581",
    },

    gray: {
      700: "#121214",
      600: "#202024",
      400: "#7C7C8A",
    },
    white: "#FFFFFF",
  },
  fonts: {
    heading: 'Roboto_700Bold',
    body: 'Roboto_400Regular',
  },
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20
  },
  sizes: {
    14: 56,
  },
});