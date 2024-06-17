import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function GET(req : NextRequest , res : NextResponse){

    const users = await prisma.user.findMany({
        include :{
            requests : true
        }
    })


    return Response.json(users)

}