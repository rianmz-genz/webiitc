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
  useEffect(() => {
    GetMineTeam()
      .then((res) => {
        setTeams(res.data.teams);
        console.log(res.data.teams);
      })
      .catch((err) => console.log(res));
  }, []);
  return (
    <DashboardUserTemplate>
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
          <h1 className="text-2xl fomt-semibold">Lomba Yang Diikuti</h1>
        </div>
      </DashboardCard>
      <ul className="flex flex-col space-y-4">
        {teams.map((item, idx) => (
          <TeamCard
            key={idx}
            avatar={item.avatar}
            competitionName={item.competitionName}
            teamName={item.teamName}
            currentMembers={item.currentMembers}
            maxMembers={item.maxMembers}
            id={item.teamId}
            slug={item.cSlug}
            isSubmit={item.isSubmit}
          />
        ))}
      </ul>
    </DashboardUserTemplate>
  );
};

export default DashboardUser;

const TeamCard = (props) => {
  return (
    <li className="w-11/12 mx-auto bg-white shadow shadow-black/5 rounded-md px-8 py-4 flex justify-between items-start">
      {props.avatar ? (
        <img
          src={props.avatar}
          alt="Competition Image"
          width={1080}
          height={1080}
          className="w-28 object-cover h-28 rounded-md"
        />
      ) : (
        <div className="w-28 object-cover h-28 rounded-md bg-slate-300"></div>
      )}
      <div className="mx-4 flex-1">
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
        <div className="px-4 py-2 bg-green-400/20 rounded-full">
          <Text size={"small"} additionals={"text-green-600"}>
            Sudah Submit
          </Text>
        </div>
      ) : (
        <div className="px-4 py-2 bg-oren/10 rounded-full">
          <Text color={"text-black"} size={"small"} additionals={"text-oren"}>
            Belum Submit
          </Text>
        </div>
      )}
    </li>
  );
};
