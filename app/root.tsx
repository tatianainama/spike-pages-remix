import type { LinksFunction, MetaFunction } from '@remix-run/cloudflare';
import lumosStyles from '@looma/core/dist/style.css';
import { cssBundleHref } from '@remix-run/css-bundle';
import globalStyles from '~/styles/global.css';

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { LoomaProvider } from '@looma/core';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
  {
    rel: 'stylesheet',
    href: lumosStyles,
  },
  {
    rel: 'stylesheet',
    href: globalStyles,
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
