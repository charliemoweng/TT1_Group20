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
                    <label htmlFor='postTitle'>Title</label>
                    <input 
                        id="postTitle" 
                        type='text'
                        value=""
                        // onChange={(e) => setEditTitle(e.target.value)}
                    />

                    <label htmlFor='countryName'>Country Name</label>
                    <select name='countries' id='countryName'>
                        <option value="">Korea</option>
                    </select>

                    <label htmlFor='destination'>Destination</label>
                    <select name='destination' id='destination'>
                        <option value="">Seoul</option>
                    </select>

                    <label htmlFor='budget'>Budget</label>
                    <input 
                        id="budget" 
                        type='text'
                        value=""
                        // onChange={(e) => setEditTitle(e.target.value)}
                    />
                    
                    <button type='submit'>Submit</button>
                </form>
            </>
        </main>
    )
}

export default ItineraryEdit