import React from "react";
import Image from "next/image";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";

const Page = () => {
  const crumbs = [
    { title: "home", path: "/" },
    { title: "resume", path: "/resume" },
  ];
  return (
    <div className="wrapper py-6 sm:py-12">
      <CustomBreadcrumb crumbs={crumbs} />
      <h1 className="heading-1">Resume</h1>
      <div className="relative mx-auto h-64 max-w-3xl">
        <Image
          src={"/images/Stanley_Resume.jpg"}
          alt={"resume"}
          width={800}
          height={1000}
        />
      </div>
    </div>
  );
};

export default Page;
