
import Login from './Pages/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DashboardTable from './components/DashboardTable'
import CreateDestination from './page/CreateDestination';
import "./App.css";
import ItineraryEdit from "./ItineraryEdit";
import CreateItinerary from "./page/CreateItinerary";



function App() {
  const handleSubmit = () => {};

  const createItinerary = async () => {};
  const createDestination = async () => {};

  return (
    <Router>
      <Routes>
        <Route path='/edit/:id' index element={<ItineraryEdit />} />
        <Route path='/login' element={<Login />} />
        <Route path="/dashboard" elemet={<DashboardTable/>} />
        <Route path="/createDestination" element={<CreateDestination/>} />
    
        <Route path="/createItinerary" index element={<CreateItinerary />} />
        {/* <DashboardTable /> */}
      </Routes>
    </Router>
  );
}

export default App;
