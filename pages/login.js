import { Button } from "@/components";
import Text from "@/components/atoms/Text";
import InputTitle from "@/components/molecules/InputTitle";
import AuthPage from "@/components/pagetemplate/AuthPage";
import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <AuthPage title={"Daftar IITC"}>
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
      <Button color={"gradient2"}>Submit</Button>
    </AuthPage>
  );
};

export default Login;
