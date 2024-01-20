import express from "express";
import User from "../Models/Destination";
import validateToken from "../Middleware/AuthMiddleware";
import { createDestination, getAllDestinationsByCountry, editDestination, deleteDestination } from "../Controller/destinationController";

router.post("/", validateToken, createDestination);
router.get("/byCountry/:countryName", validateToken, getAllDestinationsByCountry);
router.put("/edit", validateToken, editDestination);
router.delete("/:destinationId", validateToken, deleteDestination);

export default router;
