import React from "react";

const sizes = {
  xl: "text-[64px] font-bold md:text-5xl",
  s: "text-base font-bold",
  md: "text-2xl font-bold md:text-[22px]",
  xs: "text-sm font-bold",
  lg: "text-[32px] font-bold md:text-3xl sm:text-[28px]",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue_gray-900 font-dmsans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
