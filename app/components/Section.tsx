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
  return (
<></>
  )
}

export default Section