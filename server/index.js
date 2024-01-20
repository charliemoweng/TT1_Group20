import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import itineraryRoutes from "./Routes/itineraryRoutes.js"

dotenv.config();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));

app.use(cors());

//ROUTES
app.use("/itinerary", itineraryRoutes);

// MY SQL SET UP WITH SEQUALIZE
