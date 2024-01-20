import "./App.css";
import EditItinerary from "./page/EditItinerary";
import CreateItinerary from "./page/CreateItinerary";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardTable from './page/Dashboard';
import api from './api/api'

function App() {
  const handleSubmit = () => {}

  const createItinerary = async () => {}

  return (
    <Router>
      <Routes>
        <Route path="/edit/:id" index element={<EditItinerary />} />
        <Route path="/createItinerary" index element={<CreateItinerary />} />
        <Route path="/dashboard" index element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
