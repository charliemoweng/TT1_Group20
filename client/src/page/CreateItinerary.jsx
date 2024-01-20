import ItineraryForm from '../components/Itinerary/ItineraryForm'

export default function CreateItinerary() {
  return (
    <div>
      <div className="bg-gray-800 flex justify-center items-center p-4">
        <h3 className="font-bold text-white" action="create">Create itinerary 📝</h3>
      </div>
      <ItineraryForm />
    </div>
  )
}
