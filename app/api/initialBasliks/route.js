import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {

    try {
        await sql`INSERT INTO basliks (title) VALUES ("recep ivedik");`;
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }

    const basliks = await sql`SELECT * FROM basliks;`;
    return NextResponse.json({ pets }, { status: 200 });
}