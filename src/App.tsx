import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import MobileBottomNav from './components/MobileBottomNav';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SmoothScroll from './components/SmoothScroll';
import FloatingContact from './components/FloatingContact';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Contact = lazy(() => import('./pages/Contact'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const ExpertTeam = lazy(() => import('./pages/ExpertTeam'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));

const PageLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-brand-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

export default function App() {
  return (
    <Router>
      <SmoothScroll>
        <ScrollToTop />
        <div className="min-h-screen bg-brand-bg flex flex-col font-sans selection:bg-brand-primary selection:text-white" id="app-root">
          <Navbar />
          <main className="grow pb-24 lg:pb-0">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:serviceId" element={<ServiceDetail />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/team" element={<ExpertTeam />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <MobileBottomNav />
          <FloatingContact />
        </div>
      </SmoothScroll>
    </Router>
  );
}
