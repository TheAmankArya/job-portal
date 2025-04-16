import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"; //CORS helps your frontend talk to the backend safely without getting blocked by the browser
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
dotenv.config({});

const app = express();

//middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
// allow all the origin
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



const PORT = process.env.PORT || 3000;

//api's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

app.get("/hello", (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Hello from Job Portal API!"
    });
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running at port ${PORT}`);
});
