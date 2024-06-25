import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export default async function Input(request) {

    return (
        <form>
            <textarea cols={40} rows={10} placeholder={"entry girin"}></textarea>
            <button type={"submit"}>gir</button>
        </form>
    )
}