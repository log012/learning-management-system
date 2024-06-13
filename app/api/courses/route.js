import { NextResponse } from 'next/server';
import { query } from '@/app/db/db';


export async function GET(req){
     try{
        const course = await query({
            query: `SELECT c.id, c.title, c.image,c.description, a.name AS instructor, cat.name AS category
      FROM courses c
      JOIN author a ON c.author_id = a.id
      JOIN categories cat ON c.category_id = cat.id`,
            values: [],

        });

        

        return NextResponse.json({ course }, { status: 200 });
     }catch(error){
        console.error('Error:', error);
        return new NextResponse('An error occurred', { status: 500 });
     }
  



}