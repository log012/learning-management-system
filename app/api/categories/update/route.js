import { NextResponse } from 'next/server';
import { query } from '@/app/db/db';

export async function PUT(req) {
    try {
        const { id, name, description } = await req.json();

        const result = await query({
            query: 'UPDATE categories SET name = ?, description = ? WHERE id = ?',
            values: [name, description, id],
        });

        return NextResponse.json({ message: 'Category updated successfully', result }, { status: 201 });
    } catch (error) {
        console.error('Error:', error);
        return new NextResponse('An error occurred', { status: 500 });

    }

}