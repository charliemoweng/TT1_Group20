import './App.css';
import ItineraryEdit from './ItineraryEdit';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/edit/:id' index element={<ItineraryEdit />} />
          
      </Routes>
    </Router>
  );
}

export default App;
