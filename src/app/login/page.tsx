import PublicNavbar from "@/components/PublicNavbar";
import LoginSignup from "../../components/LoginSignUp/Login";
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
