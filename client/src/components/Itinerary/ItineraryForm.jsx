import { createClaim } from "../../service/Itinerary";
import { useState } from "react";

export default function ItineraryForm() {
  const arrayOfCountries = ["Singapore", "Malaysia", "Indonesia"];

  const [title, setTitle] = useState("");
  const [countryName, setCountryName] = useState("");
  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState(0);

  const handleSubmit = () => {
    createItinerary();
  };

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

  return (
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
  );
}
