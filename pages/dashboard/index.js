import GetMineTeam from "@/api/team/Mine";
import { Button } from "@/components";
import DashboardCard from "@/components/atoms/DashboardCard";
import Text from "@/components/atoms/Text";
import DashboardUserTemplate from "@/components/pagetemplate/DashboardUser";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { MdArrowForwardIos } from "react-icons/md";
import { getTwoChar } from "../team";

// export async function getServerSideProps(context) {
//   const token = context.req.cookies.token;
//   if (!token) {
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false,
//       },
//     };
//   }

//   // Lanjutkan eksekusi jika token tersedia
//   // ...

//   return {
//     props: {},
//   };
// }

const DashboardUser = () => {
  const [teams, setTeams] = useState([]);
  const [email, setEmail] = useState("");
  useEffect(() => {
    GetMineTeam()
      .then((res) => {
        setTeams(res.data.teams);
        console.log(res.data.teams);
      })
      .catch((err) => console.log(err));
    setEmail(Cookies.get("email"));
  }, []);
  return (
    <DashboardUserTemplate>
      <DashboardCard>
        <ul className="flex items-center gap-2">
          <Link href={"/"}>
            <BiHomeAlt className="text-gray-400" />
          </Link>
          <p>
            <MdArrowForwardIos className="text-xs text-gray-400" />
          </p>
          <p className="text-blue-600 text-sm">Lomba</p>
        </ul>
        <div className="flex justify-between space-y-2 lg:space-y-0 items-center mt-4 lg:flex-row flex-col">
          <h1 className="text-2xl fomt-semibold">Lomba Yang Diikuti</h1>
          {teams.length > 0 && (
            <Link href={"/"}>
              <Button>Daftar lomba</Button>
            </Link>
          )}
        </div>
      </DashboardCard>
      <ul className="flex flex-col space-y-4">
        {teams?.length == 0 ? (
          <EmptyTeam />
        ) : (
          teams.map((item, idx) => (
            <TeamCard
              key={idx}
              avatar={item.avatar}
              competitionName={item.competitionName}
              teamName={item.teamName ? item.name : email}
              currentMembers={item.currentMembers}
              maxMembers={item.maxMembers}
              id={item.teamId}
              slug={item.cSlug}
              isSubmit={item.isSubmit}
            />
          ))
        )}
      </ul>
    </DashboardUserTemplate>
  );
};

export default DashboardUser;

const TeamCard = (props) => {
  return (
    <li className="w-11/12 mx-auto bg-white shadow shadow-black/5 rounded-md lg:px-8 p-4 lg:py-4 flex lg:flex-row flex-col justify-between items-start">
      <div className="max-lg:w-full relative">
        {props.avatar ? (
          <img
            src={props.avatar}
            alt="Competition Image"
            width={1080}
            height={1080}
            className="lg:w-28 w-full h-28 object-cover lg:h-28 rounded-md"
          />
        ) : (
          <div className="lg:w-28 w-full h-28 rounded-md bg-slate-100 flex justify-center items-center">
            {getTwoChar(props.teamName)}
          </div>
        )}
        <div className="absolute right-0 -bottom-full  lg:hidden">
          {props.isSubmit ? (
            <div className="px-4 py-2 bg-green-400/20 rounded-full">
              <Text size={"small"} additionals={"text-green-600"}>
                Sudah Submit
              </Text>
            </div>
          ) : (
            <div className="px-4 py-2 bg-oren/10 rounded-full">
              <Text
                color={"text-black"}
                size={"small"}
                additionals={"text-oren"}
              >
                Belum Submit
              </Text>
            </div>
          )}
        </div>
      </div>

      <div className="lg:mx-4 lg:my-0 my-3 flex-1 w-full">
        <Text color={"text-black"}>{props.competitionName}</Text>

        <Text color={"text-black"} size={"cardtitle"} weight={"semi"}>
          {props.teamName}
        </Text>

        <div className="flex space-x-2 items-center ">
          <BsFillPeopleFill className="text-dark" />
          <Text>
            {props.currentMembers + 1}/{props.maxMembers}
          </Text>
        </div>
        <Link
          href={`/team?i=${props.id}&sl=${props.slug}`}
          className="underline"
        >
          Detail
        </Link>
      </div>
      {props.isSubmit ? (
        <div className="px-4 py-2 bg-green-400/20 rounded-full max-lg:hidden">
          <Text size={"small"} additionals={"text-green-600"}>
            Sudah Submit
          </Text>
        </div>
      ) : (
        <div className="px-4 py-2 bg-oren/10 rounded-full max-lg:hidden">
          <Text color={"text-black"} size={"small"} additionals={"text-oren"}>
            Belum Submit
          </Text>
        </div>
      )}
    </li>
  );
};

const EmptyTeam = () => {
  return (
    <DashboardCard>
      <div className="w-full flex justify-center items-center mt-36 flex-col">
        <Text size={"title"} color={"text-black"}>
          Tidak ada lomba yang diikuti
        </Text>
        <p className="text-md mt-4 mb-6">
          Kamu belum mengikuti lomba, segera daftarkan tim kamu dan jadilah
          juara!
        </p>
        <Link href={"/"}>
          <Button>Daftar lomba</Button>
        </Link>
      </div>
    </DashboardCard>
  );
};
