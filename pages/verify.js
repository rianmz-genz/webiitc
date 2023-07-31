import VerifyEmailApi from "@/api/auth/Verify";
import { Button } from "@/components";
import Alert from "@/components/atoms/Alert";
import Logo from "@/components/atoms/Logo";
import Text from "@/components/atoms/Text";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiFillWarning, AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Verify() {
  const router = useRouter();
  const { i } = router.query;
  const { h } = router.query;
  const { s } = router.query;
  const { e } = router.query;
  const [isHitApi, setIsHitApi] = useState(false);
  const [Message, setMessage] = useState(false);
  const [isSucces, setIsSucces] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  function verifyEmail() {
    setIsHitApi(true);
    VerifyEmailApi({ id: i, hash: h, signature: s, expires: e }).then((res) => {
      // console.log(res);
      setMessage(res.message);
      if (res.status == 1) {
        setIsHitApi(false);
        setIsSucces(true);
        Cookies.remove("token");
        Cookies.remove("email");
        setTimeout(() => {
          router.push("/login");
        }, 3000);
      } else {
        setIsHitApi(false);
        setIsWrong(true);
      }
    });
  }
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Alert onClose={() => setIsSucces(false)} isOpen={isSucces}>
        <AiOutlineLoading3Quarters className="text-green-400 text-xl animate-spin" />
        <p>{"Email berhasil di verifikasi, harap login ulang."}</p>
      </Alert>
      <Alert onClose={() => setIsWrong(false)} isOpen={isWrong}>
        <AiFillWarning className="text-red text-xl" />
        <p>{Message}</p>
      </Alert>
      <div className="w-11/12 max-w-[400px]">
        <Logo />
        <Text size={"title"} additionals={"mt-4 mb-2 text-black"}>
          Verifikasi Email
        </Text>
        <Text>
          Verifikasi email Kamu disini agar bisa mendaftar di IIT Competition
        </Text>
        <Button onClick={() => verifyEmail()} isSquare additionals={"mt-4"}>
          {isHitApi ? (
            <AiOutlineLoading3Quarters className="text-white animate-spin" />
          ) : (
            "Verifikasi"
          )}
        </Button>
      </div>
    </div>
  );
}
