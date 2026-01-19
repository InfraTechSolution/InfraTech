import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Loading from './pages/loading';
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Mission = lazy(() => import('./pages/Mission'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const GlobalClients = lazy(() => import('./pages/GlobalClients'));
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        } />
        <Route path="about" element={<Suspense fallback={<Loading />}><About /></Suspense>} />
        <Route path="services" element={<Suspense fallback={<Loading />}><Services /></Suspense>} />
        <Route path="mission" element={<Suspense fallback={<Loading />}><Mission /></Suspense>} />
        <Route path="testimonials" element={<Suspense fallback={<Loading />}><Testimonials /></Suspense>} />
        <Route path="global-clients" element={<Suspense fallback={<Loading />}><GlobalClients /></Suspense>} />
        <Route path="contact" element={<Suspense fallback={<Loading />}><Contact /></Suspense>}
        />
      </Route>
    </Routes>
  );
}

export default App;
