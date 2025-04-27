import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-70 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center text-white">
        <div className="text-xl font-bold tracking-wide">
          Ken Mosquera
        </div>
        <div className="space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-blue-400 transition">Home</Link>
          <Link to="/services" className="hover:text-blue-400 transition">Services</Link>
          <Link to="/portfolio" className="hover:text-blue-400 transition">Portfolio</Link>
          <Link to="/about" className="hover:text-blue-400 transition">About Me</Link>
          <Link to="/booking" className="hover:text-blue-400 transition">Availability</Link>
          <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
