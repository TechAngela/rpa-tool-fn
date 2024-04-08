import React from "react";
import { Heading, Img } from "./..";

export default function Header({ ...props }) {
  return (
    <header {...props}>
      <div className="relative ml-[86px] h-[121px] w-[10%] shadow-xs md:h-auto sm:ml-0 sm:w-full">
        <Img src="images/img_rectangle_354.svg" alt="image" className="h-[21px] w-[93%]" />
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[121px] w-full md:h-auto">
          <div className="h-[105px] w-[82%] rounded-[53px] bg-white-A700" />
          <Img
            src="images/img_image_removebg_preview.png"
            alt="imageremovebg"
            className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[121px] w-full object-cover"
          />
        </div>
      </div>
      <Heading size="lg" as="h2" className="mr-[86px] text-center !text-white-A700 sm:mr-0">
        Radiant
      </Heading>
    </header>
  );
}
