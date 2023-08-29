import React, { useEffect, useState } from "react";
import DashboardAdminTemplate from "@/components/pagetemplate/DashboardAdmin";
import GetAllTeamApi from "@/api/admin/teams";
import DashboardCard from "@/components/atoms/DashboardCard";
import { BiHomeAlt } from "react-icons/bi";
import { MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { StatusPayment } from "../team";

const DashboardAdmin = () => {
  const paymentStatusFilters = [
    { label: "Semua", value: "ALL" },
    { label: "Belum Bayar", value: null },
    { label: "Di Proses", value: "PENDING" },
    { label: "Sudah Bayar", value: "VALID" },
    { label: "Gagal Bayar", value: "INVALID" },
  ];

  const [teams, setTeams] = useState([]);
  const [originalTeams, setOriginalTeams] = useState([]);
  const [selectedCompetitionNames, setSelectedCompetitionNames] = useState([]);
  const [currentPaymentStatus, setCurrentPaymentStatus] = useState(
    paymentStatusFilters[0].value
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = () => {
    GetAllTeamApi().then((res) => {
      const fetchedTeams = res.data.teams?.reverse();
      setOriginalTeams(fetchedTeams);
      setTeams(fetchedTeams);
      setIsLoading(false);
    });
  };

  const filterTeams = () => {
    let filteredTeams = originalTeams;

    if (selectedCompetitionNames.length > 0) {
      filteredTeams = filteredTeams.filter((team) =>
        selectedCompetitionNames.includes(team.competitionName)
      );
    }

    if (currentPaymentStatus !== "ALL") {
      filteredTeams = filteredTeams.filter(
        (team) => team.isActive === currentPaymentStatus
      );
    }

    setTeams(filteredTeams);
  };

  useEffect(() => {
    filterTeams();
  }, [selectedCompetitionNames, currentPaymentStatus]);

  const toggleCompetitionFilter = (competitionName) => {
    if (selectedCompetitionNames.includes(competitionName)) {
      setSelectedCompetitionNames((prevNames) =>
        prevNames.filter((name) => name !== competitionName)
      );
    } else {
      setSelectedCompetitionNames((prevNames) => [
        ...prevNames,
        competitionName,
      ]);
    }
  };
  const uniqueCompetitionNames = [
    ...new Set(originalTeams.map((team) => team.competitionName)),
  ];
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
          <h1 className="text-2xl font-semibold">Semua Tim Pembayaran</h1>
        </div>
        <div className="my-3 text-xs">pembayaran :</div>
        <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-2">
          {paymentStatusFilters.map((filter, idx) => (
            <div key={`payment-status-${idx}`} className="mb-2 w-full">
              <button
                onClick={() => setCurrentPaymentStatus(filter.value)}
                className={`flex  cursor-pointer items-center justify-between rounded-lg border text-xs w-full ${
                  currentPaymentStatus === filter.value
                    ? "border-orange-500 ring-1 ring-orange-500"
                    : "border-gray-100"
                } bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200`}
              >
                <div className="flex items-center gap-2">
                  <svg
                    className={
                      currentPaymentStatus === filter.value
                        ? "h-5 w-5 text-orange-600"
                        : "hidden"
                    }
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-gray-700">{filter.label}</p>
                </div>
              </button>
            </div>
          ))}
        </div>
        <div className="my-3 text-xs">kategori :</div>
        <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-2">
          {uniqueCompetitionNames.map((competitionName, idx) => (
            <div key={`team-filters-${idx}`} className="mb-2">
              <button
                onClick={() => toggleCompetitionFilter(competitionName)}
                className={`flex cursor-pointer items-center justify-between rounded-lg border w-full ${
                  selectedCompetitionNames?.includes(competitionName)
                    ? "border-orange-500 ring-1 ring-orange-500"
                    : "border-gray-100"
                } bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200`}
              >
                <div className="flex items-center gap-2">
                  <svg
                    className={
                      selectedCompetitionNames?.includes(competitionName)
                        ? "h-5 w-5 text-orange-600"
                        : "hidden"
                    }
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-gray-700">{competitionName}</p>
                </div>
              </button>
            </div>
          ))}
        </div>
      </DashboardCard>

      <DashboardCard>
        {isLoading ? (
          <AiOutlineLoading3Quarters className="mx-auto text-lg text-black animate-spin" />
        ) : (
          teams.map((team) => (
            <li key={team.id} className="border-b p-4 my-1 list-none">
              <h3 className="text-xl font-semibold mb-10">{team.label}</h3>
              <ul className="grid lg:grid-cols-2 gap-3">
                <Link href={`/admin/team?i=${team.id}`}>
                  <TeamCard
                    avatar={team.avatar}
                    name={team.name ?? team.leaderName}
                    title={team.title}
                    isActive={team.isActive}
                    code={team.code}
                  />
                </Link>
              </ul>
            </li>
          ))
        )}
      </DashboardCard>
    </DashboardAdminTemplate>
  );
};

export default DashboardAdmin;

const TeamCard = ({ avatar, name, title, isActive, code, label }) => {
  return (
    <li className="group flex flex-col  bg-white border shadow-sm rounded-xl hover:shadow-md transition">
      <div className="p-4 md:p-5">
        <div className="flex items-center">
          {avatar ? (
            <img
              src={avatar}
              alt="tim 1"
              width={1080}
              height={1080}
              className="w-20 rounded-t-md h-20 object-contain"
            />
          ) : (
            <div className="w-20 h-20 rounded-t-md bg-slate-200 animate-pulse"></div>
          )}

          <div className="grow ml-5">
            <div className="flex flex-col gap-5 mb-5 justify-between">
              <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400">
                {name}{" "}
                <span className="uppercase text-xs text-orange-500">
                  {label}
                </span>
              </h3>
              {StatusPayment(isActive)}
            </div>
            <div className="text-sm text-gray-500">
              {title} {code && <span>#{code}</span>}
              <span className="text-blue-600 font-medium dark:text-blue-500"></span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
