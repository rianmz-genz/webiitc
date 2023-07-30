import FaqCard from "@/components/atoms/FaqCard";
import Text from "@/components/atoms/Text";
import Container from "@/components/molecules/Container";
import Link from "next/link";
import React from "react";
import { FiPlus } from "react-icons/fi";

const FaqSection = () => {
  const faqs = [
    {
      q: "Bagaimana cara pendaftaran lomba IITC?",
      a: (
        <>
          Kamu bisa mendaftar secara online dengan membuat akun pada button
          DAFTAR dipojok kanan atas. lebih lengkapnya ada di{" "}
          <Link
            href={"/guidebook-pendaftaran"}
            className="text-blue-500 hover:underline"
          >
            guidebook pendaftaran
          </Link>
        </>
      ),
    },
    {
      q: "Bagaimana cara membayar biaya pendaftarannya?",
      a: "Pembayaran dapat dilakukan melalui transfer ke rekening bank atau e-wallet yang akan diinformasikan setelah kamu mendaftar.",
    },
  ];
  return (
    <div className="w-full">
      <Container>
        <section
          id="faq"
          className="w-full flex flex-col items-center justify-center py-12"
        >
          <Text size={"title"} additionals={"text-xl md:text-3xl lg:text-4xl"}>
            Frequently Asked Questions?
          </Text>
          <ul className="w-11/12 text-xs md:text-md md:w-8/12 flex flex-col space-y-4 my-10">

            {faqs.map(({ q, a }, index) => (
              <FaqCard key={index} question={q} answer={a} />
            ))}
          </ul>
        </section>
      </Container>
    </div>
  );
};

export default FaqSection;
