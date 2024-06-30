// app/api/auth/activitiesUser/route.tsx
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()
export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession();

    console.log('Session:', session); 

    if (!session) {
      return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }

    const email = session.user?.email ?? ''

    console.log(email)

    const user = await prisma.user.findUnique({
      where : {
        email : email
      },
      include :{
        requests : true
      }
    })


    console.log(user)
 
    const activities = [
      {
        id: 1,
        email: 'student1@example.com',
        name: 'Student One',
        requests: [
          { reason: 'Reason 1', status: 'Pending' }
        ]
      },
     
    ];
    

    return new NextResponse(JSON.stringify(user), { status: 200 });

  } catch (error) {
    console.error('Error fetching session or activities:', error);
    return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
