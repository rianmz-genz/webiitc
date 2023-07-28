import React from "react";
import DashboardUserTemplate from "@/components/pagetemplate/DashboardUser";
import DashboardCard from "@/components/atoms/DashboardCard";
import { BiHomeAlt } from "react-icons/bi";
import { MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";
import { Button } from "@/components";
import InputTitle from "@/components/molecules/InputTitle";
import InputPhone from "@/components/atoms/InputPhone";
import Text from "@/components/atoms/Text";
import InputOptions from "@/components/atoms/InputOptions";
import FilePond from "@/components/atoms/FilePond";
import InputRadio from "@/components/atoms/InputRadio";

function profile() {
  return (
    <div>
      <DashboardUserTemplate>
        <DashboardCard>
          <ul className="flex items-center gap-2">
            <Link href={"/"}>
              <BiHomeAlt className="text-gray-400" />
            </Link>
            <p>
              <MdArrowForwardIos className="text-xs text-gray-400" />
            </p>
            <p className="text-blue-600 text-sm">Profile</p>
          </ul>
          <div className="flex justify-between items-center mt-2">
            <h1 className="text-2xl fomt-semibold">Profile</h1>
          </div>
        </DashboardCard>
        <div className="px-10 rounded-lg bg-white p-5 w-11/12 flex flex-col gap-2  mx-auto">
          <InputTitle
            required={true}
            title={"Nama Lengkap"}
            type="text"
            placeholder={"Masukan nama lengkap"}
          />
          <InputTitle
            required={true}
            title={"Email"}
            type="email"
            placeholder={"Masukan email"}
          />
          <Text>No Telepon</Text>
          <InputPhone
            // onChange={(e) => setPhone(e.target.value)}
            placeholder="88226989100"
            required={true}
            maxLength={12}
          />
          <InputOptions
            options={["Masukan nama sekolah / instansi", "Siswa", "Mahasiswa"]}
          />
          <Text>Avatar</Text>
          <FilePond />
          <InputTitle
            required={true}
            title={"NIM/NISN"}
            type="text"
            placeholder={"Masukan NIM/NISN"}
          />
          <InputRadio />
          <Text>Foto Identitas</Text>
          <FilePond />
          <div className="flex gap-4">
            <button className="py-2 px-4 bg-slate-700 rounded-md hover:bg-slate-900 text-white font-semibold">
              Batal
            </button>
            <button className="py-2 px-4 bg-oren rounded-md hover:bg-orange-500 text-white font-semibold">
              Simpan
            </button>
          </div>
        </div>
      </DashboardUserTemplate>
    </div>
  );
}

export default profile;
