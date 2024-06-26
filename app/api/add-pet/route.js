import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import {initialBasliks} from "@/app/api/initialBasliks/initialBasliks";

export async function GET(request) {
    const recepivedik = initialBasliks[0].title
    const tiktokta = initialBasliks[1].title
    const ardagülerin = initialBasliks[2].title

    try {
        if (!recepivedik || !tiktokta) throw new Error('title names required');
        await sql`INSERT INTO basliks (title) VALUES (${recepivedik}, ${tiktokta}, ${ardagülerin});`;
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }

    const basliks = await sql`SELECT * FROM basliks;`;
    return NextResponse.json({ basliks }, { status: 200 });
}