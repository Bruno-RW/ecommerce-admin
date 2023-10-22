"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import Heading from "@/components/ui/Heading";
import ApiList from "@/components/ui/ApiList";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";

import { SizeColumnProps, SizeColumn } from "./SizeColumn";

interface SizeClientProps {
  data: SizeColumnProps[];
};

const SizeClient: React.FC<SizeClientProps> = ({ data }) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={`Sizes (${data.length}) `} description="Manage sizes for your store" />
        
        <Button onClick={() => router.push(`/${params.storeId}/sizes/new`)}>
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>

      <Separator />

      <DataTable searchKey="name" columns={SizeColumn} data={data} />

      <Heading title="API" description="API calls for Sizes" />

      <Separator />

      <ApiList entityName="sizes" entityIdName="sizeId" /> 
    </>
  );
};
export default SizeClient;