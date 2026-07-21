import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TERAPROP - Platform Properti Berbasis AI & AdTech',
  description: 'Marketplace properti terpadu untuk agen profesional dengan integrasi AI & Ads',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-slate-900 text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
