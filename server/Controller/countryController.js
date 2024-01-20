import express from "express";
import Country from "../Models/Country";

const getAllCountries = async (req, res) => {
    // MySQL queries
    const countries = Country.findAll();
    res.status(200).json(countries);
}


export default getAllCountries;
