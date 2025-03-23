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
    <div key={index}>
      <BreadcrumbItem>
        <BreadcrumbLink href={item.path}> {item.title}</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator className="last:hidden" />
    </div>
  ));
  return (
    <Breadcrumb>
      <BreadcrumbList>{crumbItems}</BreadcrumbList>
    </Breadcrumb>
  );
};

export default CustomBreadcrumb;
