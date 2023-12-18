// import prisma from "@/lib/prismadb"
// import { NextResponse } from "next/server"

//  export async function GET() {

//     try {
//         const tech = await prisma.technologyType.findMany()

       
//         return NextResponse.json(tech)
        
//     } catch (error) {
//         return NextResponse.json('unable to fetch data')
//     }
    
// }



import prisma from "@/lib/prismadb"
import { NextResponse } from "next/server"

 export async function GET() {

    try {
        const technology = await prisma.technologyType.findMany()

       
        return NextResponse.json(technology)
        
    } catch (error) {
        return NextResponse.json('unable to fetch data')
    }
    
}