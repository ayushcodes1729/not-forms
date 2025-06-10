import { prisma } from "@repo/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const FormMetadata = z.object({
    title: z.string().max(20),
    description: z.string().max(80).optional(),
    welcome: z.string().max(100).optional(),
    end: z.string().max(100).optional()
})

export async function POST(req:NextRequest) {
    try {
        const session = await getServerSession();

        const user = await prisma.user.findFirst({
            where: {
                email: session?.user?.email ?? ""
            }
        })

        if (!user) {
            return NextResponse.json({
                message: "User not found"
            },{
                status: 404
            })
        }

        const metaData = FormMetadata.parse(await req.json());
        
        const savedData = await prisma.form.create({
            data: {
                userId: user.id,
                title: metaData.title,
                description: metaData?.description,
                welcome: metaData?.welcome,
                end: metaData?.end
            }
        })

        return NextResponse.json({
            savedData,
            message: "Form Created Successfully"
        },{
            status: 200
        })
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({
                message: error.message
            },{
                status: 400
            })
        }else{
            return NextResponse.json({
                message: "Couldn't create form"
            }, {
                status: 400
            })
        }
    }
}