'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import FormComponent from './DetailedForm'
import Map from './Map'
// import { GoogleMapsEmbed } from '@next/third-parties/google'
import {
    Card,
    CardHeader,
    CardBody,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button, useDisclosure
} from "@nextui-org/react";

const LandingPage = () => {
    const [showForm, setshowForm] = useState(false)
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const handleFrom = () => {
        setshowForm(true)
        console.log('clecked')
    }
    const handleHideFrom = () => {
        setshowForm(false)
        console.log('clecked')
    }
    const center = {
        lat: 32.33557301648227,
        lng: 74.36152118336334,
    };

    
    return (
        <main className=" mx-auto sm:h-[95vh] ">
             {!showForm ? 
             <>
             
            <Map center={center} height={'55vh'}/>
            <div className='my-5'>
               <section className="px-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div onClick={handleFrom} className='flex justify-center'>
                        <Card className=" cursor-pointer shadow-none bg-transparent rounded-none border-none w-3/4">
                            <CardBody className="overflow-visible p-0 py-1 ">
                                <Image
                                    src="/ambulance.svg"
                                    width={150}
                                    height={150}
                                    alt="Police" className="p-5 border-[10px] border-white mx-auto   bg-gradient-to-b  from-[#EAF2F1] to-[#ffffff] rounded-full hover:outline  hover:outline-[#A9CBC7] hover:outline-1" />
                            </CardBody>
                            <h4 className="font-bold text-2xl text-center uppercase">Ambulance</h4>
                            <p className='text-[#7E8088] text-sm text-center'>Rapid, reliable medical transport available 24/7 to ensure you receive timely care when it matters most.</p>
                        </Card>
                    </div>



                    <div onClick={handleFrom} className='flex justify-center border-l border-[#E9E9EA]'>
                        <Card className=" cursor-pointer shadow-none bg-transparent rounded-none border-none w-3/4">
                            <CardBody className="overflow-visible p-0 py-1 ">
                                <Image
                                    src="/fire.svg"
                                    width={150}
                                    height={150}
                                    alt="Police" className="p-5 border-[10px] border-white mx-auto  mb-4 bg-gradient-to-b  from-[#EAF2F1] to-[#ffffff] rounded-full hover:outline  hover:outline-[#A9CBC7] hover:outline-1" />
                            </CardBody>
                            <h4 className="font-bold text-2xl text-center uppercase">Fire</h4>
                            <p className='text-[#7E8088] text-sm text-center'>Swift, professional response to fire emergencies, ensuring safety and minimizing damage. Available around the clock to protect lives and property.</p>
                        </Card>
                    </div>

                    <div onClick={handleFrom} className='flex justify-center border-l border-[#E9E9EA]'>
                        <Card className=" cursor-pointer shadow-none bg-transparent rounded-none border-none w-3/4">
                            <CardBody className="overflow-visible p-0 py-1 ">
                                <Image
                                    src="/police.svg"
                                    width={150}
                                    height={150}
                                    alt="Police" className="p-5 border-[10px] border-white mx-auto  mb-4 bg-gradient-to-b  from-[#EAF2F1] to-[#ffffff] rounded-full hover:outline  hover:outline-[#A9CBC7] hover:outline-1" />
                            </CardBody>
                            <h4 className="font-bold text-2xl text-center uppercase">POLICE</h4>
                            <p className='text-[#7E8088] text-sm text-center'>Dedicated to maintaining public safety with prompt response and professional assistance in times of need. Always ready to serve and protect.</p>
                        </Card>
                    </div>
                </section> 
            </div> </> : <FormComponent  onClick={handleHideFrom} />}
        </main>
    );
};

export default LandingPage;
