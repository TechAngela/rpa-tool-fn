import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, CheckBox, Img, Input, Heading } from "../../components";

export default function RegisterPage() {
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
            <Img src="images/img_ellipse_21_88x82.png" alt="image_one" className="h-[88px] w-[14%] object-cover" />
          </div>
          <div className="mt-[287px] flex flex-col items-start gap-[21px] self-center">
            <Heading size="lg" as="h1" className="!text-white-A700">
              Hi there,
            </Heading>
            <a href="#">
              <Heading size="xl" as="h2" className="!text-white-A700">
                Register Here
              </Heading>
            </a>
          </div>
          <Img
            src="images/img_ellipse_21_1.png"
            alt="image_two"
            className="mt-[110px] h-[325px] w-[58%] object-cover"
          />
        </div>
        <div className="flex-1 bg-white-A700 p-[35px] md:self-stretch md:p-5">
          <div className="mb-[276px] mt-[203px] flex flex-col items-start rounded-md bg-white-A700 px-9 pt-9 sm:px-5 sm:pt-5">
            <Heading as="h2" className="ml-[15px] !text-light_green-700 md:ml-0">
              Please fill the following information
            </Heading>
            <div className="ml-[15px] mt-[38px] flex flex-col gap-3.5 self-stretch md:ml-0">
              <div className="flex flex-col items-start gap-2.5">
                <Text size="md" as="p" className="!font-poppins">
                  <span className="font-dmsans text-blue_gray-900">Insurance name</span>
                  <span className="font-dmsans text-red_A700">&nbsp;*</span>
                </Text>
                <Input
                  color="gray_50"
                  size="sm"
                  variant="fill"
                  shape="round"
                  type="text"
                  name="name"
                  placeholder={`Enter your insurance name`}
                  className="self-stretch sm:pr-5"
                />
              </div>
              <div className="flex items-start gap-8 md:flex-col">
                <div className="flex w-full flex-col gap-3.5">
                  <div className="flex flex-col items-start gap-[11px]">
                    <Text size="md" as="p">
                      Phone number
                    </Text>
                    <Input
                      color="gray_50"
                      size="sm"
                      variant="fill"
                      shape="round"
                      type="number"
                      name="phoneNumber"
                      placeholder={`Enter your phone`}
                      className="self-stretch sm:pr-5"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-[11px]">
                    <Text size="md" as="p">
                      Location
                    </Text>
                    <Input
                      color="gray_50"
                      size="sm"
                      variant="fill"
                      shape="round"
                      name="location"
                      placeholder={`Enter your location`}
                      className="self-stretch sm:pr-5"
                    />
                  </div>
                </div>
                <div className="flex w-full flex-col gap-7">
                  <div className="flex flex-col items-start gap-3">
                    <Img src="images/img_settings.svg" alt="settings_one" className="h-[10px]" />
                    <Input
                      color="gray_50"
                      size="xs"
                      variant="fill"
                      shape="round"
                      name="enter_your"
                      prefix={
                        <div className="flex h-[13px] w-[102px] items-center justify-center">
                          <Img
                            src="images/img_enter_your_email.svg"
                            alt="Enter your email"
                            className="h-[13px] w-[102px]"
                          />
                        </div>
                      }
                      className="gap-[35px] self-stretch"
                    />
                  </div>
                  <Img src="images/img_frame_8.svg" alt="image_three" className="h-[59px]" />
                </div>
              </div>
            </div>
            <CheckBox
              name="contrast"
              label="I agree terms and conditions"
              id="contrast"
              className="ml-[15px] mt-[18px] gap-2.5 rounded py-2.5 pr-2 text-left text-xs font-bold text-blue_gray-900 shadow-sm md:ml-0"
            />
            <Button
              color="light_green_700"
              variant="fill"
              shape="round"
              className="mr-3.5 min-w-[306px] self-end !rounded font-bold shadow-sm md:mr-0 sm:px-5"
            >
              Sign up
            </Button>
            <Text
              size="md"
              as="p"
              className="mr-[21px] mt-6 flex self-end !font-poppins !text-blue_gray-900_7f md:mr-0"
            >
              <span className="text-gray-900">Already have account?</span>
              <span className="font-bold text-blue_gray-900_7f">&nbsp;</span>
              <a href="#" className="font-bold text-light_green-700 underline">
                Login here
              </a>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}
