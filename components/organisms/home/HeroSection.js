import React from "react";
import Text from "@/components/atoms/Text";
import Button from "@/components/atoms/Button";
import Navbar from "./Navbar";
import Container from "@/components/molecules/Container";

const HeroSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden h-screen shadow">
      <div className="absolute inset-0 ">
        <div
          className=" w-full bg-cover  bg-no-repeat h-screen max-h-screen bg-center"
          style={{
            backgroundImage: "url('/images/Website/Artboard 1@4x.png')",
          }}
        />
      </div>
      <Container className="flex h-[90vh]  items-center justify-center">
        <Navbar />
        <Text
          size={"bigtitle"}
          weight={"bold"}
          color={"black"}
          additionals={
            "leading-relaxed p-3 drop-shadow-xl text-4xl text-center mt-20  md:text-5xl lg:text-4xl md:w-11/12 lg:w-8/12"
          }
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-orange-500 to bg-yellow-400">
            {" "}
            Buktikan{" "}
          </span>{" "}
          bahwa kamu memiliki potensi emas dan{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-orange-500 to bg-yellow-400">
            {" "}
            menangkan{" "}
          </span>{" "}
          event ini
        </Text>
      </Container>
    </section>
  );
};

export default HeroSection;
