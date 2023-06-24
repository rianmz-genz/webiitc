import Head from "next/head";
import React from "react";
import Footer from "../home/Footer";
import { IoMdArrowBack } from "react-icons/io";
import Button from "@/components/atoms/Button";
import Link from "next/link";
import Image from "next/image";
import Text from "@/components/atoms/Text";
import LeftRightText from "@/components/molecules/LeftRightText";
import { BsFillJournalBookmarkFill, BsGridFill } from "react-icons/bs";
import StackCard from "@/components/atoms/StackCard";
import JuknisItem from "@/components/atoms/JukinisItem";
const CompetitionDetails = ({ setIsCompetitionDetail, competitionName }) => {
  return (
    <>
      <Head>
        <title>Detail</title>
        <meta name="title" content="IITC" />
      </Head>
      <main>
        <div className="w-11/12 mx-auto py-6">
          <Button
            onClick={() => setIsCompetitionDetail(false)}
            additionals={"flex items-center"}
            color={"silver"}
            size={"base"}
          >
            <IoMdArrowBack className="text-lg cursor-pointer mr-2" />
            Back
          </Button>
          <ul className="flex space-x-3 mt-8 mb-10">
            <li>Competitions</li>
            <li>/</li>
            <li>Detail</li>
            <li>/</li>
            <li className="text-oren">{competitionName}</li>
          </ul>
          <div className="flex justify-between items-start lg:flex-row flex-col">
            <Image
              src={"/images/trex.png"}
              width={1080}
              height={1080}
              alt="competition image"
              className="w-full lg:w-5/12 lg:sticky top-6 rounded-lg"
            />
            <article className="w-11/12 my-12 lg:my-0 lg:w-6/12">
              <Text size={"bigtitle"} color={"black"} additionals={"mb-4"}>
                {competitionName}
              </Text>
              <LeftRightText
                leftText={"Category"}
                rightText={"Pelajar & Mahasiswa"}
              />
              <LeftRightText leftText={"Deadline"} rightText={"29 Hari"} />
              <LeftRightText leftText={"Team"} rightText={"Max 5 Anggota"} />
              <div className="flex justify-between items-center my-6">
                <div>
                  <Text size={"description"} weight={"semi"}>
                    HTM
                  </Text>
                  <Text size={"title"} weight={"semi"} color={"black"}>
                    Rp. 30.000
                  </Text>
                </div>
                <Button size={"lg"} additionals={"flex items-center"}>
                  Join <BsGridFill className="ml-1" />
                </Button>
              </div>
              <Text size={"description"} additionals={"mt-8"} weight={"semi"}>
                Tech Stack
              </Text>
              <ul className="flex gap-3 flex-wrap mt-2 mb-8">
                <StackCard>NextJS</StackCard>
                <StackCard>TailwindCSS</StackCard>
                <StackCard>Typescript</StackCard>
                <StackCard>Laravel</StackCard>
                <StackCard>React Redux</StackCard>
              </ul>
              <Text size={"description"} weight={"semi"}>
                Deskripsi
              </Text>
              <Text additionals={"mt-2"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac
                fermentum diam egestas nunc nisl. Viverra in semper eget neque.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac
                fermentum diam egestas nunc nisl. Viverra in semper eget neque.
              </Text>
              <Text additionals={"mt-8"} size={"description"} weight={"semi"}>
                Competition Information
              </Text>
              <div className="mt-4 flex items-center mb-8">
                <div className="border-oren border rounded-full p-3">
                  <BsFillJournalBookmarkFill className="text-oren text-3xl" />
                </div>
                <div className="w-full ml-3">
                  <Text weight={"semi"}>{competitionName}</Text>
                  <Text size={"sm"}>Guide Book</Text>
                </div>
                <Button color={"orentransparent"}>Download</Button>
              </div>
              <Text size={"description"} weight={"semi"}>
                Juknis
              </Text>
              <ul className="mt-2 space-y-1 w-full">
                <JuknisItem w={40}>Kesesuaian Tema</JuknisItem>
                <JuknisItem w={30}>Desain</JuknisItem>
                <JuknisItem w={60}>Arsitekur</JuknisItem>
              </ul>
            </article>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default CompetitionDetails;
