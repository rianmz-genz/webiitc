import Head from "next/head";
import React, { useEffect, useState } from "react";
import Footer from "../home/Footer";
import { IoMdArrowBack } from "react-icons/io";
import Button from "@/components/atoms/Button";
import Text from "@/components/atoms/Text";
import LeftRightText from "@/components/molecules/LeftRightText";
import {
  BsFillJournalBookmarkFill,
  BsFillPeopleFill,
  BsGridFill,
} from "react-icons/bs";
import StackCard from "@/components/atoms/StackCard";
import JuknisItem from "@/components/atoms/JukinisItem";
import {
  AiOutlineCheckCircle,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";
import GetDetailCompetitionsApi from "@/api/homepage/GetDetailCompetitionApi";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { FiLogIn, FiX, FiXCircle } from "react-icons/fi";
import Input from "@/components/atoms/Input";
import Alert from "@/components/atoms/Alert";
import JoinTeamApi from "@/api/team/JoinTeam";
import JoinApi from "@/api/team/Join";
import JoinIndividuApi from "@/api/team/Individu";
const CompetitionDetails = ({ setIsCompetitionDetail, competitionSlug }) => {
  const [isHitApi, setIsHitApi] = useState(true);
  const [competition, setCompetition] = useState({});
  const [isChoose, setIsChoose] = useState(false);
  const [tc, setTc] = useState("");
  const [name, setName] = useState("");
  const [isJoin, setIsJoin] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
  const [isHitJoin, setIsHitJoin] = useState(false);
  const [isHitJoinTeam, setIsHitJoinTeam] = useState(false);
  const [message, setMessage] = useState("");
  const [code, setCode] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [isIndividu, setIsIndividu] = useState(false);
  const [isHitIndividu, setIsHitIndividu] = useState(false);
  const router = useRouter();
  useEffect(() => {
    getOneCompetition();
  }, []);
  const getOneCompetition = () => {
    setIsHitApi(true);
    GetDetailCompetitionsApi({ slug: competitionSlug }).then((res) => {
      setIsHitApi(false);
      if (res.data?.competition?.maxMembers == 1) {
        setIsIndividu(true);
      }
      setCompetition(res.data?.competition);
    });
    // .catch((err) => //console.log(err));
  };
  const handleChoose = () => {
    const token = Cookies.get("token");
    if (!token) return router.push("/login");
    if (token) {
      setIsChoose(true);
    }
  };

  const onCreateTeam = (e) => {
    e.preventDefault();
    setIsHitJoin(true);
    JoinTeamApi({ name, competitionSlug }).then((res) => {
      //console.log(res);
      if (res.status == 1) {
        setMessage(res.message);
        setIsSuccess(true);
        setName("");
        setIsHitJoin(false);
        router.push(`/team?i=${res.data.team.id}&sl=${competitionSlug}`);
        return;
      } else {
        setMessage(res.message);
        setIsWrong(true);
        setIsHitJoin(false);
        setName("");
      }
    });
    //console.log({ competitionSlug, name });
  };
  const handleJoinTeam = (e) => {
    e.preventDefault();
    setIsHitJoinTeam(true);
    JoinApi({ code }).then((res) => {
      //console.log(res);
      if (res.status == 1) {
        setMessage(res.message);
        setIsSuccess(true);
        setCode("");
        setIsHitJoinTeam(false);
        router.push(`/dashboard`);
        return;
      } else {
        setMessage(res.message);
        setIsWrong(true);
        setIsHitJoinTeam(false);
        setCode("");
      }
    });
    // .catch((err) => //console.log(err));
  };
  const handleJoinIndividu = () => {
    setIsHitIndividu(true);
    JoinIndividuApi({ competitionSlug }).then((res) => {
      //console.log(res);
      setMessage(res.message);
      if (res.status == 1) {
        setIsSuccess(true);
        router.push("/dashboard");
        setIsChoose(false);
      } else {
        setIsWrong(true);
      }
    });
  };

  return (
    <>
      <Head>
        <title>Detail</title>
        <meta name="title" content="IITC" />
      </Head>
      <main className="overflow-hidden">
        <Alert onClose={() => setIsSuccess(false)} isOpen={isSuccess}>
          <AiOutlineCheckCircle className="text-green-400 text-xl " />
          <p>{message}</p>
        </Alert>
        <Alert onClose={() => setIsWrong(false)} isOpen={isWrong}>
          <FiXCircle className="text-red text-xl " />
          <p>{message}</p>
        </Alert>
        {/* choose */}
        <PopUp isModal={isChoose} onClose={() => setIsChoose(false)}>
          <Text color={"text-black"} size={"smalltitle"} weight={"semi"}>
            {isIndividu ? "Mendaftar Lomba" : "Buat atau bergabung dengan tim"}
          </Text>
          <div className="bg-slate-200 rounded-md p-6 my-6">
            {isIndividu ? (
              <FiLogIn className="text-5xl text-slate-800" />
            ) : (
              <BsFillPeopleFill className="text-5xl text-slate-800" />
            )}
          </div>
          {isIndividu ? (
            <Button
              isSquare
              additionals={"w-full"}
              onClick={() => {
                handleJoinIndividu();
              }}
              color={"oren"}
            >
              Bergabung
            </Button>
          ) : (
            <div className="flex space-x-4 w-full">
              <Button
                isSquare
                additionals={"w-full"}
                onClick={() => {
                  setIsChoose(false);
                  setIsJoin(true);
                }}
                color={"dark"}
              >
                Bergabung
              </Button>
              <Button
                onClick={() => {
                  setIsCreate(true);
                  setIsChoose(false);
                }}
                isSquare
                additionals={"w-full"}
                color={"oren"}
              >
                Buat
              </Button>
            </div>
          )}
        </PopUp>
        {/* join */}
        <PopUp isModal={isJoin} onClose={() => setIsJoin(false)}>
          <div className="absolute top-4 left-4 flex items-center space-x-2">
            <BsFillPeopleFill className="text-4xl p-2 rounded-full bg-slate-200 text-slate-800" />
            <Text>Bergabung dengan tim</Text>
          </div>
          <form onSubmit={handleJoinTeam}>
            <div className="w-full my-3">
              <Text>Tim Kode</Text>
              <Input
                value={code}
                placeholder="Kode"
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
            <div className="flex space-x-4 w-full">
              <Button isSquare additionals={"w-full"} color={"oren"}>
                {isHitJoinTeam ? (
                  <AiOutlineLoading3Quarters className="text-xl mx-auto animate-spin" />
                ) : (
                  "Gabung"
                )}
              </Button>
            </div>
          </form>
        </PopUp>
        {/* create */}
        <PopUp isModal={isCreate} onClose={() => setIsCreate(false)}>
          <div className="absolute top-4 left-4 flex items-center space-x-2">
            <BsFillPeopleFill className="text-4xl p-2 rounded-full bg-slate-200 text-slate-800" />
            <Text>Buat tim baru</Text>
          </div>
          <form onSubmit={onCreateTeam}>
            <div className="w-full my-3">
              <Text>Nama Tim</Text>
              <Input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex space-x-4 w-full">
              <Button isSquare additionals={"w-full"} color={"oren"}>
                {isHitJoin ? (
                  <AiOutlineLoading3Quarters className="text-xl mx-auto animate-spin" />
                ) : (
                  "Buat"
                )}
              </Button>
            </div>
          </form>
        </PopUp>

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
                  <h1 className="text-4xl font-bold uppercase text-slate-900 mb-3">
                    {competition?.name}{" "}
                  </h1>

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
                  <div className="flex flex-col lg:flex-row justify-start lg:justify-between lg:items-center mt-5  w-full">
                    <div className="flex lg:flex-col flex-row gap-2">
                      <Text size={"description"} weight={"semi"}>
                        HTM :{""}
                      </Text>
                      <p className="text-slate-900 font-bold lg:text-3xl ">
                        Rp.{" "}
                        {competition?.competitionPrice.toLocaleString("id-ID")}
                      </p>
                    </div>
                    <Button
                      onClick={handleChoose}
                      size={"lg"}
                      additionals={"lg:w-auto w-full text-center mt-4"}
                    >
                      Ikuti Lomha
                    </Button>
                  </div>
                  <div className="p-1  w-full border-b mt-5 " />
                  <Text
                    size={"description"}
                    additionals={"mt-8"}
                    weight={"semi"}
                  >
                    Tech Stack
                  </Text>
                  <ul className="flex gap-3 flex-wrap mt-2 mb-8">
                    {competition?.techStacks.map((stack, index) => {
                      //console.log(stack);
                      return <StackCard key={index}>{stack}</StackCard>;
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
                    <a
                      href={competition?.guideBookLink}
                      download
                      className="bg-oren/10 text-oren px-4 py-2 rounded-full"
                    >
                      Download
                    </a>
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

const PopUp = ({ onClose, isModal, children }) => {
  return (
    <div
      className={`${
        isModal ? "visible opacity-100" : "invisible opacity-0"
      } transition-all duration-300 bg-dark/10 backdrop-blur-md w-full fixed h-screen z-20 flex justify-center items-center`}
    >
      <div className="w-full max-w-[450px] p-12 bg-white rounded-md flex flex-col justify-start items-center relative">
        <button
          onClick={onClose}
          className="bg-red/10 text-red rounded-full p-1 absolute top-3 right-3"
        >
          <FiX />
        </button>
        {children}
      </div>
    </div>
  );
};
