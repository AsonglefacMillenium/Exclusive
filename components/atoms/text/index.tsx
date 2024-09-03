import React from "react";

export interface ITextProps {
  variant?:
    | "h2"
    | "h3"
    | "h1"
    | "large"
    | "xlarge"
    | "xxlarge"
    | "medium"
    | "small"
    | "normal"
    | "xsmall"
    | "normalActive";
  text?: string | number | undefined | null | boolean;
  color: string;
}

const Text = ({ variant, text, color = "#000" }: ITextProps) => {
  switch (variant) {
    case "h1":
      return (
        <h1 className="text-5xl" style={{ color: color }}>
          {text}
        </h1>
      );

    case "h2":
      return (
        <h2 className="text-4xl" style={{ color: color }}>
          {text}
        </h2>
      );

    case "h3":
      return (
        <h3 className="text-4xl" style={{ color: color }}>
          {text}
        </h3>
      );

    case "medium":
      return (
        <p className="text-2xl" style={{ color: color }}>
          {text}
        </p>
      );

    case "large":
      return (
        <p className="text-xl" style={{ color: color }}>
          {text}
        </p>
      );

    case "small":
      return (
        <p className="text-lg" style={{ color: color }}>
          {text}
        </p>
      );

    case "xsmall":
      return (
        <p className="text-sm" style={{ color: color }}>
          {text}
        </p>
      );

    case "normal":
      return (
        <p className="text-base" style={{ color: color }}>
          {text}
        </p>
      );

    default:
      return (
        <p className="" style={{ color: color }}>
          {text}
        </p>
      );
  }
};

export default Text;
