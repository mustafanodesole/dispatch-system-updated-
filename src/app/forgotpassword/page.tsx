"use client";
import {
  Input,
  Card,
  CardHeader,
  CardBody,
  Button,
  Spinner,
} from "@nextui-org/react";
import TextField from "@/components/FormInputs/TextField";
import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import Link from "next/link";
import PublicNavbar from "@/components/PublicNavbar";

const page = () => {
  const [sendEmail, setSendEmail] = useState(false);
  const [userMail, setUserMail] = useState("");

  const handleResetPassword = async () => {
    try {
      setSendEmail(true);
      const res = await axios.post("/api/auth/resetpassword", {
        email: userMail,
      });
      console.log("Email has been sent  : ", res);

      toast("Email Sent. Please check your email. ");
    } catch (error) {
      console.log("Error while sending email");
      setSendEmail(false);
      toast.error("Email does not Sent");
    } finally {
      setSendEmail(false);
    }
  };
  return (
    <>
    <PublicNavbar />
    <div className="bg-[#F9FAFD] h-screen overflow-hidden">
      <Card className="max-w-[440px] min-w-[340px] m-auto absolute top-1/2 left-1/2 py-4 -translate-x-2/4 -translate-y-2/4">
        {sendEmail && <Spinner />}
        <CardHeader className="justify-center font-bold  p-0 pt-3 text-xl">
          Forgot Password
        </CardHeader>
        <CardBody className="">
          <div className="flex flex-col gap-[20px]">
            <TextField
              type="email"
              placeholder="Enter Email Address"
              value={userMail}
              onChange={(e) => setUserMail(e.target.value)}
              required
            />
            <Button
              radius="sm"
              fullWidth
              className=" text-white text-[16px]"
              color="primary"
              onClick={handleResetPassword}
              // isLoading={isLoginLoading}
              >
              Send Email
            </Button>
            <Toaster position="top-center" reverseOrder={false} />
            <p className="text-center">GO Back to <Link href={'/login'} className="text-blue-500 underline ">Login</Link></p>
          </div>
        </CardBody>
      </Card>
    </div>
    </>
  );
};

export default page;
