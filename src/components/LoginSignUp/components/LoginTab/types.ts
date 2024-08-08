import { Dispatch, Key, SetStateAction,MouseEventHandler } from "react";

export interface LoginTabProps {
  setSelected: Dispatch<SetStateAction<string>>;
  onClick: MouseEventHandler<HTMLButtonElement>;

}
