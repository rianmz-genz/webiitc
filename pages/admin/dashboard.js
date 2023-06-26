import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { CgEditBlackPoint } from "react-icons/cg";
import { BiCategoryAlt } from "react-icons/bi";
import DashboardAdminTemplate from "@/components/pagetemplate/DashboardAdmin";

export async function getServerSideProps(context) {
  const token = context.req.cookies.adminKey;
  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  // Lanjutkan eksekusi jika token tersedia
  // ...

  return {
    props: {},
  };
}

const DashboardAdmin = () => {
  return (
    <DashboardAdminTemplate title={"Dashboard"}>
      <section className="w-11/12 mx-auto bg-white px-4 py-2 shadow rounded-md"></section>
    </DashboardAdminTemplate>
  );
};

export default DashboardAdmin;
