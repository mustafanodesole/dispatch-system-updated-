import TextField from "@/components/FormInputs/TextField";
import { showFieldError } from "@/utils/form";
import { Button, Select, SelectItem, Spinner } from "@nextui-org/react";
import { useFormik } from "formik";
import { FC, useCallback, useMemo, useState } from "react";
import { FormInputs, formValidation, initialValues } from "./form";
import { SignUpTabProps } from "./types";
import toast from "react-hot-toast";
import { EyeSlashFilledIcon } from "@/icons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "@/icons/EyeFilledIcon";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { Suspense } from "react";

const SignUpTab: FC<SignUpTabProps> = ({ setSelected }) => {
  const [isPassVisible, setIsPassVisible] = useState<boolean>(false);
  const [isConfirmPassVisible, setIsConfirmPassVisible] = useState<boolean>(false);
  const [role, setRole] = useState("")
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter()



  const handleEnter = (e: { key: string }) => {
    if (e.key === "Enter") {
      formik.handleSubmit();
    }
  };

  const handlePasswordVisibility = () => {
    setIsPassVisible((p) => !p);
  };

  const handleConfirmPasswordVisibility = () => {
    setIsConfirmPassVisible((p) => !p);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: formValidation,
    onSubmit: () => { },
  });

  const formikValues = useMemo(() => formik.values, [formik.values]);

  const passwordToggleEl = (
    <button
      className="focus:outline-none"
      type="button"
      onClick={handlePasswordVisibility}
    >
      {isPassVisible ? (
        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
      ) : (
        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
      )}
    </button>
  );

  const confirmPasswordToggleEl = (
    <button
      className="focus:outline-none"
      type="button"
      onClick={handleConfirmPasswordVisibility}
    >
      {isConfirmPassVisible ? (
        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
      ) : (
        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
      )}
    </button>
  );

  const roles = [
    { key: "Ploice Admin", label: "Ploice Admin" },
    { key: "Ambulance Admin", label: "Ambulance Admin" },
    { key: "Fire Admin", label: "Fire Admin" },
  ];




  const handleSignUp = async (e: any) => {
    e.preventDefault();
    console.log("Form Submitted");

    try {

      setLoading(true);
      const response = await axios.post(
        "/api/auth/register",
        {
          firstname: formikValues.firstName,
          lastname: formikValues.lastName,
          email: formikValues.email,
          role: role,
          phone: formikValues.phone,
          password: formikValues.password

        }
      );
      toast.success("Form Submitted");
      
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);

      toast.error(error.message);
    } finally {
      setLoading(false)
    }
  };

  return (
    <Suspense fallback={<Spinner color="default" />}>
      {loading && <Spinner label="Loading..." color="warning" />}
      <div onKeyDown={handleEnter} className="flex flex-col gap-[20px]">
        <div className="flex gap-[10px]">
          <TextField
            name="firstName"
            label="First Name"
            value={formikValues.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            // isDisabled={isLoading}
            isInvalid={
              !!showFieldError(formik.touched.firstName, formik.errors.firstName)
            }
            errorMessage={showFieldError(
              formik.touched.firstName,
              formik.errors.firstName
            )}
          />
          <TextField
            name="lastName"
            label="Last Name"
            value={formikValues.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            // isDisabled={isLoading}
            isInvalid={
              !!showFieldError(formik.touched.lastName, formik.errors.lastName)
            }
            errorMessage={showFieldError(
              formik.touched.lastName,
              formik.errors.lastName
            )}
          />
        </div>

        <TextField
          name="email"
          label="Email"
          type="email"
          value={formikValues.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          // isDisabled={isLoading}
          isInvalid={!!showFieldError(formik.touched.email, formik.errors.email)}
          errorMessage={showFieldError(formik.touched.email, formik.errors.email)}
        />

        <TextField
          name="phone"
          label="Mobile Number"
          type="tel"
          value={formikValues.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          // isDisabled={isLoading}
          isInvalid={!!showFieldError(formik.touched.phone, formik.errors.phone)}
          errorMessage={showFieldError(formik.touched.phone, formik.errors.phone)}
        />
        <Select
          label="Select Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full mt-5"
          classNames={{ innerWrapper: "!pt-0 !h-[4px] !min-h-[4px]", trigger: "!h-[40px] !min-h-[40px]" }}
        >
          {roles.map((animal) => (
            <SelectItem value={animal.label} key={animal.key} >
              {animal.label}
            </SelectItem>
          ))}
        </Select>
        <TextField
          name="password"
          label="Password"
          type={isPassVisible ? "text" : "password"}
          value={formikValues.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          // isDisabled={isLoading}
          isInvalid={
            !!showFieldError(formik.touched.password, formik.errors.password)
          }
          errorMessage={showFieldError(
            formik.touched.password,
            formik.errors.password
          )}
          endContent={passwordToggleEl}
        />

        <TextField
          name="confirmPassword"
          label="Confirm Password"
          type={isConfirmPassVisible ? "text" : "password"}
          value={formikValues.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          // isDisabled={isLoading}
          isInvalid={
            !!showFieldError(
              formik.touched.confirmPassword,
              formik.errors.confirmPassword
            )
          }
          errorMessage={showFieldError(
            formik.touched.confirmPassword,
            formik.errors.confirmPassword
          )}
          endContent={confirmPasswordToggleEl}
        />

        <p className="text-center text-[16px]">
          <b>Already</b> have an account?{" "}
          <Link
            href={"/login"}
            className="text-blue-600"
          >
            Login
          </Link>
        </p>

        <Button
          radius="sm"
          fullWidth
          className=" text-white text-[16px]"
          color="primary"
          // isLoading={isLoading}
          // onPress={() => router.push('/')}
          onClick={handleSignUp}
        >
          Sign up
        </Button>
      </div>
    </Suspense>
  );
};

export default SignUpTab;
