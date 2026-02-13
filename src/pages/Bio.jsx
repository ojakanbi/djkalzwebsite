import { motion } from 'framer-motion';
import { Award, Music, Headphones, Users } from 'lucide-react';

const Bio = () => {
  const stats = [
    { icon: Music, value: '500+', label: 'Events Performed' },
    { icon: Users, value: '50K+', label: 'Happy Guests' },
    { icon: Headphones, value: '10+', label: 'Years Experience' },
    { icon: Award, value: '25+', label: 'Awards Won' },
  ];

  const skills = [
    'Hip-Hop & R&B',
    'EDM & House',
    'Top 40 & Pop',
    'Latin & Reggaeton',
    'Wedding Classics',
    'Corporate Events',
    'Live Mixing & Mashups',
    'Custom Playlists',
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Meet <span className="neon-text">DJ Kalz</span>
            </h1>
            <div className="space-y-4 text-gray-300 text-lg">
              <p>
                With over a decade of experience behind the decks, DJ Kalz has become 
                synonymous with unforgettable events and electric atmospheres. From 
                intimate weddings to massive festivals, the mission remains the same: 
                create moments that last forever.
              </p>
              <p>
                Specializing in a diverse range of genres including Hip-Hop, R&B, EDM, 
                House, and Top 40, DJ Kalz reads the crowd like no other, seamlessly 
                blending tracks to keep the energy high and the dance floor packed.
              </p>
              <p>
                Every event is unique, and so is the approach. Whether it's a corporate 
                gala, wedding reception, or club night, you'll get a custom-tailored 
                experience that reflects your vision and exceeds expectations.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square neon-border rounded-3xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-neon-magenta/20 flex items-center justify-center">
                <Music className="text-gray-700" size={120} />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/30 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-container bg-dark-card">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 neon-glow">
                  <Icon className="text-primary" size={32} />
                </div>
                <div className="text-4xl font-display font-bold neon-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="neon-text">Expertise</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="glass-effect p-4 rounded-lg text-center font-semibold hover:neon-border transition-all"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Bio;
