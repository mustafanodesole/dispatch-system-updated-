import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import Connect from "@/lib/dbConfig";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

Connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    //check if user exists
    const user = await User.findOne({ email });
    console.log(user);

    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 400 }
      );
    }

    //check if password is correct
    const validatePassword = await bcryptjs.compare(password, user.password);
    if (!validatePassword) {
      return NextResponse.json(
        { error: "Password is Invalid " },
        { status: 400 }
      );
    }

    //create token Data
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    //create token
    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "2d",
    });

    const response = NextResponse.json({
      message: "Login Success",
      success: true,
    });

    //setting token into the browser cookies
    response.cookies.set("token", token, {
      httpOnly: true,
      // secure: process.env.NODE_ENV === "production",
      // sameSite: "strict",
      // path: "/",
      // maxAge: 2 * 24 * 60 * 60, // 2 days
    });


    // const storage = localStorage.setItem("token" , `${token}`)
    // console.log(storage)
    return response;
  } catch (error: any) {
    return NextResponse.json(
      {
        err: error.message,
      },
      { status: 500 }
    );
  }
}