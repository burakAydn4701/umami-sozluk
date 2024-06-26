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
     CREATE TABLE IF NOT EXISTS Users (
       username VARCHAR(25) PRIMARY KEY,
       password VARCHAR(25) NOT NULL,
     );
    `;

    await client.sql`
     CREATE TABLE IF NOT EXISTS Entries (
       id SERIAL PRIMARY KEY,
       baslik_id INT,
       text TEXT NOT NULL,
       author VARCHAR(25) NOT NULL,
       FOREIGN KEY (baslik_id) REFERENCES Basliks (id) ON DELETE CASCADE,
       FOREIGN KEY (author) REFERENCES Users (username)
     );
    `;
}