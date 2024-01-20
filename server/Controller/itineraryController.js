export const getAllItineraryById = async(req, res) => {
    try{
        var resContent={}
        res.status(200).json(resContent);
    } catch {
        res.status(404).json({message: err.message})
    }
}