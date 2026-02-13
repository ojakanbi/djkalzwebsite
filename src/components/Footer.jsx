import { Instagram, Facebook, Youtube, Music2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: Instagram, 
      url: 'https://instagram.com/dj_kalz', 
      label: 'Instagram' 
    },
    { 
      icon: Youtube, 
      url: 'https://youtube.com/@djkalz', 
      label: 'YouTube' 
    },
    { 
      icon: Music2, 
      url: 'https://soundcloud.com/djkalz', 
      label: 'SoundCloud' 
    },
  ];

  return (
    <footer className="bg-black border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="public/assets/logos/djkalu-logo.png" 
                alt="DJ Kalz" 
                className="h-16 w-auto"
                style={{ filter: 'drop-shadow(0 0 10px rgba(255, 0, 128, 0.6))' }}
              />
            </div>
            <p className="text-gray-400 text-sm">
              Professional DJ bringing the beats to life. Available for weddings, 
              corporate events, clubs, and private parties.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/bio" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  About Me
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/music" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Music & Mixes
                </a>
              </li>
              <li>
                <a href="/events" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Upcoming Events
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Book Me
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-primary">Connect With Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-dark-lighter hover:bg-primary rounded-full flex items-center justify-center transition-all hover:scale-110 neon-glow"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
            <div className="mt-6">
              <a
                href="mailto:bookings@djkalz.com"
                className="text-sm text-gray-400 hover:text-primary transition-colors"
              >
                bookings@djkalz.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} DJ Kalz. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Designed with <span className="text-primary">♥</span> for the music
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
