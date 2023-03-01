import { style } from '@vanilla-extract/css';
import { spacing } from '@looma/tokens';

export const root = style({
  display: 'grid',
  height: '100vh',
  gridTemplateColumns: `repeat(8, 1fr)`,
  gridTemplateRows: `56px repeat(4, 1fr)`,
  gridColumnGap: spacing[1],
  gridRowGap: spacing[1],
});

export const header = style({
  gridArea: `1 / 1 / 2 / 13`,
});

export const sidebar = style({
  gridArea: `2 / 1 / 6 / 3`,
});

export const main = style({
  gridArea: `2 / 3 / 5 / 13`,
});

export const footer = style({
  gridArea: `5 / 3 / 6 / 13`,
});
