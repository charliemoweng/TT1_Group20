import "./App.css";
import CreateItinerary from "./page/CreateItinerary";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from './page/Dashboard';
import api from './api/api'
import Login from './Pages/Login';
import CreateDestination from './page/CreateDestination';
import ItineraryEdit from './ItineraryEdit'
import DashboardTable from "./components/DashboardTable";
import { useCookies } from "react-cookie";
import { useEffect } from "react";



function App() {
  const [cookies, setCookie] = useCookies(["user"]);
  const RouteGuard = ({component, path}) => {
    return cookies
    ? <Route path = {path} element = {component}/>
    : <Navigate to = "/login"/>
  }

  useEffect(()=>{
    console.log(cookies)
  }, [])
  const handleSubmit = () => {}


 
  const createDestination = async () => {};

  const createItinerary = async () => {}


  return (
    <Router>
      <Routes>
        <Route path='/edit/:id' index element={<ItineraryEdit />} />
        <Route path='/login' element={<Login />} />
        <Route path="/createDestination" element={<CreateDestination/>} />
        <Route path="/createItinerary" index element={<CreateItinerary />} />
        <Route path="/dashboard" index element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
