import Button from "@/components/atoms/Button";
import CompetitonCard from "@/components/atoms/CompetitonCard";
import Text from "@/components/atoms/Text";
import Container from "@/components/molecules/Container";
import ParagraphSection from "@/components/molecules/ParagraphSection";
import React from "react";
const CompetitionSection = ({
  setIsCompetitionDetails,
  setCompetitionName,
  competitions,
}) => {
  return (
    <div className="w-full ">
      <Container>
        <section id="lomba" className="py-12 flex justify-center">
          <div className="w-11/12 mx-auto">
            <ParagraphSection
              flashValue={"What is relevant to you?"}
              title={"Pilih lomba yang relevant dengan kamu"}
              description={"pilih lomba yang sesuai dengan kemampuan kamu ya.."}
            />
            <ol className="rounded-xl w-full mt-12 grid md:grid-cols-3 lg:grid-cols-5 gap-3">
              {competitions?.map((competition, index) => (
                <CompetitonCard
                  key={index}
                  setCompetitionName={setCompetitionName}
                  setIsCompetitionDetail={setIsCompetitionDetails}
                  category={competition?.categories}
                  imgSrc={competition?.cover}
                  maxMembers={competition?.maxMembers}
                  title={competition?.name}
                  slug={competition?.slug}
                />
              ))}
            </ol>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default CompetitionSection;
