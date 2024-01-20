import express from "express";
import verifyToken from "../Middleware/AuthMiddleware.js";
import { createDestination, getAllDestinationsByCountry, editDestination, deleteDestination } from "../Controller/destinationController.js";

const router = express.Router();

router.post("/", verifyToken, createDestination);
router.get("/byCountry/:countryName", verifyToken, getAllDestinationsByCountry);
router.put("/edit", verifyToken, editDestination);
router.delete("/:destinationId", verifyToken, deleteDestination);

export default router;
