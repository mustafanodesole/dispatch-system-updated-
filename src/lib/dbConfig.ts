// import mongoose from "mongoose";
// export default async function Connect() {
//   try {
//     mongoose.connect(process.env.MONGO_URL!);
//     // mongoose.connect("mongodb+srv://engrmustafatawab05:SGuuTRv85imGtEw3@cluster0.0e2arsk.mongodb.net/dispatch-system")
//     const connection = mongoose.connection;

//     connection.on("connected", () => {
//       console.log("MongoDB Connected Successfully");
//     });

//     connection.on("error", (error) => {
//       console.log("MongoDB Connection Error: ", error);
//       process.exit();
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }



import mongoose from "mongoose";

type ConnectionObject = {
  isConnected? : number

}


const connection : ConnectionObject = {};


async function Connect() : Promise<void>{
    if(connection.isConnected){
      console.log("Already COnected to the database");
      return
      
    }

    try {
      const db = await mongoose.connect(process.env.MONGO_URL)
      connection.isConnected  = db.connections[0].readyState

      console.log("Database connected successfully");
      
    } catch (error) {
      console.log("database does not connected " , error);

      process.exit(1)
      
    }
}


export default Connect