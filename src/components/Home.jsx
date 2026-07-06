import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black px-4 py-8"
    >
      <div className="text-center w-full max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 sm:mb-4 leading-tight">
          Hi, I'm{" "}
          <span className="text-blue-500 block sm:inline">Sameer Makwani</span>
        </h2>

        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 sm:mb-8 px-2">
          Frontend Developer & Mendix Developer
        </p>

        <a
          href="#projects"
          className="inline-block bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg lg:text-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-blue-500/25 w-full sm:w-auto max-w-xs sm:max-w-none"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Home;
