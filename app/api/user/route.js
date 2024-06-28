import {db} from "@/app/lib/prisdb";
import {NextResponse} from "next/server";
export async function POST(request) {
    try {
        const body = await request.json()
        const { username, password } = body

        //check if username already exist
        const existingUsername = await db.user.findUnique({
            where: {username: username}
        })
        if (existingUsername) {
            return NextResponse.json({user: null,
                message: "Bu kullanıcı adı zaten alınmış. daha yaratıcı olun."},
                {status: 409})
        }

        const newUser = await db.user.create({
            data: {
                username: username,
                password: password
            }
        })

        return NextResponse.json({user: newUser, message: "hesap başarıyla oluşturuldu"}, {status: 201})
    } catch (error) {
        return NextResponse.json({message: "bir şeyler ters gitti."}, {status: 500})
    }
}