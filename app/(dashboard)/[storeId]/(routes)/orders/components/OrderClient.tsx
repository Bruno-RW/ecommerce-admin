"use client";

import Heading from "@/components/ui/Heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";

import { OrderColumnProps, OrderColumn } from "./OrderColumn";

interface OrderClientProps {
  data: OrderColumnProps[];
};

const OrderClient: React.FC<OrderClientProps> = ({ data }) => {
  return (
    <>
      <Heading title={`Orders (${data.length}) `} description="Manage orders for your store" />

      <Separator />

      <DataTable searchKey="products" columns={OrderColumn} data={data} />
    </>
  );
};
export default OrderClient;