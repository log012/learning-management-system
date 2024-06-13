import { NextResponse } from 'next/server';
import { query } from '@/app/db/db';


export async function GET(req){
     try{
        const categories = await query({
            query: 'SELECT * FROM categories',
            values: [],

        });

        return NextResponse.json({ categories }, { status: 200 });
     }catch(error){
        console.error('Error:', error);
        return new NextResponse('An error occurred', { status: 500 });
     }
  



}