import { NextResponse } from 'next/server';
import { query } from '@/app/db/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';


export async function GET(req){
     try{
        const sessions=await getServerSession(authOptions);
        const id=sessions.user.id;
        const course = await query({
            query: ` SELECT c.*
        FROM courses c
        JOIN enrolled_courses ec ON c.id = ec.course_id
        WHERE ec.user_id = ?`,
            values: [id],

        });

        

        return NextResponse.json({ course }, { status: 200 });
     }catch(error){
        console.error('Error:', error);
        return new NextResponse('An error occurred', { status: 500 });
     }
  



}