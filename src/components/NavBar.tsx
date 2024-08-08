import React from "react";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Autocomplete,
  AutocompleteItem,
} from "@nextui-org/react";
import Image from "next/image";
import { CiBellOn } from "react-icons/ci";

export const animals = [
  {label: "Settings", value: "Settings", description: "The most popular pet in the world"},
  {label: "Logout", value: "Logout", description: "The largest land animal"},
]
export default function NavBar() {
  return (
    <Navbar className="shadow-lg text-[#2D2D2D] text-[14px]">
      <NavbarBrand className="">
        <p className="font-bold  px-4 py-1 rounded-lg text-inherit">
          <Link className="text-white bg-transparent" href={"/"}>
            Logo
          </Link>
        </p>
      </NavbarBrand>
      <NavbarContent
        className="text-white "
       
      >
        <NavbarItem >
          <Link color="foreground" href="/profile" className="">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="/dashboard" aria-current="page">
            Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="white" href="#">
            Map
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="white" href="#">
            Calls
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="/call-history" aria-current="page">
            History
          </Link>
        </NavbarItem>

        {/* <NavbarItem > */}
        
        <span className="p-2 bg-[#d3d3d3] rounded-[50%]"><CiBellOn  size={20} color="black"/></span>

          <Image
            width={30}
            height={30}
            src="/police.png"
            alt="NextUI hero Image"
            className='rounded-[50%]'
          />
        {/* </NavbarItem> */}
        <NavbarItem >

        <Autocomplete
        variant="flat"
        placeholder="John Doe"
        className=" border-none bg-none w-40"
        defaultItems={animals}
      >
        {(item) => <AutocompleteItem classNames={{wrapper: 'bg-none border-0'}} key={item.value}>{item.label}</AutocompleteItem>}
      </Autocomplete>
        </NavbarItem>

      </NavbarContent>
      {/* <NavbarContent justify="end">
        <NavbarItem className="">
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/login">
            <Button
              type="button"
              elementType={"button"}
              className="text=[#2D2D2D]"
              variant="flat"
            >
              Sign Up
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent> */}
    </Navbar>
  );
}
