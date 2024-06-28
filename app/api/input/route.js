"use server"
import {db} from "@/app/lib/prisdb";
import {NextResponse} from "next/server";
import {sql} from "@vercel/postgres";
export async function Enter({entryText, nick}) {
    try {
        if (!entryText || !nick) throw new Error('nick veya entry boş bırakılamaz');
        await sql`INSERT INTO Entry (content, authorName) VALUES (${entryText}, ${nick});`;
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}