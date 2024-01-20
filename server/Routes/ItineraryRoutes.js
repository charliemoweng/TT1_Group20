import express from "express";
import validateToken from "../Middleware/AuthMiddleware.js";
import { createItinerary, getAllItineraryByUserId } from "../Controller/itineraryController.js";


const router = express.Router();
// routes
// router.get("<route>", "<optional> verifyToken", "<controller>")
router.get("/:userId", validateToken, getAllItineraryByUserId);
router.post("/", validateToken, createItinerary);


export default router;
