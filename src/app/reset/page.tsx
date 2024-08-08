"use client";
import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, Button, Spinner } from "@nextui-org/react";
import TextField from "@/components/FormInputs/TextField";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

const page = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userID, setUserID] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleUpdatePass = async () => {
    try {
      setLoading(true);
      const res = await axios.put("/api/auth/resetpassword", {
        password: password,
        userID: userID,
      });
      console.log("Updated Password", res.data);
      toast.success("Password Updated Successfully");
      router.push("/login")
    } catch (error) {
      console.log("Error while updating password");
      toast.error("Error while updating password");
      // setLoading(false)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    console.log("User id from the url ", urlToken);
    setUserID(urlToken || "");
    if (userID.length > 0) {
    }
  }, [userID]);
  return (
    <div className="bg-[#F9FAFD] h-screen overflow-hidden">
     
      <Card className="max-w-[440px] min-w-[340px] m-auto absolute top-1/2 left-1/2 py-4 -translate-x-2/4 -translate-y-2/4">
      {loading && <Spinner label="Loading..." color="warning" />}
        <CardHeader className="justify-center font-bold  p-0 pt-3 text-xl">
          Reset Password
        </CardHeader>
        <CardBody className="">
          <div className="flex flex-col gap-[20px]">
            <TextField
              type="password"
              placeholder="Enter Your New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <TextField
              type="password"
              placeholder="Confirm Your New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {password != confirmPassword && (
              <p className="text-red-600">Please Match Your Password</p>
            )}

            <Button
              radius="sm"
              fullWidth
              className=" text-white text-[16px]"
              color="primary"
              onClick={handleUpdatePass}
              // isLoading={isLoginLoading}
            >
              Update
            </Button>
            <Toaster position="top-center" reverseOrder={false} />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default page;
