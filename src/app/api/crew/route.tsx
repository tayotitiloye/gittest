import prisma from "@/lib/prismadb"
import { NextResponse } from "next/server"

 export async function GET() {

    try {
        const crew = await prisma.crewType.findMany()

       
        return NextResponse.json(crew)
    
    } catch (error) {
        return NextResponse.json('unable to fetch data')
    }
    
}