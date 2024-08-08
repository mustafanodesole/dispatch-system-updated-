"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

export default function VerifyEmail() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/auth/verifyemail", { token });
      setVerified(true);
    } catch (err: any) {
      setError(err);
      console.log(err);
    }
  };


  useEffect(() => {

    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-5">
      <h1 className="py-2 text-3xl font-semibold ">Verify Email</h1>

      <h2 className="text-xl bg-orange-700 p-2">
        {token ? `${token}` : "No Token"}
      </h2>
      {verified && (
        <div>
          <h2 className="text-xl font-bold text-white bg-blue-800 p-2">
            Email Verified
          </h2>
          <Link className="bg-indigo-800 text-white p-2 " href={"/pages/sigin"}>
            Login Here
          </Link>
        </div>
      )}

      {error && (
        <div>
          <h2 className="bg-red-900 text-white p-2">Error</h2>
        </div>
      )}
    </div>
  );
}