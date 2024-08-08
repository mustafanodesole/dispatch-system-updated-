import mongoose from "mongoose";
const callerSchema = new mongoose.Schema({
  firstname: {
    type: "string",
    required: [false, "Provide Fullname"],
  },
  address: {
    type: "string",
    required: [false, "Provide Fullname"],
  },
  pinDropNumber: {
    type: "string",
    required: [false, "Provide Fullname"],
  },
  emergencyType: {
    type: "string",
    required: [false, "Provide Fullname"],
  },
  callerName: {
    type: "string",
    required: [false, "Provide Fullname"],
  },
  phoneNumber: {
    type: "string",
    required: [false, "Provide Fullname"],
  },
  age: {
    type: "string",
    required: [false, "Provide Fullname"],
  },
  address2: {
    type: "string",
    required: [false, "Provide Fullname"],
  },
  pin: {
    type: "string",
    required: [false, "Provide Fullname"],
  },
  emergencyType2: {
    type: "string",
    required: [false, "Provide Fullname"],
  },
  callerDescription: {
    type: "string",
    required: [false, "Provide Fullname"],
  },
  dateTime: {
    type: "string",
    required: [false, "Provide Fullname"],
  } ,
  duration: {
    type: "string",
    required: [false, "Provide Fullname"],
  },
  status: {
    type: "string",
    required: [false, "Provide Fullname"],
  },
  dispatcherName: {
    type: "string",
    required: [false, "Provide Fullname"],
  }, 
  emergencyPersonnel: {
    type: "string",
    required: [false, "Provide Fullname"],
  }, 
  completionTime: {
    type: "string",
    required: [false, "Provide Fullname"],
  }, 
  callStartTime: {
    type: "string",
    required: [false, "Provide Fullname"],
  }, 
  callEndTime: {
    type: "string",
    required: [false, "Provide Fullname"],
  },
  specialInstructions: {
    type: "string",
    required: [false, "Provide Fullname"],
  },
});

const caller = mongoose.models.caller || mongoose.model("caller", callerSchema);

export default caller;