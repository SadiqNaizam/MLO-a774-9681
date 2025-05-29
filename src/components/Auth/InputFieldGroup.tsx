import React from 'react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface InputFieldGroupProps {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
}

const InputFieldGroup: React.FC<InputFieldGroupProps> = ({ email, setEmail, password, setPassword }) => {
  const commonInputClassName = cn(
    'bg-transparent border-0 border-b border-secondaryText rounded-none px-0.5 py-2 text-sm shadow-none h-auto',
    'focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary focus-visible:outline-none',
    'placeholder:text-secondaryText text-card-foreground'
  );

  return (
    <div className="space-y-5"> {/* Spacing between Email and Password fields, increased from 4 to 5 */}
      <Input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={commonInputClassName}
        required
        autoComplete="email"
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={commonInputClassName}
        required
        autoComplete="current-password"
      />
    </div>
  );
};

export default InputFieldGroup;
