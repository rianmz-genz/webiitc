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
  const filterByStatus = [
    { label: "Semua", value: "ALL" },
    { label: "Belum Bayar", value: null },
    { label: "Di Proses", value: "PENDING" },
    { label: "Sudah Bayar", value: "VALID" },
    { label: "Gagal Bayar", value: "INVALID" },
  ];
  const [resTeams, setResTeams] = useState([]);
  const [teams, setTeams] = useState([]);
  const [currentFilter, setCurrentFilter] = useState({});
  const [isHitApi, setIsHitApi] = useState(true);
  useEffect(() => {
    getTeams();
  }, []);
  const getTeams = () => {
    GetAllTeamApi().then((res) => {
      setResTeams(res.data.teams?.reverse());
      setCurrentFilter(filterByStatus[0]);
      setIsHitApi(false);
      const result = groupAndLabelByCompetitionName(res.data.teams);
      setTeams(result);
      console.log(result);
    });
    // .catch((err) => //console.log(err));
  };
  const getNotPaid = () => {
    const filtered = resTeams.filter((item) => item.isActive == null);
    setTeams(filtered);
  };
  const getPaidOf = () => {
    const filtered = resTeams.filter((item) => item.isActive == "VALID");
    setTeams(filtered);
  };
  const getPending = () => {
    const filtered = resTeams.filter((item) => item.isActive == "PENDING");
    setTeams(filtered);
  };
  const getCancel = () => {
    const filtered = resTeams.filter((item) => item.isActive == "INVALID");
    setTeams(filtered);
  };
  const handleFilter = ({ value }) => {
    const clickFilter = filterByStatus.find((item) => item.value == value);
    setCurrentFilter(clickFilter);
    switch (value) {
      case "ALL":
        return getTeams();
      case null:
        return getNotPaid();
      case "VALID":
        return getPaidOf();
      case "INVALID":
        return getCancel();
      case "PENDING":
        return getPending();
    }
  };

  // Fungsi untuk mengelompokkan berdasarkan competitionName dan menambahkan label
  const groupAndLabelByCompetitionName = (array) => {
    const groupedData = array.reduce((groups, item) => {
      const { competitionName, ...rest } = item;
      if (!groups[competitionName]) {
        groups[competitionName] = [];
      }
      groups[competitionName].push(rest);
      return groups;
    }, {});

    return Object.entries(groupedData).map(([competitionName, data]) => ({
      label: competitionName,
      data,
    }));
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
          <h1 className="text-2xl fomt-semibold w-6/12">
            Semua Tim Pembayaran
          </h1>
          <div className="group relative w-6/12">
            <p>{currentFilter.label}</p>
            <div className="hidden group-hover:flex w-full top-full left-0 shadow bg-white flex-col absolute z-10  rounded-md">
              {filterByStatus.map(({ label, value }, i) => (
                <button
                  key={i}
                  className="hover:bg-slate-100 px-4 py-2"
                  onClick={() => handleFilter({ value })}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </DashboardCard>
      <DashboardCard>
        {isHitApi ? (
          <AiOutlineLoading3Quarters className="mx-auto text-lg text-black animate-spin" />
        ) : currentFilter.value == "ALL" ? (
          teams.map((group) => (
            <li key={group.label} className="border rounded-lg p-4 my-1">
              <h3 className="text-xl font-semibold">{group.label}</h3>
              <ul className="mt-2 grid grid-cols-3 gap-2">
                {group.data?.map((team, idx) => (
                  <Link href={`/admin/team?i=${team.id}`} key={idx}>
                    <TeamCard
                      avatar={team.avatar}
                      name={team.name ?? team.leaderName}
                      title={team.title}
                      isActive={team.isActive}
                      code={team.code}
                    />
                  </Link>
                ))}
              </ul>
            </li>
          ))
        ) : (
          <ul className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  lg:grid-cols-4 gap-3">
            {teams?.map((team, idx) => (
              <Link href={`/admin/team?i=${team.id}`} key={idx}>
                <TeamCard
                  avatar={team.avatar}
                  name={team.name ?? team.leaderName}
                  title={team.title}
                  isActive={team.isActive}
                  code={team.code}
                />
              </Link>
            ))}
          </ul>
        )}
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
        {StatusPayment(isActive)}
        <p className="text-sm line-clamp-2 mt-3">{name}</p>
        <p className="text-lg line-clamp-3">{title}</p>
        {code && <p className="text-sm">#{code}</p>}
      </div>
    </li>
  );
};
