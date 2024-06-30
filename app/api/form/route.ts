import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse) {
  const formData = await req.json();

  console.log('Reason:', formData.reason);
  console.log("SessionId", formData.sessionId);

  try {
    await prisma.request.create({
      data: {
        reason: formData.reason,
        user: { connect: { id: parseInt(formData.sessionId) } },
        checkin: formData.checkin, 
        checkout: formData.checkout 
      }
    });

    console.log("Database saved with new values");
    alert("Form Submitted!!!")
    return NextResponse.json({ message: 'Form data received successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal server error' });
  }
}
