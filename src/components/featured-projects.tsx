import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { cn } from "@/lib/utils"

import Link from "next/link"
import { ExternalLinkIcon } from "lucide-react"
import { PORTOLFIO_DATA } from "@/data/portfolio-data"

export function FeaturedProjects() {
    return (
        <section className="flex min-h-0 flex-col gap-y-3">
            <h2 className="text-lg font-bold">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PORTOLFIO_DATA.projects.map((project) => (
                    <Card key={project.name} className="shadow">
                        <CardHeader>
                            <CardTitle>{project.name}</CardTitle>
                            <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                    <CardFooter className="flex items-center justify-between">
                        <div className="flex items-center gap-x-2">
                            <div className={cn("size-4 rounded-full", PORTOLFIO_DATA.techColours[project.tech])}></div>
                            <p className="text-sm text-muted-foreground">{project.tech}</p>
                        </div>
                        <div>
                            <Link href="https://vintage-terms.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground gap-2 flex items-center hover:underline">
                                View Project
                                <ExternalLinkIcon className="size-3 inline-block" />
                            </Link>
                        </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    )
}