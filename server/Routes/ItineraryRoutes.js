import express from "express";
import validateToken from "../Middleware/AuthMiddleware.js";
import { createItinerary, getAllItineraryByUserId } from "../Controller/itineraryController.js";


const router = express.Router();
// routes
// router.get("<route>", "<optional> verifyToken", "<controller>")
router.get("/:userId", getAllItineraryByUserId);
router.post("/create", createItinerary);


export default router;
