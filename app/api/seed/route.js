import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
    try {
        const result =
            await sql`CREATE TABLE IF NOT EXISTS basliks ( id SERIAL PRIMARY KEY, title varchar(255) NOT NULL);`;
            await sql`CREATE TABLE IF NOT EXISTS users ( username varchar(255) PRIMARY KEY, password varchar(255) NOT NULL);`;
            await sql`CREATE TABLE IF NOT EXISTS entries ( id SERIAL PRIMARY KEY, 
            baslik_id INT,
            author VARCHAR(25),
            text TEXT NOT NULL,
            FOREIGN KEY (baslik_id) REFERENCES basliks (id) ON DELETE CASCADE,
            FOREIGN KEY (author) REFERENCES users (username));`;
        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}