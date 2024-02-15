import type { DefaultTheme } from 'styled-components/macro';
import { useMemo } from 'react';
import { useAppSelector } from 'App';
import { selectActiveTheme } from 'features/common';
import {
  breakpoints,
  fonts,
  dark,
  light,
  bgLight,
  bgTransparentLight,
  bgDark,
  bgTransparentDark,
  border,
  borderTransparent,
  shadows,
  transition,
  zIndex,
} from 'styles/theme/theme';

export const partOfTheme = {};

export const useCustomTheme = () => {
  const activeTheme = useAppSelector(selectActiveTheme);

  const theme: DefaultTheme = useMemo(
    () => ({
      breakpoints,
      fonts,
      colors: {
        ...(activeTheme === 'dark' ? dark : light),
        bg: activeTheme === 'dark' ? bgDark : bgLight,
        bgTransparent: activeTheme === 'dark' ? bgTransparentDark : bgTransparentLight,
        border,
        borderTransparent,
      },
      shadows,
      transition,
      zIndex,
    }),
    [activeTheme]
  );

  return theme;
};
