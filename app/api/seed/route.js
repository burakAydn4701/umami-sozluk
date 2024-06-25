import {sql} from "@vercel/postgres";
import {NextResponse} from "next/server";

export async function GET(request) {
    try {
        const result =
            await sql`CREATE TABLE Basliks ( id SERIAL PRIMARY KEY,
            title varchar(255) NOT NULL
             );`;
            await sql`CREATE TABLE Entries ( id SERIAL PRIMARY KEY,
            text varchar(255) NOT NULL,
            baslik_id INT,
            author varchar(255) NOT NULL,
            FOREIGN KEY (baslik_id) REFERENCES Basliks (id) ON DELETE CASCADE
             );`;

        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }

}