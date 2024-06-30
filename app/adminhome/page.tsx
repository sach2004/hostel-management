import React from 'react';
import SidebarAdmin from '@/components/SidebarAdmin';
import Header from '@/components/Header';
import Stats from '@/components/Stats';
import ActivityTable from '@/components/ActivityTable';
import { getServerSession } from 'next-auth';
import Sidebar from '@/components/Sidebar';






const Home: React.FC = async () => {

  const session = await getServerSession()
  console.log(session)

  
  return (
    <div className="flex min-h-screen">
      <SidebarAdmin />
      <div className="flex flex-col flex-1">
        <Header session={session} />
        
        <main className="flex-1 bg-gray-100 p-4">
          <div className='bg-white mt-10 rounded-lg'><ActivityTable /></div>
          
        </main>
      </div>
    </div>
  );
};

export default Home;
