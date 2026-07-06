import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import {
  MapPin,
  Mail,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [messageSent, setMessageSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const validateForm = () => {
    let validationErrors = {};
    if (!formData.name.trim()) validationErrors.name = "Name is required";
    if (!formData.email.trim()) validationErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim())
      validationErrors.subject = "Subject is required";
    if (!formData.message.trim())
      validationErrors.message = "Message is required";

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    emailjs
      .send(
        "service_ju6tq2p",
        "template_89p7kum",
        formData,
        "26dWSvaEXDHSTr9kH",
      )
      .then(() => {
        setMessageSent(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsSubmitting(false);

        // Auto hide success message after 5 seconds
        setTimeout(() => {
          setMessageSent(false);
        }, 5000);
      })
      .catch((error) => {
        console.error("Failed to send:", error);
        setIsSubmitting(false);
        alert("Failed to send message. Please try again.");
      });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      detail: "Pune, Maharashtra, India",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Mail,
      title: "Email",
      detail: "sameermakwani0609@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Phone",
      detail: "+91 9359789199",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Animated Background - Optimized for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-purple-600/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-blue-600/10 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

        {/* Floating Particles - Hidden on mobile */}
        <div className="absolute inset-0 hidden sm:block">
          <div className="absolute top-20 left-10 w-2 h-2 bg-purple-500/30 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-blue-500/30 rounded-full animate-float-delay"></div>
          <div className="absolute bottom-40 left-20 w-2 h-2 bg-pink-500/30 rounded-full animate-float"></div>
          <div className="absolute top-60 right-40 w-1.5 h-1.5 bg-purple-400/30 rounded-full animate-float-delay"></div>
          <div className="absolute bottom-20 right-10 w-2.5 h-2.5 bg-blue-400/30 rounded-full animate-float"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-block animate-on-scroll opacity-0">
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-[9px] sm:text-xs font-semibold tracking-widest uppercase mb-3 sm:mb-4">
              Contact
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-on-scroll opacity-0 leading-tight">
            Let's Connect
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-xs sm:text-sm md:text-base px-2 sm:px-0 animate-on-scroll opacity-0">
            Have a question or want to work together? Reach out and let's make
            something amazing!
          </p>

          <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6 animate-on-scroll opacity-0">
            <span className="w-8 sm:w-10 md:w-12 h-1 bg-purple-500 rounded-full"></span>
            <span className="w-4 sm:w-5 md:w-6 h-1 bg-purple-300 rounded-full"></span>
            <span className="w-4 sm:w-5 md:w-6 h-1 bg-purple-700 rounded-full"></span>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6 animate-on-scroll opacity-0">
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 h-full">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Get In Touch
                </span>
              </h3>

              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 md:mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to contact me
                using the form or through my contact information.
              </p>

              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-2.5 sm:gap-3 md:gap-4 p-2 sm:p-3 rounded-xl hover:bg-white/5 transition-all duration-300"
                  >
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${info.color}/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-${info.color.split(" ")[1]}/20`}
                    >
                      <info.icon
                        className={`w-4 h-4 sm:w-5 sm:h-5 text-${info.color.split(" ")[1]}`}
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs sm:text-sm font-semibold text-white mb-0.5">
                        {info.title}
                      </h4>
                      <p className="text-gray-400 text-[10px] sm:text-sm group-hover:text-gray-300 transition-colors break-words">
                        {info.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links - Responsive */}
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-700">
                <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
                  Connect with me on
                </p>
                <div className="flex gap-2 sm:gap-3 flex-wrap">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800/50 border border-gray-700 hover:border-blue-500 flex items-center justify-center hover:bg-blue-500/20 transition-all duration-300 group"
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-blue-400 transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800/50 border border-gray-700 hover:border-purple-500 flex items-center justify-center hover:bg-purple-500/20 transition-all duration-300 group"
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-purple-400 transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800/50 border border-gray-700 hover:border-cyan-500 flex items-center justify-center hover:bg-cyan-500/20 transition-all duration-300 group"
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-cyan-400 transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 animate-on-scroll opacity-0 delay-200">
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Send a Message
                </span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-1.5"
                  >
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full bg-gray-800/50 border ${touched.name && errors.name ? "border-red-500" : touched.name ? "border-green-500" : "border-gray-700"} rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300`}
                      placeholder="Your Full Name"
                    />
                    {touched.name && !errors.name && formData.name && (
                      <CheckCircle className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                    )}
                    {touched.name && errors.name && (
                      <AlertCircle className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                    )}
                  </div>
                  {touched.name && errors.name && (
                    <p className="mt-1 text-red-500 text-[10px] sm:text-xs flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-1.5"
                  >
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full bg-gray-800/50 border ${touched.email && errors.email ? "border-red-500" : touched.email ? "border-green-500" : "border-gray-700"} rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300`}
                      placeholder="your.email@example.com"
                    />
                    {touched.email && !errors.email && formData.email && (
                      <CheckCircle className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                    )}
                    {touched.email && errors.email && (
                      <AlertCircle className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                    )}
                  </div>
                  {touched.email && errors.email && (
                    <p className="mt-1 text-red-500 text-[10px] sm:text-xs flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-1.5"
                  >
                    Subject <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full bg-gray-800/50 border ${touched.subject && errors.subject ? "border-red-500" : touched.subject ? "border-green-500" : "border-gray-700"} rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300`}
                      placeholder="What's this about?"
                    />
                    {touched.subject && !errors.subject && formData.subject && (
                      <CheckCircle className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                    )}
                    {touched.subject && errors.subject && (
                      <AlertCircle className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                    )}
                  </div>
                  {touched.subject && errors.subject && (
                    <p className="mt-1 text-red-500 text-[10px] sm:text-xs flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-1.5"
                  >
                    Message <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows="4 sm:rows-5"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full bg-gray-800/50 border ${touched.message && errors.message ? "border-red-500" : touched.message ? "border-green-500" : "border-gray-700"} rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none min-h-[100px] sm:min-h-[120px]`}
                      placeholder="Tell me about your project..."
                    />
                    {touched.message && !errors.message && formData.message && (
                      <CheckCircle className="absolute right-2.5 sm:right-3 top-2.5 sm:top-3 w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                    )}
                    {touched.message && errors.message && (
                      <AlertCircle className="absolute right-2.5 sm:right-3 top-2.5 sm:top-3 w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                    )}
                  </div>
                  {touched.message && errors.message && (
                    <p className="mt-1 text-red-500 text-[10px] sm:text-xs flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 sm:py-3.5 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/25 disabled:opacity-70 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-white/10 to-blue-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                </button>
              </form>

              {messageSent && (
                <div className="mt-3 sm:mt-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-400 p-3 sm:p-4 rounded-xl flex items-center gap-2 sm:gap-3 animate-fade-in">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="text-[10px] sm:text-sm">
                    Your message has been sent successfully!
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float-delay {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: float-delay 3s ease-in-out infinite 1.5s;
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition:
            opacity 0.6s ease-out,
            transform 0.6s ease-out;
        }

        .animate-on-scroll.animate-fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        .delay-100 {
          transition-delay: 0.1s;
        }
        .delay-200 {
          transition-delay: 0.2s;
        }
        .delay-300 {
          transition-delay: 0.3s;
        }
      `}</style>
    </section>
  );
};

export default Contact;