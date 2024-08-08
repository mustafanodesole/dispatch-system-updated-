"use client";
import { useState } from "react";
import { Button, Input, Textarea } from "@nextui-org/react";
import { CgProfile } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import Profile from "@/icons/profile";
import Age from "@/icons/Age";
import Address from "@/icons/Address";
import Pin from "@/icons/Pin";
import Note from "@/icons/Note";
import EmailType from "@/icons/EmailType";
import Map from "./Map";
import { rows } from "./CallLog";
import { useRouter } from "next/navigation";

const AdditionalInformationForm = ({ formData, setFormData , onSubmit, onClose }) => {
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // rows.push({
    //   id: 3,
    //   caller: formData.callerName,
    //   phoneNumber: formData.phoneNumber,
    //   dateTime: Date(),
    //   emergencyType: formData.emergencyType,
    //   duration: "00:38",
    //   status: "Completed",
    //   age: formData.age,
    //   dispatcherName: "Jane Doe",
    //   emergencyPersonnel: "John Doe",
    //   address: formData.address,
    //   responseTime: "3 minutes",
    //   completionTime: "25 minutes",
    //   callStartTime: "02:00pm",
    //   callEndTime: "02:25pm",
    //   outcome:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //   notes: formData.specialInstructions,
    //   description: formData.callerDescription,
    // });
    onSubmit(formData);
    // router.push("/calls-history")
  };

  const center = {
    lat: 32.33557301648227,
    lng: 74.36152118336334,
  };

  return (
    <div>
      <Map center={center} height={"41vh"} />
      <form
        className="max-w-[98%] mt-4 w-full mx-auto p-4 bg-white shadow-md rounded-lg"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2 sm:flex-row items-baseline mb-2">
          <p className="text-[23px] font-bold">Add Information</p>
        </div>
        <div className="grid gap-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input
              size="sm"
              value={formData.callerName}
              onChange={handleChange}
              placeholder="Caller's Name"
              classNames={{ inputWrapper: "!bg-white" }}
              type="text"
              className="w-full border p-2 border-gray-300 rounded"
              name="callerName"
              startContent={<Profile />}
            />
            <Input
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              size="sm"
              classNames={{ inputWrapper: "!bg-white" }}
              type="number"
              className="w-full border p-2 border-gray-300 text-gray-500 rounded"
              name="phoneNumber"
              startContent={<FaPhoneAlt className="mr-1 text-[#2D8076]" />}
            />
            <Input
              value={formData.age}
              onChange={handleChange}
              placeholder="Age"
              size="sm"
              classNames={{ inputWrapper: "!bg-white" }}
              type="number"
              className="w-full border border-gray-300 p-2 rounded-md"
              name="age"
              startContent={<Age />}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input
              value={formData.address2}
              onChange={handleChange}
              placeholder="Address"
              type="text"
              size="sm"
              classNames={{ inputWrapper: "!bg-white" }}
              className="w-full p-2 border border-gray-300 rounded-md"
              name="address2"
              startContent={<Address />}
            />
            <Input
              value={formData.pin}
              onChange={handleChange}
              placeholder="Pin Drop Number"
              type="number"
              size="sm"
              classNames={{ inputWrapper: "!bg-white" }}
              className="w-full border border-gray-300 p-2 rounded-md"
              name="pin"
              startContent={<Pin />}
            />
            <div className="w-full border p-2 border-gray-300 rounded-md flex items-center">
              <EmailType className="mr-2" />
              <select
                value={formData.emergencyType2}
                onChange={(e) => setFormData({ ...formData, emergencyType2: e.target.value })}
                name="emergencyType"
                className="w-full border-none outline-none bg-transparent"
              >
                <option value="">Select Emergency Type</option>
                <option value="Medical">Medical</option>
                <option value="Fire">Fire</option>
                <option value="Crime">Crime</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="space-y-4">
            <Textarea
              placeholder="Caller Description"
              size="sm"
              classNames={{ inputWrapper: "!bg-white" }}
              className="w-full border border-gray-300 p-2 rounded"
              value={formData.callerDescription}
              onChange={handleChange}
              name="callerDescription"
              startContent={<Note />}
            />
            <Textarea
              placeholder="Special Instructions"
              size="sm"
              classNames={{ inputWrapper: "!bg-white" }}
              className="w-full border border-gray-300 p-2 rounded"
              value={formData.specialInstructions}
              onChange={handleChange}
              name="specialInstructions"
              startContent={<Note />}
            />
          </div>
        </div>
        <div className="mt-4 flex max-sm:flex-col sm:flex-row gap-2 justify-end">
          <Button color="danger" variant="flat" onPress={onClose} size="sm">
            Close
          </Button>
          <Button
            type="submit"
            className="bg-[#2D8076] text-white"
            size="sm"
            fullWidth={false}
          >
            Response Immediate
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdditionalInformationForm;
