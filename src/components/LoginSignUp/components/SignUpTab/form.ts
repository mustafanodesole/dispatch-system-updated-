import { ErrorMessages } from "@/utils/form";
import { object, ref, string } from "yup";

export interface FormInputs {
  firstName: string;
  lastName: string;
  email: string;
  role : String;
  phone: string;
  password: string;
  confirmPassword: string;
}

export const initialValues: FormInputs = {
  firstName: "",
  lastName: "",
  email: "",
  role : '',
  phone: "",
  password: "",
  confirmPassword: "",
};

export const formValidation = object().shape({
  firstName: string().trim().required(ErrorMessages.required("First Name")),
  lastName: string().trim().required(ErrorMessages.required("Last Name")),
  email: string()
    .trim()
    .email(ErrorMessages.invalid("Email"))
    .required(ErrorMessages.required("Email")),
  phone: string().trim().required(ErrorMessages.required("Mobile Number")),
  password: string().trim().required(ErrorMessages.required("Password")),
  confirmPassword: string()
    .trim()
    .required(ErrorMessages.required("Confirm Password"))
    .oneOf([ref("password")], "Your passwords do not match."),
});
