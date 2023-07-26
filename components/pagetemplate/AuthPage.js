import React from "react";
import Container from "../molecules/Container";
import Head from "next/head";
import Image from "next/image";

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
            <div className="bg-gradient-to-b from-[#F38300] absolute bottom-2 right-2 opacity-30 -z-10 to-[#FF9900]  rounded-xl w-full h-screen" />
            {/* card */}
            <div className="relative bg-gradient-to-b overflow-hidden from-[#F38300] z-10 to-[#FF9900] rounded-xl w-full h-screen max-h-screen p-10  ">
              {/* image char */}
              <Image
                className="w-full h-full object-cover object-left-bottom opacity-70   top-20 absolute inset-0 -z-10 "
                src={"/images/char.svg"}
                alt="char iitc"
                width={1080}
                height={1080}
              />

              <div className="w-fit rounded-xl  bg-white p-2 flex gap-4 items-center pr-4">
                <div className="p-2 border-4 h-12 w-12 flex justify-center items-center  border-slate-200 rounded-full ">
                  <Image
                    className="w-10 object-contain"
                    src={"/images/LOGO/LOGOFIX.png"}
                    alt="logo iitc"
                    width={1080}
                    height={1080}
                  />
                </div>
                <div className="">
                  <h1 className="text-slate-900 font-bold uppercase text-sm">
                    IITC
                  </h1>
                  <h1 className="text-slate-500  capitalize text-xs">
                    Intermedia
                  </h1>
                </div>
                {/* content  */}
              </div>
              <p className="text-5xl text-white w-11/12 font-semibold leading-relaxed mt-5">
                Tunjukan skill kamu sekarang disini.{" "}
              </p>
              <p className="text-white">
                Manfestasikan semangatmu melalui berbagai acara dan rebutlah
                gelar juara.
              </p>
            </div>
          </aside>
        </main>
      </Container>
    </>
  );
};

export default AuthPage;
