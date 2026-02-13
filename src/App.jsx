import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Bio from './pages/Bio';
import Gallery from './pages/Gallery';
import Music from './pages/Music';
import Events from './pages/Events';
import Contact from './pages/Contact';
import './styles/index.css';

function App() {
  return (
    <Router basename="/dj-kalz-website">
      <div className="min-h-screen flex flex-col bg-black">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/music" element={<Music />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
