import { useState } from "react";

const AvailabilityBookingSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    description: "",
    timeline: "",
    budget: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Placeholder for backend API or email service
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      projectType: "",
      description: "",
      timeline: "",
      budget: "",
    });
  };

  return (
    <section id="availability" className="py-20 px-6 bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Availability & Booking</h2>
        <p className="text-gray-400 mb-12">
          I'm currently <span className="text-green-400 font-semibold">Available for New Projects</span>. 
          Let's discuss your project needs and bring your ideas to life!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div>
            <label className="block mb-2 text-sm font-semibold">Name *</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-semibold">Email *</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-semibold">Project Type *</label>
            <input
              type="text"
              name="projectType"
              required
              value={formData.projectType}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="e.g., CAD Design, FEA Simulation"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-semibold">Brief Project Description *</label>
            <textarea
              name="description"
              required
              value={formData.description}
              onChange={handleChange}
              rows="5"
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Describe your project requirements..."
            ></textarea>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-semibold">Desired Timeline</label>
              <input
                type="text"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="e.g., 2 weeks"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold">Budget (optional)</label>
              <input
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="e.g., $500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-bold transition"
          >
            {submitted ? "Message Sent!" : "Submit Inquiry"}
          </button>
        </form>

        <div className="mt-8 text-gray-400">
          <p>
            Prefer direct email? <a href="mailto:ken.mosquera@example.com" className="text-blue-400 hover:underline">ken.mosquera@example.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AvailabilityBookingSection;
