import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  colorScheme: string;
}

function Badge({ className, colorScheme, ...props }: BadgeProps) {
  const color = `bg-${colorScheme} hover:bg-${colorScheme}/80`;

  return (
    <div
      className={cn(
        'text-primary-foreground inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold border-transparent shadow',
        color,
        className
      )}
      {...props}
    />
  );
}

export { Badge };
