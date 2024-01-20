export const getAllItineraryById = async(req, res) => {
    try{
        const {id} = req.params;
        // var resContent= await 
        res.status(200).json(resContent);
    } catch {
        res.status(404).json({message: err.message})
    }
}