import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { CgEditBlackPoint } from "react-icons/cg";
import { LuLayoutDashboard } from "react-icons/lu";

const DashboardAdminTemplate = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title} - Admin</title>
      </Head>
      <main className="bg-sslate w-full min-h-screen flex">
        <nav className="w-full max-w-[250px] bg-white py-12 px-7 flex flex-col items-center justify-start">
          <Image
            className="w-24"
            src={"/images/LOGO/LOGO IIT COMPETITION PNG.png"}
            alt="logo iitc"
            width={1080}
            height={1080}
          />
          <hr className="border border-gray-400/40 w-full my-7" />
          <ul className="gap-3 flex flex-col w-full">
            <li className="w-full text-slate-600">
              <Link
                href={"/admin/dashboard"}
                className="flex items-center gap-3"
              >
                <LuLayoutDashboard /> <p>Dashboard</p>
              </Link>
            </li>
            <li className="w-full text-slate-600">
              <Link
                href={"/admin/competition"}
                className="flex items-center gap-3"
              >
                <CgEditBlackPoint /> <p>Lomba</p>
              </Link>
            </li>
            <li className="w-full text-slate-600">
              <Link
                href={"/admin/competitioncategories"}
                className="flex items-center gap-3"
              >
                <BiCategoryAlt /> <p>Kategori Lomba</p>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="w-full my-8 gap-3 flex flex-col">{children}</div>
      </main>
    </>
  );
};

export default DashboardAdminTemplate;
