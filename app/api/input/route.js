"use server"
import {db} from "@/app/lib/prisdb";
import {NextResponse} from "next/server";
export async function Enter({entryText, nick}) {
    try {
        if (!entryText || !nick) throw new Error('nick veya entry boş bırakılamaz');
        await sql`INSERT INTO Entry (Name, Owner) VALUES (${petName}, ${ownerName});`;
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}