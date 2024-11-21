import { SocialLinks } from "@/components/social-links"
import { PORTOLFIO_DATA } from "@/data/portfolio-data"
import Image from "next/image"

export function Header() {
    return (
        <div className="flex items-center justify-between">
            <div className="flex-1 space-y-1 5">
                <h1 className="text-2xl font-bold">Kacper Slenzak</h1>
                <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground inline-flex gap-x-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe size-3"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                    Ireland
                </p>
                <SocialLinks />
            </div>
            <div className="relative group">
                <span className="relative flex shrink-0 overflow-hidden rounded-full size-28">
                    <Image src={PORTOLFIO_DATA.photo} alt={PORTOLFIO_DATA.name} fill className="object-cover" />
                </span>
            </div>
        </div>
    )
}
