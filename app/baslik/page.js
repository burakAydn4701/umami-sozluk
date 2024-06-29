"use client"
import ClientComponent from "@/app/baslik/client-component";
import {useSearchParams} from "next/navigation";

export default function Page() {
    const searchParams = useSearchParams()
    const id = searchParams.get("id")// Example ID, you can replace this with dynamic data

    return (
        <div>
            <ClientComponent id={id} />
        </div>
    );
}
