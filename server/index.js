import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import itineraryRoutes from "./Routes/ItineraryRoutes.js"
import sequelize from "./Sequelize.js";
import User from "./Models/User.js";
import Itinerary from "./Models/Itinerary.js";
import Country from "./Models/Country.js";
import ItineraryDestination from "./Models/ItineraryDestination.js";
import Destination from "./Models/Destination.js";

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
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });