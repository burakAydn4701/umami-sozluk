import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export default async function Input(request) {

    try {
        await sql`INSERT INTO Basliks (title) VALUES ("recep ivedik"),
         ("tiktok'ta dans eden gençler"),
         ("arda güler'in gürcistan'a attığı gol")
;`;
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }

    return (
        <form>
            <textarea cols={40} rows={10} placeholder={"entry girin"}></textarea>
            <button type={"submit"}>gir</button>
        </form>
    )
}