
import { query } from "@/app/db/db";
import { NextResponse } from "next/server";


export async function GET(req){
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    console.log(id);
    if (id) {
    const category = await query({
        query:'SELECT * FROM categories WHERE id=?',
        values:[id]
    });
    return NextResponse.json({ category }, { status: 200 });
    }else{
        return new NextResponse(' failed', { status: 500 });
    }
}