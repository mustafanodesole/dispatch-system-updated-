import dayjs, { Dayjs } from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

const dayjsInstance = dayjs;
dayjsInstance.extend(customParseFormat);

export const toDayjsFormat = (date: string, format = "MMM YYYY") => {
  return dayjsInstance(date, { format });
};

export const formatDate = (date: Dayjs, format = "MMM YYYY") => {
  return date.format(format);
};
