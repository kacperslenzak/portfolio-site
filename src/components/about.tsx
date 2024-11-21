import { PORTOLFIO_DATA } from "@/data/portfolio-data"

export function About() {
    return (
        <section className="flex min-h-0 flex-col gap-y-3">
            <p className="font-semibold">{PORTOLFIO_DATA.about}</p>
            <div className="mt-2">
                {PORTOLFIO_DATA.aboutBulletPoints.map((bulletPoint) => (
                    <p key={bulletPoint} className="mb-1">{'• '}{bulletPoint}</p>
                ))}
            </div>
        </section>
    )
}