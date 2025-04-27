import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import AboutMeSection from '../components/AboutMeSection';
import AvailabilityBooking from '../components/AvailabilityBooking';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <AboutMeSection />
      <AvailabilityBooking />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
