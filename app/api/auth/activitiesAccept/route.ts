import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
       
       const {id} = await req.json()

       
        const updatedRequest = await prisma.request.update({
            where: { id: parseInt(id)},
            data: {
                status: "APPROVED",
            },
        });
       
        return NextResponse.json({ status: updatedRequest.status });
    } catch (error) {
        console.error("Error updating request status:", error);
        return NextResponse.json({ error: "Failed to update request status" }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}
