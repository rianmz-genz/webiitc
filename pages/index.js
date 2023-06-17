import { AboutSection, CompetitionDetails, CompetitionSection, FaqSection, Footer, HeroSection, SkemaSection, TimelineSection } from '@/components'
import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [isCompetitionDetail, setIsCompetitionDetail] = useState(false)
  const [competitionName, setCompetitionName] = useState("")
  return isCompetitionDetail
    ? <CompetitionDetails
        competitionName={competitionName}
        setIsCompetitionDetail={setIsCompetitionDetail}
      />
    : <main>
        <Head>
          <title>IITC</title>
          <meta name="title" content='IITC' />
        </Head>
        <HeroSection />
        <AboutSection />
        <SkemaSection />
        <CompetitionSection
          setCompetitionName={setCompetitionName}
          setIsCompetitionDetails={setIsCompetitionDetail}
        />
        <TimelineSection />
        <FaqSection />
        <Footer/>
      </main>
  
}
