'use client'

import { PAGES } from "@/config/pages.config"
import { useRouter } from "next/navigation"  // Changed from 'next/router' to 'next/navigation'

export function ProfileFake() {
    const router = useRouter()  // This now uses the App Router's router
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Profile Fake</h1>
            <button onClick={() => router.push(PAGES.HOME)}>Go to home</button>
        </div>
    )
}