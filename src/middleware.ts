import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

export default async function middleware (req : NextRequest){
    const token = await getToken({req});
    console.log(token)
}