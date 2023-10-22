"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import Heading from "@/components/ui/Heading";
import ApiList from "@/components/ui/ApiList";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";

import { ColorColumnProps, ColorColumn } from "./ColorColumn";

interface ColorClientProps {
  data: ColorColumnProps[];
};

const ColorClient: React.FC<ColorClientProps> = ({ data }) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={`Colors (${data.length}) `} description="Manage colors for your store" />
        
        <Button onClick={() => router.push(`/${params.storeId}/colors/new`)}>
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>

      <Separator />

      <DataTable searchKey="name" columns={ColorColumn} data={data} />

      <Heading title="API" description="API calls for Colors" />

      <Separator />

      <ApiList entityName="colors" entityIdName="colorId" /> 
    </>
  );
};
export default ColorClient;