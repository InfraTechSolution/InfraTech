import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Mission from './pages/Mission';
import Testimonials from './pages/Testimonials';
import GlobalClients from './pages/GlobalClients';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="mission" element={<Mission />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="global-clients" element={<GlobalClients />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
