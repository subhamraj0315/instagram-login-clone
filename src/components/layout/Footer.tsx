import { Link } from 'react-router-dom';

const footerLinks = [
  { name: 'Meta', path: '/meta' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Jobs', path: '/jobs' },
  { name: 'Help', path: '/help' },
  { name: 'API', path: '/api' },
  { name: 'Privacy', path: '/privacy' },
  { name: 'Terms', path: '/terms' },
  { name: 'Locations', path: '/locations' },
  { name: 'Instagram Lite', path: '/instagram-lite' },
  { name: 'Threads', path: '/threads' },
  { name: 'Contact Uploading & Non-Users', path: '/contact-uploading' },
  { name: 'Meta Verified', path: '/meta-verified' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 px-4">
      <div className="max-w-[1024px] mx-auto">
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-4">
          {footerLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="footer-link"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex justify-center items-center gap-4 text-xs text-muted-foreground">
          <select className="bg-transparent border-none outline-none cursor-pointer">
            <option>English</option>
            <option>Español</option>
            <option>Français</option>
            <option>Deutsch</option>
          </select>
          <span>© {currentYear} Instagram from Meta</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
