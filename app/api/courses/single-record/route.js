import { query } from "@/app/db/db";
import { NextResponse } from "next/server";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    console.log(id);

    if (id) {
        const courseQuery = `
            SELECT c.*, v.*
            FROM courses c
            LEFT JOIN videos v ON c.id = v.course_section_id 
            WHERE c.id = ?
        `;
        const courseWithVideos = await query({
            query: courseQuery,
            values: [id]
        });

        return NextResponse.json({ courseWithVideos }, { status: 200 });
    } else {
        return new NextResponse('failed', { status: 500 });
    }
}
