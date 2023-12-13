import { Brand, createTheme } from '@astral/ui';

const fontsUrls = {
  bold: {
    woff: '',
    woff2: '',
  },
  light: {
    woff: '',
    woff2: '',
  },
  regular: {
    woff: '',
    woff2: '',
  },
  medium: {
    woff: '',
    woff2: '',
  },
};

export const theme = createTheme({ brand: Brand.DEFAULT, fontsUrls });
