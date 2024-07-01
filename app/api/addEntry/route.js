// app/api/addEntry/route.js

import { NextResponse } from 'next/server';
import { db } from '@/app/lib/prisdb';


export async function POST(req) {
    const { content, authorName, baslikName } = await req.json();

    // Validate required fields
    if (!content || !authorName || !baslikName) {
        return NextResponse.json({ error: 'Content, Author Name, and Baslik Name are required' }, { status: 400 });
    }

    try {
        // Create new entry in the database
        const newEntry = await db.entry.create({
            data: {
                content,
                authorName,
                baslikName,
            },
        });

        // Respond with the new entry
        return NextResponse.json(newEntry, { status: 200 });
    } catch (error) {
        // Handle database errors
        console.error('Error adding entry:', error.message);
        return NextResponse.json({ error: 'Failed to add entry' }, { status: 500 });
    }
}


