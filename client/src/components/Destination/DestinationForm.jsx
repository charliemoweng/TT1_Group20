import CreateDestination from "../../page/CreateDestination";
import { createClaim } from "../../service/Destination";
import { useState } from "react";

export default function ItineraryForm() {
  const arrayOfDestinations = ["Seoul", "Jakarta", "Melbourne"];
  const arrayOfCountries = ["Singapore", "Malaysia", "Indonesia"];

  const [title, setTitle] = useState("");
  const [countryName, setCountryName] = useState("");
  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState(0);

  const handleSubmit = () => {
    CreateDestination();
  };

  const CreateDestination = async () => {
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
          <label htmlFor="itinerary-country-name">Country Name: </label>
          <select>
            {arrayOfCountries &&
              arrayOfCountries.map((country) => <option>{country}</option>)}
          </select>
        </div>

        <div>
          <label htmlFor="itinerary-country-name">Destination Name: </label>
          <select>
            {arrayOfDestinations &&
              arrayOfDestinations.map((country) => <option>{country}</option>)}
          </select>
        </div>

      
        <div>
          <label htmlFor="itinerary-cost">Cost: </label>
          <input className="border border-slate-400" type="number" />
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
