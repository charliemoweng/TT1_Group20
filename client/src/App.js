import "./App.css";

function App() {
  const handleSubmit = () => {};

  const createItinerary = async () => {};

  return (
    <div className="flex justify-center items-center bg-slate-400">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="itinerary-title">Title: </label>
          <input className="border border-slate-400" type="text" />
        </div>

        <div>
          <label htmlFor="itinerary-country-name">Country Name: </label>
          <select>
            <option>Country 1</option>
            <option>Country 2</option>
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

export default App;
