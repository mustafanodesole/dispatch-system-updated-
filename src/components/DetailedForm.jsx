'use client';
import { useState } from 'react';
import AdditionalInformationForm from './AdditionalInformationForm'
import ImmediateResponseForm from './ImmediateResponseForm'
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
// Immediate Response Form Component


// Additional Information Form Component


const BillingForm = () => {
    const [showImmediateForm, setShowImmediateForm] = useState(true);
    const date = new Date()
    const date2 = new Date(date).setMinutes(10);
    const [formData, setFormData] = useState({
        callerName: "",
        phoneNumber: "",
        age: "",
        address2: "",
        pin: "",
        emergencyType2: "",
        callerDescription: "",
        specialInstructions: "",
        firstName:"",
        pinDropNumber:"",
        address:"",
        emergencyType:"",
        dateTime: new Date(date).toDateString(),
        duration: "10:00",
        status: 'completed',
        dispatcherName: 'Jacob Jones', emergencyPersonnel: 'Jenny Wilson',
        completionTime: '20 minutes', callStartTime: new Date(date).getTime.toString(), callEndTime: date2.toString(),
      });

    const router = useRouter();

    const handleImmediateSubmit = (data) => {
        console.log('Immediate Data:', data);
        setShowImmediateForm(false);
    };

    const handleAdditionalSubmit = async () => {
    
    
        try {
          const response = await axios.post("/api/auth/caller", {
              ...formData
            });
            console.log("Login Success", response.data);
            toast.success("Call Success");
            router.push("/calls-history");
        } catch (error) {
         
          console.log(error.message);
    
          // toast.error("Password or Email incorrect");
          setError(true)
        }
      };

    return (
        <div>
            {showImmediateForm ? (
                <ImmediateResponseForm formData={formData} setFormData={setFormData} onSubmit={handleImmediateSubmit} />
            ) : (
                <AdditionalInformationForm
                    onSubmit={handleAdditionalSubmit}
                    setFormData={setFormData}
                    formData={formData}
                    onClose={() => setShowImmediateForm(true)}
                />
            )}
        </div>
    );
};

export default BillingForm;
