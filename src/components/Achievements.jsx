import React from "react";

const AchievementCard = ({ title, issuer, date, description }) => {
  return (
    <div className="bg-black border-2 border-transparent hover:border-blue-400 transition-all duration-300 p-4 sm:p-6 rounded-lg shadow-lg mb-6">
      <div className="border-2 border-gray-700 p-3 sm:p-4 rounded-lg">
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
          {title}
        </h3>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 sm:mb-3">
          <p className="text-primary-blue font-medium text-sm sm:text-base">
            {issuer}
          </p>
          <p className="text-gray-400 text-xs sm:text-sm">{date}</p>
        </div>
        <p className="text-gray-300 text-sm sm:text-base">{description}</p>
      </div>
    </div>
  );
};

const Achievements = () => {
  const achievements = [
    {
      title: "Decentralized Exchange for Cryptocurrencies using Blockchain",
      issuer:
        "7th International Conference on Computing, Communication, Control and Automation (ICCUBEA-2023)",
      date: "Published: May 2023",
      description:
        "Developed and executed a decentralized exchange (DEX) utilizing blockchain technology for peer-to-peer trading of cryptocurrencies, including Ethereum and Sprybucks. The DEX offers enhanced security, privacy, and autonomy for traders while utilizing smart contracts and a proof-of-stake consensus algorithm for transparency and reliability.",
    },
  ];

  return (
    <div className="mt-8 sm:py-20 px-4 bg-black">
      <h2 className="text-3xl sm:text-5xl font-extrabold text-purple-500 text-center mb-10 sm:mb-14">
        Achievements
      </h2>
      <div className="max-w-3xl mx-auto">
        {achievements.map((achievement, index) => (
          <AchievementCard key={index} {...achievement} />
        ))}
        <div className="text-gray-400 text-center mt-4 italic text-sm sm:text-base">
          More achievements coming soon...
        </div>
      </div>
    </div>
  );
};

export default Achievements;
