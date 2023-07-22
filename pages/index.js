import {
  AboutSection,
  CompetitionDetails,
  CompetitionSection,
  Container,
  FaqSection,
  Footer,
  HeroSection,
  SkemaSection,
  TimelineSection,
} from "@/components";
import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import GetCompetitionsApi from "@/api/homepage/GetCompetitionsApi";
import Timeline from "@/components/organisms/home/Timeline";

export async function getServerSideProps() {
  try {
    const res = await GetCompetitionsApi();
    if (res.status == 1) {
      const competitions = res.data?.competitions;
      return {
        props: {
          competitions,
        },
      };
    } else if (res.status == 0) {
      return {
        props: {
          competitions: [],
        },
      };
    }
  } catch (error) {
    console.error(error);
    return {
      props: {
        competitions: [],
      },
    };
  }
}

export default function Home({ competitions }) {
  const [isCompetitionDetail, setIsCompetitionDetail] = useState(false);
  const [competitionName, setCompetitionName] = useState("");
  return isCompetitionDetail ? (
    <CompetitionDetails
      competitionSlug={competitionName}
      setIsCompetitionDetail={setIsCompetitionDetail}
    />
  ) : (
    <main>
      <Head>
        <title>IITC</title>
        <meta name="title" content="IITC" />
      </Head>
      <HeroSection />
      <AboutSection />
      <SkemaSection />
      <CompetitionSection
        competitions={competitions}
        setCompetitionName={setCompetitionName}
        setIsCompetitionDetails={setIsCompetitionDetail}
      />
      <Timeline />
      <FaqSection />
      <Footer />
    </main>
  );
}
