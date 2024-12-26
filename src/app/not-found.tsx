import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="mb-6 flex justify-center">
          <Image
            alt="Company Logo"
            loading="lazy"
            src="/images/logo.png"
            width={200}
            height={200}
          />
        </div>
        <h1 className="text-6xl font-bold text-primary-900">404</h1>
        <h2 className="text-2xl font-semibold text-primary-700">Page Not Found</h2>
        <p className="text-primary-500">
          Oops! It seems like you&apos;re lost. Let&apos;s get you back on track.
        </p>
        <Link href="/">
          <Button className="mt-6">Go Home</Button>
        </Link>
      </div>
    </div>
  );
}
