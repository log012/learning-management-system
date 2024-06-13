// app/api/auth/register/route.js
import { NextResponse } from 'next/server';
import { query } from '@/app/db/db';

export async function POST(req) {
  try {
    const user = await req.json();
    console.log('Received user data:', user);

    const result = await query({
      query: 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      values: [user.name, user.email, user.password],
    });

    console.log('Query result:', result);

    if (result.affectedRows > 0) {
      return NextResponse.json({ message: 'User created successfully', user }, { status: 201 });
    } else {
      return new NextResponse('Insertion failed', { status: 500 });
    }
  } catch (error) {
    console.error('Error:', error);
    return new NextResponse('An error occurred', { status: 400 });
  }
}
