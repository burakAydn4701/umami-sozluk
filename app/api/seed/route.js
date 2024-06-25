import {db} from "@vercel/postgres";
import {NextResponse} from "next/server";

const client = await db.connect()
export async function seedBasliks(request) {
    await client.sql`
     CREATE TABLE IF NOT EXISTS Basliks (
       id SERIAL PRIMARY KEY,
       title VARCHAR(25) NOT NULL
     );
    `;

    await client.sql`
    INSERT INTO Basliks (title) VALUES ("recep ivedik"), ("tiktok'ta dans eden gençler"), ("arda güler'in gürcistan'a attığı gol");
    `;
}