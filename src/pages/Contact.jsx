import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    location: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        location: '',
        message: '',
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'bookings@djkalz.com',
      link: 'mailto:bookings@djkalz.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: 'xxx xxx xxx ',
      link: 'tel:+',
    },
    {
      icon: MapPin,
      label: 'Based In',
      value: 'Pittsburg, PA',
      link: null,
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@dj_kalz',
      link: 'https://instagram.com/dj_kalz',
    },
  ];

  const eventTypes = [
    'Wedding',
    'Corporate Event',
    'Club Night',
    'Private Party',
    'Festival',
    'Birthday Party',
    'Other',
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
            Let's <span className="neon-text">Connect</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to bring your event to life? Fill out the form below and I'll get back to you within 24 hours.
          </p>
        </motion.div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">
                Get in <span className="neon-text">Touch</span>
              </h2>
              <p className="text-gray-400 mb-8">
                Have questions? Want to check availability? I'm here to help make your event unforgettable.
              </p>
            </div>

            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="glass-effect p-4 rounded-xl hover:neon-border transition-all"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4 neon-glow">
                      <Icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{item.label}</p>
                      {item.link ? (
                        <a
                          href={item.link}
                          target={item.link.startsWith('http') ? '_blank' : undefined}
                          rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="font-semibold hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-semibold">{item.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="glass-effect p-8 rounded-2xl neon-border">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="mx-auto mb-4 text-primary neon-glow" size={64} />
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-400">
                    Thanks for reaching out. I'll get back to you soon!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-2 text-primary">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-lighter border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2 text-primary">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-lighter border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-primary">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-lighter border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="eventType" className="block text-sm font-semibold mb-2 text-primary">
                        Event Type *
                      </label>
                      <select
                        id="eventType"
                        name="eventType"
                        required
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-lighter border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                      >
                        <option value="">Select event type</option>
                        {eventTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="eventDate" className="block text-sm font-semibold mb-2 text-primary">
                        Event Date *
                      </label>
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        required
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-lighter border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="location" className="block text-sm font-semibold mb-2 text-primary">
                        Event Location *
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-lighter border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                        placeholder="City, State"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2 text-primary">
                      Tell Me About Your Event *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-dark-lighter border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none text-white"
                      placeholder="Tell me about your event, expected guest count, music preferences, and any special requests..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-primary hover:bg-primary-dark rounded-full font-semibold transition-all hover:scale-105 flex items-center justify-center neon-glow"
                  >
                    Send Message
                    <Send className="ml-2" size={20} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
