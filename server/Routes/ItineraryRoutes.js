import express from "express";
import validateToken from "../Middleware/AuthMiddleware.js";
import { createItinerary, editItinerary, getAllItineraryByUserId } from "../Controller/itineraryController.js";


const router = express.Router();
// routes
// router.get("<route>", "<optional> verifyToken", "<controller>")
router.get("/:userId", validateToken, getAllItineraryByUserId);
router.post("/create", validateToken, createItinerary);
router.put("/edit", validateToken, editItinerary)


export default router;
