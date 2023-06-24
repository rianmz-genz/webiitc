import RegisterApi from "@/api/auth/RegisterApi";
import { Button, Container } from "@/components";
import Alert from "@/components/atoms/Alert";
import Input from "@/components/atoms/Input";
import InputPhone from "@/components/atoms/InputPhone";
import Text from "@/components/atoms/Text";
import InputTitle from "@/components/molecules/InputTitle";
import AuthPage from "@/components/pagetemplate/AuthPage";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiFillWarning, AiOutlineLoading3Quarters } from "react-icons/ai";
export async function getServerSideProps(context) {
  const token = context.req.cookies.token;
  if (token) {
    return {
      redirect: {
        destination: "/dashboard/user",
        permanent: false,
      },
    };
  }

  // Lanjutkan eksekusi jika token tersedia
  // ...

  return {
    props: {},
  };
}
const Signup = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [isNaN, setIsNaN] = useState(false);
  const [isHitApi, setIsHitApi] = useState(false);
  const [isNotMatch, setIsNotMatch] = useState(false);
  const [isSucces, setIsSucces] = useState(false);
  const [Message, setMessage] = useState("");
  const [isUsed, setIsUsed] = useState(false);
  const router = useRouter();
  const validateNumber = (state) => {
    const regex = /^[0-9]+$/;
    return regex.test(state) ? true : false;
  };
  const validateMatchPassword = () => {
    return password == confirmPassword;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateNumber(phone)) {
      setIsNaN(true);
      setMessage("Nomor telepon harus berupa angka!");
      return;
    }
    if (!validateMatchPassword()) {
      setIsNotMatch(true);
      setMessage("Password dan konfirmasi password tidak cocok!");
      return;
    }
    setIsHitApi(true);
    RegisterApi({
      fullName: fullname,
      email,
      password,
      phone: parseInt(phone),
    }).then((res) => {
      if (res.status == 1) {
        setIsSucces(true);
        setMessage(res.message);
        setIsHitApi(false);
        return router.push("/login");
      } else {
        setIsUsed(true);
        setMessage("Email telah digunakan");
        setIsHitApi(false);
        setEmail("");
      }
    });
  };
  return (
    <div className="overflow-hidden">
      <Alert onClose={() => setIsSucces(false)} isOpen={isSucces}>
        <AiOutlineLoading3Quarters className="text-green-400 text-xl animate-spin" />
        <p>{Message}</p>
      </Alert>
      <Alert onClose={() => setIsUsed(false)} isOpen={isUsed}>
        <AiFillWarning className="text-red text-xl" />
        <p>{Message}</p>
      </Alert>
      <Alert onClose={() => setIsNaN(false)} isOpen={isNaN}>
        <AiFillWarning className="text-red text-xl" />
        <p className="text-sm">{Message}</p>
      </Alert>
      <Alert onClose={() => setIsNotMatch(false)} isOpen={isNotMatch}>
        <AiFillWarning className="text-red text-xl" />
        <p className="text-sm">{Message}</p>
      </Alert>
      <AuthPage onSubmit={handleSubmit} title={"Daftar IITC"}>
        <Text size={"mdtitle"} weight={"bold"}>
          Sign Up
        </Text>
        <Text additionals={"mb-4 mt-2"}>
          Have an account?
          <Link href={"/login"} className="text-oren hover:underline ml-1">
            Sign In
          </Link>
        </Text>
        <div className="space-y-3 mb-4">
          <InputTitle
            type="text"
            title={"Full Name"}
            value={fullname}
            required={true}
            placeholder="Ucup"
            onChange={(e) => setFullname(e.target.value)}
          />

          <InputTitle
            type="email"
            title={"Email"}
            value={email}
            required={true}
            placeholder="ucup@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Text>Phone</Text>
          <InputPhone
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="88226989100"
            required={true}
            maxLength={12}
          />
          <InputTitle
            required={true}
            title={"Password"}
            type="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputTitle
            required={true}
            type="password"
            title={"Confirm Password"}
            value={confirmPassword}
            placeholder="Re-enter your password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <Button color={"gradient2"}>
          {isHitApi ? (
            <AiOutlineLoading3Quarters className="text-white text-xl animate-spin" />
          ) : (
            "Submit"
          )}
        </Button>
      </AuthPage>
    </div>
  );
};

export default Signup;
