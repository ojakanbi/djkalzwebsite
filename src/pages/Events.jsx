import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, ExternalLink } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Skyline Rooftop Sessions',
      date: 'March 15, 2026',
      time: '9:00 PM - 2:00 AM',
      venue: 'Sky Lounge, Downtown',
      city: 'New York, NY',
      type: 'Club Night',
      ticketUrl: '#',
    },
    {
      id: 2,
      title: 'Tech Summit After Party',
      date: 'March 22, 2026',
      time: '8:00 PM - 12:00 AM',
      venue: 'Convention Center',
      city: 'San Francisco, CA',
      type: 'Corporate Event',
      ticketUrl: '#',
    },
    {
      id: 3,
      title: 'Summer Kickoff Festival',
      date: 'May 28, 2026',
      time: '2:00 PM - 10:00 PM',
      venue: 'Waterfront Park',
      city: 'Miami, FL',
      type: 'Festival',
      ticketUrl: '#',
    },
  ];

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
            Upcoming <span className="neon-text">Events</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Catch me live at these upcoming events or book me for your special occasion
          </p>
        </motion.div>
      </section>

      {/* Upcoming Events */}
      <section className="section-container">
        <div className="space-y-6">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl overflow-hidden hover:neon-border transition-all"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full neon-glow">
                        {event.type}
                      </span>
                      <span className="text-gray-500 text-sm">{event.date}</span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                      {event.title}
                    </h3>
                    
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-400">
                        <MapPin size={18} className="mr-2 text-primary" />
                        <span>{event.venue}, {event.city}</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Clock size={18} className="mr-2 text-primary" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <a
                      href={event.ticketUrl}
                      className="px-8 py-4 bg-primary hover:bg-primary-dark rounded-full font-semibold transition-all hover:scale-105 inline-flex items-center neon-glow"
                    >
                      Get Tickets
                      <ExternalLink className="ml-2" size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-container bg-dark-card">
        <div className="glass-effect rounded-3xl p-12 md:p-16 text-center neon-border">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Want Me at <span className="neon-text">Your Event?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Whether it's a wedding, corporate event, club night, or private party, 
            let's create an unforgettable experience together.
          </p>
          <a
            href="/contact"
            className="px-10 py-4 bg-primary hover:bg-primary-dark rounded-full font-semibold text-lg transition-all hover:scale-105 inline-flex items-center neon-glow"
          >
            Book DJ Kalz
            <Calendar className="ml-2" size={24} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Events;
