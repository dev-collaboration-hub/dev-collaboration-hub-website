import React from "react";

enum Spacing {
  small = "sm",
  medium = "md",
  large = "lg"
}

interface propsType {
  title?: string;
  subtitle?: string;
  description?: string;
  spacing: Spacing;
  dark: boolean;
  content?: React.ReactNode;
}

const Section = (props: propsType) => {
  const { title, subtitle, description, spacing, dark, content } = props;
  return (
    <section className={`min-h-screen flex items-center ${dark? "dark" : ""}`}>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-24 lg:flex-row lg:items-center lg:gap-16">
        
        <div className="max-w-4xl flex-1">
          <h1 className="font-geist-sans text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
            {title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            {description}
          </p>

          <div className="mt-8 flex">
            {description}
          </div>
        </div>
        {props.content}
      </div>
    </section>
  )
}

export default Section