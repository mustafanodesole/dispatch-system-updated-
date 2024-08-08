'use client'
import React, { useState, useEffect } from "react";
import { table, thead, th, Input, tbody, tr, td, Button } from "@nextui-org/react";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaSearch, FaFilter, FaTable } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import AccordionComponent from "./AccordionComponent";
import axios from "axios";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import './index.css'
import { set } from "mongoose";
// export const rows = [
//     {
//         id: 1, caller: 'Anas Abrar', phoneNumber: '(406) 555-0120', dateTime: 'November 28, 2023',
//         emergencyType: 'Ambulance', duration: '00:38', status: 'completed', age: '25 years',
//         dispatcherName: 'Jacob Jones', emergencyPersonnel: 'Jenny Wilson', address: '6391 Elgin St. Celina, Delaware 10299',
//         responseTime: '2 minutes', completionTime: '20 minutes', callStartTime: '01:40pm', callEndTime: '01:50pm',
//         outcome: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//         notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
//     },
//     {
//         id: 2, caller: 'Cody Fisher', phoneNumber: '(307) 555-0133', dateTime: 'January 28, 2023',
//         emergencyType: 'Police', duration: '00:38', status: 'in Progress', age: '30 years',
//         dispatcherName: 'Jane Doe', emergencyPersonnel: 'John Doe', address: '1234 Elm St. Springfield, IL 62704',
//         responseTime: '3 minutes', completionTime: '25 minutes', callStartTime: '02:00pm', callEndTime: '02:25pm',
//         outcome: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//         notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
//     }
// ];

export const columns = [
    {
        key: "caller",
        label: "Call Person",
    },
    {
        key: "phoneNumber",
        label: "Phone Number",
    },
    {
        key: "dateTime",
        label: "Date & Time",
    },
    {
        key: "emergencyType",
        label: "Emergency Type",
    },
    // {
    //     key: "duration",
    //     label: "Duration",
    // },
    {
        key: "status",
        label: "Status",
    },
    {
        key: "action",
        label: "Action",
    },
];

export default function CallLog() {
    const [arcIndex, setArcIndex] = useState();
    const [rows, setRows] = useState();


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("/api/auth/caller");
                console.log("Data :", response.data.savedUser);
                setRows(response.data.savedUser);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="m-4 h-screen">
            <div className="flex justify-between mb-5">
                <h1 className="text-2xl font-bold"></h1>
                <div className="flex items-center space-x-2">
                    <Input
                        isClearable
                        radius="lg"
                        className=""
                        placeholder="Search"
                        startContent={
                            <CiSearch className="text-[#2D8076] mb-0.5 pointer-events-none flex-shrink-0" />
                        }
                    />
                    <button className="p-2 bg-gray-100 rounded-md">
                        <FaFilter />
                    </button>
                    <button className="p-2 bg-gray-100 rounded-md">
                        <FaTable />
                    </button>
                </div>
            </div>
            <div className=" bg-white rounded-xl p-5">
            <table aria-label=" table " className="min-w-full">
                <thead className="w-full">
                    <tr className="">

                    {columns.map((items, index) => (
                        <th className="bg-[#E9F1EA] py-5 text-[#202431] text-md font-medium text-start " style={index==0 ? {borderTopLeftRadius:"10px", textAlign : "start"} : index == columns.length - 1 ? {borderTopRightRadius: "10px"} : {}} key={items.key}>{items.label}</th>
                    ))}
                    </tr>
                </thead>
                <tbody>
                    {rows ? rows.map((row,index) => (
                        <React.Fragment key={row.id}>
                            <tr className="even:bg-[#F4FBF8] text-start " onClick={()=>{setArcIndex((prevIndex)=> prevIndex === index ? NaN : index)}}>
                                <td className="ps-5 py-5 flex items-start"> <span className="pr-3">{index != arcIndex ? <MdKeyboardArrowRight /> : <MdKeyboardArrowDown />}</span>{row.callerName}</td>
                                <td className="">{row.phoneNumber}</td>
                                
                                <td className="">{row.dateTime}</td>
                                <td className="">{row.emergencyType2}</td>
                                {/* <td className="">{row.duration}</td> */}
                                <td className="ml-12 ">
                                    <span className={`text-xs py-[6px] pl-[8px] pr-[8px] rounded-full ${row.status === 'completed' ? 'text-[#2D8076] bg-[#2D807626]' : row.status === 'in Progress' ? 'text-[#FFA51F] bg-[#FFA6212E]' : ''}`}>
                                        {row.status}
                                    </span>
                                   
                                </td>
                                <td className=""> <span className="w-max flex text-xs py-[6px] pl-[8px] pr-[8px] rounded-full   bg-[#2D8076] text-white items-center gap-1"><IoShareSocialOutline />Share</span></td>
                            </tr>
                           {index === arcIndex ?  <AccordionComponent row={row} />  : <></>}
                           <tr className="text-center">
                                <td colSpan={columns.length} className="text-center">
                                    
                                </td>
                                
                            </tr> 
                        </React.Fragment>
                    )): null}
                </tbody>
            </table>
            <div className="flex items-center justify-between pt-5 border-t border-gray-300">
                    <Button variant="bordered" color="text-gray-300" className="">
                        Prevous
                    </Button>
                    <p className="#727789">
                        Page 1 of 12
                    </p>
                    <Button variant="bordered" color="text-gray-300" className="">
                        Next
                    </Button>
            </div>
            </div>
        </div>
    );
}
