import PublicNavbar from "@/components/PublicNavbar";
import LoginSignup from "../../components/LoginSignUp/SignUp";
import { FC } from "react";

const LoginSignupPage: FC = () => {
  return (
    <>
      <PublicNavbar />
      <LoginSignup />
    </>
  );
};

export default LoginSignupPage;
