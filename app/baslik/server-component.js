"use server";
import { db } from "@/app/lib/prisdb";

export default async function fetchBaslik(id) {
    const baslik = await db.baslik.findUnique({
        where: {
            id: Number(id)
        },
        include: {
            entries: {
                select: {content: true,
                    authorName: true,
                    no: true
                }
            }
        }
    });

    // Ensure the result is a plain JSON object
    return JSON.parse(JSON.stringify(baslik));
}
