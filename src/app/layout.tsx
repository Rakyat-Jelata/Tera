import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TERAVIA - Marketplace Property Pertama berbasis AI dan Ads',
  description: 'Platform marketplace properti pintar terpadu untuk agen profesional berbasis AI & AdTech',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-slate-950 text-white font-sans antialiased">
        {children}

        <script src="https://cdn.jsdelivr.net/npm/eruda"></script>

<script
  dangerouslySetInnerHTML={{
    __html: `
      eruda.init();
    `,
  }}
/>
      </body>
    </html>
  );
}
