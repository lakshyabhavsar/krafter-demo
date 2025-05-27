import { Hero } from "./hero"

function HeroDemo() {
  return (
    <Hero
      title="Join Our Team: Explore Exciting Careers at CodeKrafters"
      subtitle="Discover job opportunities, grow your career, and work with industry leaders. Apply now to be part of our innovative team."
      actions={[
        {
          label: "Join Us",
          href: "#",
          variant: "default"
        },
        {
          label: "Explore Careers",
          href: "/careers",
          variant: "default"
        }
      ]}
      titleClassName="text-3xl md:text-6xl "
      subtitleClassName="text-lg md:text-xl max-w-[600px]"
      actionsClassName="mt-8"
    />
  );
}

export { HeroDemo }