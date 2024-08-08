import {
  AutocompleteItem,
  Autocomplete as NextAutocomplete,
} from "@nextui-org/react";
import { FC } from "react";
import { AutocompleteProps } from "./types";

const Autocomplete: FC<AutocompleteProps> = ({ data, label, nodata, ...props }) => {
  return (
    <NextAutocomplete
      label={label}
      labelPlacement="outside"
      inputProps={{
        classNames: {
          inputWrapper: "border-1 border-grey rounded-[6px]",
          label: "font-[500]",
        },
      }}
      {...props}
    >
      {data.length > 0 ?
      data.map((item) => (
        <AutocompleteItem key={item.value} value={item.value}>
          {item.label}
        </AutocompleteItem>
      ))
      :
 <AutocompleteItem key={1} value={nodata} isDisabled={true}>
          {props?.role ? 'No Results Found': nodata}
        </AutocompleteItem>
      }
    </NextAutocomplete>
  );
};

export default Autocomplete;
