import './App.css';
import ItineraryEdit from './ItineraryEdit';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DashboardTable from './components/DashboardTable'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/edit/:id' index element={<ItineraryEdit />} />
        <DashboardTable />
      </Routes>
    </Router>
  );
}

export default App
