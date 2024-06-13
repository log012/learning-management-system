// app/api/auth/register/route.js
import { NextResponse } from 'next/server';
import { query } from '@/app/db/db';

export async function POST(req) {
  try {
    const category = await req.json();            
    console.log('Received user data:', category);

    const result = await query({
      query: 'INSERT INTO categories (name, description) VALUES (?, ?)',
      values: [category.name,category.description],
    });

    console.log('Query result:', result);

    if (result.affectedRows > 0) {
      return NextResponse.json({ message: 'Category created successfully', category }, { status: 201 });
    } else {
      return new NextResponse('Insertion failed', { status: 500 });
    }
  } catch (error) {
    console.error('Error:', error);
    return new NextResponse('An error occurred', { status: 400 });
  }
}
