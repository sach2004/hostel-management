import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: 'Registered Students', value: 15 },
    { label: 'Total Rooms', value: 10 },
    { label: 'Booked Rooms', value: 8 },
    { label: 'Featured Courses', value: 9 },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 p-4 text-black">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-4 shadow rounded-lg text-center">
          <div className="text-3xl font-bold">{stat.value}</div>
          <div className="text-gray-500">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
