const projects = [
  {
    title: "Robotic Arm CAD Design",
    imageUrl: "/assets/projects/robotic-arm.jpg",
    tags: ["CAD Design", "SolidWorks"],
  },
  {
    title: "Bridge Stress Analysis",
    imageUrl: "/assets/projects/bridge-analysis.jpg",
    tags: ["FEA", "ANSYS"],
  },
  {
    title: "Gearbox Assembly Drafting",
    imageUrl: "/assets/projects/gearbox-drafting.jpg",
    tags: ["Mechanical Drafting", "AutoCAD"],
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 px-6 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">My Portfolio</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-blue-500/40 transition">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="rounded-xl mb-6 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs bg-blue-600 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <a href="#contact" className="inline-block mt-6 bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-xl transition">
                View Project Details
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
