import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
const Toaster = dynamic(() => import('@/components/ui/toaster'), { ssr: false });
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
      <body className="w-full">
        <div className="max-w-[1400px] mx-auto">
          <Toaster />
          {children}
        </div>
      </body>
    </html>
  );
}
