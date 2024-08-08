import { Input } from "@nextui-org/react";
import { FC } from "react";
import { TextFieldProps } from "./types";

const TextField: FC<TextFieldProps> = ({
  type,
  value,
  onChange,
  className,
  ...props
}) => {
  return (
    <Input
      type={type}
      labelPlacement="outside"
      value={value}
      onChange={onChange}
      className={className}
      classNames={{
        inputWrapper: "border-1 border-grey rounded-[6px]",
        label: "font-[500]",
      }}
      {...props}
    />
  );
};

export default TextField;
