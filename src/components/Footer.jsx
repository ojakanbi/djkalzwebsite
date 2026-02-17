import { Instagram, Youtube, Music2, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: Instagram, 
      url: 'https://instagram.com/dj_kalz', 
      label: 'Instagram',
      color: 'hover:text-pink-500'
    },
    { 
      icon: 'tiktok',
      url: 'https://tiktok.com/@dj_kalz', 
      label: 'TikTok',
      color: 'hover:text-white'
    },
    { 
      icon: Youtube, 
      url: 'https://youtu.be/IvO2cKYa-Mg', 
      label: 'YouTube',
      color: 'hover:text-red-500'
    },
    { 
      icon: Music2, 
      url: 'https://on.soundcloud.com/MAfWFmi7JFMm640KDh', 
      label: 'SoundCloud',
      color: 'hover:text-orange-500'
    },
    { 
      icon: Mail, 
      url: 'https://drive.google.com/drive/folders/1ZTvZV1M5UmAiw__gL4f3AqUHdeLXFk5b', 
      label: 'Email',
      color: 'hover:text-primary'
    },
  ];

  return (
    <footer className="bg-black border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img 
            src={`${import.meta.env.BASE_URL}assets/logos/djkalu-logo.png`}
            alt="DJ Kalz" 
            className="h-20 w-auto"
            style={{ filter: 'drop-shadow(0 0 15px rgba(132, 9, 32, 0.8))' }}
          />
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-6 mb-8">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative transition-all hover:scale-110`}
                aria-label={social.label}
              >
                {social.icon === 'tiktok' ? (
                  <svg
                    className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                ) : (
                  <Icon className={`w-8 h-8 text-gray-400 ${social.color} transition-colors`} />
                )}
              </a>
            );
          })}
        </div>

        {/* Email */}
        <div className="text-center mb-6">
          <a
            href="mailto:DJKALZBOOKINGS@GMAIL.COM"
            className="text-gray-400 hover:text-primary transition-colors text-sm"
          >
            DJKALZBOOKINGS@GMAIL.COM
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Daniel Kalu. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Designed with <span className="text-primary">♥</span> for the music
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
