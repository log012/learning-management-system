// app/api/auth/register/route.js
import { NextResponse } from 'next/server';
import { query } from '@/app/db/db';

export async function DELETE(req) {
  try {
    const {id} = await req.json();            
    console.log('Received user data:', id);

    const result = await query({
      query: 'DELETE FROM author WHERE id=?',
      values: [id],
    });

    console.log('Query result:', result);

    if (result.affectedRows > 0) {
      return NextResponse.json({ message: 'author deleted successfully', id }, { status: 200 });
    } else {
      return new NextResponse('Delete failed', { status: 500 });
    }
  } catch (error) {
    console.error('Error:', error);
    return new NextResponse('An error occurred', { status: 400 });
  }
}
