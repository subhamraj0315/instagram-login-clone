import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthCard from '@/components/auth/AuthCard';
import AuthInput from '@/components/auth/AuthInput';
import InstagramLogo from '@/components/auth/InstagramLogo';
import OrDivider from '@/components/auth/OrDivider';
import FacebookButton from '@/components/auth/FacebookButton';
import PhoneMockup from '@/components/auth/PhoneMockup';
import GetAppBadges from '@/components/auth/GetAppBadges';
import Footer from '@/components/layout/Footer';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isFacebookLoading, setIsFacebookLoading] = useState(false);
  const [error, setError] = useState('');

  const isFormValid = username.length > 0 && password.length > 0;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsLoading(true);
    setError('');

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Allow any non-empty credentials for demo
    navigate('/home');
    setIsLoading(false);
  };

  const handleFacebookLogin = async () => {
    setIsFacebookLoading(true);
    setError('');

    // Simulate Facebook OAuth
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="flex items-center gap-8">
          <PhoneMockup />

          <div className="w-full max-w-[350px]">
            <AuthCard>
              <InstagramLogo />

              <form onSubmit={handleLogin} className="space-y-2">
                <AuthInput
                  type="text"
                  placeholder="Phone number, username or email"
                  value={username}
                  onChange={setUsername}
                />
                <AuthInput
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={setPassword}
                  showPasswordToggle
                />

                {error && (
                  <p className="text-destructive text-sm text-center animate-fade-in">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={!isFormValid || isLoading}
                  className="instagram-btn-primary mt-4"
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
                      Logging in...
                    </span>
                  ) : (
                    'Log in'
                  )}
                </button>
              </form>

              <OrDivider />

              <FacebookButton onClick={handleFacebookLogin} isLoading={isFacebookLoading} />

              <Link
                to="/reset-password"
                className="block text-center text-xs text-facebook-blue mt-4 hover:opacity-80 transition-opacity"
              >
                Forgotten your password?
              </Link>
            </AuthCard>

            <AuthCard className="mt-3 py-5">
              <p className="text-sm text-center text-foreground">
                Don't have an account?{' '}
                <Link to="/signup" className="instagram-link">
                  Sign up
                </Link>
              </p>
            </AuthCard>

            <GetAppBadges />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
