import { motion } from 'framer-motion';
import { Play, Music2, ExternalLink } from 'lucide-react';

const Music = () => {
  const mixes = [
    {
      id: 1,
      title: 'Summer Vibes Mix 2024',
      description: 'The hottest tracks of the summer in one seamless mix',
      duration: '58:32',
      plays: '12.5K',
      genre: 'House / EDM',
    },
    {
      id: 2,
      title: 'Hip-Hop Classics',
      description: 'Golden era hip-hop meets modern bangers',
      duration: '1:15:20',
      plays: '8.3K',
      genre: 'Hip-Hop',
    },
    {
      id: 3,
      title: 'Wedding Reception Special',
      description: 'Perfect blend of classics and modern hits',
      duration: '2:30:00',
      plays: '15.2K',
      genre: 'Mixed',
    },
    {
      id: 4,
      title: 'Late Night Sessions',
      description: 'Deep house and melodic techno',
      duration: '1:02:45',
      plays: '9.7K',
      genre: 'Deep House',
    },
  ];

  const platforms = [
    { name: 'SoundCloud', url: 'https://soundcloud.com/djkalz', icon: Music2 },
    { name: 'Spotify', url: 'https://spotify.com/djkalz', icon: Music2 },
    { name: 'Apple Music', url: 'https://music.apple.com/djkalz', icon: Music2 },
  ];

  return (
    <div> 
      Coming soon... 
    </div>
    // <div className="pt-20">
    //   {/* Hero */}
    //   <section className="section-container text-center">
    //     <motion.div
    //       initial={{ opacity: 0, y: 20 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.6 }}
    //     >
    //       <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
    //         Mixes & <span className="neon-text">Music</span>
    //       </h1>
    //       <p className="text-xl text-gray-400 max-w-2xl mx-auto">
    //         Listen to my latest mixes and feel the energy that keeps dance floors packed
    //       </p>
    //     </motion.div>
    //   </section>

    //   {/* Featured Mix Placeholder */}
    //   <section className="section-container">
    //     <div className="max-w-4xl mx-auto glass-effect rounded-3xl overflow-hidden neon-border">
    //       <div className="aspect-video bg-gradient-to-br from-primary/30 to-neon-magenta/30 flex items-center justify-center">
    //         <div className="text-center p-8">
    //           <Play className="mx-auto mb-4 text-primary" size={80} />
    //           <p className="text-gray-300 font-semibold">Featured Mix</p>
    //           <p className="text-gray-500 text-sm mt-2">
    //             Embed your SoundCloud/YouTube player here
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Mixes Grid */}
    //   <section className="section-container bg-dark-card">
    //     <div className="text-center mb-12">
    //       <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
    //         Recent <span className="neon-text">Mixes</span>
    //       </h2>
    //       <p className="text-gray-400">Browse through my collection of curated sets</p>
    //     </div>

    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //       {mixes.map((mix, index) => (
    //         <motion.div
    //           key={mix.id}
    //           initial={{ opacity: 0, y: 20 }}
    //           whileInView={{ opacity: 1, y: 0 }}
    //           transition={{ duration: 0.5, delay: index * 0.1 }}
    //           viewport={{ once: true }}
    //           className="glass-effect rounded-xl overflow-hidden hover:neon-border transition-all group"
    //         >
    //           <div className="p-6">
    //             <div className="flex items-start justify-between mb-4">
    //               <div className="flex-grow">
    //                 <span className="text-xs font-semibold text-primary">
    //                   {mix.genre}
    //                 </span>
    //                 <h3 className="text-xl font-bold mt-1 mb-2">{mix.title}</h3>
    //                 <p className="text-gray-400 text-sm">{mix.description}</p>
    //               </div>
    //               <button className="w-12 h-12 bg-primary/20 hover:bg-primary rounded-full flex items-center justify-center transition-all group-hover:scale-110 flex-shrink-0 ml-4 neon-glow">
    //                 <Play size={20} />
    //               </button>
    //             </div>

    //             <div className="flex items-center justify-between text-sm text-gray-500 border-t border-primary/20 pt-4">
    //               <span className="flex items-center">
    //                 <Music2 size={16} className="mr-1" />
    //                 {mix.duration}
    //               </span>
    //               <span>{mix.plays} plays</span>
    //             </div>
    //           </div>
    //         </motion.div>
    //       ))}
    //     </div>
    //   </section>

    //   {/* Platforms */}
    //   <section className="section-container">
    //     <div className="text-center mb-12">
    //       <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
    //         Find Me <span className="neon-text">Everywhere</span>
    //       </h2>
    //       <p className="text-gray-400">Stream on your favorite platform</p>
    //     </div>

    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
    //       {platforms.map((platform) => {
    //         const Icon = platform.icon;
    //         return (
    //           <motion.a
    //             key={platform.name}
    //             href={platform.url}
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             whileHover={{ scale: 1.05 }}
    //             className="glass-effect p-8 rounded-2xl text-center hover:neon-border transition-all group"
    //           >
    //             <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform neon-glow">
    //               <Icon className="text-primary" size={32} />
    //             </div>
    //             <h3 className="text-xl font-bold mb-2">{platform.name}</h3>
    //             <div className="flex items-center justify-center text-gray-400 text-sm">
    //               Listen Now
    //               <ExternalLink className="ml-1" size={14} />
    //             </div>
    //           </motion.a>
    //         );
    //       })}
    //     </div>
    //   </section>
    // </div>
  );
};

export default Music;
