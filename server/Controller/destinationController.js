import Destination from "../Models/Destination";

export const createDestination = async (req, res) => {
    const { countryName, cost, destinationName, notes } = req.body;
    if (!countryName || !cost || !destinationName || !notes) {
      return res
        .status(400)
        .json({ error: "All attributes are required to be filled!" });
    }

    var resContent= await Itinerary.create({
        countryName: req.body.country_name,
        destinationName: req.body.destination_name,
        cost: req.body.cost,
        notes: req.body.notes
    })
  
    return res.status(201).json({
      message: "Destination created successfuly"
    //   destination: newDestination,
    });
}

export const getAllDestinationsByCountry = async (req, res) => {
    try {
        const results = await Destination.findAll({
            where: {
                country_name: req.params,
            }
        })
        res.status(200).json(results);
    } catch {
        res.status(404).json({message: err.message})
    }
}
