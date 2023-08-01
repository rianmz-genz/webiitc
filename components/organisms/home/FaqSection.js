import FaqCard from "@/components/atoms/FaqCard";
import Text from "@/components/atoms/Text";
import Container from "@/components/molecules/Container";
import Link from "next/link";
import React from "react";
import { FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";

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
    {
      q: "Adakah kontak yang dapat dihubungi?",
      a: (
        <>
          Kamu bisa menghubungi kami secara online melalui instagram kami 
           di{" "}
          <a href="https://www.instagram.com/iitc_intermedia/" className="font-semibold text-blue-500">iitc_intermedia</a>
        </>
      ),
    },
  ];
  
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  
  return (
    <div className="min-h-screen w-full">
      <Container>
        <section
          id="faq"
          className="w-full flex flex-col items-center justify-center py-12"
        >
          <Text size={"title"} additionals={"text-xl md:text-3xl lg:text-4xl"}>
            Frequently Asked Questions?
          </Text>
          <motion.ul
            className="w-11/12 text-xs md:text-md md:w-8/12 flex flex-col space-y-4 my-10"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ staggerChildren: 0.2 }}
          >
            {faqs.map(({ q, a }, index) => (
              <motion.div key={index} variants={variants}>
                <FaqCard question={q} answer={a} />
              </motion.div>
            ))}
          </motion.ul>
        </section>
      </Container>
    </div>
  );
};

export default FaqSection;
