import Container from '@/components/molecules/Container';
import ParagraphSection from '@/components/molecules/ParagraphSection';
import React from 'react';

const TimelineSection = () => {
  return (
    <div className="w-full  py-12 flex items-center   bg-darkblue">
      <Container className="w-full py-12">
        <section className="w-full  flex flex-col gap-20 items-center bg-darkblue">
          <ParagraphSection
            isWhite={true}
            flashValue={"Don't forget your misson"}
            title={'Timeline kami pada lomba ini'}
            description={'jangan sampai terlewat'}
          />
          <div className="my-12 w-11/12 bg-oren h-1 ">
            <div className="w-full relative">
              <span className="absolute -bottom-3 left-1/4 w-5 h-5 bg-darkblue border-4 rounded-full border-oren"></span>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default TimelineSection;
