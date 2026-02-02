import { Facebook } from 'lucide-react';

interface FacebookButtonProps {
  onClick: () => void;
  isLoading?: boolean;
}

const FacebookButton = ({ onClick, isLoading = false }: FacebookButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className="instagram-btn-facebook hover:opacity-80 transition-opacity disabled:opacity-50"
    >
      <Facebook size={18} fill="currentColor" />
      <span>{isLoading ? 'Logging in...' : 'Log in with Facebook'}</span>
    </button>
  );
};

export default FacebookButton;
