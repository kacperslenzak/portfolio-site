import { Button } from "@/components/ui/button"
import { PORTOLFIO_DATA } from "@/data/portfolio-data"
import { ModeToggle } from "@/components/theme-toggle"

export function SocialLinks() {
    return (
        <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
            {PORTOLFIO_DATA.socialLinks.map((socialLink) => (
                <Button className="size-8" variant="outline" size="icon" asChild key={socialLink.name}>
                    <a target="_blank" rel="noopener noreferrer" href={socialLink.url}>
                        <socialLink.icon className="size-4" />
                    </a>
                </Button>
            ))}
            <ModeToggle />
        </div>
    )
}