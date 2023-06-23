import React from "react";
import Container from "../molecules/Container";
import Head from "next/head";

const AuthPage = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <main className="w-full pr-3 pl-12 mx-auto justify-between flex items-center min-h-screen ">
          <form className="w-7/12 pr-12">{children}</form>
          <aside className="w-5/12 min-h-screen py-4 relative">
            <div className="bg-gradient-to-b from-[#F38300] absolute bottom-2 right-2 opacity-30 to-[#FF9900] rounded-xl w-full h-screen"></div>
            <div className="bg-gradient-to-b from-[#F38300] to-[#FF9900] rounded-xl w-full h-screen"></div>
          </aside>
        </main>
      </Container>
    </>
  );
};

export default AuthPage;
