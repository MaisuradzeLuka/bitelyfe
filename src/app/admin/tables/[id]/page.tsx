import AdminBreadCrumbs from "@/components/shared/adminBreadCrumbs";
import TableContent from "@/features/tableContent/ui/views/tableContent-view";
import React from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <div>
      <AdminBreadCrumbs title={id} />

      <TableContent title={id} />
    </div>
  );
};

export default page;
