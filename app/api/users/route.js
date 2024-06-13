import { NextResponse } from 'next/server';
import { query } from '@/app/db/db';

export async function GET() {
    try {
        const results = await query({ query: 'SELECT * FROM users' });
        return NextResponse.json({ users: results });
    } catch (error) {
        console.error('Error:', error);
        return new NextResponse('An error occurred', { status: 500 });
    }
}