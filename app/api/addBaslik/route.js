
import { NextResponse } from 'next/server';
import { db } from '@/app/lib/prisdb';

export async function POST(req) {
    const { title } = await req.json();

    // Validate required fields
    if (!title) {
        return NextResponse.json({ error: 'Baslik name is required' }, { status: 400 });
    }

    try {
        // Create new entry in the database
        const newBaslik = await db.baslik.create({
            data: {
                title
            },
        });

        // Respond with the new entry
        return NextResponse.json(newBaslik, { status: 200 });
    } catch (error) {
        // Handle database errors
        console.error('Error adding baslik:', error.message);
        return NextResponse.json({ error: 'Failed to add new baslik' }, { status: 500 });
    }
}


