import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ServicesSection from "./components/Services";
import PortfolioSection from "./components/Portfolio";
import AboutMeSection from "./components/AboutMe";
import AvailabilityBookingSection from "./components/Booking";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-950 text-white font-sans">
      <Navbar />
      <Home />
      <Services />
      <Portfolio />
      <AboutMe />
      <Booking />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
