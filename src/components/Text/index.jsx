import React from "react";

const sizes = {
  xs: "text-xs font-medium",
  lg: "text-base font-normal",
  s: "text-[13px] font-medium",
  xl: "text-lg font-normal",
  md: "text-sm font-normal",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-900 font-dmsans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
