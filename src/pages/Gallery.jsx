import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Music, X, Play } from 'lucide-react';
import galleryData from '../data/gallery.json';

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [mediaType, setMediaType] = useState('images');

  const categories = ['All', 'Wedding', 'Club', 'Corporate', 'Festival', 'Private'];

  const filteredItems =
    activeCategory === 'All'
      ? galleryData[mediaType]
      : galleryData[mediaType].filter((item) => item.category === activeCategory);

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

      {/* Media Type Toggle */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setMediaType('images')}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              mediaType === 'images'
                ? 'bg-primary text-white neon-glow'
                : 'neon-border text-gray-400 hover:text-primary'
            }`}
          >
            Photos
          </button>
          <button
            onClick={() => setMediaType('videos')}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              mediaType === 'videos'
                ? 'bg-primary text-white neon-glow'
                : 'neon-border text-gray-400 hover:text-primary'
            }`}
          >
            Videos
          </button>
        </div>
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
              onClick={() => setSelectedMedia(item)}
            >
              {mediaType === 'images' ? (
                <img
                  src={`${import.meta.env.BASE_URL}assets/images/${item.filename}`}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.querySelector('.fallback-placeholder').style.display = 'flex';
                  }}
                />
              ) : (
                <div className="relative w-full h-full">
                  <video
                    src={`${import.meta.env.BASE_URL}assets/videos/${item.filename}`}
                    className="w-full h-full object-cover"
                    muted
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <div className="w-16 h-16 bg-primary/80 rounded-full flex items-center justify-center neon-glow">
                      <Play className="text-white ml-1" size={32} />
                    </div>
                  </div>
                </div>
              )}

              <div className="fallback-placeholder absolute inset-0 bg-gradient-to-br from-primary/30 to-neon-magenta/30 items-center justify-center hidden">
                <Music className="text-gray-700" size={64} />
              </div>
              
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4">
                <span className="text-xs font-semibold text-primary mb-2">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-center mb-1">{item.title}</h3>
                {item.description && (
                  <p className="text-xs text-gray-400 text-center">{item.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMedia(null)}
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
              onClick={() => setSelectedMedia(null)}
            >
              <X size={24} />
            </button>

            <div 
              className="max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {mediaType === 'images' ? (
                <div className="relative">
                  <img
                    src={`${import.meta.env.BASE_URL}assets/images/${selectedMedia.filename}`}
                    alt={selectedMedia.title}
                    className="w-full max-h-[85vh] object-contain rounded-2xl neon-border"
                  />
                </div>
              ) : (
                <div className="relative">
                  <video
                    src={`${import.meta.env.BASE_URL}assets/videos/${selectedMedia.filename}`}
                    controls
                    autoPlay
                    className="w-full max-h-[85vh] rounded-2xl neon-border"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
              
              <div className="text-center mt-6">
                <span className="text-sm text-primary font-semibold">
                  {selectedMedia.category}
                </span>
                <h3 className="text-2xl font-bold mt-2">{selectedMedia.title}</h3>
                {selectedMedia.description && (
                  <p className="text-gray-400 mt-2">{selectedMedia.description}</p>
                )}
                {selectedMedia.date && (
                  <p className="text-gray-500 text-sm mt-1">{selectedMedia.date}</p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
            href="https://instagram.com/dj_kalz"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-primary hover:bg-primary-dark rounded-full font-semibold transition-all hover:scale-105 inline-block neon-glow"
          >
            Follow @dj_kalz
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;