import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import InputFieldGroup from './InputFieldGroup';
import ActionLinks from './ActionLinks';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { cn } from '@/lib/utils';

interface LoginFormCardProps {
  className?: string;
}

const LoginFormCard: React.FC<LoginFormCardProps> = ({ className }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    // Simulate API call
    console.log('Login attempt with:', { email, password });
    setTimeout(() => {
      setIsLoading(false);
      // alert('Login functionality to be implemented');
    }, 1500);
  };

  return (
    <Card className={cn(
      'w-96 max-w-full bg-card text-card-foreground rounded-lg shadow-md',
      className
    )}>
      <div className="p-6 sm:p-8"> {/* Responsive padding */} 
        <CardHeader className="p-0 mb-8"> {/* Increased bottom margin from original analysis for better visual spacing */} 
          <CardTitle className="text-3xl font-bold text-center text-card-foreground">
            Welcome
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5"> {/* Adjusted gap from 4 to 5 for slightly more space */} 
            <InputFieldGroup
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
            <ActionLinks />
            <PrimaryButton 
              type="submit" 
              className="w-full mt-2" 
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </PrimaryButton>
          </form>
        </CardContent>
      </div>
    </Card>
  );
};

export default LoginFormCard;
