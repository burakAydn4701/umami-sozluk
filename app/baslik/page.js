"use client"
import ClientComponent from "@/app/baslik/client-component";
import {useSearchParams} from "next/navigation";

export default function Page() {
    const searchParams = useSearchParams()
    const name = searchParams.get("name")// Example ID, you can replace this with dynamic data

    return (
        <div>
            <ClientComponent name={name} />
        </div>
    );
}
