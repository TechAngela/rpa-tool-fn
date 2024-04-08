import React from "react";
import { Helmet } from "react-helmet";
import { Button, TextArea, Text, Heading, Img, Input, CheckBox } from "../../components";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";

const table2Data = [
  {
    name: "Front",
    rowsample: "images/img_image_17.png",
    date: "18/03/2024",
    status: "Rejected",
    comment: "images/img_instagram.svg",
  },
  {
    name: "Rear",
    rowsample: "images/img_image_16.png",
    date: "18/03/2024",
    status: "Rejected",
    comment: "images/img_instagram.svg",
  },
  {
    name: "Left Front",
    rowsample: "images/img_image_19.png",
    date: "18/03/2024",
    status: "Rejected",
    comment: "images/img_instagram.svg",
  },
  {
    name: "Left Rear",
    rowsample: "images/img_image_18.png",
    date: "18/03/2024",
    status: "Rejected",
    comment: "images/img_instagram.svg",
  },
  {
    name: "Right Front",
    rowsample: "images/img_image_19.png",
    date: "18/03/2024",
    status: "Rejected",
    comment: "images/img_instagram.svg",
  },
  {
    name: "Right Rear",
    rowsample: "images/img_image_18.png",
    date: "18/03/2024",
    status: "Rejected",
    comment: "images/img_instagram.svg",
  },
  {
    name: "Driver\\'s Side",
    rowsample: "images/img_image_15.png",
    date: "18/03/2024",
    status: "Rejected",
    comment: "images/img_instagram.svg",
  },
  {
    name: "Passenger\\'s Side",
    rowsample: "images/img_image_15_66x100.png",
    date: "18/03/2024",
    status: "Rejected",
    comment: "images/img_instagram.svg",
  },
];

