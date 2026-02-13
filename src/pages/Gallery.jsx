import { motion } from 'framer-motion';
import { useState } from 'react';
import { Music, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    category: ['Wedding', 'Club', 'Corporate', 'Festival', 'Private'][i % 5],
    title: `Event ${i + 1}`,
  }));

  const categories = ['All', 'Wedding', 'Club', 'Corporate', 'Festival', 'Private'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Event <span className="neon-text">Gallery</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Relive the energy, excitement, and unforgettable moments from events around the world
          </p>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-primary text-white neon-glow'
                  : 'neon-border text-gray-400 hover:text-primary hover:bg-primary/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-container">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group relative aspect-square glass-effect rounded-xl overflow-hidden cursor-pointer hover:neon-border transition-all"
              onClick={() => setSelectedImage(item)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-neon-magenta/30 flex items-center justify-center">
                <Music className="text-gray-700 group-hover:scale-110 group-hover:text-primary transition-all" size={64} />
              </div>
              
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4">
                <span className="text-xs font-semibold text-primary mb-2">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-center">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Instagram CTA */}
      <section className="section-container bg-dark-card">
        <div className="glass-effect rounded-3xl p-12 text-center neon-border">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Follow for <span className="neon-text">More</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            See daily updates, behind-the-scenes content, and upcoming events on Instagram
          </p>
          <a
            href="https://instagram.com/djkalz"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-primary hover:bg-primary-dark rounded-full font-semibold transition-all hover:scale-105 inline-block neon-glow"
          >
            Follow @djkalz
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
