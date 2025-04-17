import React from "react";
const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Contact <span className="gradient-text">Me</span>
        </h2>
        <div className="section-divider mx-auto"></div>

        <div className="mt-12 flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <p className="text-gray-400 mb-8">
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your vision. Feel free to contact me
              using the form or through my contact information.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-white"></i>
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
                    <i className="fas fa-envelope text-white"></i>
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
                    <i className="fas fa-phone text-white"></i>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Phone</h4>
                  <p className="text-gray-400">+91 9359789199</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex space-x-4">
              <a
                href="#"
                className="social-icon w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-gray-400 hover:gradient-bg hover:text-white transition"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="#"
                className="social-icon w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-gray-400 hover:gradient-bg hover:text-white transition"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                className="social-icon w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-gray-400 hover:gradient-bg hover:text-white transition"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="social-icon w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-gray-400 hover:gradient-bg hover:text-white transition"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="md:w-1/2 md:pl-8">
            <form className="bg-slate-900 rounded-xl p-8 shadow-lg">
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
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
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
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                />
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
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Subject"
                />
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
                  rows="5"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full gradient-bg text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
