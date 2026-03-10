import { Explore } from "./Explore"
import type { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
    title: 'Explore'
}

export default function ExplorePage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Explore/>
        </Suspense>
    )
}