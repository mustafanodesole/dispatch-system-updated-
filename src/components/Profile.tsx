"use client";
import React, { useState } from 'react';
import { Autocomplete, AutocompleteItem, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Textarea } from "@nextui-org/react";
import Image from 'next/image';
import { FaCameraRetro } from 'react-icons/fa';
import profileImage from "../assets/images/profilePic.svg"

export const role = [
    { label: "Dispatcher", value: "Dispatcher", description: "The most popular pet in the world" },
    { label: "Caller", value: "Caller", description: "The largest land animal" },
]
export const organization = [
    { label: "Police", value: "Police", description: "The most popular pet in the world" },
    { label: "Ambulance", value: "Ambulance", description: "The largest land animal" },
]

const FormComponent = () => {

    return (
        <div className='px-16 min-h-[94vh]'>
            <p className='text-2xl py-8' ></p>
            <div className='bg-white rounded-3xl pb-8'>
                <div className='bg-gradient-to-r from-[#B6D3F1] to-[#FCF7E1] py-10 max-sm:py-10 rounded-tr-3xl rounded-tl-3xl'>
                </div>
                <div className='px-20 py-6 max-sm:px-1 max-sm:py-2 flex items-center justify-center flex-col gap-6'>
                    <Image
                        width={150}
                        height={100}
                        // src="/police.png"
                        src={profileImage}
                        alt="NextUI hero Image"
                        className='rounded-[50%]'
                    />
                    <div className='text-[#2D8076] flex gap-2'>
                        <FaCameraRetro size={20} color='#2D8076' />
                        {/* <Image src={profileImage} alt='Profile Image' width={200} height={200}/> */}
                        <b>Change profile picture</b>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 w-[80%]'>
                        <div>
                    <label className='text-[#6C6C6C] text-sm '>Full Name</label>
                        <Input
                            key={'name'}
                            type="text"
                            // label="Full Name"
                            // labelPlacement={'outside'}
                            description={''}
                            classNames={{ inputWrapper: 'bg-[#F6F7F9] mt-2' }}
                            size='lg'
                        />
                        </div>
                        
                        
                        <div>
                        <label className='text-[#6C6C6C] text-sm '>Email Address</label>
                        <Input
                            key={'Email Address'}
                            type="email"
                            // label="Email Address"
                            // labelPlacement={'outside'}
                            description={''}
                            classNames={{ inputWrapper: 'bg-[#F6F7F9] mt-2' }}
                            size='lg'
                        />
                        </div>
                        
                        
                        <div >
                        <label className='text-[#6C6C6C] text-sm '>Organization</label>
                        <Autocomplete
                            variant="flat"
                            placeholder="Police"
                            className=" border-none bg-none mt-2"
                            defaultItems={organization}
                            size='lg'
                        >
                            {(item) => <AutocompleteItem classNames={{ wrapper: 'bg-none border-0' }} key={item.value}>{item.label}</AutocompleteItem>}
                        </Autocomplete>
                        </div>
                        
                        
                        <div>
                        <label className='text-[#6C6C6C] text-sm '>Role</label>
                        <Autocomplete
                            variant="flat"
                            placeholder="Dispatcher"
                            className=" border-none bg-none mt-2"
                            defaultItems={role}
                            size='lg'
                        >
                            {(item) => <AutocompleteItem  classNames={{ wrapper: 'bg-none border-0' }} key={item.value}>{item.label}</AutocompleteItem>}
                        </Autocomplete>
                        </div>
                        <div>
                        <label className='text-[#6C6C6C] text-sm '>Old Password</label>
                        <Input
                            key={'Old password'}
                            type="password"
                            // label="Email Address"
                            // labelPlacement={'outside'}
                            description={''}
                            classNames={{ inputWrapper: 'bg-[#F6F7F9] mt-2' }}
                            size='lg'
                        />
                        </div>


                        <div>
                        <label className='text-[#6C6C6C] text-sm '>New Password</label>
                        <Input
                            key={'New password'}
                            type="password"
                            // label="Email Address"
                            // labelPlacement={'outside'}
                            description={''}
                            classNames={{ inputWrapper: 'bg-[#F6F7F9] mt-2' }}
                            size='lg'
                        />
                        </div>
                        
                    </div>
                    <Button type="submit" size='md' className='bg-[#2D8076] hover:bg-[#1d8074] text-white' fullWidth={false}>
                        Save Changes
                    </Button>
                </div>
            </div>
        </div>
    );
}
export default FormComponent