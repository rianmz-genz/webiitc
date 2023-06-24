import LoginApi from "@/api/auth/LoginApi";
import { Button } from "@/components";
import Alert from "@/components/atoms/Alert";
import Text from "@/components/atoms/Text";
import InputTitle from "@/components/molecules/InputTitle";
import AuthPage from "@/components/pagetemplate/AuthPage";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  AiFillCheckCircle,
  AiFillWarning,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";
import Cookies from "js-cookie";
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
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isHitApi, setIsHitApi] = useState(false);
  const [isSucces, setIsSucces] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [Message, setMessage] = useState("");
  const router = useRouter();
  const handleLogin = (e) => {
    e.preventDefault();
    setIsHitApi(true);
    LoginApi({ email, password }).then((res) => {
      setIsHitApi(false);
      if (res.status == 1) {
        setIsSucces(true);
        setMessage(res.message);
        Cookies.set("token", res.data.access_token, { expires: 2 }); // Cookie berakhir dalam 7 hari
        router.push("/dashboard/user");
      } else if (res.status == 0) {
        setIsWrong(true);
        setMessage(res.message);
      }
    });
  };
  return (
    <div className="overflow-hidden">
      <Alert onClose={() => setIsSucces(false)} isOpen={isSucces}>
        <AiOutlineLoading3Quarters className="text-green-400 text-xl animate-spin" />
        <p>{Message}</p>
      </Alert>
      <Alert onClose={() => setIsWrong(false)} isOpen={isWrong}>
        <AiFillWarning className="text-red text-xl" />
        <p>{Message}</p>
      </Alert>
      <AuthPage onSubmit={handleLogin} title={"Daftar IITC"}>
        <Text size={"mdtitle"} weight={"bold"}>
          Sign In
        </Text>
        <Text additionals={"mb-4 mt-2"}>
          Don&apos;t have an account?
          <Link href={"/signup"} className="text-oren hover:underline ml-1">
            Sign Up
          </Link>
        </Text>
        <div className="space-y-3 mb-4">
          <InputTitle
            type="email"
            title={"Email"}
            value={email}
            required={true}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputTitle
            required={true}
            title={"Password"}
            type="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
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

export default Login;
