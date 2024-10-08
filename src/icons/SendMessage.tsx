import { FC } from "react";
import { IconProps } from "./types";

const SendMessage: FC<IconProps> = ({ width = "20", height = "20", fill = '#fff' }) => {
  return (
    <svg viewBox="0 0 25 24" width={width} height={height}>
      <path
        d="m9.1143 18.378v4.8397c0 0.338 0.21666 0.6375 0.5375 0.744 0.08021 0.026 0.1625 0.0386 0.24375 0.0386 0.24379 0 0.47919-0.1148 0.62919-0.3193l2.826-3.8525-4.2364-1.4505z"
        fill={fill}
      />
      <path
        d="m24.672 0.14514c-0.2396-0.17009-0.5541-0.19304-0.8146-0.056347l-23.437 12.261c-0.27708 0.145-0.44062 0.4414-0.41771 0.7534 0.023958 0.313 0.23125 0.5802 0.52604 0.6814l6.5156 2.2309 13.876-11.885-10.738 12.959 10.92 3.7387c0.0813 0.0271 0.1667 0.0418 0.2521 0.0418 0.1417 0 0.2823-0.0387 0.4063-0.1138 0.1979-0.121 0.3323-0.3245 0.3666-0.553l2.8646-19.304c0.0427-0.29217-0.0802-0.58226-0.3198-0.75339z"
        fill={fill}
      />
    </svg>
  );
};

export default SendMessage;
