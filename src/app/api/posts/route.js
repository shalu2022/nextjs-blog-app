import connect from "@/utils/db"
import { NextResponse } from "next/server"
import Post from '@/models/Post'

export const GET = async(req)=>{
        try{
        await connect()
        const posts = await Post.find()
        return new NextResponse(JSON.stringify(posts), {status: 200})
        }catch(err){
        console.log(err)
        return new NextResponse("Error Found", {status: 500})
        }
}