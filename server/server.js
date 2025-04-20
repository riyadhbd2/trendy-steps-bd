import cors from "cors";
import "dotenv/config";
import express from "express";
import connectDB from "./config/mongoDB.js";
import router from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 5003;

// Database Connection
connectDB();
// Middleware
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",   // your frontend
  credentials: true                 // allow cookies
}));
app.use(express.json());

// API Endpoints
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// API Endpoints
app.use("/api/users", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
