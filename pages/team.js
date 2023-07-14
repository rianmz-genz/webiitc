import { Button } from "@/components";
import Text from "@/components/atoms/Text";
import DashboardUserTemplate from "@/components/pagetemplate/DashboardUser";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { RiEditLine } from "react-icons/ri";
import { IoCopyOutline } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import { FiX } from "react-icons/fi";
import Image from "next/image";
const TeamPage = () => {
  const router = useRouter();
  const [isPaidOf, setIsPaidOf] = useState(false);
  const [isAlert, setIsAlert] = useState(true);
  return (
    <>
      <PopUp
        isModal={isAlert}
        onClose={() => {
          setIsAlert(false);
        }}
      >
        <div className="w-full flex flex-col items-center">
          <Image
            src={"/images/Logo iitcom.png"}
            alt="logo iitc"
            width={1080}
            height={1080}
            className="w-20"
          />
          <Text
            size={"smalltitle"}
            additionals={"my-3"}
            color={"text-black"}
            weight={"bold"}
          >
            Lengkapi Pembayaran!
          </Text>
          <Text additionals={"text-center"}>
            Lengkapi pembayaran kamu terlebih dahulu sebelum melanjutkan ke step
            selanjutnya. Silahkan klik tombol bayar sekarang untuk melakukan
            pembayaran & konfirmasi pembayaran!
          </Text>
          <div className="flex space-x-4 w-full mt-4">
            <Button isSquare additionals={"w-full"} color={"dark"}>
              Batal
            </Button>
            <Button isSquare additionals={"w-full"} color={"oren"}>
              Bayar Sekarang
            </Button>
          </div>
        </div>
      </PopUp>

      <DashboardUserTemplate>
        <div className="flex gap-6 w-11/12 border-b pb-8 mx-auto items-start justify-between relative">
          <img
            src="/images/buaya.png"
            width={1080}
            height={1080}
            alt="Gambar Lomba"
            className="w-4/12 rounded-md sticky top-3"
          />
          <div className="w-8/12 relative">
            <div className="absolute top-0 right-0 bg-red/20 px-2 py-1 rounded-full">
              <Text additionals={"text-red"} size={"small"}>
                Belum Bayar
              </Text>
            </div>
            <div>
              <p className="text-sm text-black/60">Nama Lomba</p>
              <Text color={"text-black font-bold"} size={"title"}>
                WEBSITE DESIGN
              </Text>
            </div>
            <div className="mt-3">
              <p className="text-sm text-black/60">Deskripsi</p>
              <Text color={"text-black font-bold"} size={"description"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac
                fermentum diam egestas nunc nisl. Viverra in semper eget neque.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac
                fermentum diam egestas nunc nisl. Viverra in semper eget neque.
              </Text>
            </div>
            <div className="mt-3 flex gap-6">
              <div>
                <p className="text-sm text-black/60">Deadline</p>
                <Text color={"text-black font-bold"} size={"description"}>
                  29 Hari
                </Text>
              </div>

              <div>
                <p className="text-sm text-black/60">Harga</p>
                <Text color={"text-black font-bold"} size={"description"}>
                  Rp. 30.000
                </Text>
              </div>
              <ul className="grid grid-rows-2">
                <p className="text-sm text-black/60">Stacks</p>
                <Text color={"text-black font-bold"} size={"description"}>
                  - 29 Hari
                </Text>
                <Text color={"text-black font-bold"} size={"description"}>
                  - 29 Hari
                </Text>
                <Text color={"text-black font-bold"} size={"description"}>
                  - 29 Hari
                </Text>
              </ul>
            </div>
            <Button isSquare color={"oren"} additionals={"w-full mt-6"}>
              Submit
            </Button>
          </div>
        </div>
        <div className="w-11/12 mx-auto mt-8">
          <div className="flex w-full space-x-6 justify-start items-center pb-8 border-b">
            <img
              src="/images/buaya.png"
              alt="Buaya"
              width={1080}
              height={1080}
              className="w-36 h-36 rounded-full object-cover"
            />
            <div className="flex justify-between items-center w-full">
              <div>
                <Text size={"title"} color={"text-black"}>
                  Nama Team
                </Text>
                <Text>3/4 Anggota</Text>
                <div className="mt-3 flex space-x-1">
                  <Button
                    color={"oren"}
                    size={"sm"}
                    isSquare
                    additionals={"flex items-center space-x-1"}
                  >
                    <p>Edit</p>
                    <RiEditLine />
                  </Button>
                  <Button
                    color={"dark"}
                    size={"sm"}
                    isSquare
                    additionals={"flex items-center space-x-1"}
                  >
                    <p>Hapus</p>
                    <AiOutlineDelete />
                  </Button>
                </div>
              </div>
              <Button
                isSquare
                color={"green"}
                additionals={"flex items-center space-x-2"}
              >
                <IoCopyOutline className="text-xl" />
                <p>#TEAMCODE</p>
              </Button>
            </div>
          </div>

          <ul className="mt-8">
            <li className="flex justify-between items-center">
              <div className="flex items-center justify-start space-x-3">
                <img
                  src="/images/buaya.png"
                  alt="Buaya"
                  width={1080}
                  height={1080}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <Text size={"smalltitle"}>Nama Member</Text>
                  <Text>Role</Text>
                </div>
              </div>
              <Button color={"red"}>Kick</Button>
            </li>
          </ul>
        </div>
      </DashboardUserTemplate>
    </>
  );
};

export default TeamPage;

const PopUp = ({ onClose, isModal, children }) => {
  return (
    <div
      className={`${
        isModal ? "visible opacity-100" : "invisible opacity-0"
      } transition-all duration-300 bg-dark/10 backdrop-blur-md w-full fixed h-screen z-20 flex justify-center items-center`}
    >
      <div className="w-full max-w-[450px] p-4 bg-white rounded-md flex flex-col justify-start items-center relative">
        <button
          onClick={onClose}
          className="bg-red/10 text-red rounded-full p-1 absolute top-3 right-3"
        >
          <FiX />
        </button>
        {children}
      </div>
    </div>
  );
};
