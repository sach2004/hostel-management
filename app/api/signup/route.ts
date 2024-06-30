

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { name, email, password } = await req.json();

  if (!name || !email || !password) {
    return new NextResponse(JSON.stringify({ message: "Missing fields" }), {
      status: 400
    });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword
      }
    });

    return new NextResponse(JSON.stringify({ message: "User created", user }), {
      status: 201
    });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ message: "Internal server error" }), {
      status: 500
    });
  }
}
