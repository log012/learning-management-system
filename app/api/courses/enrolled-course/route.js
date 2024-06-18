// app/api/auth/register/route.js
import { NextResponse } from 'next/server';
import { query } from '@/app/db/db';

export async function POST(req) {
  try {
    const enrolledCourse = await req.json();            
    console.log('Received course data:', enrolledCourse);

    const result = await query({
      query: 'INSERT INTO enrolled_courses (course_id,user_id) VALUES (?,?)',
      values: [enrolledCourse.course_id,enrolledCourse.user_id],
    });

    console.log('Query result:', result);

    if (result.affectedRows > 0) {
      return NextResponse.json({ message: 'enrolledCourse created successfully', enrolledCourse }, { status: 201 });
    } else {
      return new NextResponse('Insertion failed', { status: 500 });
    }
  } catch (error) {
    console.error('Error:', error);
    return new NextResponse('An error occurred', { status: 400 });
  }
}
