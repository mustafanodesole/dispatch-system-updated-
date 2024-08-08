import { TArg, classnames } from "tailwindcss-classnames";

const twMerge = (...args: any[]) => {
  return classnames(args as unknown as TArg);
};

export default twMerge;
