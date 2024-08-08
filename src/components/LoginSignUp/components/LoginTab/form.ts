import { ErrorMessages } from "@/utils/form";
import { object, string } from "yup";

export interface LoginFormInputs {
  email: string;
  password: string;
}

export const loginInitialValues: LoginFormInputs = {
  email: "",
  password: "",
};

export const loginFormValidation = object().shape({
  email: string()
    .trim()
    .email(ErrorMessages.invalid("Email"))
    .required(ErrorMessages.required("Email")),
  password: string().trim().required(ErrorMessages.required("Password")),
});
