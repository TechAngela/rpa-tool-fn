import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Input, Heading, Img } from "../../components";

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>RPA</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full justify-center bg-white-A700 md:flex-col">
        <div className="flex w-[43%] flex-col items-start bg-light_green-700 md:w-full md:p-5">
          <div className="flex w-[93%] items-start justify-between gap-5 self-end md:w-full">
            <div className="relative mt-[33px] h-[121px] w-[23%] shadow-xs md:h-auto">
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
            <Img src="images/img_ellipse_21.png" alt="image_one" className="h-[88px] w-[14%] object-cover" />
          </div>
          <div className="mt-[287px] flex flex-col items-start gap-[21px] self-center">
            <Heading size="lg" as="h1" className="!text-white-A700">
              Hi there,
            </Heading>
            <Heading size="xl" as="h2" className="!text-white-A700">
              LogIn Here
            </Heading>
          </div>
          <Img
            src="images/img_ellipse_21_325x361.png"
            alt="image_two"
            className="mt-[110px] h-[325px] w-[58%] object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col items-center bg-white-A700 px-14 py-[238px] md:self-stretch md:p-5">
          <div className="mb-[166px] flex w-[43%] flex-col items-start gap-[38px] md:w-full">
            <a href="Login" target="_blank" rel="noreferrer">
              <Heading size="md" as="h2" className="!text-light_green-700">
                Login
              </Heading>
            </a>
            <div className="flex flex-col gap-[45px] self-stretch">
              <div className="flex flex-col items-end gap-[15px]">
                <div className="flex flex-col gap-[15px] self-stretch">
                  <div className="flex flex-col items-start gap-[9px]">
                    <Text size="md" as="p" className="!text-gray-900">
                      Enter your Name
                    </Text>
                    <Input
                      color="gray_50"
                      size="sm"
                      variant="fill"
                      shape="round"
                      type="text"
                      name="name"
                      placeholder={`Enter your insurance name`}
                      className="self-stretch !text-gray-900_7f sm:pr-5"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2.5">
                    <Text size="md" as="p">
                      Enter your password
                    </Text>
                    <Input
                      color="gray_50"
                      size="sm"
                      variant="fill"
                      shape="round"
                      type="password"
                      name="password"
                      placeholder={`Enter your password`}
                      className="self-stretch sm:pr-5"
                    />
                  </div>
                </div>
                <Text size="md" as="p" className="mr-3 md:mr-0">
                  Reset password?
                </Text>
              </div>
              <div className="flex flex-col items-center gap-4">
                <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                  <Button color="light_green_700" variant="fill" shape="round" className="w-full sm:px-5">
                    Login
                  </Button>
                </a>
                <Text size="md" as="p" className="flex !font-poppins !text-blue_gray-900_7f">
                  <span className="font-dmsans text-gray-900">Don’t have account?</span>
                  <span className="font-dmsans font-bold text-blue_gray-900_7f">&nbsp;</span>
                  <a href="#" className="font-dmsans font-bold text-light_green-700 underline">
                    Register here
                  </a>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
