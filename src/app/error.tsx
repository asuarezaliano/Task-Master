'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background">
      <div className="text-center">
        <div className="mb-6 flex justify-center">
          <Image
            alt="Company Logo"
            loading="lazy"
            src="/images/logo.png"
            width={200}
            height={200}
          />
        </div>
        <h1 className="text-4xl font-bold text-destructive mb-4">Something went wrong!</h1>
        <p className="text-muted-foreground mb-6">
          We apologize for the inconvenience. Please try again.
        </p>
        <Button onClick={() => reset()}>Try again</Button>
      </div>
    </div>
  );
}
