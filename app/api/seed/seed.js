"use server"
import {db} from "@/app/lib/prisdb";
import {NextResponse} from "next/server";
import {sql} from "@vercel/postgres";
export async function Seed() {
    const entry1 = {
        content: "yarısında çıktığım filmdir.",
        author: "sozlukcu47",
        baslik: "recep ivedik"
    }
    const entry2 = {
        content: "sandalyeden düşüren film",
        author: "prostethnicsth",
        baslik: "recep ivedik"
    }
    const entry3 = {
        content: "zam mı yoksa enflasyon farkı mı? bunu anla sonra başlık aç",
        author: "boomer35",
        baslik: "memurların altı ayda bir zam alması"
    }
    const entry4 = {
        content: "bombastiktir",
        author: "robertobaggio",
        baslik: "arda gülerin gürcistana attığı gol"
    }

    try {
        await sql`INSERT INTO basliktest (title) VALUES (${entry1.baslik};`;
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}