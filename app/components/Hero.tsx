import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-24 lg:flex-row lg:items-center lg:gap-16">
        
        <div className="max-w-4xl flex-1">
          <h1 className="font-geist-sans text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
            Building real-world open source software.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Helping developers learn, collaborate, and gain practical
            experience by building software that actually ships.
          </p>

          <div className="mt-8 flex gap-4">
            {/* REMEMBER TO REPLACE LINKS WITH THE BUTTON COMPONENT ONCE IT'S READY */}
            <Link href="/projects">Explore Projects</Link>
            <Link href="/contact">Join the Community</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;