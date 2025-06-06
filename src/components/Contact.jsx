import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-400 mb-12">
          Whether you have a project idea, a question, or just want to connect, feel free to reach out!
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
            <label className="block mb-2 text-sm font-semibold">Subject *</label>
            <input
              type="text"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-semibold">Message *</label>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-bold transition"
          >
            {submitted ? "Message Sent!" : "Send Message"}
          </button>
        </form>

        <div className="mt-8 text-gray-400">
          <p>
            You can also email me directly at:{" "}
            <a href="mailto:ken.mosquera@example.com" className="text-blue-400 hover:underline">
              ken.mosquera@example.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
