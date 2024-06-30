import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Stats from '@/components/Stats';
import ActivityTableUser from '@/components/ActivityTableUser';
import { getServerSession } from 'next-auth';
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import GradientComp from '@/components/GradientComp';






const Home: React.FC = async () => {

  const session = await getServerSession()
  console.log(session)

  
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header session={session} />
        
        <GradientComp session={session}/>
        <main className="flex-1 bg-gray-100 p-4">
          <Stats />
          <div className='bg-white mt-10 rounded-lg'><ActivityTableUser /></div>
          
        </main>
      </div>
    </div>
  );
};

export default Home;
