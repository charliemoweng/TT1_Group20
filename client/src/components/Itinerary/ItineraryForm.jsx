import { createClaim } from "../../service/Itinerary";
import { useState, useEffect } from "react";
import { getDestinationByCountry } from "../../service/Itinerary";

export default function ItineraryForm({ action }) {
  const arrayOfCountries = ["Singapore", "Malaysia", "Korea", "Vietnam"];

  const [title, setTitle] = useState("");
  const [countryName, setCountryName] = useState("Singapore");
  const [destinations, setDestinations] = useState([""]);
  const [selectedDestination, setSelectedDestination] = useState("");
  const [budget, setBudget] = useState(0);

  const handleSubmit = () => {
    if (action === "create") {
      createItinerary();
    } else if (action === "edit") {
      // Edit Itinerary
    }
  };

  const createItinerary = async () => {
    const toJson = {
      country_name: countryName,
      user_id: localStorage.getItem("userId"),
      budget: 100,
      title: title,
    };

    try {
      const response = await createClaim(toJson);
      console.log("Response 1: " + response);
      if (response) {
        console.log("Response 2: " + response);
      } else {
        console.log("Not sure why empty but no error");
      }
    } catch (error) {
      // Throw an error
      console.log("Error: " + error);
    }
  };

  const retrieveDestinationByCountry = async () => {
    try {
      const response = await getDestinationByCountry(countryName);
      if (response) {
        setDestinations(response.destination);
      }
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  useEffect(() => {
    getDestinationByCountry();
  });

  useEffect(() => {
    retrieveDestinationByCountry();
  }, [countryName]);

  return (
    <div className="flex justify-center items-center bg-slate-400">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="itinerary-title">Title: </label>
          <input
            className="border border-slate-400"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="itinerary-country-name">Country Name: </label>
          <select onChange={(e) => setCountryName(e.target.value)}>
            {arrayOfCountries &&
              arrayOfCountries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
          </select>
        </div>

        <div>
          <label htmlFor="itinerary-destination">Destination: </label>
          <select onChange={(e) => setSelectedDestination(e.target.value)}>
            {destinations.map((destination) => (
              <option key={destination} value={destination}>
                {destination}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="itinerary-budget">Budget: </label>
          <input
            className="border border-slate-400"
            type="number"
            onChange={(e) => setBudget(e.target.value)}
            required
          />
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
