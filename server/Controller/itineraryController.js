import Itinerary from "../Models/Itinerary";


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
            country_name: req.body.country_name,
            user_id: req.body.user_id,
            budget: req.body.budget,
            title: req.body.title
        })
        res.status(200).json(resContent);
    } catch {
        res.status(404).json({message: err.message})
    } 
}
