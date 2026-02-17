import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight, Music2, SkipBack, SkipForward } from 'lucide-react';

const Music = () => {
  // Featured Video Mixes (YouTube)
  const featuredMixes = [
    {
      id: 1,
      youtubeId: 'IvO2cKYa-Mg', 
      title: 'DJ KAL$ | True Colors: Dallas | VOL. 14 | Afrobeats + Amapiano Mix',
      genre: 'Afrobeats / Amapiano',
      duration: '41:33',
    },
    {
      id: 2,
      youtubeId: 'vXDPCTaaCN0',
      title: 'Hip-Hop Club Night',
      genre: 'Hip-Hop / R&B',
      duration: '1:15:20',
    },
  ]

  // Audio-only Mixes (SoundCloud) - WE'LL USE DIRECT MP3 URLS
  const audioTracks = [
    {
      id: 1,
      // Option 1: If you have the track downloaded as MP3
      // audioUrl: `${import.meta.env.BASE_URL}assets/audio/detroit-mix.mp3`,
      // Option 2: SoundCloud embed (we'll handle this differently)
      soundcloudUrl: 'https://soundcloud.com/daniel-kalu-909865231/kal-in-detroit-for-newdawn-ent-live-dj-mix',
      title: 'Kal in Detroit for NewDawn Ent',
      artist: 'DJ Kalz',
      genre: 'Live Mix',
      duration: '1:15:30',
      useSoundCloud: true, // Flag to use SoundCloud embed instead
    },
    {
      id: 2,
      // audioUrl: `${import.meta.env.BASE_URL}assets/audio/afrobeats-sessions.mp3`,
      soundcloudUrl: 'https://soundcloud.com/daniel-kalu-909865231/kalibrate-vol1?si=49fa961bfad44990ae55e633a00f3e07&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
      title: 'KALIBRATE vol1',
      artist: 'DJ Kalz',
      genre: 'Live Mix',
      duration: '44:36',
      useSoundCloud: true,
    },
  ];

  const [currentMixIndex, setCurrentMixIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);
  const iframeRef = useRef(null);
  const widgetRef = useRef(null);

  // Load SoundCloud Widget API
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://w.soundcloud.com/player/api.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Handle track change
  useEffect(() => {
    if (currentTrack) {
      if (currentTrack.useSoundCloud && window.SC) {
        // Use SoundCloud Widget
        const iframe = iframeRef.current;
        if (iframe) {
          const widget = window.SC.Widget(iframe);
          widgetRef.current = widget;

          widget.bind(window.SC.Widget.Events.READY, () => {
            widget.getDuration((d) => setDuration(d / 1000));
            
            widget.bind(window.SC.Widget.Events.PLAY_PROGRESS, (e) => {
              setCurrentTime(e.currentPosition / 1000);
            });

            widget.bind(window.SC.Widget.Events.PLAY, () => setIsPlaying(true));
            widget.bind(window.SC.Widget.Events.PAUSE, () => setIsPlaying(false));
            widget.bind(window.SC.Widget.Events.FINISH, () => {
              setIsPlaying(false);
              skipNext();
            });

            if (isPlaying) {
              widget.play();
            }
          });
        }
      } else {
        // Use audio element for MP3s
        const audio = audioRef.current;
        if (audio && currentTrack.audioUrl) {
          audio.src = currentTrack.audioUrl;
          audio.load();
          if (isPlaying) {
            audio.play();
          }
        }
      }
    }
  }, [currentTrack]);

  // Update audio element play state
  useEffect(() => {
    if (currentTrack) {
      if (currentTrack.useSoundCloud && widgetRef.current) {
        if (isPlaying) {
          widgetRef.current.play();
        } else {
          widgetRef.current.pause();
        }
      } else if (audioRef.current) {
        if (isPlaying) {
          audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
      }
    }
  }, [isPlaying, currentTrack]);

  const nextMix = () => {
    setCurrentMixIndex((prev) => (prev + 1) % featuredMixes.length);
  };

  const prevMix = () => {
    setCurrentMixIndex((prev) => (prev - 1 + featuredMixes.length) % featuredMixes.length);
  };

  const playTrack = (track) => {
    if (currentTrack?.id === track.id) {
      setIsPlaying(!isPlaying);
    } else {
      // Stop current playback
      if (currentTrack?.useSoundCloud && widgetRef.current) {
        widgetRef.current.pause();
      } else if (audioRef.current) {
        audioRef.current.pause();
      }
      
      setCurrentTrack(track);
      setIsPlaying(true);
      setCurrentTime(0);
    }
  };

  const skipNext = () => {
    const currentIndex = audioTracks.findIndex(t => t.id === currentTrack?.id);
    const nextIndex = (currentIndex + 1) % audioTracks.length;
    playTrack(audioTracks[nextIndex]);
  };

  const skipPrev = () => {
    const currentIndex = audioTracks.findIndex(t => t.id === currentTrack?.id);
    const prevIndex = (currentIndex - 1 + audioTracks.length) % audioTracks.length;
    playTrack(audioTracks[prevIndex]);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleProgressClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    
    if (currentTrack?.useSoundCloud && widgetRef.current && duration > 0) {
      widgetRef.current.seekTo(percentage * duration * 1000);
    } else if (audioRef.current && duration > 0) {
      audioRef.current.currentTime = percentage * duration;
    }
  };

  // Audio element event handlers
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    skipNext();
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Mixes & <span className="neon-text">Music</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Listen to my latest mixes and feel the energy that keeps dance floors packed
          </p>
        </motion.div>
      </section>

      {/* Featured Video Mix Carousel */}
      <section className="section-container">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Featured <span className="neon-text">Video Mixes</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <button
            onClick={prevMix}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-12 h-12 bg-primary/20 hover:bg-primary rounded-full flex items-center justify-center transition-all hover:scale-110 neon-glow hidden lg:flex"
            aria-label="Previous mix"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextMix}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-12 h-12 bg-primary/20 hover:bg-primary rounded-full flex items-center justify-center transition-all hover:scale-110 neon-glow hidden lg:flex"
            aria-label="Next mix"
          >
            <ChevronRight size={24} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentMixIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="glass-effect rounded-3xl overflow-hidden neon-border"
            >
              <div className="aspect-video bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${featuredMixes[currentMixIndex].youtubeId}?rel=0&modestbranding=1`}
                  title={featuredMixes[currentMixIndex].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              <div className="p-6 bg-dark-card">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-semibold text-primary">
                      {featuredMixes[currentMixIndex].genre}
                    </span>
                    <h3 className="text-2xl font-bold mt-1 mb-2">
                      {featuredMixes[currentMixIndex].title}
                    </h3>
                  </div>
                  <span className="text-gray-400 text-sm">
                    {featuredMixes[currentMixIndex].duration}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-6">
            {featuredMixes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentMixIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentMixIndex
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to mix ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Audio-Only Mixes */}
      <section className="section-container bg-dark-card">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Audio <span className="neon-text">Mixes</span>
          </h2>
          <p className="text-gray-400">Listen to audio recorded mixes</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-3 mb-24">
            {audioTracks.map((track, index) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`glass-effect rounded-xl p-4 hover:neon-border transition-all cursor-pointer ${
                  currentTrack?.id === track.id ? 'neon-border' : ''
                }`}
                onClick={() => playTrack(track)}
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 flex-shrink-0">
                    {currentTrack?.id === track.id && isPlaying ? (
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center neon-glow">
                        <Pause size={20} />
                      </div>
                    ) : (
                      <div className="w-12 h-12 bg-primary/20 hover:bg-primary rounded-lg flex items-center justify-center transition-colors group">
                        <span className="text-gray-400 group-hover:hidden text-sm">
                          {index + 1}
                        </span>
                        <Play size={20} className="hidden group-hover:block" />
                      </div>
                    )}
                  </div>

                  <div className="flex-grow min-w-0">
                    <h4 className="font-semibold text-white truncate">
                      {track.title}
                    </h4>
                    <p className="text-sm text-gray-400 truncate">
                      {track.artist} • {track.genre}
                    </p>
                  </div>

                  <div className="text-gray-400 text-sm flex-shrink-0">
                    {track.duration}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Hidden Audio Element for MP3s */}
          <audio
            ref={audioRef}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={handleEnded}
            className="hidden"
          />

          {/* Hidden SoundCloud Embed */}
          {currentTrack?.useSoundCloud && (
            <div className="hidden">
              <iframe
                ref={iframeRef}
                width="100%"
                height="166"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(currentTrack.soundcloudUrl)}&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false`}
              />
            </div>
          )}

          {/* Custom Player */}
          {currentTrack && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="fixed bottom-0 left-0 right-0 bg-dark-card border-t border-primary/20 p-4 z-50 backdrop-blur-xl bg-opacity-95"
            >
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col gap-3">
                  <div 
                    className="w-full h-1 bg-gray-700 rounded-full overflow-hidden cursor-pointer"
                    onClick={handleProgressClick}
                  >
                    <div
                      className="h-full bg-primary transition-all"
                      style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
                    />
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/30 to-neon-magenta/30 rounded-lg flex items-center justify-center flex-shrink-0 neon-glow">
                      <Music2 size={28} className="text-primary" />
                    </div>

                    <div className="flex-grow min-w-0">
                      <h4 className="font-semibold text-white truncate text-sm">
                        {currentTrack.title}
                      </h4>
                      <p className="text-xs text-gray-400 truncate">
                        {currentTrack.artist}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-4">
                      <button 
                        onClick={skipPrev}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <SkipBack size={20} />
                      </button>
                      
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-10 h-10 bg-primary hover:bg-primary-dark rounded-full flex items-center justify-center transition-all hover:scale-105 neon-glow"
                      >
                        {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
                      </button>
                      
                      <button 
                        onClick={skipNext}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <SkipForward size={20} />
                      </button>

                      <div className="hidden sm:flex items-center gap-2 text-xs text-gray-400 ml-2">
                        <span>{formatTime(currentTime)}</span>
                        <span>/</span>
                        <span>{formatTime(duration)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Music;