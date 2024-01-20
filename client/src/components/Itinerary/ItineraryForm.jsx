import { createClaim } from '../../service/Itinerary'
import { useState } from 'react'

export default function ItineraryForm() {
  const arrayOfCountries = ['Singapore', 'Malaysia', 'Indonesia']

  const [title, setTitle] = useState('')
  const [countryName, setCountryName] = useState('')
  const [destination, setDestination] = useState('')
  const [budget, setBudget] = useState(0)

  const handleSubmit = () => {
    createItinerary()
  }

  const createItinerary = async () => {
    try {
      const response = await createClaim()
      if (response) {
        console.log('Response: ' + response)
      } else {
        console.log('Not sure why empty but no error')
      }
    } catch (error) {
      // Throw an error
      console.log('Error: ' + error)
    }
  }

  return (
    <div className="relative overflow-x-auto mx-8 my-8 rounded-md bg-slate-200 px-4 py-4">
      <form onSubmit={handleSubmit}>
        <div class="mb-5">
          <label class="block mb-2 text-sm font-medium text-gray-900">
            Itinerary title
          </label>
          <input
            type="text"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Seoul trip"
            required
          />
        </div>
        <div class="mb-5">
          <label class="block mb-2 text-sm font-medium text-gray-900">
            Country
          </label>
          <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {arrayOfCountries &&
              arrayOfCountries.map((country) => <option>{country}</option>)}
          </select>
        </div>

        <div class="mb-5">
          <label class="block mb-2 text-sm font-medium text-gray-900">
            Destination
          </label>
          <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option>Destination 1</option>
            <option>Destination 2</option>
          </select>
        </div>

        <div class="mb-5">
          <label class="block mb-2 text-sm font-medium text-gray-900">
            Budget
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
          />
        </div>

        <div>
          <button
            type="submit"
            class="text-white bg-gray-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-800 dark:hover:bg-gray-900 dark:focus:ring-blue-800 hover:scale-105 ease-in-out duration-500"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  )
}
