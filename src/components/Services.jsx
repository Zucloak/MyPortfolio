const services = [
  {
    title: "CAD Design",
    description: "Precise and optimized 3D CAD models for manufacturing, prototyping, or visualization purposes. From concept sketches to detailed assemblies.",
    tools: ["SolidWorks", "Fusion 360", "AutoCAD"],
    icon: "🛠️",
  },
  {
    title: "Finite Element Analysis (FEA)",
    description: "Structural, thermal, and dynamic simulations to ensure product reliability and optimize material usage before fabrication.",
    tools: ["ANSYS", "SimScale", "SolidWorks Simulation"],
    icon: "📈",
  },
  {
    title: "Mechanical System Drafting",
    description: "2D schematics, exploded views, and detailed mechanical drawings ready for professional manufacturing.",
    tools: ["AutoCAD", "DraftSight"],
    icon: "📐",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">My Engineering Services</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-blue-500/40 transition">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <div className="text-sm">
                <p className="font-semibold mb-2">Tools & Software:</p>
                <ul className="text-gray-400">
                  {service.tools.map((tool, i) => (
                    <li key={i}>• {tool}</li>
                  ))}
                </ul>
              </div>
              <a href="#booking" className="inline-block mt-6 bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-xl transition">
                Inquire about {service.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
