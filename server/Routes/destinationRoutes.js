import express from "express";
import User from "../Models/Destination";
import validateToken from "../Middleware/AuthMiddleware";
import { createDestination, getAllDestinationsByCountry } from "../Controller/destinationController";

router.post("/", validateToken, createDestination);
router.get("/byCountry/:countryName", validateToken, getAllDestinationsByCountry);


export default router;
