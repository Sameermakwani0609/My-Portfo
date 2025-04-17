import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen py-20 mt-20 px-6 sm:px-10 md:px-20"
    >
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <h5 className="text-3xl sm:text-4xl font-semibold text-gray-400 mb-2">
            Hi, I'm
          </h5>
          <h2 className="text-4xl sm:text-5xl font-bold flex items-center space-x-3 mb-2">
            <span className="text-blue-500">Sameer</span>
            <span className="text-purple-500">Makwani</span>
          </h2>
          <h3 className="text-xl sm:text-2xl text-gray-400 mb-4">
            Software Engineer | AI Enthusiast
          </h3>
          <p className="text-base sm:text-lg text-gray-400 mb-6 max-w-xl leading-relaxed">
            Passionate about creating innovative solutions using cutting-edge
            technologies. Specializing in full-stack development and low-code
            platforms.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="btn btn-primary"
            >
              View My Work
            </button>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
              </svg>
              LinkedIn
            </a>

            <a
              href="mailto:sameermakwani0609@gmail.com"
              className="btn btn-danger flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
              </svg>
              Gmail
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500">
            <img
              src="/MyImage.jpg"
              alt="Sameer Makwani"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
