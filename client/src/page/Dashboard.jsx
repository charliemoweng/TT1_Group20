import DashboardTable from '../components/DashboardTable'

const Dashboard = () => {
  return (
    <div>
      <div className="bg-gray-800 flex justify-center items-center p-4">
        <h3 className="font-bold text-white">Itinerary 🌍</h3>
      </div>
      <DashboardTable />
    </div>
  )
}

export default Dashboard
