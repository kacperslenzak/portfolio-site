import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { PORTOLFIO_DATA } from "@/data/portfolio-data"
import Image from "next/image"

export default function WorkExperience() {
    return (
        <section className="flex min-h-0 flex-col gap-y-3">
            <h2 className="text-lg font-bold">Work Experience</h2>
            {PORTOLFIO_DATA.workExperience.map((work) => (
                <Card key={work.name} className="shadow">
                    <div className="flex items-center space-x-4">
                        <Image src={`/${work.image}`} alt={work.name} width={40} height={40} className="rounded-lg ms-6" />
                        <CardHeader className="ps-0">
                            <CardTitle>{work.name}</CardTitle>
                            <CardDescription>{work.date}</CardDescription>
                        </CardHeader>
                    </div>
                    <CardContent>
                        <p>{work.description}</p>
                    </CardContent>
                </Card>
            ))}
        </section>
    )
}