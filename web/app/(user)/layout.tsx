import '@mantine/core/styles.css';
import React from 'react';
import { ColorSchemeScript } from '@mantine/core';
import { NavbarNested } from '@/components/User/Sidebar/Sidebar';

export const metadata = {
  title: 'CRM',
  description: 'CRM',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <header>header</header>
        <nav>
          <NavbarNested />
        </nav>
        {children}
        <footer>footer</footer>
      </body>
    </html>
  );
}
