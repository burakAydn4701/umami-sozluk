import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {

    try {
        await sql`INSERT INTO Basliks (title) VALUES ('recep ivedik'),
        ('arda güler\'in gürcistan\'a attığı gol'),
        ('tiktok\'ta dans eden gençler');`;
        return NextResponse.json({ message: "Rows inserted successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}