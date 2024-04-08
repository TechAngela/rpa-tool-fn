import React from "react";
import { Helmet } from "react-helmet";
import { Img, Button, Text, Heading } from "../../components";
import Header from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";

const tableData = [
  {
    claimid: "ooo",
    rowname: "Anny Christella",
    status: "Approved",
    assignedto: "Manzi ",
    action: "images/img_settings_blue_gray_900.svg",
  },
  {
    claimid: "oo1",
    rowname: "Calvin Buka",
    status: "Pending",
    assignedto: "Unassigned",
    action: "images/img_settings_blue_gray_900.svg",
  },
  {
    claimid: "oo2",
    rowname: "Sereine Benie",
    status: "Pending",
    assignedto: "Noella",
    action: "images/img_settings_blue_gray_900.svg",
  },
];

export default function DashboardPage() {
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("claimid", {
        cell: (info) => (
          <Text size="s" as="p">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text size="lg" as="p" className="py-5 pl-5 !font-medium">
            Claim Id
          </Text>
        ),
        meta: { width: "220px" },
      }),
      tableColumnHelper.accessor("rowname", {
        cell: (info) => (
          <div className="flex flex-wrap items-start justify-between gap-5">
            <Text as="p" className="mb-2">
              {info?.getValue?.()}
            </Text>
            <Text as="p" className="mr-[127px]">
              18/03/2024
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-wrap items-center p-[11px]">
            <Text size="lg" as="p" className="my-2 !font-medium">
              Name
            </Text>
            <Text size="lg" as="p" className="mr-[136px] !font-medium">
              Date
            </Text>
          </div>
        ),
        meta: { width: "390px" },
      }),
      tableColumnHelper.accessor("status", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text size="lg" as="p" className="px-px py-5 !font-medium">
            Status
          </Text>
        ),
        meta: { width: "201px" },
      }),
      tableColumnHelper.accessor("assignedto", {
        cell: (info) => (
          <div className="flex">
            <Button shape="round" className="mb-[9px] min-w-[80px] !rounded-[5px] font-medium sm:px-5">
              {info?.getValue?.()}
            </Button>
          </div>
        ),
        header: (info) => (
          <Text size="lg" as="p" className="py-5 !font-medium">
            Assigned To
          </Text>
        ),
        meta: { width: "241px" },
      }),
      tableColumnHelper.accessor("action", {
        cell: (info) => (
          <div className="flex">
            <Img src={info?.getValue?.()} alt="settings_one" className="mb-[7px] h-[28px]" />
          </div>
        ),
        header: (info) => (
          <Text size="lg" as="p" className="py-5 !font-medium">
            Action
          </Text>
        ),
        meta: { width: "70px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>RPA</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col items-center justify-center gap-[84px] bg-white-A700 pb-[336px] md:gap-[63px] md:pb-5 sm:gap-[42px]">
        <Header className="flex items-center justify-between gap-5 self-stretch bg-light_green-700 p-2.5" />
        <div className="mx-auto flex w-full max-w-[1190px] flex-col gap-[95px] md:gap-[71px] md:p-5 sm:gap-[47px]">
          <div className="flex gap-[100px] md:flex-col">
            <div className="flex w-full flex-col items-center gap-[5px] rounded-[5px] bg-light_green-700 p-[11px]">
              <Img src="images/img_material_symbol.svg" alt="view_all" className="h-[24px] w-[24px]" />
              <Heading size="xs" as="h1" className="w-[60%] text-center !text-white-A700 md:w-full">
                <>
                  VIEW ALL CLAIMS
                  <br />
                  15
                </>
              </Heading>
            </div>
            <div className="flex w-full flex-col items-center gap-2.5 rounded-[5px] bg-gray-50 p-2">
              <Img src="images/img_material_symbols_pending.svg" alt="material_one" className="h-[24px] w-[24px]" />
              <Text size="md" as="p" className="w-[55%] text-center md:w-full">
                <>
                  PENDING CLAIMS
                  <br />5
                </>
              </Text>
            </div>
            <div className="flex w-full flex-col items-center gap-2.5 rounded-[5px] bg-gray-50 p-2">
              <Img src="images/img_carbon_task_approved.svg" alt="carbontask_one" className="h-[24px] w-[24px]" />
              <Text size="md" as="p" className="w-[61%] text-center md:w-full">
                <>
                  APPROVED CLAIMS
                  <br />5
                </>
              </Text>
            </div>
            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
              <div className="flex w-full flex-col items-center gap-2.5 rounded-[5px] bg-gray-50 p-2">
                <Img src="images/img_fluent_text_cha.svg" alt="image" className="h-[24px] w-[24px]" />
                <Text size="md" as="p" className="w-[65%] text-center md:w-full">
                  <>
                    REJECTED CLAIMS
                    <br />5
                  </>
                </Text>
              </div>
            </a>
          </div>
          <div className="rounded-[20px] bg-gray-50 p-[30px] sm:p-5">
            <ReactTable
              size="xs"
              bodyProps={{ className: "" }}
              headerProps={{ className: "md:flex-col" }}
              rowDataProps={{ className: "md:flex-col" }}
              columns={tableColumns}
              data={tableData}
            />
          </div>
        </div>
      </div>
    </>
  );
}
