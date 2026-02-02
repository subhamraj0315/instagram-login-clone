import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/layout/Footer';

const pageContent: Record<string, { title: string; description: string }> = {
  meta: {
    title: 'Meta',
    description: 'Meta builds technologies that help people connect, find communities, and grow businesses.',
  },
  about: {
    title: 'About',
    description: 'Instagram is a photo and video sharing social networking service.',
  },
  blog: {
    title: 'Blog',
    description: 'Read the latest news and updates from Instagram.',
  },
  jobs: {
    title: 'Jobs',
    description: 'Join our team and help bring people closer together.',
  },
  help: {
    title: 'Help',
    description: 'Get help with Instagram features, your account, and more.',
  },
  api: {
    title: 'API',
    description: 'Build with Instagram API to create engaging experiences.',
  },
  privacy: {
    title: 'Privacy',
    description: 'Learn about how we collect, use, and share your data.',
  },
  terms: {
    title: 'Terms',
    description: 'Read our Terms of Use and understand your rights.',
  },
  locations: {
    title: 'Locations',
    description: 'Explore Instagram offices around the world.',
  },
  'instagram-lite': {
    title: 'Instagram Lite',
    description: 'A lightweight version of Instagram for low-bandwidth connections.',
  },
  threads: {
    title: 'Threads',
    description: 'A new app from Instagram for sharing text updates and joining conversations.',
  },
  'contact-uploading': {
    title: 'Contact Uploading & Non-Users',
    description: 'Learn about how we handle contact information.',
  },
  'meta-verified': {
    title: 'Meta Verified',
    description: 'Get a verified badge and enhanced account support.',
  },
};

const FooterPage = () => {
  const location = useLocation();
  const page = location.pathname.slice(1); // Remove leading slash
  const content = pageContent[page] || {
    title: 'Page Not Found',
    description: 'The page you are looking for does not exist.',
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 max-w-[935px] mx-auto px-4 py-12 animate-fade-in">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity mb-8"
        >
          <ArrowLeft size={20} />
          Back to Login
        </Link>

        <h1 className="text-3xl font-bold text-foreground mb-4">{content.title}</h1>
        <p className="text-lg text-muted-foreground mb-8">{content.description}</p>

        <div className="bg-card border border-border rounded-lg p-8">
          <p className="text-muted-foreground">
            This is a placeholder page for the {content.title} section. In a real application, this
            would contain detailed information about {content.title.toLowerCase()}.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FooterPage;
