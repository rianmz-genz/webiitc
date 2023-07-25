import React, { useEffect, useState } from "react";
import DashboardAdminTemplate from "@/components/pagetemplate/DashboardAdmin";
import GetAllTeamApi from "@/api/admin/teams";
import DashboardCard from "@/components/atoms/DashboardCard";
import { BiHomeAlt } from "react-icons/bi";
import { MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";
import { Button } from "@/components";
import { FiPlus } from "react-icons/fi";
import { StatusPayment } from "../team";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const DashboardAdmin = () => {
  const [teams, setTeams] = useState([]);
  const [isHitApi, setIsHitApi] = useState(true);
  useEffect(() => {
    getTeams();
  }, []);
  const getTeams = () => {
    GetAllTeamApi()
      .then((res) => {
        console.log(res);
        setTeams(res.data.teams.reverse());
        setIsHitApi(false);
      })
      .catch((err) => console.log(err));
  };
  return (
    <DashboardAdminTemplate title={"Dashboard"}>
      <DashboardCard>
        <ul className="flex items-center gap-2">
          <p>
            <BiHomeAlt className="text-gray-400" />
          </p>
          <p>
            <MdArrowForwardIos className="text-xs text-gray-400" />
          </p>
          <p className="text-blue-600 text-sm">Tim</p>
        </ul>
        <div className="flex justify-between items-center mt-2">
          <h1 className="text-2xl fomt-semibold">Semua Tim</h1>
        </div>
      </DashboardCard>
      <DashboardCard>
        <ul className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  lg:grid-cols-4 gap-3">
          {isHitApi ? (
            <AiOutlineLoading3Quarters className="mx-auto text-lg text-black animate-spin" />
          ) : (
            teams?.map((team, idx) => (
              <Link href={`/admin/team?i=${team.id}`} key={idx}>
                <TeamCard
                  avatar={team.avatar}
                  name={team.name}
                  title={team.title}
                  isActive={team.isActive}
                  code={team.code}
                />
              </Link>
            ))
          )}
        </ul>
      </DashboardCard>
    </DashboardAdminTemplate>
  );
};

export default DashboardAdmin;

const TeamCard = ({ avatar, name, title, isActive, code }) => {
  return (
    <li className="w-full rounded-md bg-white shadow">
      {avatar ? (
        <img
          src={avatar}
          alt="tim 1"
          width={1080}
          height={1080}
          className="w-full rounded-t-md h-36 object-cover"
        />
      ) : (
        <div className="w-full h-36 rounded-t-md bg-slate-200 animate-pulse"></div>
      )}
      <div className="p-4 relative">
        {StatusPayment("PENDING")}
        <p className="text-sm line-clamp-2 mt-3">{name}</p>
        <p className="text-lg line-clamp-3">{title}</p>
        <p className="text-sm">#{code}</p>
      </div>
    </li>
  );
};
