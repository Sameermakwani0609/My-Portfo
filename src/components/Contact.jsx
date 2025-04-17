import React, { useState } from "react";
import emailjs from "emailjs-com";
import { MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [messageSent, setMessageSent] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};
    if (!formData.name) validationErrors.name = "Name is required";
    if (!formData.email) validationErrors.email = "Email is required";
    if (!formData.subject) validationErrors.subject = "Subject is required";
    if (!formData.message) validationErrors.message = "Message is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    emailjs
      .send(
        "service_ju6tq2p",
        "template_89p7kum",
        formData,
        "26dWSvaEXDHSTr9kH"
      )
      .then(() => {
        alert("Message sent successfully!");
        setMessageSent(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        console.error("Failed to send:", error);
        alert("Failed to send message.");
      });
  };

  return (
    <section id="contact" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Contact <span className="gradient-text">Me</span>
        </h2>
        <div className="section-divider mx-auto"></div>

        <div className="mt-12 flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2 bg-slate-900 rounded-xl p-6 md:p-8 shadow-lg border border-transparent hover:border-blue-500 transition duration-300 hover:scale-[1.01]">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Get In Touch
            </h3>
            <p className="text-gray-400 mb-8">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to contact me
              using the form or through my contact information.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                    <MapPin className="text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Location</h4>
                  <p className="text-gray-400">Pune, Maharashtra, India</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                    <Mail className="text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email</h4>
                  <p className="text-gray-400">sameermakwani0609@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                    <Phone className="text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Phone</h4>
                  <p className="text-gray-400">+91 9359789199</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-slate-900 rounded-xl p-6 md:p-8 shadow-lg border border-transparent hover:border-blue-500 transition duration-300 hover:scale-[1.01]">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs">{errors.name}</p>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email}</p>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Subject"
                />
                {errors.subject && (
                  <p className="text-red-500 text-xs">{errors.subject}</p>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Message"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                Send Message
              </button>
            </form>
            {messageSent && (
              <div className="mt-4 bg-blue-500 text-white p-4 rounded-lg">
                Your message has been sent successfully!
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
