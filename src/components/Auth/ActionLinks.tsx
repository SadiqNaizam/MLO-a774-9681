import React from 'react';
import { cn } from '@/lib/utils';

interface ActionLinksProps {
  className?: string;
}

const ActionLinks: React.FC<ActionLinksProps> = ({ className }) => {
  return (
    <div className={cn('space-y-3 pt-1', className)}> {/* Added pt-1 for slight visual separation */} 
      <div className="text-left">
        <a 
          href="#" 
          className="text-sm font-medium text-secondaryText hover:text-primary transition-colors duration-150 ease-in-out"
          onClick={(e) => {e.preventDefault(); alert('Forgot Password clicked');}}
        >
          Forgot Password?
        </a>
      </div>
      <div className="text-center text-sm text-secondaryText">
        Don't have an account?{' '}
        <a 
          href="#" 
          className="font-medium text-primary hover:underline"
          onClick={(e) => {e.preventDefault(); alert('Sign Up clicked');}}
        >
          SignUp
        </a>
      </div>
    </div>
  );
};

export default ActionLinks;
