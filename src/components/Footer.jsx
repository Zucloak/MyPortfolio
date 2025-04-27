const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400 py-8 px-6 text-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Side */}
        <p className="text-sm mb-4 md:mb-0">
          © {currentYear} Ken Mosquera. All Rights Reserved.
        </p>

        {/* Right Side */}
        <div className="flex space-x-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in text-xl"></i>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Zucloak"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="GitHub"
          >
            <i className="fab fa-github text-xl"></i>
          </a>

          {/* Email */}
          <a
            href="mailto:ken.mosquera@example.com"
            className="hover:text-white transition"
            aria-label="Email"
          >
            <i className="fas fa-envelope text-xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
