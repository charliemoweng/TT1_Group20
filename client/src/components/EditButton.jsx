import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import ITINERARY from "../test/itinerary"

const EditButton = (props) => {
  const [itinerary, setItinerary] = useState([])
  const [editTitle, setEditTitle] = useState('')
  const [editCountry, setEditCountry] = useState('')
  const [editDestination, setEditDestination] = useState('')
  const [editBudget, setEditBudget] = useState(0)

  const handleEditItinerary = (data) => {
    const item = ITINERARY[props.id-1]
    const title = item.title
    const budget = item.budget
    const country = item.countryName
    const destinations = item.destinations
    
    setItinerary(item)
    setEditTitle(title)
    setEditCountry(country)
    setEditDestination(destinations)
    setEditBudget(budget)
    
  }

  const handleEdit = (id) => {
    // axios.put(`http://localhost:8000/itinerary/${id}`, {title: editTitle, budget: editBudget, countryName: editCountry, destinations: editDestination})
  }
  
  return (
    <>
    <button
      type="submit"
      class="text-white bg-red-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-800 dark:hover:bg-gray-900 dark:focus:ring-blue-800 hover:scale-105 ease-in-out duration-500"
      onClick={handleEditItinerary}
    >
      Edit
    </button>

    <div className="flex justify-center items-center bg-slate-400">
      <h2>Edit Itinerary</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="itinerary-title">Title: </label>
          <input
            className="border border-slate-400"
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="itinerary-country-name">Country Name: </label>
          <select>
            <option value={editCountry}>{editCountry}</option>
          </select>
        </div>

        <div>
          <label htmlFor="itinerary-destination">Destination: </label>
          <select>
            <option>Destination 1</option>
            <option>Destination 2</option>
          </select>
        </div>

        <div>
          <label htmlFor="itinerary-budget">Budget: </label>
          <input 
            className="border border-slate-400" 
            type="number" 
            id="itinerary-budget"
            value={editBudget}
            onChange={(e) => setEditBudget(e.target.value)}
          />
        </div>

        <div>
          <button type="submit" className="border border-slate-500" onClick={() => handleEdit(itinerary.id)}>
            Submit
          </button>
        </div>
      </form>
    </div>
    </>
  )
}

export default EditButton
