import "./App.css";
import EditItinerary from "./page/EditItinerary";
import CreateItinerary from "./page/CreateItinerary";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardTable from './page/Dashboard';
import api from './api/api'
import Login from './Pages/Login';
import CreateDestination from './page/CreateDestination';
import ItineraryEdit from './ItineraryEdit'
import Dashboard from './page/Dashboard'


function App() {
  const handleSubmit = () => {}


 
  const createDestination = async () => {};

  const createItinerary = async () => {}


  return (
    <Router>
      <Routes>
        <Route path='/edit/:id' index element={<ItineraryEdit />} />
        <Route path='/login' element={<Login />} />
        <Route path="/dashboard" elemet={<DashboardTable/>} />
        <Route path="/createDestination" element={<CreateDestination/>} />
    
        <Route path="/createItinerary" index element={<CreateItinerary />} />
        <Route path="/dashboard" index element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
