"use client";

import { ColumnDef } from "@tanstack/react-table";

import CellAction from "./CellAction";

export type SizeColumnProps = {
  id: string
  name: string; 
  value: string; 
  createdAt: string;
};

export const SizeColumn: ColumnDef<SizeColumnProps>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "value",
    header: "Value",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />
  },
];