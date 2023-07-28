import Button from "@/components/atoms/Button";
import SkemaCard from "@/components/atoms/SkemaCard";
import Text from "@/components/atoms/Text";
import Container from "@/components/molecules/Container";
import ParagraphSection from "@/components/molecules/ParagraphSection";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SkemaSection = () => {
  return (
    <div className="">
      <Container>
        <section id="skema" className="py-12 flex justify-center">
          <div className="w-11/12 mx-auto">
            <div className="text-xs md:text-md w-full ">
              <ParagraphSection
                flashValue={"Show your skill to the world"}
                title={"Begini alur skema dasar dari event ini"}
                description={
                  "Baca baik baik detailnya ya, agar tidak salah langkah"
                }
              />
            </div>
            <ol className="bg-silver/40 p-2 rounded-xl w-full mt-12 grid gap-3 md:gap-0 md:grid-cols-4">
              <SkemaCard
                buttonHref={
                  "https://scribehow.com/shared/Step-by-step_guide_Signing_up_and_joining_a_competition_on_IITC__rrJ9DfysTWe-A0Se9oppIA"
                }
                buttonValue={"Detailnya"}
                imgUrl={"/images/chaticon.png"}
                title={"Pendaftaran"}
                description={
                  "Pendaftaran telah ditentukan dan dijadwalkan sesuai perencanaan."
                }
              />
              <SkemaCard
                buttonHref={
                  "https://scribehow.com/shared/Step-by-step_guide_Signing_up_and_joining_a_competition_on_IITC__rrJ9DfysTWe-A0Se9oppIA"
                }
                buttonValue={"Detailnya"}
                imgUrl={"/images/guardicon.png"}
                title={"Verifikasi Data"}
                description={"Data diri yang kamu masukan harus valid ya!."}
              />
              <SkemaCard
                buttonHref={
                  "https://scribehow.com/shared/Step-by-step_guide_Signing_up_and_joining_a_competition_on_IITC__rrJ9DfysTWe-A0Se9oppIA"
                }
                buttonValue={"Detailnya"}
                imgUrl={"/images/calendaricon.png"}
                title={"Pengerjaan & Upload"}
                description={
                  "Waktunya pengerjaan lomba sesuai bidang yang kalian ikuti."
                }
              />
              <SkemaCard
                buttonHref={
                  "https://scribehow.com/shared/Step-by-step_guide_Signing_up_and_joining_a_competition_on_IITC__rrJ9DfysTWe-A0Se9oppIA"
                }
                buttonValue={"Detailnya"}
                imgUrl={"/images/checklisticon.png"}
                title={"Pengumuman"}
                description={"Yang paling ditunggu nih, pengumuman pemenang."}
              />
            </ol>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default SkemaSection;
