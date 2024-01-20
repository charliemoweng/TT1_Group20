import './App.css'
import DashboardTable from './components/DashboardTable'

function App() {
  return (
    <div className="App">
      <div className="bg-slate-600 p-4 rounded-sm">
        <h3 className="font-bold  text-white">Itinerary</h3>
      </div>
      <div className="">
        <DashboardTable />
      </div>
    </div>
  )
}

export default App
