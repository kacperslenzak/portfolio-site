import { PORTOLFIO_DATA } from "@/data/portfolio-data";
import { Button } from "@/components/ui/button";

export function Technologies() {
    return (
        <section className="flex min-h-0 flex-col gap-y-3">
            <h2 className="text-lg font-bold">My Most Used Technologies</h2>
            <div className="grid grid-cols-2 gap-x-2 gap-y-2 md:grid-cols-4">
                {PORTOLFIO_DATA.technologies.map((technology) => (
                    <Button variant="outline" size="sm" key={technology.name}>
                        <technology.icon className={`size-${technology.size}`} />
                        <span className="text-sm font-semibold">{technology.name}</span>
                    </Button>
                ))}
            </div>
        </section>
    )
}
