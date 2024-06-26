import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import {initialBasliks} from "@/app/api/initialBasliks/initialBasliks";

export async function GET(request) {
    const recepivedik = initialBasliks[0].title
    const tiktokta = initialBasliks[1].title
    const ardagulerin = initialBasliks[2].title

    try {
        if (!recepivedik || !tiktokta || !ardagulerin) throw new Error('title names required');
        await sql`INSERT INTO basliks (title) VALUES (${recepivedik});`;
        await sql`INSERT INTO basliks (title) VALUES (${tiktokta});`;
        await sql`INSERT INTO basliks (title) VALUES (${ardagulerin});`;

    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }

    const basliks = await sql`SELECT * FROM basliks;`;
    return NextResponse.json({ basliks }, { status: 200 });
}