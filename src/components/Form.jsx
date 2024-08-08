"use client";
import React, { useState } from 'react';
import { Button, Input, Textarea } from "@nextui-org/react";

const FormComponent = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [emergencyType, setEmergencyType] = useState('');
    const [pinDropNumber, setPinDropNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { name, age, emergencyType, pinDropNumber });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-blue-50">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
            >
                <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
                    Caller Details
                </h2>
                <div className="mb-4">
                    <Input
                        type="text"
                        placeholder="Enter Your Name"
                        value={age}
                        isRequired
                        size='lg'
                        radius='lg'
                        onChange={(e) => setName(e.target.value)}
                    />


                </div>
                <div className="mb-4">
                    <Input
                        type="number"
                        placeholder="Age"
                        value={name}
                        isRequired
                        size='lg'
                        radius='lg'
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <Textarea
                        isRequired
                        labelPlacement="outside"
                        placeholder="Enter your Emergency"
                        className=""
                        size='lg'
                        fullWidth
                        value={emergencyType}
                        onChange={(e) => setEmergencyType(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <Input
                        type="text"
                        placeholder="Enter the pin drop number"
                        value={pinDropNumber}
                        onChange={(e) => setPinDropNumber(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    />
                </div>

                <Button type='submit' color="primary" fullWidth spinner>
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default FormComponent;
