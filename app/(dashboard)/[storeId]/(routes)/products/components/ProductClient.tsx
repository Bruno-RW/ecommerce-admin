"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import Heading from "@/components/ui/Heading";
import ApiList from "@/components/ui/ApiList";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";

import { ProductColumnProps, ProductColumn } from "./ProductColumn";

interface ProductClientProps {
  data: ProductColumnProps[];
};

const ProductClient: React.FC<ProductClientProps> = ({ data }) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={`Products (${data.length}) `} description="Manage products for your store" />
        
        <Button onClick={() => router.push(`/${params.storeId}/products/new`)}>
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>

      <Separator />

      <DataTable searchKey="name" columns={ProductColumn} data={data} />

      <Heading title="API" description="API calls for Products" />

      <Separator />

      <ApiList entityName="products" entityIdName="productId" /> 
    </>
  );
};
export default ProductClient;