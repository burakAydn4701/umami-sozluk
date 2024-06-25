import {sql} from "@vercel/postgres";
import {NextResponse} from "next/server";

async function GET(request) {
    const basliks = [
        {
            id: 0,
            title: "recep ivedik",
            entries: [
                {
                    no: 0,
                    text: "yarısında çıktığım filmdir.",
                    author: "sozlukcu47",
                    upvote: 0,
                    downvote: 0
                },
                {
                    no: 1,
                    text: "sandalyeden düşüren film",
                    author: "prostethnicsth",
                    upvote: 0,
                    downvote: 0
                }
            ]
        },
        {
            id: 1,
            title: "tiktok'ta dans eden gençler",
            entries: [
                {
                    no: 0,
                    text: "gümbür gümbür geliyor denen z kuşağı bunlar işte. yazık.",
                    author: "boomer35",
                    upvote: 0,
                    downvote: 0
                }
            ]
        },
        {
            id: 2,
            title: "arda güler'in gürcistan'a attığı gol",
            entries: [
                {
                    no: 0,
                    text: "bombastiktir.",
                    author: "robertobaggio",
                    upvote: 0,
                    downvote: 0
                }
            ]
        }
    ]

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