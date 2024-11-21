import { Header } from "@/components/header";
import { About } from "@/components/about";
import { FeaturedProjects } from "@/components/featured-projects";
import { Technologies } from "@/components/technologies";
import WorkExperience from "@/components/work-experience";

export default function Home() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-3xl space-y-8 print:space-y-6">
        <Header />
        <About />
        <Technologies />
        <FeaturedProjects />
        <WorkExperience />
      </section>
    </main>
  );
}
