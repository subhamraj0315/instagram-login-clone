import { ReactNode } from 'react';

interface AuthCardProps {
  children: ReactNode;
  className?: string;
}

const AuthCard = ({ children, className = '' }: AuthCardProps) => {
  return (
    <div className={`auth-card animate-fade-in ${className}`}>
      {children}
    </div>
  );
};

export default AuthCard;
