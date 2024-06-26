
import {sql} from "@vercel/postgres";
import {NextResponse} from "next/server";
export async function GET(request) {
    try {
        await sql`INSERT INTO basliks (title) VALUES ("recep ivedik"), ("tiktok'ta dans eden gençler"), ("arda güler'in gürcistan'a attığı gol");`;
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ request }, { status: 200 });
}

//VALUES
//
//         ;

