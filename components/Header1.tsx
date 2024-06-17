import React from 'react';

const Header1: React.FC = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/path/to/profile-pic.jpg" alt="Profile" className="w-8 h-8 rounded-full" />
      </div>
    </header>
  );
};

export default Header1;
