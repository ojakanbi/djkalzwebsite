import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, Calendar, Music, Users, Zap } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Music,
      title: 'Professional Mixing',
      description: 'Years of experience creating unforgettable moments through music',
    },
    {
      icon: Calendar,
      title: 'Event Specialist',
      description: 'Weddings, corporate events, clubs, and private parties',
    },
    {
      icon: Users,
      title: 'Crowd Energy',
      description: 'Reading the room and keeping the energy high all night.',
    },
  ];

  const moments = [
   'public/assets/images/dj-photo.png',
   'public/assets/images/dj-photo.png',
   'public/assets/images/dj-photo.png',
   'public/assets/images/dj-photo.png',
   'public/assets/images/dj-photo.png',
   'public/assets/images/dj-photo.png',
   'public/assets/images/dj-photo.png',
   'public/assets/images/dj-photo.png'
  ]

  return (
    <div className="pt-20">
      {/* Hero Section with Photo */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated neon background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-magenta/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-hot/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <img 
                  src="public/assets/logos/djkalu-logo.png" 
                  alt="DJ Kalz" 
                  className="h-52 w-auto mx-auto lg:mx-0"
                />
              </motion.div>
            
              
              <p className="text-xl md:text-2xl text-gray-300 mb-4">
                Open Format DJ | Producer 
              </p>
              
              <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto lg:mx-0">
                Bringing energy, vibes, and unforgettable moments to every event. 
                From intimate gatherings to massive celebrations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-primary hover:bg-primary-dark rounded-full font-semibold transition-all hover:scale-105 inline-flex items-center justify-center neon-glow"
                >
                  Book Me Now
                  <Calendar className="ml-2" size={20} />
                </Link>
                <Link
                  to="/music"
                  className="px-8 py-4 neon-border hover:bg-primary/10 rounded-full font-semibold transition-all hover:scale-105 inline-flex items-center justify-center"
                >
                  Listen to Mixes
                  <Play className="ml-2" size={20} />
                </Link>
              </div>
            </motion.div>

            {/* Right: DJ Photo Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Neon frame effect */}
                <div className="absolute inset-0 rounded-3xl neon-border animate-pulse"></div>
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/30 via-neon-magenta/20 to-transparent blur-2xl"></div>
                
                {/* Photo container - PLACE YOUR DJ PHOTO HERE */}
                <div className="relative rounded-3xl overflow-hidden neon-glow">
                  

                    
                    <img 
                      src="public/assets/images/dj-photo.png" 
                      alt="DJ Kalz" 
                      className="w-full h-full object-cover"
                    />
                 
                </div>

                {/* Floating accent dots */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/40 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-neon-magenta/40 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect p-8 rounded-2xl hover:neon-border transition-all group"
              >
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform neon-glow">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Recent Work Section */}
      <section className="section-container bg-dark-card">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Recent <span className="neon-text">Moments</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Check out some highlights from recent events and performances
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {moments.map((item) => (
            <div
              key={item}
              className="aspect-square glass-effect rounded-lg hover:neon-border hover:scale-105 transition-all cursor-pointer flex items-center justify-center group"
            >
              {/* <Music className="text-gray-700 group-hover:text-primary transition-colors" size={48} /> */}
              <img 
                src={item}
                alt="DJ Moment" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/gallery"
            className="px-8 py-3 neon-border hover:bg-primary/10 rounded-full font-semibold transition-all hover:scale-105 inline-block"
          >
            View Full Gallery
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <div className="glass-effect rounded-3xl p-12 md:p-16 text-center neon-border">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Make Your Event <span className="neon-text">Unforgettable?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's create an amazing experience together. Get in touch to discuss your event.
          </p>
          <Link
            to="/contact"
            className="px-10 py-4 bg-primary hover:bg-primary-dark rounded-full font-semibold text-lg transition-all hover:scale-105 inline-flex items-center neon-glow"
          >
            Book DJ Kalz
            <Calendar className="ml-2" size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
