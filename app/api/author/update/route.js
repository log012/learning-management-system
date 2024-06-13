import { NextResponse } from 'next/server';
import { query } from '@/app/db/db';

export async function PUT(req) {
    try {
        const { id, name } = await req.json();
         console.log(id,name)

        const result = await query({
            query: 'UPDATE author SET name = ? WHERE id = ?',
            values: [name, id],
        });

        return NextResponse.json({ message: 'Category updated successfully', result }, { status: 201 });
    } catch (error) {
        console.error('Error:', error);
        return new NextResponse('An error occurred', { status: 500 });

    }

}