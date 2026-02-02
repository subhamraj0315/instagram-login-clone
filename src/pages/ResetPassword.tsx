import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Lock } from 'lucide-react';
import AuthCard from '@/components/auth/AuthCard';
import AuthInput from '@/components/auth/AuthInput';
import OrDivider from '@/components/auth/OrDivider';
import Footer from '@/components/layout/Footer';

const ResetPassword = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const isFormValid = emailOrUsername.length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSuccess(true);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-[388px]">
          <AuthCard>
            <div className="flex flex-col items-center mb-4">
              <div className="w-24 h-24 border-2 border-foreground rounded-full flex items-center justify-center mb-4">
                <Lock size={48} strokeWidth={1} />
              </div>
              <h1 className="text-base font-semibold text-foreground">Trouble logging in?</h1>
            </div>

            {isSuccess ? (
              <div className="text-center animate-fade-in">
                <p className="text-sm text-foreground mb-4">
                  We've sent an email to the address associated with your account. Please check your
                  inbox and follow the instructions to reset your password.
                </p>
                <Link to="/" className="instagram-link text-sm">
                  Back to Login
                </Link>
              </div>
            ) : (
              <>
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Enter your email, phone, or username and we'll send you a link to get back into your
                  account.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <AuthInput
                    type="text"
                    placeholder="Email, Phone, or Username"
                    value={emailOrUsername}
                    onChange={setEmailOrUsername}
                  />

                  <button
                    type="submit"
                    disabled={!isFormValid || isLoading}
                    className="instagram-btn-primary"
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send login link'
                    )}
                  </button>
                </form>

                <Link
                  to="/help"
                  className="block text-center text-xs text-facebook-blue mt-4 hover:opacity-80 transition-opacity"
                >
                  Can't reset your password?
                </Link>

                <OrDivider />

                <Link
                  to="/signup"
                  className="block text-center text-sm font-semibold text-foreground hover:opacity-80 transition-opacity"
                >
                  Create new account
                </Link>
              </>
            )}
          </AuthCard>

          <Link
            to="/"
            className="block w-full auth-card mt-0 py-4 text-center text-sm font-semibold text-foreground hover:opacity-80 transition-opacity"
          >
            Back to login
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ResetPassword;
