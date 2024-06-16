import { NextResponse } from 'next/server';
import { query } from '@/app/db/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';

export async function GET(){
    try {
        const session=await getServerSession(authOptions);
        console.log(session);
       const data=await query({
           query:'SELECT * FROM users WHERE id=?',
           values:[session.user.id]
       })
       console.log(data);
        return NextResponse.json({data});
    } catch (error) {
        return NextResponse.json(error);
    }
  
}