import { Button } from "@/components";
import DashboardCard from "@/components/atoms/DashboardCard";
import Dropdown from "@/components/atoms/Dropdown";
import Text from "@/components/atoms/Text";
import InputTitle from "@/components/molecules/InputTitle";
import DashboardAdminTemplate from "@/components/pagetemplate/DashboardAdmin";
import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import { MdArrowForwardIos } from "react-icons/md";

const AddCompetition = () => {
  const dropdownOptions = [
    { id: 1, value: "Pelajar & Mahasiswa" },
    { id: 2, value: "Apa" },
  ];
  return (
    <DashboardAdminTemplate>
      <DashboardCard>
        <ul className="flex items-center gap-2">
          <p>
            <BiHomeAlt className="text-gray-400" />
          </p>
          <p>
            <MdArrowForwardIos className="text-xs text-gray-400" />
          </p>
          <p className="text-blue-600 text-sm">Lomba</p>
          <p>
            <MdArrowForwardIos className="text-xs text-gray-400" />
          </p>
          <p className="text-blue-600 text-sm">Buat</p>
        </ul>
        <div className="flex justify-between items-center mt-2">
          <h1 className="text-2xl fomt-semibold">Buat Lomba</h1>
          <Button
            onClick={() => setIsModal(true)}
            isSquare
            color={"blue"}
            additionals={"flex items-center gap-2"}
          >
            <p>Publish</p>
          </Button>
        </div>
      </DashboardCard>
      <div className="flex justify-center items-start w-11/12 mx-auto">
        <DashboardCard className="w-full space-y-3 flex flex-col">
          <div className="p-1 bg-slate-100 rounded-md w-fit">
            <AiOutlineEdit className="text-xl" />
          </div>
          <InputTitle placeholder={"Nama lomba"} title={"Nama Lomba"} />
          <Dropdown
            title={"Kategori"}
            options={dropdownOptions}
            placeholder={"Pilih kategori"}
          />
          <InputTitle placeholder={"Harga lomba"} title={"HTM"} />
          <InputTitle
            placeholder={"Masukan jumlah anggota"}
            title={"Total Anggota Per Tim"}
          />
          <label className="flex text-xs text-dark space-x-2">
            <p>Lomba bersifat individu</p>
            <input
              type="checkbox"
              onChange={(e) => console.log(e.target.checked)}
            />
          </label>
          <label className=" text-dark">
            <p>Deadline</p>
            <input
              type="date"
              className="w-full px-4 py-2 border rounded-md mt-1 focus:ring-0 focus:outline-none"
              placeholder="Tanggal"
            />
          </label>
        </DashboardCard>
        <div className="w-full"></div>
      </div>
    </DashboardAdminTemplate>
  );
};

export default AddCompetition;
