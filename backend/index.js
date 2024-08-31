import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors"
import bookRoute from "./routes/book.route.js"
import userRoute from "./routes/user.route.js"
const app = express();

app.use(cors());
dotenv.config();
app.use(express.json())
app.use("/book", bookRoute)
app.use("/user", userRoute)



const PORT = process.env.PORT || 4000
const URI = process.env.MONGODB_URI

try {
  mongoose.connect(URI,
    { useNewUrlParser: true }
  )
  console.log("Connect to mongodb")
} catch (error)
{
   console.log("Error",error)
}

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
