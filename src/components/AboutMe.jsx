const skills = {
  "CAD Software": ["SolidWorks", "Fusion 360", "AutoCAD"],
  "FEA Tools": ["ANSYS", "SimScale", "SolidWorks Simulation"],
  "Programming": ["Python", "MATLAB", "C++ (basic)"],
};

const AboutMeSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <img
          src="/assets/ken-headshot.jpg"
          alt="Ken Mosquera Headshot"
          className="w-40 h-40 rounded-full mx-auto mb-8 object-cover border-4 border-blue-600"
        />
        <h2 className="text-4xl font-bold mb-6">Hi, I'm Ken Mosquera</h2>
        <p className="text-gray-400 mb-8 text-lg leading-relaxed">
          I'm a passionate 3rd Year Mechanical Engineering student with a strong foundation in design, analysis, and problem-solving. 
          My mission is to deliver engineering solutions that are not only functional but also optimized for real-world applications. 
          Whether it’s creating precise CAD models or performing critical stress analyses, I bring precision, creativity, and dedication to every project.
        </p>
        
        <div className="grid md:grid-cols-2 gap-10 text-left mb-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Experience & Expertise</h3>
            <ul className="list-disc list-inside text-gray-400">
              <li>3+ years of CAD design and mechanical drafting experience</li>
              <li>Simulation of complex mechanical systems (static, thermal, modal)</li>
              <li>Design for Manufacturing (DFM) considerations</li>
              <li>Team project leadership in academic and freelance settings</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>
            {Object.entries(skills).map(([category, tools], index) => (
              <div key={index} className="mb-4">
                <p className="font-semibold">{category}:</p>
                <p className="text-gray-400">{tools.join(", ")}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Education & Certifications</h3>
          <p className="text-gray-400">
            Bachelor of Science in Mechanical Engineering (In Progress)<br />
            Polytechnic University of the Philippines (PUP)
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Engineering Approach</h3>
          <p className="text-gray-400 leading-relaxed">
            I approach every engineering challenge with a balance of analytical rigor and creative problem-solving. 
            My goal is to create designs that are robust, efficient, and aligned with the client's real-world needs.
          </p>
        </div>

        <div>
          <a
            href="https://www.linkedin.com/in/ken-mosquera/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white py-2 px-6 rounded-xl transition"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
