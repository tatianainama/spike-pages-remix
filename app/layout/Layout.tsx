import type { FC, PropsWithChildren } from 'react';
import * as styles from './Layout.css';

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.root}>{children}</div>
);

export const Header: FC<PropsWithChildren> = ({ children }) => (
  <header className={styles.header}>{children}</header>
);

export const Sidebar: FC<PropsWithChildren> = ({ children }) => (
  <aside className={styles.sidebar}>{children}</aside>
);

export const Footer: FC<PropsWithChildren> = ({ children }) => (
  <aside className={styles.footer}>{children}</aside>
);

export const Main: FC<PropsWithChildren> = ({ children }) => (
  <aside className={styles.main}>{children}</aside>
);
