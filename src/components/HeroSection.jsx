"use client";
import React from 'react';
import { Button, Link } from '@nextui-org/react';
import { PiAmbulance } from "react-icons/pi";
import { MdOutlineLocalPolice } from "react-icons/md";
import { BsFire } from "react-icons/bs";


const HeroSection = () => {
    return (

        <section className=" text-white">
            <div className="container mx-auto py-16 text-center">
                <h1 className="text-4xl font-bold mb-4">Emergency Dispatch System</h1>
                <p className="text-lg mb-8">Empowering Emergency Response with Real-Time Tracking</p>

                <div className="flex flex-col sm:flex-row sm:justify-center space-x-4">
                    <Button size="lg" href='/ambulance' className='w-1/4' as={Link} auto color="danger" css={{ mx: '10px' }}>
                        Ambulance
                        <PiAmbulance size={40} />
                    </Button>
                    <Button size="lg" href='/fire' as={Link} auto css={{ mx: '10px', color: 'black' }} className="w-1/4 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                        Fire
                        <BsFire size={40} color='#fff' />
                    </Button>
                    <Button size="lg" href='/police' as={Link} auto color="primary" css={{ mx: '10px' }} className='w-1/4' >
                        Police
                        <MdOutlineLocalPolice size={40} color='#fff' />
                    </Button>
                </div>
            </div>
        </section >

    );
};

export default HeroSection;
