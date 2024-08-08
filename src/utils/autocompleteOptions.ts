import { AutocompleteData } from "@/components/FormInputs/Autocomplete/types";
import { poundFormat } from "./format";

export const industyData: AutocompleteData[] = [
  {
    label: "Accountancy",
    value: "Accountancy",
  },
  {
    label: "Admin, Secreterial & PA",
    value: "Admin, Secreterial & PA",
  },
  {
    label: "Banking",
    value: "Banking",
  },
  {
    label: "Charity & Voluntary",
    value: "Charity & Voluntary",
  },
  {
    label: "Cleaning",
    value: "Cleaning",
  },
  {
    label: "Customer & Property",
    value: "Customer & Property",
  },
  {
    label: "Customer Service",
    value: "Customer Service",
  },
  {
    label: "Design",
    value: "Design",
  },
];

export const targetRoles: AutocompleteData[] = [
  { label: "Account Management", value: "Account Management" },
  { label: "Account Manager", value: "Account Manager" },
  { label: "Accountant", value: "Accountant" },
  { label: "Accounting Manager", value: "Accounting Manager" },
  { label: "Credit Controller", value: "Credit Controller" },
  { label: "Prison Officer", value: "Prison Officer" },
  { label: "Accounts Clerk", value: "Accounts Clerk" },
  { label: "Accounts Officer", value: "Accounts Officer" },
  { label: "Accounts Payable", value: "Accounts Payable" },
];

export const getCurrentSalaryOptions = () => {
  const salary: AutocompleteData[] = [];
  for (let i = 10000; i <= 120000; i = i + 5000) {
    salary.push({
      label: `Up to ${poundFormat.format(i)}`,
      value: i.toString(),
    });
  }

  return salary;
};
