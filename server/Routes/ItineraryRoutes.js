import express from "express";
import verifyToken from "../Middleware/AuthMiddleware.js";
import { createItinerary, deleteItinerary, editItinerary, getAllItineraryByUserId } from "../Controller/itineraryController.js";


const router = express.Router();
// routes
// router.get("<route>", "<optional> verifyToken", "<controller>")
router.get("/:userId", verifyToken, getAllItineraryByUserId);
router.post("/create", verifyToken, createItinerary);
router.put("/edit", verifyToken, editItinerary);
router.delete("/:itineraryId", verifyToken, deleteItinerary);

export default router;
