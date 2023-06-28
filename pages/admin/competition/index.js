import { Button } from "@/components";
import DashboardCard from "@/components/atoms/DashboardCard";
import DashboardAdminTemplate from "@/components/pagetemplate/DashboardAdmin";
import Link from "next/link";
import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import { MdArrowForwardIos } from "react-icons/md";
const AdminLomba = () => {
  return (
    <DashboardAdminTemplate title={"Lomba"}>
      <DashboardCard>
        <ul className="flex items-center gap-2">
          <p>
            <BiHomeAlt className="text-gray-400" />
          </p>
          <p>
            <MdArrowForwardIos className="text-xs text-gray-400" />
          </p>
          <p className="text-blue-600 text-sm">Lomba</p>
        </ul>
        <div className="flex justify-between items-center mt-2">
          <h1 className="text-2xl fomt-semibold">Lomba</h1>
          <Link href={"/admin/competition/add"}>
            <Button
              isSquare
              color={"blue"}
              additionals={"flex items-center gap-2"}
            >
              <FiPlus className="text-white" />
              <p>Buat Lomba</p>
            </Button>
          </Link>
        </div>
      </DashboardCard>
    </DashboardAdminTemplate>
  );
};

export default AdminLomba;
