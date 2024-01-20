import express from "express";
import { verifyToken } from "../Middleware/AuthMiddleware.js";
import { createItinerary, editItinerary, getAllItineraryByUserId } from "../Controller/itineraryController.js";


const router = express.Router();
// routes
// router.get("<route>", "<optional> verifyToken", "<controller>")
router.get("/:userId", getAllItineraryByUserId);
router.post("/create",  createItinerary);
router.put("/edit",  editItinerary)

export default router;
