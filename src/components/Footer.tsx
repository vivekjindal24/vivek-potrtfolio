import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/vivekjindal', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/24vivek-jindal', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:vivek.jindal.sbg@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="glass dark:glass-dark mt-20 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-gradient mb-4 text-2xl font-bold">Vivek Jindal</h3>
            <p className="text-sm text-muted-foreground">
              AI/ML Researcher • Computer Vision • Deep Learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/publications"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Publications
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="mb-4 font-semibold">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-full bg-secondary p-3 transition-all hover:scale-110 hover:bg-primary"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5 transition-colors group-hover:text-primary-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart className="h-4 w-4 fill-red-500 text-red-500" /> by Vivek Jindal ©{' '}
            {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
