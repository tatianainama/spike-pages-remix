import { style } from '@vanilla-extract/css';
import { spacing } from '@looma/tokens';

export const layoutStyle = style({
  border: `1px solid red`,
  display: 'grid',
  gridTemplateColumns: `repeat(8, 1fr)`,
  gridTemplateRows: `repeat(5, 1fr)`,
  gridColumnGap: spacing[1],
  gridRowGap: spacing[1],
});

export const headerStyle = style({
  gridArea: `1 / 1 / 2 / 13`,
});

export const sidebarStyle = style({
  gridArea: `2 / 1 / 6 / 3`,
});

export const mainStyle = style({
  gridArea: `2 / 3 / 5 / 13`,
});

export const footerStyle = style({
  gridArea: `5 / 3 / 6 / 13`,
});
