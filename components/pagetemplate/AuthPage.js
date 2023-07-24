import React from "react";
import Container from "../molecules/Container";
import Head from "next/head";

const AuthPage = ({ children, title, onSubmit, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" type="image/png" href="images/LOGO/LOGOFIX.png" />
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/rianmz-genz/webiitc/main/public/images/LOGO/LOGOFIX.png"
        />
      </Head>
      <Container>
        <main className="w-full lg:flex-row flex-col lg:py-0 py-12 lg:pr-3 lg:pl-12 mx-auto justify-between flex items-center min-h-screen ">
          <form onSubmit={onSubmit} className="w-11/12 lg:w-7/12 lg:pr-12">
            {children}
          </form>
          <aside className="w-11/12 lg:w-5/12 min-h-screen py-4 relative">
            <div className="bg-gradient-to-b from-[#F38300] absolute bottom-2 right-2 opacity-30 to-[#FF9900] rounded-xl w-full h-screen"></div>
            <div className="bg-gradient-to-b from-[#F38300] to-[#FF9900] rounded-xl w-full h-screen"></div>
          </aside>
        </main>
      </Container>
    </>
  );
};

export default AuthPage;
