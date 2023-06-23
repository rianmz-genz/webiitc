import { Button, Container } from "@/components";
import Input from "@/components/atoms/Input";
import Text from "@/components/atoms/Text";
import InputTitle from "@/components/molecules/InputTitle";
import AuthPage from "@/components/pagetemplate/AuthPage";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";

const Signup = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <AuthPage title={"Daftar IITC"}>
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
          placeholder="Enter your fullname"
          onChange={(e) => setFullname(e.target.value)}
        />

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
        <InputTitle
          required={true}
          type="password"
          title={"Confirm Password"}
          value={confirmPassword}
          placeholder="Re-enter your password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <Button color={"gradient2"}>Submit</Button>
    </AuthPage>
  );
};

export default Signup;
