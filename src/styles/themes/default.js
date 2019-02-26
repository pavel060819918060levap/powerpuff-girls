import { type, size } from '../settings';
import { mixins } from '../mixins';

export const defaultTheme = {
  maxPageWidth: '1024px',
  breakpoints: {
    [size.XS]: 0,
    [size.SM]: 600,
    [size.MD]: 960,
    [size.LG]: 1280,
    [size.XL]: 1920,
  },
  color: {
    [type.DEFAULT]: '#000000',
  },
  fontSize: {
    [size.XS]: '8px',
  },
  lineHeight: {
    [size.XS]: '1',
  },
  borderRadius: {
    [size.XS]: '2px',
  },
  type,
  size,
  mixins,
};
