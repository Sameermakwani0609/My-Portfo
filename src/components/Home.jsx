import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-black"
    >
      <div className="text-center px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Hi, I'm <span className="text-blue-500">Sameer Makwani</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-300">
          Frontend Developer & Mendix Developer
        </p>
        <a
          href="#projects"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Home;
