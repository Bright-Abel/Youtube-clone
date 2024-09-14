import type { Metadata } from 'next';

import { Roboto } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme';
import './globals.css';
import Navbar from '@/components/Navbar';
import { Box } from '@mui/material';
import { SkeletonTheme } from 'react-loading-skeleton';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Youtube Clone',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body className={roboto.className}>
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <Box
            sx={{ backgroundColor: '#000' }}
            className="flex flex-col gap-4 "
          >
            <Navbar />
            <main className="">
              <AppRouterCacheProvider>
                <ThemeProvider theme={theme}>{children}</ThemeProvider>
              </AppRouterCacheProvider>
            </main>
          </Box>
        </SkeletonTheme>
      </body>
    </html>
  );
}
