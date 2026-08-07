import React from "react";

export enum Spacing {
  small = "py-12",
  medium = "py-24",
  large = "py-36",
}

interface Props {
  title?: string;
  subtitle?: string;
  description?: string;
  spacing: Spacing;
  dark?: boolean;
  children?: React.ReactNode;
}

const Section = ({
  title,
  subtitle,
  description,
  spacing,
  dark = false,
  children,
}: Props) => {
  return (
    <section
      className={`min-h-screen ${
        dark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div
        className={`mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6 ${spacing} lg:flex-row lg:items-center lg:gap-16`}
      >
        <div className="max-w-4xl flex-1">
          {subtitle && (
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">
              {subtitle}
            </p>
          )}

          {title && (
            <h1 className="font-geist-sans text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
              {title}
            </h1>
          )}

          {description && (
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              {description}
            </p>
          )}
        </div>

        {children && <div className="w-full flex-1">{children}</div>}
      </div>
    </section>
  );
};

export default Section;