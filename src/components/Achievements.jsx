import React from 'react';

const AchievementCard = ({ title, issuer, date, description }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg mb-6">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <div className="flex justify-between items-center mb-3">
        <p className="text-primary-blue font-medium">{issuer}</p>
        <p className="text-gray-400 text-sm">{date}</p>
      </div>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const Achievements = () => {
  const achievements = [
    {
      title: 'Best Paper Award',
      issuer: 'International Conference on Web3',
      date: 'June 2023',
      description:
        'Received the Best Paper Award for research on "Novel Approaches to Transformer Architecture for Natural Language Processing".',
    },
    {
      title: 'Hackathon Winner',
      issuer: 'Global AI Challenge',
      date: 'November 2022',
      description:
        'First place in a global hackathon focused on developing AI solutions for healthcare challenges, competing against 500+ teams.',
    },
    {
      title: 'Open Source Contributor Award',
      issuer: 'GitHub',
      date: 'October 2022',
      description:
        'Recognized for significant contributions to open-source projects in the field of machine learning and data science.',
    },
    {
      title: 'Tech Innovation Award',
      issuer: 'Tech Innovators Summit',
      date: 'March 2022',
      description:
        'Honored for developing an innovative solution that addressed critical challenges in real-time data processing.',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <h2 className="section-title">Achievements</h2>
      <div className="max-w-3xl mx-auto">
        {achievements.map((achievement, index) => (
          <AchievementCard key={index} {...achievement} />
        ))}
      </div>
    </div>
  );
};

export default Achievements;
