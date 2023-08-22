import '/public/main.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CarpTravel',
  description: 'Uncover secrets of the Carpathian mountains',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className=" font-inter text-white">{children}</body>
  </html>
);

export default RootLayout;