export default function CarownerResponcePage() {
  const table2Columns = React.useMemo(() => {
    const table2ColumnHelper = createColumnHelper();
    return [
      table2ColumnHelper.accessor("name", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Heading as="h2" className="py-5 pl-[35px] md:p-5 sm:pl-5">
            Name
          </Heading>
        ),
        meta: { width: "288px" },
      }),
      table2ColumnHelper.accessor("rowsample", {
        cell: (info) => (
          <div className="flex items-center justify-between gap-5">
            <Img src={info?.getValue?.()} alt="imageseventeen" className="h-[75px] w-[31%] object-cover" />
            <Img
              src="images/img_image_7.png"
              alt="imageseven_one"
              className="mr-[115px] h-[100px] w-[100px] rounded-[10px] object-cover"
            />
          </div>
        ),
        header: (info) => (
          <div className="flex flex-wrap items-center md:p-5">
            <Heading as="h3" className="mb-3.5 self-end">
              Sample
            </Heading>
            <Heading as="h4" className="mr-[149px]">
              Picture
            </Heading>
          </div>
        ),
        meta: { width: "449px" },
      }),
      table2ColumnHelper.accessor("date", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Heading as="h5" className="py-5 pl-1 md:p-5">
            Date
          </Heading>
        ),
        meta: { width: "176px" },
      }),
      table2ColumnHelper.accessor("status", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Heading as="h6" className="py-5 md:p-5">
            Status
          </Heading>
        ),
        meta: { width: "177px" },
      }),
      table2ColumnHelper.accessor("comment", {
        cell: (info) => (
          <div className="flex">
            <Img src={info?.getValue?.()} alt="instagram_one" className="h-[44px] w-[53%]" />
          </div>
        ),
        header: (info) => (
          <Heading as="h6" className="py-5 pl-[9px] md:p-5">
            Comment
          </Heading>
        ),
        meta: { width: "129px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>RPA</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col items-center bg-white-A700 p-[35px] sm:p-5">
        <div className="mx-auto mb-[5px] flex w-full max-w-[1244px] flex-col items-start">
          <div className="ml-1 flex items-center gap-[9px] md:ml-0">
            <Img src="images/img_arrow_left.svg" alt="arrowleft_one" className="h-[24px] w-[24px] self-start" />
            <Text size="xl" as="p" className="!font-poppins">
              Back
            </Text>
          </div>
          <Heading as="h1" className="ml-1 mt-[109px] tracking-[0.32px] md:ml-0">
            Irakoze Anny Christella
          </Heading>
          <Text
            as="p"
            className="ml-1 mt-[9px] !font-poppins !font-normal tracking-[0.24px] !text-blue_gray-900_01 md:ml-0"
          >
            Kigali, Rwanda
          </Text>
          <Text
            as="p"
            className="ml-1 mt-2 !font-poppins !font-normal tracking-[0.24px] !text-blue_gray-900_01 md:ml-0"
          >
            Claimed On 18/04/2024/ 10:40 Am
          </Text>
          <div className="ml-1 mt-[72px] flex flex-col self-stretch md:ml-0">
            <Heading as="h2" className="w-[17%] md:w-full">
              Driver Personal Information
            </Heading>
            <div className="mt-5 flex justify-between gap-5 md:flex-col">
              <div className="flex w-[46%] flex-col items-start gap-1 md:w-full">
                <Text size="lg" as="p" className="w-[34%] md:w-full">
                  Select insurance company
                </Text>
                <Input shape="square" name="radiant" placeholder={`Radiant`} className="self-stretch sm:px-5" />
              </div>
              <div className="flex w-[46%] flex-col items-start gap-1 md:w-full">
                <Text size="lg" as="p" className="w-[47%] md:w-full">
                  Type of insurance coverage you have
                </Text>
                <Input
                  shape="square"
                  name="grouptwo"
                  placeholder={`Third-party liability`}
                  className="self-stretch sm:px-5"
                />
              </div>
            </div>
            <div className="mt-[52px] flex justify-between gap-5 md:flex-col">
              <div className="flex w-[46%] flex-col items-start gap-1 md:w-full">
                <Text size="lg" as="p" className="w-[15%] md:w-full">
                  Car Number
                </Text>
                <Input shape="square" name="raa_1234_c" placeholder={`RAA 1234 C`} className="self-stretch sm:pr-5" />
              </div>
              <div className="flex w-[46%] flex-col items-start gap-1 md:w-full">
                <Text size="lg" as="p" className="w-[25%] md:w-full">
                  Car Frame(Chassis)
                </Text>
                <Input
                  shape="square"
                  name="raa_1234_c_one"
                  placeholder={`RAA 1234 C`}
                  className="ml-0.5 self-stretch md:ml-0 sm:px-5"
                />
              </div>
            </div>
          </div>
          <div className="ml-1 mt-[70px] flex w-[74%] flex-col items-start md:ml-0 md:w-full">
            <Heading as="h2">Accident Information</Heading>
            <div className="ml-[3px] mt-[49px] flex items-center justify-between gap-5 self-stretch md:ml-0 md:flex-col">
              <div className="flex w-[64%] flex-col items-start gap-[25px] md:w-full">
                <Text size="lg" as="p">
                  Accident Hour
                </Text>
                <Input shape="square" name="11hthirty" placeholder={`11h30`} className="self-stretch sm:pr-5" />
              </div>
              <div className="flex w-[26%] flex-col items-center gap-8 md:w-full">
                <Text size="lg" as="p" className="!font-poppins">
                  Where you the one wth fault?
                </Text>
                <div className="flex items-center justify-between gap-5 self-stretch">
                  <CheckBox
                    name="yes"
                    label="Yes"
                    id="yes"
                    className="gap-[22px] self-start pb-[9px] pr-[35px] pt-px text-left font-poppins text-base text-blue_gray-900 sm:pr-5"
                  />
                  <CheckBox
                    name="no"
                    label="No"
                    id="no"
                    className="gap-[19px] pb-[11px] pr-[35px] text-left font-poppins text-base text-blue_gray-900 sm:pr-5"
                  />
                </div>
              </div>
            </div>
            <Text size="lg" as="p" className="ml-[3px] mt-9 md:ml-0">
              Accident Date
            </Text>
            <Input
              shape="square"
              name="date"
              placeholder={`10/june/2023`}
              className="ml-[3px] mt-[25px] w-[64%] md:ml-0 sm:px-5"
            />
          </div>
          <Heading as="h2" className="ml-1 mt-[60px] w-[11%] md:ml-0 md:w-full">
            Accident Location
          </Heading>
          <div className="ml-[13px] mt-[9px] flex flex-col gap-10 self-stretch md:ml-0">
            <div className="flex items-start justify-between gap-5 md:flex-col">
              <div className="mt-[13px] flex w-[46%] flex-col items-start gap-1 md:w-full">
                <Text size="lg" as="p" className="w-[11%] md:w-full">
                  Province
                </Text>
                <Input shape="square" name="city" placeholder={`Kigali city`} className="self-stretch sm:pr-5" />
              </div>
              <div className="flex w-[46%] flex-col items-start gap-1 md:w-full">
                <Text size="lg" as="p" className="w-[9%] md:w-full">
                  District
                </Text>
                <Input shape="square" name="kicukiro" placeholder={`Kicukiro`} className="self-stretch sm:px-5" />
              </div>
            </div>
            <div className="flex w-[46%] flex-col items-start gap-1 md:w-full">
              <Text size="lg" as="p" className="w-[8%] md:w-full">
                Sector
              </Text>
              <Input shape="square" name="kanombe" placeholder={`Kanombe`} className="self-stretch sm:pr-5" />
            </div>
          </div>
          <Heading as="h2" className="ml-1 mt-[61px] md:ml-0">
            Required document
          </Heading>
          <Text size="lg" as="p" className="ml-1 mt-[27px] md:ml-0">
            Uploaded Car Pictures
          </Text>
          <ReactTable
            size="md"
            bodyProps={{ className: "" }}
            headerProps={{ className: "bg-gray-50 md:flex-col" }}
            rowDataProps={{ className: "md:flex-col" }}
            className="mt-24 self-stretch"
            columns={table2Columns}
            data={table2Data}
          />
          <Text size="lg" as="p" className="ml-[22px] mt-[164px] md:ml-0">
            Download Policy Report
          </Text>
          <Img src="images/img_frame_767.svg" alt="image" className="ml-[22px] mt-[23px] h-[120px] w-[26%] md:ml-0" />
          <Heading as="h2" className="ml-[22px] mt-[114px] md:ml-0">
            Brief explanation{" "}
          </Heading>
          <div className="ml-[22px] mt-[53px] flex w-[87%] flex-col items-start gap-[25px] md:ml-0 md:w-full">
            <Text size="lg" as="p">
              Claim Statement
            </Text>
            <TextArea
              shape="square"
              name="groupeleven"
              placeholder={`Lorem ipsum dolor sit amet consectetur. Tristique ac mi suspendisse nisi vel pretium condimentum at ac. Eget arcu sem venenatis sit quam laoreet enim feugiat massa. Etiam tellus habitasse viverra leo egestas donec sit mattis. Neque dignissim nisl quisque dolor et nulla semper egestas tincidunt.`}
              className="self-stretch text-black-900 sm:p-5"
            />
          </div>
          <div className="ml-[22px] mt-[52px] flex gap-5 md:ml-0">
            <Button
              color="light_green_700"
              size="sm"
              variant="fill"
              shape="round"
              className="min-w-[174px] !rounded font-bold shadow-md sm:px-5"
            >
              Approve{" "}
            </Button>
            <Button size="sm" shape="round" className="min-w-[160px] !rounded font-bold sm:px-5">
              Reject
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
