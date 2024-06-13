// app/api/auth/register/route.js
import { NextResponse } from 'next/server';
import { query } from '@/app/db/db';

export async function POST(req) {
  try {
    const author = await req.json();            
    console.log('Received user data:', author);

    const result = await query({
      query: 'INSERT INTO author (name) VALUES (?)',
      values: [author.name],
    });

    console.log('Query result:', result);

    if (result.affectedRows > 0) {
      return NextResponse.json({ message: 'author created successfully', author }, { status: 201 });
    } else {
      return new NextResponse('Insertion failed', { status: 500 });
    }
  } catch (error) {
    console.error('Error:', error);
    return new NextResponse('An error occurred', { status: 400 });
  }
}
