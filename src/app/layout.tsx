import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next-Level Portfolio',
  description: 'Portfolio by Rahul Goswami',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  );
}
