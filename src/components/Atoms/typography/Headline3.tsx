import React, { HTMLAttributes } from "react";
import cx from "classnames";

interface HeadlineProps extends HTMLAttributes<HTMLHeadingElement> {
  color?: string;
  className?: string;  // Added className prop
}

const Headline3 = ({ color, children, className, ...props }: HeadlineProps) => {
  // Merging provided className prop with existing class names.
  const mergedClassNames = cx(
    "text-3xl md:text-4xl md:font-bold font-semibold",
    color && `text-${color}`,
    className  // Merge external className here.
  );

  return (
    <h3
      {...props}
      className={mergedClassNames}  // Using mergedClassNames here.
    >
      {children}
    </h3>
  );
};

export default Headline3;
