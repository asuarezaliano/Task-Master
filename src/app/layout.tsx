import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Task Manager',
  description: 'Manage your tasks',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-[1400px] mx-auto">{children}</body>
    </html>
  );
}
