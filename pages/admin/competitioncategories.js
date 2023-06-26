import { Button } from "@/components";
import DashboardCard from "@/components/atoms/DashboardCard";
import Input from "@/components/atoms/Input";
import Modals from "@/components/organisms/admin/Modals";
import DashboardAdminTemplate from "@/components/pagetemplate/DashboardAdmin";
import React, { useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import { MdArrowForwardIos } from "react-icons/md";

const CompetitionCategory = () => {
  const [isModal, setIsModal] = useState(false);
  return (
    <>
      <Modals isModal={isModal}>
        <h1 className="text-xl mb-2">Tambah Kategori</h1>
        <Input />
        <div className="flex items-center space-x-2 mt-4 justify-end">
          <Button
            type="button"
            onClick={() => setIsModal(false)}
            isSquare
            color={"bluelight"}
          >
            Batal
          </Button>
          <Button isSquare color={"blue"}>
            Simpan
          </Button>
        </div>
      </Modals>
      <DashboardAdminTemplate title={"Categories"}>
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
            <Button
              onClick={() => setIsModal(true)}
              isSquare
              color={"blue"}
              additionals={"flex items-center gap-2"}
            >
              <FiPlus className="text-white" />
              <p>Kategori Baru</p>
            </Button>
          </div>
        </DashboardCard>
        <DashboardCard>
          <ul className="flex flex-col space-y-3">
            <li className="shadow shadow-black/5 rounded-md px-8 py-4 flex justify-between items-center">
              <p>Mahasiswa</p>
              <div className="flex items-center space-x-2">
                <button
                  title="edit"
                  className="bg-green-400/20 p-1 rounded hover:scale-95 transition-all duration-300"
                >
                  <AiOutlineEdit className="text-green-400" />
                </button>
                <button
                  title="hapus"
                  className="bg-red/20 p-1 rounded hover:scale-95 transition-all duration-300"
                >
                  <AiOutlineDelete className="text-red" />
                </button>
              </div>
            </li>
          </ul>
        </DashboardCard>
      </DashboardAdminTemplate>
    </>
  );
};

export default CompetitionCategory;
