import GetAllTeamAdminApi from "@/api/admin/teams/AllTeam";
import GetMineTeam from "@/api/team/Mine";
import { Button } from "@/components";
import DashboardCard from "@/components/atoms/DashboardCard";
import DashboardAdminTemplate from "@/components/pagetemplate/DashboardAdmin";
import DashboardUserTemplate from "@/components/pagetemplate/DashboardUser";
import { EmptyTeam, TeamCard } from "@/pages/dashboard";
import Cookies from "js-cookie";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { MdArrowForwardIos } from "react-icons/md";

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [email, setEmail] = useState("");
  const valid = Cookies.get("valid");
  useEffect(() => {
    // GetMineTeam().then((res) => {
    //   setTeams(res.data?.teams);
    //   //console.log(res.data.teams);
    // });
    // .catch((err) => //console.log(err));
    setEmail(Cookies.get("email"));
    GetAllTeamAdminApi().then((res) => {
      setTeams(res.data?.teams);
    });
  }, []);
  return (
    <>
      <Head>
        <title>IITC Dashboard</title>
        <meta name="title" content="IITC Dashboard" />
      </Head>
      <DashboardAdminTemplate>
        {/* {valid == "false" && (
          <div className="w-full h-screen z-50 bg-black/40 fixed top-0 left-0 backdrop-blur-md flex justify-center items-center">
            <div className="w-11/12 mx-auto max-w-[500px] p-6 text-center bg-white rounded flex items-center justify-center space-x-2">
              <FiLock className="text-xl" />
              <Text size={"smalltitle"} color={"dark"}>
                Verifikasi Email Terlebih Dahulu
              </Text>
            </div>
          </div>
        )} */}
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
            <h1 className="text-2xl font-semibold ">Daftar Tim</h1>
            <p>total tim: {teams.length}</p>
          </div>
        </DashboardCard>
        <ul className="flex flex-col space-y-4">
          {teams?.length == 0 ? (
            <EmptyTeam />
          ) : (
            teams?.map((item, idx) => (
              <TeamCard
                isAdmin={true}
                key={idx}
                avatar={item.avatar}
                competitionName={item.competitionName}
                teamName={item.teamName ? item.teamName : email}
                currentMembers={item.currentMembers}
                maxMembers={item.maxMembers}
                id={item.teamId}
                slug={item.cSlug}
                isSubmit={item.isSubmit}
              />
            ))
          )}
        </ul>
      </DashboardAdminTemplate>
    </>
  );
}
