"use server";
import { db } from "@/app/lib/prisdb";

export default async function fetchBaslik(name) {
    const baslik = await db.baslik.findUnique({
        where: {
            title: name
        },
        include: {
            entries: {
                select: {
                    content: true,
                    authorName: true,
                    createdAt: true
                }
            }
        }
    });

    // Ensure the result is a plain JSON object
    return JSON.parse(JSON.stringify(baslik));
}