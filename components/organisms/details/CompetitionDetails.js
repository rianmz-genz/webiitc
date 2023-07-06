import Head from "next/head";
import React, { useEffect, useState } from "react";
import Footer from "../home/Footer";
import { IoMdArrowBack } from "react-icons/io";
import Button from "@/components/atoms/Button";
import Text from "@/components/atoms/Text";
import LeftRightText from "@/components/molecules/LeftRightText";
import { BsFillJournalBookmarkFill, BsGridFill } from "react-icons/bs";
import StackCard from "@/components/atoms/StackCard";
import JuknisItem from "@/components/atoms/JukinisItem";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import GetDetailCompetitionsApi from "@/api/homepage/GetDetailCompetitionApi";
const CompetitionDetails = ({ setIsCompetitionDetail, competitionSlug }) => {
  const [isHitApi, setIsHitApi] = useState(true);
  const [competition, setCompetition] = useState({});
  useEffect(() => {
    getOneCompetition();
  }, []);
  const getOneCompetition = () => {
    setIsHitApi(true);
    GetDetailCompetitionsApi({ slug: competitionSlug })
      .then((res) => {
        setIsHitApi(false);
        setCompetition(res.data?.competition);
      })
      .catch((err) => console.log(err));
  };
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
          {isHitApi ? (
            <AiOutlineLoading3Quarters className="text-3xl text-silver animate-spin mx-auto my-8" />
          ) : (
            <>
              <ul className="flex space-x-3 mt-8 mb-10">
                <li>Competitions</li>
                <li>/</li>
                <li>Detail</li>
                <li>/</li>
                <li className="text-oren">{competition?.name}</li>
              </ul>
              <div className="flex justify-between items-start lg:flex-row flex-col">
                <img
                  src={competition?.cover}
                  width={1080}
                  height={1080}
                  alt="competition image"
                  className="w-full lg:w-5/12 lg:sticky top-6 rounded-lg"
                />
                <article className="w-11/12 my-12 lg:my-0 lg:w-6/12">
                  <Text size={"bigtitle"} color={"black"} additionals={"mb-4"}>
                    {competition?.name}
                  </Text>
                  <LeftRightText
                    leftText={"Category"}
                    rightText={competition?.categories?.map((item, index) =>
                      index == 0
                        ? item.name
                        : index == competition?.categories?.length - 1
                        ? ` & ${item.name}`
                        : `, ${item.name}`
                    )}
                  />
                  <LeftRightText
                    leftText={"Deadline"}
                    rightText={`${competition?.deadline} Hari`}
                  />
                  <LeftRightText
                    leftText={"Team"}
                    rightText={`Max ${competition?.maxMembers} Anggota`}
                  />
                  <div className="flex justify-between items-center my-6">
                    <div>
                      <Text size={"description"} weight={"semi"}>
                        HTM
                      </Text>
                      <Text size={"title"} weight={"semi"} color={"black"}>
                        Rp.{" "}
                        {competition?.competitionPrice.toLocaleString("id-ID")}
                      </Text>
                    </div>
                    <Button size={"lg"} additionals={"flex items-center"}>
                      Join <BsGridFill className="ml-1" />
                    </Button>
                  </div>
                  <Text
                    size={"description"}
                    additionals={"mt-8"}
                    weight={"semi"}
                  >
                    Tech Stack
                  </Text>
                  <ul className="flex gap-3 flex-wrap mt-2 mb-8">
                    {competition?.techStacks.map((stack, index) => {
                      <StackCard key={index}>{stack}</StackCard>;
                    })}
                  </ul>
                  <Text size={"description"} weight={"semi"}>
                    Deskripsi
                  </Text>
                  <Text additionals={"mt-2"}>{competition?.description}</Text>
                  <Text
                    additionals={"mt-8"}
                    size={"description"}
                    weight={"semi"}
                  >
                    Competition Information
                  </Text>
                  <div className="mt-4 flex items-center mb-8">
                    <div className="border-oren border rounded-full p-3">
                      <BsFillJournalBookmarkFill className="text-oren text-3xl" />
                    </div>
                    <div className="w-full ml-3">
                      <Text weight={"semi"}>{competition?.name}</Text>
                      <Text size={"sm"}>Guide Book</Text>
                    </div>
                    <Button
                      download
                      href={competition?.guideBookLink}
                      color={"orentransparent"}
                    >
                      Download
                    </Button>
                  </div>
                  <Text size={"description"} weight={"semi"}>
                    Juknis
                  </Text>
                  <ul className="mt-2 space-y-1 w-full">
                    {competition?.criteria.map((item, index) => (
                      <JuknisItem key={index} w={item?.percentage}>
                        {item?.name}
                      </JuknisItem>
                    ))}
                  </ul>
                </article>
              </div>
            </>
          )}
        </div>
        <Footer />
      </main>
    </>
  );
};

export default CompetitionDetails;
