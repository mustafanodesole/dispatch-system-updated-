import { InputProps } from "@nextui-org/react";

export interface TextFieldProps
  extends Omit<
    InputProps,
    "labelPlacement" | "className" | "classNames" | "size"
  > {
  type?: string;
  value?: string;
  className?: string;
}
