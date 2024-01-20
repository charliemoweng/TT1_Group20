import { useParams } from 'react-router-dom'

const ItineraryEdit = ({
    itineraries, 
}) => {

    const { id } = useParams() 

    return (
        <main>
            <>
                <h2>Edit Itinerary</h2>
                <form onSubmit={(e) => {e.preventDefault()}}>
                    <label>Title</label>
                    <input 
                        id="postTitle" 
                        type='text'
                        value=""
                        // onChange={(e) => setEditTitle(e.target.value)}
                    />
                    <label>Country Name</label>
                    <input 
                        id="countryName" 
                        type='text'
                        value=""
                        // onChange={(e) => setEditTitle(e.target.value)}
                    />
                    <label>Destination</label>
                    <input 
                        id="destination" 
                        type='text'
                        value=""
                        // onChange={(e) => setEditTitle(e.target.value)}
                    />
                    <label>Budget</label>
                    <input 
                        id="budget" 
                        type='text'
                        value=""
                        // onChange={(e) => setEditTitle(e.target.value)}
                    />
                    <button type='submit'>Edit</button>
                </form>
            </>
        </main>
    )
}

export default ItineraryEdit