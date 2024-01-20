import "./App.css";
import ItineraryEdit from "./ItineraryEdit";
import CreateItinerary from "./page/CreateItinerary";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardTable from "./components/DashboardTable";

function App() {
  const handleSubmit = () => {};

  const createItinerary = async () => {};

  return (
    <Router>
      <Routes>
        <Route path="/edit/:id" index element={<ItineraryEdit />} />
        <Route path="/createItinerary" index element={<CreateItinerary />} />
        {/* <DashboardTable /> */}
      </Routes>
    </Router>
  );
}

export default App;
