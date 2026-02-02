import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Facebook } from 'lucide-react';
import AuthCard from '@/components/auth/AuthCard';
import AuthInput from '@/components/auth/AuthInput';
import InstagramLogo from '@/components/auth/InstagramLogo';
import OrDivider from '@/components/auth/OrDivider';
import GetAppBadges from '@/components/auth/GetAppBadges';
import Footer from '@/components/layout/Footer';

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const isFormValid =
    email.length > 0 &&
    fullName.length > 0 &&
    username.length > 0 &&
    password.length >= 6 &&
    password === confirmPassword;

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setIsLoading(true);
    setError('');

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Success - redirect to login
    navigate('/', { state: { message: 'Account created successfully! Please log in.' } });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-[350px]">
          <AuthCard>
            <InstagramLogo />

            <p className="text-center text-muted-foreground font-semibold mb-4">
              Sign up to see photos and videos from your friends.
            </p>

            <button className="instagram-btn-primary flex items-center justify-center gap-2 mb-4">
              <Facebook size={18} fill="currentColor" />
              Log in with Facebook
            </button>

            <OrDivider />

            <form onSubmit={handleSignup} className="space-y-2">
              <AuthInput
                type="email"
                placeholder="Mobile number or email"
                value={email}
                onChange={setEmail}
              />
              <AuthInput
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={setFullName}
              />
              <AuthInput
                type="text"
                placeholder="Username"
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
              <AuthInput
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={setConfirmPassword}
                showPasswordToggle
              />

              {error && (
                <p className="text-destructive text-sm text-center animate-fade-in">
                  {error}
                </p>
              )}

              <p className="text-xs text-muted-foreground text-center py-2">
                People who use our service may have uploaded your contact information to Instagram.{' '}
                <Link to="/help" className="text-facebook-blue hover:underline">
                  Learn More
                </Link>
              </p>

              <p className="text-xs text-muted-foreground text-center pb-2">
                By signing up, you agree to our{' '}
                <Link to="/terms" className="text-facebook-blue hover:underline">
                  Terms
                </Link>
                ,{' '}
                <Link to="/privacy" className="text-facebook-blue hover:underline">
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link to="/help" className="text-facebook-blue hover:underline">
                  Cookies Policy
                </Link>
                .
              </p>

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
                    Creating account...
                  </span>
                ) : (
                  'Sign up'
                )}
              </button>
            </form>
          </AuthCard>

          <AuthCard className="mt-3 py-5">
            <p className="text-sm text-center text-foreground">
              Have an account?{' '}
              <Link to="/" className="instagram-link">
                Log in
              </Link>
            </p>
          </AuthCard>

          <GetAppBadges />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Signup;
