"use server";
import { db } from "@/app/lib/prisdb";

export default async function fetchBasliks() {
    const baslik = await db.baslik.findMany({
        orderBy: {
            id: "desc"
        },
        select: {
            id: true,
            title: true
        }
    });

    // Ensure the result is a plain JSON object
    return JSON.parse(JSON.stringify(baslik));
}