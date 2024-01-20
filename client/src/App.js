//import logo from './logo.svg';
//import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Login from "./Pages/Login";


function App() {
  return (
    
    <div className="app">
      <Router>
     <Routes>
          
         
          <Route path='/login' element={<Login />} />
         

        </Routes>

        </Router>
    </div>


  );
}

export default App;
