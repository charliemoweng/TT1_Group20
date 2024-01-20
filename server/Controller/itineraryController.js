import Itinerary from "../Models/Itinerary.js";


export const getAllItineraryByUserId = async(req, res) => {
    try{
        const {userId} = req.params;
        var resContent= await Itinerary.findAll({
            where: {
                user_id: userId,
            }
        })
        res.status(200).json(resContent);
    } catch {
        res.status(404).json({message: err.message})
    }
}

export const createItinerary = async (req, res) => {
    try{
        // const {userId} = req.params;
        var resContent= await Itinerary.create({
            countryName: req.body.country_name,
            user_id: req.body.user_id,
            budget: req.body.budget,
            title: req.body.title
        })
        res.status(200).json(resContent);
    } catch {
        res.status(404).json({message: err.message})
    } 
}

export const editItinerary = async (req, res) => {
    try {
        const result = await Itinerary.update(
            { countryName: req.body.country_name,
              user_id: req.body.user_id,
              budget: req.body.budget,
              title: req.body.title },
            { where: { _id: req.body.itinerary_id } }
          )
        res.status(200).json(result);
    } catch {
        res.status(404).json({message: "Unable to edit"})
    } 
}
