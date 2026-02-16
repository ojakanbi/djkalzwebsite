import { motion } from 'framer-motion';
import { Globe, Music, Headphones, Users } from 'lucide-react';

const Bio = () => {
  const stats = [
    { icon: Music, value: '1000+', label: 'Events Performed' },
    { icon: Users, value: '100K+', label: 'Attendees' },
    { icon: Headphones, value: '4+', label: 'Years Experience' },
    { icon: Globe, value: '15+', label: 'Cities' },
  ];

  const skills = [
    'Hip-Hop & R&B',
    'Afrobeats',
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
              Meet <span className="neon-text">KAL$</span>
            </h1>
            <div className="space-y-4 text-gray-300 text-lg">
              <p>
                DJ Kal$ is a Nigerian-American open format DJ from Port Harcourt, Nigeria, blending global sounds from afrobeats to hip-hop, pop and more.
              </p>
              <p>
                Raised in PH City and inspired by diverse cultures, he brings a unique energy to every performance. Starting his journey at Penn State, DJ Kal$ quickly gained a reputation for his versatility, playing everything from house parties to festival main stages.
              </p>
              <p>
                With mentorship from top DJs and influences like DJ Ov, DJ Tunez, and Juls, he’s now a sought-after talent in the Afro-Caribbean and rap music scenes, known for electrifying crowds and seamless genre fusion.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square neon-border rounded-3xl overflow-hidden neon-glow">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-neon-magenta/20 flex items-center justify-center">
                <img
                  src="assets/images/kalu-image-1.jpeg"
                  alt="DJ Kalz image 1"
                  className="w-auto mx-auto lg:mx-0 neon-glow"
                  
                />
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
