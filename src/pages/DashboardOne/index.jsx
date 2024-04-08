import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Button, Heading } from "../../components";
import Header from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";

const table1Data = [
  { rowclaimid: "ooo", date: "18/03/2024", assignedto: "Manzi ", action: "images/img_settings_blue_gray_900.svg" },
  { rowclaimid: "ooo", date: "18/03/2024", assignedto: "Kamanzi", action: "images/img_settings_blue_gray_900.svg" },
  { rowclaimid: "ooo", date: "18/03/2024", assignedto: "Manzi ", action: "images/img_settings_blue_gray_900.svg" },
  { rowclaimid: "ooo", date: "18/03/2024", assignedto: "Noella", action: "images/img_settings_blue_gray_900.svg" },
  { rowclaimid: "ooo", date: "18/03/2024", assignedto: "Noella", action: "images/img_settings_blue_gray_900.svg" },
];

export default function DashboardOnePage() {
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper();
    return [
      table1ColumnHelper.accessor("rowclaimid", {
        cell: (info) => (
          <div className="flex flex-1 flex-wrap items-center justify-between gap-5 sm:self-stretch">
            <Text size="s" as="p" className="ml-[18px] self-end">
              {info?.getValue?.()}
            </Text>
            <Text as="p" className="mr-[97px] self-end">
              Anny Christella
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-1 flex-wrap justify-between gap-5 p-[19px] md:self-stretch">
            <Text size="lg" as="p" className="!font-medium">
              Claim Id
            </Text>
            <Text size="lg" as="p" className="mr-[118px] !font-medium md:mr-0">
              Name
            </Text>
          </div>
        ),
        meta: { width: "415px" },
      }),
      table1ColumnHelper.accessor("date", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text size="lg" as="p" className="py-5 pl-[11px] !font-medium">
            Date
          </Text>
        ),
        meta: { width: "197px" },
      }),
      table1ColumnHelper.accessor("assignedto", {
        cell: (info) => (
          <div className="flex">
            <Button shape="round" className="min-w-[80px] !rounded-[5px] font-medium sm:px-5">
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
      table1ColumnHelper.accessor("action", {
        cell: (info) => (
          <div className="flex">
            <Img src={info?.getValue?.()} alt="settings_one" className="h-[28px]" />
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
      <div className="flex w-full flex-col items-center justify-center gap-[84px] bg-white-A700 pb-[222px] md:gap-[63px] md:pb-5 sm:gap-[42px]">
        <Header className="flex items-center justify-between gap-5 self-stretch bg-light_green-700 p-2.5" />
        <div className="mx-auto flex w-full max-w-[1188px] flex-col items-center gap-[75px] md:gap-14 md:p-5 sm:gap-[37px]">
          <div className="flex gap-[100px] self-stretch md:flex-col">
            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
              <div className="flex w-full flex-col items-center gap-2.5 rounded-[5px] bg-gray-50 p-2">
                <Img src="images/img_material_symbol_blue_gray_900.svg" alt="view_all" className="h-[24px] w-[24px]" />
                <Heading size="xs" as="h1" className="w-[59%] text-center md:w-full">
                  <>
                    VIEW ALL CLAIMS
                    <br />
                    15
                  </>
                </Heading>
              </div>
            </a>
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
            <div className="flex w-full flex-col items-center gap-2.5 rounded-[5px] bg-light_green-700 p-2">
              <Img src="images/img_fluent_text_cha_white_a700.svg" alt="image" className="h-[24px] w-[24px]" />
              <Text size="md" as="p" className="w-[65%] text-center !text-white-A700 md:w-full">
                <>
                  REJECTED CLAIMS
                  <br />5
                </>
              </Text>
            </div>
          </div>
          <div className="flex w-[83%] justify-center rounded-[20px] bg-gray-50 p-[30px] md:w-full sm:p-5">
            <ReactTable
              size="sm"
              bodyProps={{ className: "" }}
              headerProps={{ className: "md:flex-col" }}
              rowDataProps={{ className: "sm:flex-col" }}
              className="w-full"
              columns={table1Columns}
              data={table1Data}
            />
          </div>
        </div>
      </div>
    </>
  );
}
