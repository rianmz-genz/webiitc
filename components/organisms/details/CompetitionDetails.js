import Head from 'next/head'
import React from 'react'
import Footer from '../home/Footer'
import { IoMdArrowBack } from 'react-icons/io'
import Button from '@/components/atoms/Button'
import Link from 'next/link'
const CompetitionDetails = ({setIsCompetitionDetail, competitionName}) => {
    return (
    <>
        <Head>
          <title>Detail</title>
          <meta name="title" content='IITC' />
        </Head>
        <main>
            <div className='w-11/12 mx-auto py-6'>
                <Button onClick={()=> setIsCompetitionDetail(false)} additionals={'flex items-center'} color={'silver'} size={'base'}>
                        <IoMdArrowBack className='text-lg cursor-pointer mr-2' /> 
                        Back
                </Button>
                <ul className='flex space-x-3 mt-8'>
                    <li>Competitions</li>
                    <li>/</li>
                    <li>Detail</li>
                    <li>/</li>
                    <li>{competitionName}</li> 
                </ul>
            </div>
            <Footer />
        </main>
    </>
  )
}

export default CompetitionDetails
