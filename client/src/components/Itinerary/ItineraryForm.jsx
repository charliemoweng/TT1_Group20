import { createClaim } from "../../service/Itinerary";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api/api";

export default function ItineraryForm() {
  const arrayOfCountries = ["Singapore", "Malaysia", "Indonesia"];

  const [title, setTitle] = useState("");
  const [countryName, setCountryName] = useState("");
  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState(0);
  
  const [itineraries, setItineraries] = useState([])
  const [editTitle, setEditTitle] = useState('')
  const [editCountry, setEditCountry] = useState('')
  const [editDestination, setEditDestination] = useState('')
  const [editBudget, setEditBudget] = useState(0)
  const navigate = useNavigate()

  const handleSubmit = () => {
    createItinerary();
  };

  const handleEdit = () => {
    editItinerary();  
  }

  const createItinerary = async () => {
    try {
      const response = await createClaim();
      if (response) {
        console.log("Response: " + response);
      } else {
        console.log("Not sure why empty but no error");
      }
    } catch (error) {
      // Throw an error
      console.log("Error: " + error);
    }
  };

  const editItinerary = async (id) => {
    const itinerary = itineraries.find((itinerary) => (itinerary.id).toString() === id)

    const updatedItinerary = {
      id,
      title: editTitle,
      countryName: editCountry,
      destination: editDestination,
      budget: editBudget
    }
    try {
      const response = await api.put(`/edit/${id}`, updatedItinerary)
      setItineraries(itineraries.map((itinerary) => itinerary.id === id ? {...response.body} : itinerary))
      setEditTitle('')
      setEditCountry('')
      setEditDestination('')
      setEditBudget(0)
      navigate('/')
    } catch (error) {
      console.log("Error: " + error)
    }
  }

  return (
    <>
      {title && countryName && destination && budget && 
      <div className="flex justify-center items-center bg-slate-400">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="itinerary-title">Title: </label>
          <input
            className="border border-slate-400"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="itinerary-country-name">Country Name: </label>
          <select>
            {arrayOfCountries &&
              arrayOfCountries.map((country) => <option>{country}</option>)}
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
          <input className="border border-slate-400" type="number" />
        </div>

        <div>
          <button type="submit" className="border border-slate-500">
            Create
          </button>
        </div>
      </form>
    </div>
    }

    {editTitle && editCountry && editDestination && editBudget && 
    <div className="flex justify-center items-center bg-slate-400">
      <h2>Edit Itinerary</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="itinerary-title">Title: </label>
          <input
            className="border border-slate-400"
            type="text"
            onChange={(e) => setEditTitle(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="itinerary-country-name">Country Name: </label>
          <select>
            {arrayOfCountries &&
              arrayOfCountries.map((country) => <option>{country}</option>)}
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
          <button type="submit" className="border border-slate-500" >
            Submit
          </button>
        </div>
      </form>
    </div>
    }
    </>
  );
}
