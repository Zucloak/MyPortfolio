const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-cover bg-center" style={{ backgroundImage: "url('/assets/hero-bg.jpg')" }}>
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Ken Mosquera
      </h1>
      <p className="text-xl md:text-2xl font-light mb-8">
        3rd Year Mechanical Engineering Student • CAD Enthusiast • FEA Specialist
      </p>
      <a href="#availability" className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300">
        Discuss Your Project
      </a>
    </section>
  );
};

export default HeroSection;
