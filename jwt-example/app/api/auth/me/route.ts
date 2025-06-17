import { cookies } from "next/headers";
import { COOKIE_NAME } from "@/constants";
import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";

export async function GET() {
    const cookieStore = await cookies();
    
    const token = cookieStore.get(COOKIE_NAME);
    
    if(!token) {
        return NextResponse.json(
            {
                message: "Unauthorized",
            },
            {
                status: 401,
            }
        );
    }
    const { value } = token;
    const secret = process.env.JWT_SECRET || "";
    try {
        verify(value, secret);
        const response = {
            user: "Super Top Secret User"
        }
        return new Response(JSON.stringify(response), {
            status: 200,
        });
    } catch(e) {
        return NextResponse.json(
            {
                message: "Something went wrong",
            },
            {
                status: 400,
            }
        );
    }
}