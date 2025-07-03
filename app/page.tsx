import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block text-center justify-center">
        <span className={title({ color: "violet" })}>Metrobi&nbsp;</span>
        <span className={title()}>technical challenge</span>
        <div className={subtitle({ class: "mt-4" })}>
          Developed by Thalles Bueno.
        </div>
      </div>

      <div className="flex gap-3 mt-8">
        <Link
          className={buttonStyles({
            color: "primary",
            radius: "full",
          })}
          href="/challenges"
        >
          Explore Solutions
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          See GitHub
        </Link>
      </div>
    </section>
  );
}
