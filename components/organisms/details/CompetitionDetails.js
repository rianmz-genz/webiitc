import Head from 'next/head'
import React from 'react'

const CompetitionDetails = ({setIsCompetitionDetail, competitionName}) => {
    return (
    <>
    <Head>
      <title>Detail</title>
      <meta name="title" content='IITC' />
    </Head>
    <main>
        {competitionName}
    </main>
    </>
  )
}

export default CompetitionDetails
