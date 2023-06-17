import Button from '@/components/atoms/Button';
import CompetitonCard from '@/components/atoms/CompetitonCard';
import Text from '@/components/atoms/Text';
import Container from '@/components/molecules/Container';
import ParagraphSection from '@/components/molecules/ParagraphSection';
import Image from 'next/image';

import React from 'react';
import { HiOutlineUsers } from 'react-icons/hi';
const CompetitionSection = ({
  setIsCompetitionDetails,
  setCompetitionName,
}) => {
  return (
    <div className="w-full ">
      <Container>
        <section id="lomba" className="py-12 flex justify-center">
          <div className="w-11/12 mx-auto">
            <ParagraphSection
              flashValue={'What is relevant to you?'}
              title={'Pilih lomba yang relevant dengan kamu'}
              description={'pilih lomba yang sesuai dengan kemampuan kamu ya..'}
            />
            <ol className="rounded-xl w-full mt-12 grid grid-cols-5 gap-3">
              <CompetitonCard
                setCompetitionName={setCompetitionName}
                setIsCompetitionDetail={setIsCompetitionDetails}
                category={'Pelajar & Mahasiswa'}
                imgSrc={'/images/trex.png'}
                maxMembers={5}
                title={'Website Design'}
              />
              <CompetitonCard
                setCompetitionName={setCompetitionName}
                setIsCompetitionDetail={setIsCompetitionDetails}
                category={'Pelajar & Mahasiswa'}
                imgSrc={'/images/gajah.png'}
                maxMembers={5}
                title={'Business Plan'}
              />
              <CompetitonCard
                setCompetitionName={setCompetitionName}
                setIsCompetitionDetail={setIsCompetitionDetails}
                category={'Pelajar & Mahasiswa'}
                imgSrc={'/images/koala.png'}
                maxMembers={5}
                title={'E-Sport'}
              />
              <CompetitonCard
                setCompetitionName={setCompetitionName}
                setIsCompetitionDetail={setIsCompetitionDetails}
                category={'Pelajar & Mahasiswa'}
                imgSrc={'/images/trex.png'}
                maxMembers={5}
                title={'Cover Music'}
              />
              <CompetitonCard
                setCompetitionName={setCompetitionName}
                setIsCompetitionDetail={setIsCompetitionDetails}
                category={'Pelajar & Mahasiswa'}
                imgSrc={'/images/trex.png'}
                maxMembers={5}
                title={'Cover Music'}
              />
            </ol>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default CompetitionSection;
