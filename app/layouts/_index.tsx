import type { FC, PropsWithChildren } from 'react';
import * as styles from './styles.css';

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.layoutStyle}>{children}</div>
);

export const Header: FC<PropsWithChildren> = ({ children }) => (
  <header className={styles.headerStyle}>{children}</header>
);

export const Sidebar: FC<PropsWithChildren> = ({ children }) => (
  <aside className={styles.sidebarStyle}>{children}</aside>
);

export const Footer: FC<PropsWithChildren> = ({ children }) => (
  <aside className={styles.footerStyle}>{children}</aside>
);

export const Main: FC<PropsWithChildren> = ({ children }) => (
  <aside className={styles.mainStyle}>{children}</aside>
);
