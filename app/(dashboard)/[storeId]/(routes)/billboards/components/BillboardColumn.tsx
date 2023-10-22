"use client";

import { ColumnDef } from "@tanstack/react-table";

import CellAction from "./CellAction";

export type BillboardColumnProps = {
  id: string
  label: string;
  createdAt: string;
};

export const BillboardColumn: ColumnDef<BillboardColumnProps>[] = [
  {
    accessorKey: "label",
    header: "Label",
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