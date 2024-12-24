import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import React from 'react';

const titleVariants = cva(
  'font-bold text-center bg-gradient-to-r from-[hsl(var(--title-from))] ' +
    'to-[hsl(var(--title-to))] bg-clip-text text-transparent drop-shadow-lg',
  {
    variants: {
      size: {
        big: 'text-4xl font-bold text-center mb-8 mt-8',
        medium: 'text-3xl font-bold text-center mb-6 my-6',
        small: 'text-2xl font-bold text-center mb-4 my-4',
      },
      color: {
        primary: 'text-primary',
        secondary: 'text-secondary',
        accent: 'text-accent',
        destructive: 'text-destructive',
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  }
);

interface TitleProps {
  children: string;
  size?: 'big' | 'medium' | 'small';
  color?: 'primary' | 'secondary' | 'accent' | 'destructive';
}

const Title: React.FC<TitleProps> = ({ size, color, children }) => {
  return <h1 className={cn(titleVariants({ size, color }))}>{children}</h1>;
};

export default Title;
