import '/public/main.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
  title: 'CarpTravel',
  description: 'Uncover secrets of the Carpathian mountains',
  viewport: 'width=device-width, initial-scale=1.0',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://carptravel-five.vercel.app/',
    title: 'CarpTravel',
    description: 'Uncover secrets of the Carpathian mountains',
    siteName: 'CarpTravel',
    images: [{ url: '/ogpLogo.jpg' }, { url: '/ogpLogo.png' }],
  },

  applicationName: 'CarpTravel',
  referrer: 'origin-when-cross-origin',
  keywords: ['Travel', 'Tourism', 'Adrenaline'],
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  category: 'tourism',
};

const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className={` ${inter.className} text-white`}>{children}</body>
  </html>
);

export default RootLayout;
