import { query } from "@/app/db/db";
import { NextResponse } from "next/server";




export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const query1 = `SELECT * FROM courses WHERE category_id = '${category}'`;
    const values = [];
    const results = await query({
        query: query1,
        values: values,
    });

    return NextResponse.json({ courses: results });
}