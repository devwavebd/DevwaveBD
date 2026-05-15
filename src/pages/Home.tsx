import Hero from '../components/home/Hero';
import TrustedBy from '../components/home/TrustedBy';
import ServicesGrid from '../components/home/ServicesGrid';
import WhyChooseUs from '../components/home/WhyChooseUs';
import PortfolioSection from '../components/home/PortfolioSection';
import Testimonials from '../components/home/Testimonials';
import BlogSection from '../components/home/BlogSection';
import CTA from '../components/home/CTA';

export default function Home() {
  return (
    <div className="overflow-hidden" id="home-page">
      <Hero />
      <TrustedBy />
      <ServicesGrid />
      <WhyChooseUs />
      <PortfolioSection />
      <Testimonials />
      <BlogSection />
      <CTA />
    </div>
  );
}
