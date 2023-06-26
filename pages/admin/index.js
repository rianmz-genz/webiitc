import { Button } from "@/components";
import InputTitle from "@/components/molecules/InputTitle";
import Cookies from "js-cookie";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";

const AdminLogin = () => {
  const router = useRouter();
  const date = new Date();
  const code = process.env.NEXT_PUBLIC_ADMINKEY;
  const now = `${date.getDate()}${date.getMinutes()}${date.getHours()}`;
  const adminKey = code + now;
  const [key, setKey] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(adminKey);
    if (key == adminKey) {
      Cookies.set("adminKey", key, { expires: 1 }); // Cookie berakhir dalam 7 hari
      router.push("/admin/dashboard");
    }
  };
  return (
    <>
      <Head>
        <title>Login - Admin</title>
      </Head>
      <main className="w-full min-h-screen flex items-center justify-center bg-slate-100">
        <form
          onSubmit={handleSubmit}
          className="lg:w-full max-w-[600px]  lg:py-12 bg-white lg:px-8 p-6 w-11/12"
        >
          <InputTitle
            required
            title={"Key"}
            placeholder="Admin key"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
          <Button additionals={"w-full mt-3"}>Login</Button>
        </form>
      </main>
    </>
  );
};

export default AdminLogin;
