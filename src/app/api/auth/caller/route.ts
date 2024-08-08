import { NextRequest, NextResponse } from "next/server";
import caller from "@/models/callerModel";
import Connect from "@/lib/dbConfig";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helper/mailer";

Connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { firstname , address , pinDropNumber , emergencyType , callerName , phoneNumber ,
            age , address2 , pin , emergencyType2 , callerDescription , specialInstructions , dateTime ,
            duration,status,dispatcherName, emergencyPersonnel, completionTime, callStartTime, callEndTime} = reqBody;

    const newUser = new caller({
      firstname , address , pinDropNumber , emergencyType , callerName , phoneNumber ,
            age , address2 , pin , emergencyType2 , callerDescription , specialInstructions, dateTime ,
            duration,status,dispatcherName, emergencyPersonnel, completionTime, callStartTime, callEndTime
    });

    const savedUser = await newUser.save();

    return NextResponse.json({
      message: "User created SUccessfully",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        err: "Connot fetch " + error.message,
      },
      { status: 500 }
    );
  }
}


export async function GET(request: NextRequest) {
  try {
    
    const savedUser = await caller.find();;

    return NextResponse.json({
      message: "User created SUccessfully",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        err: "Connot fetch " + error.message,
      },
      { status: 500 }
    );
  }
}

