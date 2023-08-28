import '/public/main.css';
import Head from 'next/head';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
  title: 'CarpTravel',
  description: 'Uncover secrets of the Carpathian mountains',
  viewport: 'width=device-width, initial-scale=1.0',
  robots: 'index, follow',
};

const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <Head>
      <title>Cool Title</title>

      <meta
        property="og:title"
        content="Uncover secrets of the Carpathian mountains"
      />
      <meta
        property="og:description"
        content="Uncover secrets of the Carpathian mountains"
      />
      <meta property="og:image" content="./favicon.ico" />
    </Head>
    <body className={` ${inter.className} text-white`}>{children}</body>
  </html>
);

export default RootLayout;
