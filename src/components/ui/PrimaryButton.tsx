import React from 'react';
import { cn } from '@/lib/utils';

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      type="button" // Default type, can be overridden by props
      {...props}
      className={cn(
        'bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80',
        'font-medium rounded-lg text-sm px-5 py-2.5 tracking-wide',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        'disabled:opacity-75 disabled:cursor-not-allowed transition-colors duration-150 ease-in-out',
        className
      )}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
