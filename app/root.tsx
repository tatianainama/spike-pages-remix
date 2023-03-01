import type { LinksFunction, MetaFunction } from '@remix-run/cloudflare';
import styles from '@looma/core/dist/style.css';
import { LoomaProvider } from '@looma/core';
import { cssBundleHref } from '@remix-run/css-bundle';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
  {
    rel: 'stylesheet',
    href: styles,
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <LoomaProvider theme="light">
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </LoomaProvider>
      </body>
    </html>
  );
}
