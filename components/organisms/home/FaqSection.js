import FaqCard from "@/components/atoms/FaqCard";
import Text from "@/components/atoms/Text";
import Container from "@/components/molecules/Container";
import Link from "next/link";
import React from "react";
import { FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";

const FaqSection = () => {
  const faqs = [
    {
      q: "Bagaimana cara pendaftaran lomba IITC?",
      a: (
        <div>
          Kamu bisa mendaftar secara online dengan membuat akun pada button
          DAFTAR dipojok kanan atas. lebih lengkapnya ada di{" "}
          <Link
            href={"/guidebook-pendaftaran"}
            className="text-blue-500 hover:underline"
          >
            guidebook pendaftaran
          </Link>
        </div>
      ),
    },
    {
      q: "Bagaimana cara membayar biaya pendaftarannya?",
      a: "Pembayaran dapat dilakukan melalui transfer ke rekening bank atau e-wallet yang akan diinformasikan setelah kamu mendaftar.",
    },
    {
      q: "Adakah kontak yang dapat dihubungi?",
      a: (
        <div className="flex flex-col">
          Kamu bisa menghubungi kami secara online melalui instagram atau
          whatsapp kami di{" "}
          <div className="flex gap-3 flex-wrap mt-2">
            <a
              href="https://www.instagram.com/iitc_intermedia/"
              className="font-semibold flex items-center gap-2 text-blue-500 cursor-default lg:cursor-pointer"
            >
              <AiFillInstagram />
              iitc_intermedia
            </a>

            <a
              href="https://wa.me/628985485275"
              className="font-semibold flex items-center gap-2 text-blue-500 cursor-default lg:cursor-pointer"
            >
              <RiWhatsappFill />
              +62-898-548-5275
            </a>
          </div>
        </div>
      ),
    },
    {
      q: "Penamaan file konfirmasi pembayaran gimana?",
      a: "Penamaan file tidak ada acuan, yang berarti bebas dengan nama apa saja.",
    },
    {
      q: "Link grup whatsapp nya dimana ya?",
      a: (
        <div className="flex flex-wrap gap-3">
          <span>
            Bagi yang sudah membayar dan sudah di acc oleh admin maka pada
            halaman
          </span>
          <a
            href="https://iitc.intermediaamikom.org/dashboard"
            className="font-semibold flex items-center gap-2 text-blue-500 cursor-default lg:cursor-pointer"
          >
            dashboard
          </a>
          {""} <span>kan muncul alert link grup whatsappnya.</span>
        </div>
      ),
    },
    {
      q: "Apakah perlu mengirimkan bukti pembayaran ke CP ?",
      a: "Tidak perlu, cukup upload bukti pembayaran pada website saja.",
    },
    {
      q: "Apakah semua peserta mendapatkan sertifikat?",
      a: "Ya, semua peserta yang telah mengikuti lomba akan mendapatkan sertifikat.",
    },
    {
      q: "Apakah bisa mendaftar lebih dari satu lomba?",
      a: "Tentu saja bisa.",
    },
    {
      q: "Apakah wajib melengkapi data profile pada dashboard?",
      a: (
        <div className="flex flex-wrap gap-3">
          <span>Ya, kalian wajib melengkapi</span>
          <a
            href="https://iitc.intermediaamikom.org/dashboard/profile"
            className="font-semibold flex items-center gap-2 text-blue-500 cursor-default lg:cursor-pointer"
          >
            profile
          </a>
          {""} <span>kalian pada dashboard di menu profile.</span>
        </div>
      ),
    },
    {
      q: "Bagaimana dengan foto identitas?",
      a: "Foto identitas gunakan kartu pelajar bagi siswa dan KTM atau kartu tanda mahasiswa bagi mahasiswa.",
    },
    {
      q: "Format pengumpulan Twibbon?",
      a: "Gunakan screenshot Twibbon yang sudah kalian upload di sosial media kalian.",
    },
  ];

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className=" w-full">
      <Container>
        <section
          id="faq"
          className="w-full flex flex-col items-center justify-center py-12"
        >
          <Text size={"title"} additionals={"text-xl md:text-3xl lg:text-4xl"}>
            Frequently Asked Questions
          </Text>
          <motion.div
            className="w-11/12 text-xs md:text-md md:w-8/12 flex flex-col space-y-4 my-10"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ staggerChildren: 0.2 }}
          >
            {faqs.map(({ q, a }, index) => (
              <motion.div className="" key={index} variants={variants}>
                <FaqCard question={q} answer={a} />
              </motion.div>
            ))}
          </motion.div>
        </section>
      </Container>
    </div>
  );
};

export default FaqSection;
