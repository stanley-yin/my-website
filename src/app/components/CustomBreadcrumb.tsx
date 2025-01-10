import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import React from "react";

type BreadcrumbItemProps = {
  title: string;
  path: string;
};

type CrumbsProps = {
  crumbs: BreadcrumbItemProps[];
};

const CustomBreadcrumb = ({ crumbs }: CrumbsProps) => {
  const crumbItems = crumbs.map((item, index) => (
    <>
      <BreadcrumbItem key={index}>
        <BreadcrumbLink href={item.path}> {item.title}</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator className="last:hidden" />
    </>
  ));
  return (
    <Breadcrumb>
      <BreadcrumbList>{crumbItems}</BreadcrumbList>
    </Breadcrumb>
  );
};

export default CustomBreadcrumb;
