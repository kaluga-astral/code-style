import type { PropsWithChildren } from 'react';
import { ThemeProvider } from '@astral/ui';

import { theme } from './theme';

export const ThemeWrapper = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
