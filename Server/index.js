
import express from "express";
import dotenv from "dotenv";
import connectToMongo from "./utils/db.js";
import userRoute from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json()); 
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));



app.use("/api/v1/user", userRoute)



app.listen(PORT, () => {
  connectToMongo();
  console.log(`Server is running on port ${PORT}`);
});

