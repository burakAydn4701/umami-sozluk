
import {sql} from "@vercel/postgres";
import {NextResponse} from "next/server";
export async function GET(request) {
    try {
        const result =
        await sql`INSERT INTO basliks (title) VALUES ("recep ivedik"),
        ("tiktok'ta dans eden gençler"),
        ("arda güler'in gürcistan'a attığı gol");`;
        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}