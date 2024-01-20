import "./App.css";
import CreateItinerary from "./page/CreateItinerary";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './page/Dashboard';
import api from './api/api'

function App() {
  const handleSubmit = () => {}

  const createItinerary = async () => {}

  return (
    <Router>
      <Routes>
        <Route path="/createItinerary" index element={<CreateItinerary />} />
        <Route path="/dashboard" index element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
