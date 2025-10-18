import { siteConfig } from "@/config/site.config";
import { portfolioConfig } from "@/config/portfolio.config";
import { Socials } from "@/components/socials";
import Link from "next/link";
import ThemeToggler from "@/components/theme/theme-toggler";
import { Rss } from "lucide-react";
import { Button } from "@/components/ui/button";
import { skillsConfig } from "@/config/skills.config";

export default function Hero() {
  return (
    <section className="w-full flex flex-col lg:min-h-[calc(100vh-7rem)]">
      <Link href="/">
        <span className="font-mono text-sm underline">{siteConfig.name}</span>
      </Link>
      <div className="flex justify-between items-center mt-6">
        <h1 className="head-text-sm">{portfolioConfig.name}</h1>
        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost" className="rounded-full" asChild>
            {/* TODO: add rss feed */}
            <Link href="#">
              <Rss size={18} />
              <span className="sr-only">rss feed</span>
            </Link>
          </Button>
          <ThemeToggler />
        </div>
      </div>
      <h3 className="mt-2 text-lg">
        {portfolioConfig.tagline} <span className="sr-only">tagline</span>
      </h3>
      <p className="my-6 max-w-2xl text-foreground/80">
  Hey there 👋 I&apos;m <span className="text-foreground font-semibold">Sajid Hussain</span> — a{" "}
  <a
    href="#"
    className="text-foreground font-semibold hover:underline"
  >
    Frontend and Full Stack Developer
  </a>. I specialize in building modern, high-performance web applications with{" "}
  <span className="text-foreground font-semibold">React, Next.js, and Node.js</span>. 
  I love creating seamless user experiences, scalable architectures, and integrating{" "}
  <span className="text-foreground font-semibold">DevOps</span> and{" "}
  <span className="text-foreground font-semibold">cloud solutions</span> to deliver complete, production-ready applications.
  <span className="sr-only">bio</span>
</p>

      <Socials />
      <div className="hidden md:flex flex-col text-sm space-y-2 rounded max-w-2xl text-foreground/70 my-7">
        {skillsConfig.map((skill) => (
          <p key={skill.category}>
            <span className="font-semibold text-primary/90">
              {skill.category}:
            </span>{" "}
            {skill.technologies.join(", ")}
          </p>
        ))}
      </div>
    </section>
  );
}
