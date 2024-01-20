import './App.css'
import './App.css'
import ItineraryEdit from './ItineraryEdit'
import CreateItinerary from './page/CreateItinerary'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './page/Dashboard'

function App() {
  const handleSubmit = () => {}

  const createItinerary = async () => {}

  return (
    <Router>
      <Routes>
        <Route path="/edit/:id" index element={<ItineraryEdit />} />
        <Route path="/createItinerary" index element={<CreateItinerary />} />
        <Route path="/dashboard" index element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
