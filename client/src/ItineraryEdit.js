import { useParams } from 'react-router-dom'
import { useState } from 'react';

const ItineraryEdit = ({action}) => {
    const [itineraries, setItineraries] = useState([])
    const [editTitle, setEditTitle] = useState('')
    const [editCountry, setEditCountry] = useState('')
    const [editDestination, setEditDestination] = useState('')
    const [editBudget, setEditBudget] = useState(0)

    const handleEdit = () => {
        console.log('edit')
    }

    return (
        <main className='EditPost'>
            <>
                <h2 className="">Edit Itinerary</h2>
                <form onSubmit={(e) => {e.preventDefault()}}>
                    <label htmlFor='postTitle'>Title</label>
                    <input 
                        id="postTitle" 
                        type='text'
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
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