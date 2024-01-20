import express from "express";
import validateToken from "../Middleware/AuthMiddleware.js";
// import { getAllItineraryById } from "../Controller/itineraryController.js";


const router = express.Router();
// routes
// router.get("<route>", "<optional> verifyToken", "<controller>")
router.get("/countries", getAllCountries);


export default router;
