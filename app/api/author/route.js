import { NextResponse } from 'next/server';
import { query } from '@/app/db/db';


export async function GET(req){
     try{
        const author = await query({
            query: 'SELECT * FROM author',
            values: [],

        });

        return NextResponse.json({ author }, { status: 200 });
     }catch(error){
        console.error('Error:', error);
        return new NextResponse('An error occurred', { status: 500 });
     }
  



}