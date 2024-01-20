import './App.css';
import ItineraryEdit from './ItineraryEdit';
import Login from './Pages/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DashboardTable from './components/DashboardTable'
import CreateDestination from './components/CreateDestination';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/edit/:id' index element={<ItineraryEdit />} />
        <Route path='/login' element={<Login />} />
        <Route path="/dashboard" elemet={<DashboardTable/>} />
        <Route path="/createdestination" elemet={<CreateDestination/>} />
      </Routes>
    </Router>
  );
}

export default App
