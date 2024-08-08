import { AutocompleteProps as NextAutocompleteProps } from "@nextui-org/react";

export interface AutocompleteProps
  extends Omit<NextAutocompleteProps, "children"> {
  data: AutocompleteData[];
  label?: string;
  nodata?: string;
}

export interface AutocompleteData {
  label: string;
  value: string;
}
