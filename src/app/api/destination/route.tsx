import prisma from "@/lib/prismadb"
import { NextResponse } from "next/server"

 export async function GET() {

    try {
        const destination = await prisma.destinationsType.findMany()

       
        return NextResponse.json(destination)
        
    } catch (error) {
        return NextResponse.json('unable to fetch data')
    }
    
}