import Connect from "@/lib/dbConfig";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const db = await Connect();
    console.log("Database Connection: ", db);
    return NextResponse.json({ message: "database connected", status: "success" });
  } catch (error) {
    console.error("API Route Error: ", error);
    return NextResponse.json({ message: "Error connecting to the database", status: "error" });
  }
}
