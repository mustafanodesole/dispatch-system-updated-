import Connect from "@/lib/dbConfig";
import { NextResponse, NextRequest } from "next/server";
import User from "@/models/userModel";
import { sendEmail } from "@/helper/mailer";
import bcryptjs from "bcryptjs";


Connect();
export async function POST(request: NextRequest) {
  const { email } = await request.json();
  const user = await User.findOne({
    email: email,
  });

  if (!user) {
    console.log("User not found");
    return NextResponse.json({ message: "User not found" }, { status: 402 });
  }

  console.log("User Finded Details", user);

  await sendEmail({
    email,
    emailType: "RESET",
    userId: user._id,
  });

  return NextResponse.json({ message: "User found" , status : "success" } , {status : 201} );
}

export async function PUT(request: NextRequest) {
  const { password, userID } = await request.json();



  // const user = await User.findById(userID)

  // User.find({"user" : ObjectId(userID)})


  const salt = await bcryptjs.genSalt(10);
  const hashPassword = await bcryptjs.hash(password, salt);

  const newUser = await User.findByIdAndUpdate(userID , {
    password : hashPassword
  })


  if(!newUser){
    console.log("User ID is incorrect")
    return NextResponse.json({message : "User Id Not Found"})
  }

  const savedUser = await newUser.save();

  return NextResponse.json({message : "User Updated" , user : savedUser  })
  
}
